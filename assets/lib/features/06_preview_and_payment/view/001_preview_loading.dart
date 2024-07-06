import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../common_widget/loading_page.dart';
import '../../../core/enum.dart';
import '../../../core/providers.dart';
import '../../../core/utils.dart';
import '../../08_error/view/error_general.dart';
import '../controller/preview_payment_controller.dart';
import '../controller/provider.dart';
import '01_preview_and_payment.dart';

class PreviewLoading extends ConsumerStatefulWidget {
  static route(String? randomID) => MaterialPageRoute(
        builder: (context) => PreviewLoading(
          randomID,
        ),
      );

  final String? randomID;

  const PreviewLoading(this.randomID, {super.key});

  @override
  ConsumerState createState() => _PreviewLoadingState();
}

class _PreviewLoadingState extends ConsumerState<PreviewLoading> {
  bool idExist = true;

  @override
  void didChangeDependencies() async {
    try {
      if(ref.read(randomIdProvider)==''){
        //Update randomID to provider
        ref.read(randomIdProvider.notifier).state = widget.randomID!;
      }

      //Get photoSessionCollection data of the randomID
      await ref
          .watch(previewPaymentControllerProvider.notifier)
          .getPhotoSessionCollection(ref);
      //Check if the session expired
      if (sessionExpired()) throw Exception("Session expired");

      if(ref.read(takenPhotoProvider)==[]){
        //Get photoID list through photoSessionCollection data
        final photoIDList =
        stringToList((ref.read(photoSessionCollectionProvider))['photoID']);
        //Download photo previews
        final photoPreviewFiles = await ref
            .watch(previewPaymentControllerProvider.notifier)
            .getPhotoPreview(photoIDList: photoIDList, quality: PhotoQuality.low);
        if (photoPreviewFiles.isEmpty) {
          throw Exception('Photo preview files empty');
        }

        Navigator.push(context, PreviewAndPaymentPage.route(photoPreviewFiles: photoPreviewFiles));
      } else {
        Navigator.push(context, PreviewAndPaymentPage.route(photoPreviewFiles: ref.read(takenPhotoProvider)));
      }


    } catch (e) {
      print('Error: ${e.toString()}');

      switch (e.toString()) {
        case "Exception: Session expired":
          navigateErrorPage('頁面已過期');
          break;
        default:
          navigateErrorPage('頁面不存在');
      }
    }

    super.didChangeDependencies();
  }

  bool sessionExpired() {
    final DateTime photoCreatedTime = DateTime.parse(
        ref.read(photoSessionCollectionProvider)['created_time']);
    // Calculate the target datetime (12am 2 days after the date)
    DateTime targetDatetime = photoCreatedTime.add(const Duration(days: 1));
    targetDatetime = targetDatetime.copyWith(
        hour: 0, minute: 0, second: 0, microsecond: 0, millisecond: 0);
    // Get the current time
    DateTime now = DateTime.now();

    // Calculate the difference in seconds
    Duration difference = targetDatetime.difference(now);
    int seconds = difference.inSeconds;

    if (seconds > 10) {
      return false;
    } else {
      return true;
    }
  }

  void navigateErrorPage(String errorMessage) {
    Navigator.push(context,
        GeneralError.route(allowReturn: false, errorMessage: errorMessage));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(body: loadingWidget('請稍後...'));
  }
}
