import 'dart:async';
import 'dart:html';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:image_downloader_web/image_downloader_web.dart';
import 'package:image_size_getter/image_size_getter.dart';
import 'package:remote_camera_official_app/common_widget/import_common_widgets.dart';
import 'package:remote_camera_official_app/common_widget/rectangle_theme_button.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'package:remote_camera_official_app/core/import_core.dart';
import 'package:remote_camera_official_app/features/01_home/util/generateUrl.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/preview_payment_controller.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/provider.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/02_choose_payment.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/07_payment_record.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/bill.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/carouselCard_preview.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/checkBoxes.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/countdown.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/qr_code.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/share_qr_code.dart';
import 'package:screenshot/screenshot.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import '../../../core/providers.dart';
import '../../../theme/pallete.dart';
import 'package:flutter_carousel_widget/flutter_carousel_widget.dart';

class PreviewAndPaymentPage extends ConsumerStatefulWidget {
  static route(List<Uint8List> photoPreviewFiles) => MaterialPageRoute(
        builder: (context) => PreviewAndPaymentPage(photoPreviewFiles),
      );

  final List<Uint8List> photoPreviewFiles;

  const PreviewAndPaymentPage(this.photoPreviewFiles, {super.key});

  @override
  ConsumerState createState() => _PreviewAndPaymentPageState();
}

class _PreviewAndPaymentPageState extends ConsumerState<PreviewAndPaymentPage> {
  List<Widget> carouselWidget = [];
  List<Widget> checkBoxWidgetList = [];
  List<Uint8List> imageFiles = [];
  List<String> previewIDList = [];
  CarouselController carouselController = CarouselController();
  int currentIndex = 0;
  double imageAspectRatio = 0;
  Uint8List qrScreenShot = Uint8List(0);
  ScreenshotController screenshotController = ScreenshotController();
  Key indicatorKey = GlobalKey();

  @override
  void initState() {
    // Map<String, Uint8List> takenPhotoList = ref.read(takenPhotoProvider);
    imageFiles = widget.photoPreviewFiles;
    print('Mark 1');
    previewIDList = stringToList((ref.read(photoSessionCollectionProvider))['photoID']);
    print('Mark 2');
    generateWidgets();
    print('Mark 3');


    super.initState();
  }

  @override
  void didChangeDependencies() async {
    ref
        .watch(previewPaymentControllerProvider.notifier)
        .startCountdown(71284, ref);

    super.didChangeDependencies();
  }

  void generateWidgets() {
    // final takenPhotoList = ref.read(takenPhotoProvider);
    print('Mark 11');
    imageAspectRatio = getAspectRatio(image: imageFiles[0]);
    print('Mark 12');
    imageFiles.asMap().forEach((i, photoFile) {
      //Generate carousel widget
      carouselWidget.add(carouselCardPreview(photoFile: photoFile, index: i));
      //Generate checkbox widget
      checkBoxWidgetList.add(CheckBox(
        num: i,
        photoID: previewIDList[i],
        carouselController: carouselController,
      ));
    });
  }


  Future<void> generateQRDownload() async {
    try {
      if (qrScreenShot.isEmpty) {
        await screenshotController
            .captureFromWidget(
          ShareQRCode(
              imageFiles: imageFiles,
              imageAspectRatio: imageAspectRatio,
              url: generateQRCodeUrl(ref.read(randomIdProvider))),
        )
            .then((capturedImage) async {
          print("Screenshot taken");
          await WebImageDownloader.downloadImageFromUInt8List(
              uInt8List: capturedImage, name: 'QR Code');
        });
      }
    } catch (e) {
      print('Error: ${e.toString()}');
    }
  }

  // void onShare(String text) async {
  //   final data = {
  //     'text': text,
  //   };
  //   window.navigator.share(data).then((_) {
  //     // Sharing successful
  //     print('Shared successfully');
  //   }).catchError((error) {
  //     // Handle error while sharing
  //     print('Error sharing: $error');
  //   });
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Column(
      children: [
        Expanded(
            child: Stack(children: [
          Container(
            height: double.infinity,
            width: double.infinity,
            color: Pallete.backgroundColor,
          ),
          SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: FlutterCarousel(
                    items: carouselWidget,
                    options: CarouselOptions(
                      controller: carouselController,
                      showIndicator: false,
                      indicatorMargin: 30,
                      viewportFraction: 1,
                      aspectRatio: imageAspectRatio,
                      // onScrolled: (i) {
                      //   final int? page = i?.round();
                      //   // indicatorController.jumpTo(i!);
                      //   if (page != currentIndex) {
                      //     setState(() {
                      //       currentIndex = page!;
                      //     });
                      //   }
                      // }
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      AnimatedSmoothIndicator(
                        key: indicatorKey,
                        count: imageFiles.length,
                        effect: const WormEffect(
                          dotColor: Pallete.greyColor,
                          activeDotColor: Pallete.mainColor,
                          // radius: 8,
                          dotHeight: 10,
                          dotWidth: 10,
                        ),
                        activeIndex: currentIndex,
                      ),
                    ],
                  ),
                ),
                Container(
                  margin: const EdgeInsets.only(top: 25, left: 20),
                  child: const Text(
                    '選擇要購買的照片',
                    style: TextStyle(fontSize: 16, color: Colors.black),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 20, top: 10, bottom: 44),
                  child: Row(
                    children: checkBoxWidgetList,
                  ),
                ),
                billFuck(ref),
                Padding(
                  padding: const EdgeInsets.only(right: 20, top: 36),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          RectangleButton(
                            onTap: () {
                              if (ref.read(checkedPhotoIDProvider).isNotEmpty) {
                                Navigator.push(context, ChoosePayment.route());
                              } else {
                                showSnackBar(context, '請選擇要購買的照片');
                              }
                            },
                            child: const Text(
                              '前往付款',
                              style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.w900,
                                  color: Colors.black),
                            ),
                          ),
                          const SizedBox(
                            height: 10,
                          ),
                          RectangleButton(
                            onTap: () {
                              Navigator.push(context, PaymentRecord.route());
                            },
                            child: const Text(
                              '購買記錄',
                              style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.w900,
                                  color: Colors.black),
                            ),
                          ),
                          const SizedBox(
                            height: 10,
                          ),
                          const CountdownTimer(),
                        ],
                      )
                    ],
                  ),
                ),
                QRCodeDisplay(
                  url: generateQRCodeUrl(ref.read(randomIdProvider)),
                  onDownload: () async {
                    await generateQRDownload();
                  },
                  onShare: () async {
                    //sharePlusUint8List(qrScreenShot);
                    //onShare('Meow meow');
                    // onShareImage(imageFiles[0],'meow');
                  },
                ),
              ],
            ),
          ),
        ])),
        Container(
          height: 30,
          width: double.infinity,
          color: Pallete.mainColor,
        ),
      ],
    ));
  }
}
