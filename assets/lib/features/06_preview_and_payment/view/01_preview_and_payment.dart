import 'dart:async';
import 'dart:html';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:image_downloader_web/image_downloader_web.dart';
import 'package:image_size_getter/image_size_getter.dart';
import 'package:remote_camera_official_app/common_widget/rectangle_theme_button.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'package:remote_camera_official_app/core/import_core.dart';
import 'package:remote_camera_official_app/features/01_home/util/generateUrl.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/preview_payment_controller.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/provider.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/02_choose_payment.dart';
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
  final String randomID;

  static route(String randomID) => MaterialPageRoute(
        builder: (context) => PreviewAndPaymentPage(
          randomID: randomID,
        ),
      );

  const PreviewAndPaymentPage({super.key, this.randomID = '07ae8451'});

  @override
  ConsumerState createState() => _PreviewAndPaymentPageState();
}

class _PreviewAndPaymentPageState extends ConsumerState<PreviewAndPaymentPage> {
  List<Widget> carouselWidget = [];
  List<Widget> checkBoxWidgetList = [];
  List<Uint8List> imageFiles = [];
  List<String> photoIDList = [];
  bool photoReady = false;
  CarouselController carouselController = CarouselController();
  int currentIndex = 0;
  double imageAspectRatio = 0;
  String qrCodeURL = '';
  Uint8List qrScreenShot = Uint8List(0);
  ScreenshotController screenshotController = ScreenshotController();
  Key indicatorKey = GlobalKey();

  @override
  void initState() {
    Map<String, Uint8List> takenPhotoList = ref.read(takenPhotoProvider);
    print(takenPhotoList.length);
    if (takenPhotoList.isNotEmpty) {
      imageFiles = takenPhotoList.values.toList();
      photoIDList = takenPhotoList.keys.toList();
      generateWidgets();
      photoReady == true;
    }
    super.initState();
  }

  @override
  void didChangeDependencies() async {
    if (photoReady == false) {
      //Get the file IDs
      photoIDList = await ref
          .watch(previewPaymentControllerProvider.notifier)
          .getImageFileIDs();
      imageFiles = await ref
          .watch(previewPaymentControllerProvider.notifier)
          .getPhotoPreview(photoIDList: photoIDList,quality: PhotoQuality.low);
      generateWidgets();
      setState(() {
        ref
            .watch(previewPaymentControllerProvider.notifier)
            .startCountdown(71284, ref);
        photoReady = true;
      });
    }

    super.didChangeDependencies();
  }

  void updateAspectRatio() {
    final imageSize = ImageSizeGetter.getSize(MemoryInput(imageFiles[0]));
    imageAspectRatio = imageSize.width / imageSize.height;
  }

  void generateWidgets() {
    // final takenPhotoList = ref.read(takenPhotoProvider);
    updateAspectRatio();
    imageFiles.asMap().forEach((i, photoFile) {
      //Generate carousel widget
      carouselWidget.add(carouselCardPreview(photoFile: photoFile, index: i));
      //Generate checkbox widget
      checkBoxWidgetList.add(CheckBox(
        num: i,
        photoID: photoIDList[i],
        carouselController: carouselController,
      ));
    });
  }


  void generateUrl(){
    qrCodeURL = ref.read(qrCodeUrlProvider);
    if(qrCodeURL.isEmpty){
      ref.watch(qrCodeUrlProvider.notifier).state = generateQRCodeUrl(widget.randomID);
      qrCodeURL = ref.read(qrCodeUrlProvider);
    }
  }

  Future<void> takeScreenshot() async {
    try{
      if(qrScreenShot.isEmpty){
        await screenshotController.captureFromWidget(
          ShareQRCode(
              imageFiles: imageFiles,
              imageAspectRatio: imageAspectRatio,
              url: qrCodeURL),
        ).then((capturedImage){
          qrScreenShot = capturedImage;
          print("Screenshot taken");
        });
      }
    }catch(e){
      print('Error: ${e.toString()}');
    }
  }

  void downloadScreenShot() async {
    await WebImageDownloader.downloadImageFromUInt8List(
        uInt8List: qrScreenShot, name: 'QR Code');
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
      body: photoReady
          ? Column(
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
                                showIndicator: true,
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
                          padding: const EdgeInsets.only(
                              left: 20, top: 10, bottom: 44),
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
                                      if(ref.read(checkedPhotoIDProvider).isNotEmpty){
                                        Navigator.push(
                                            context, ChoosePayment.route());
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
                                  const CountdownTimer(),
                                ],
                              )
                            ],
                          ),
                        ),
                        QRCode_new(url: qrCodeURL,onDownload: () async {
                          await takeScreenshot();
                          downloadScreenShot();
                        },onShare: () async {
                          await takeScreenshot();
                          sharePlusUint8List(qrScreenShot);
                          //onShare('Meow meow');
                          // onShareImage(imageFiles[0],'meow');
                        },),

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
            )
          : const Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  '照片處理中...',
                  style: TextStyle(fontSize: 15, color: Colors.black),
                ),
                SizedBox(
                  width: 5,
                ),
                SpinKitDoubleBounce(
                  size: 15,
                  color: Pallete.mainColor,
                ),
              ],
            ),
    );
  }
}
