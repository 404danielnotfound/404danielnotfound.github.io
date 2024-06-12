import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:remote_camera_official_app/common_widget/import_common_widgets.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'package:remote_camera_official_app/core/import_core.dart';
import 'package:remote_camera_official_app/core/providers.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/provider.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/01_preview_and_payment.dart';

import '../../../core/encryption.dart';
import '../controller/preview_payment_controller.dart';

class PreviewLoading extends ConsumerStatefulWidget {
  static route(String encryptedID) => MaterialPageRoute(
        builder: (context) => PreviewLoading(
          encryptedID,
        ),
      );

  final String encryptedID;

  const PreviewLoading(this.encryptedID, {super.key});

  @override
  ConsumerState createState() => _PreviewLoadingState();
}

class _PreviewLoadingState extends ConsumerState<PreviewLoading> {
  bool idExist = true;

  @override
  void didChangeDependencies() async {
    try{
      //Decode encrypted ID into randomID
      final String randomID = decryptString(widget.encryptedID);
      //Update randomID to provider
      ref.read(randomIdProvider.notifier).state = randomID;
      //Get photoSessionCollection data of the randomID
      await ref.watch(previewPaymentControllerProvider.notifier).getPhotoSessionCollection(ref);
      //Check if the session expired
      if(sessionExpired()) throw Exception("Session expired");
      //Get photoID list through photoSessionCollection data
      final photoIDList = stringToList((ref.read(photoSessionCollectionProvider))['photoID']);
      //Download photo previews
      final photoPreviewFiles = await ref.watch(previewPaymentControllerProvider.notifier).getPhotoPreview(photoIDList: photoIDList, quality: PhotoQuality.low);
      if (photoPreviewFiles.isEmpty) throw Exception('Photo preview files empty');
      Navigator.push(context, PreviewAndPaymentPage.route(photoPreviewFiles));
    } catch(e){
      print('Error: ${e.toString()}');
      setState(() {
        idExist = false;
      });

    }

    super.didChangeDependencies();
  }

  bool sessionExpired(){
    final DateTime photoCreatedTime = DateTime.parse(ref.read(photoSessionCollectionProvider)['created_time']);
    // Calculate the target datetime (12am 2 days after the date)
    DateTime targetDatetime = photoCreatedTime.add(const Duration(days: 1));
    targetDatetime = targetDatetime.copyWith(hour: 0, minute: 0, second: 0, microsecond: 0,millisecond: 0);
    // Get the current time
    DateTime now = DateTime.now();

    // Calculate the difference in seconds
    Duration difference = targetDatetime.difference(now);
    int seconds = difference.inSeconds;

    if(seconds>10){
      return false;
    }else {
      return true;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: idExist
          ? loadingWidget('請稍後...')
          : const Center(
        child: Text('此頁面已過期'),
      ),
    );

  }
}
