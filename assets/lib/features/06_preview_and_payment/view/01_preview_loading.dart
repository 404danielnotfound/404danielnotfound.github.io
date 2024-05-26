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
      final String randomID = decryptString(widget.encryptedID);
      ref.read(randomIdProvider.notifier).state = randomID;
      final result = await ref.watch(previewPaymentControllerProvider.notifier).getPhotoSessionCollection(ref);
      if (!result) throw Exception('Failed to retrieve photoSession');
      final photoIDList = stringToList((ref.read(photoSessionCollectionProvider))['photoID']);
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
