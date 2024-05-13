import 'dart:async';
import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_image_compress/flutter_image_compress.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:image/image.dart' as img;
import 'package:image_downloader_web/image_downloader_web.dart';
import 'package:image_size_getter/image_size_getter.dart';
import 'package:remote_camera_official_app/common_widget/rectangle_theme_button.dart';
import 'package:remote_camera_official_app/features/01_home/util/generateUrl.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/preview_payment_controller.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/provider.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/02_choose_payment.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/bill.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/carouselCard.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/checkBoxes.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/countdown.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/qr_code.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/share_qr_code.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import 'package:widgets_to_image/widgets_to_image.dart';
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
  bool photoReady = false;
  CarouselController carouselController = CarouselController();
  int currentIndex = 0;
  GlobalKey genKey = GlobalKey();
  WidgetsToImageController controller = WidgetsToImageController();
  double imageAspectRatio = 0;
  String qrCodeURL = '';
  late Uint8List qrScreenShot;

  @override
  void initState() {
    Map<String, Uint8List> takenPhotoList = ref.read(takenPhotoProvider);
    print(takenPhotoList.length);
    if (takenPhotoList.isNotEmpty) {
      imageFiles = takenPhotoList.values.toList();
      generateWidgets();
      photoReady == true;
    }
    super.initState();
  }

  @override
  void didChangeDependencies() async {
    if (photoReady == false) {
      //Get the file IDs
      final photoIDList = await ref
          .watch(previewPaymentControllerProvider.notifier)
          .getImageFileIDs();
      imageFiles = await ref
          .watch(previewPaymentControllerProvider.notifier)
          .downloadPhotos(photoIDList: photoIDList);
      generateWidgets();
      setState(() {
        ref
            .watch(previewPaymentControllerProvider.notifier)
            .startCountdown(71284, ref);
        photoReady = true;
      });
      await Future.delayed(const Duration(milliseconds: 500));
      // generateScreenshot();
    }

    super.didChangeDependencies();
  }

  void updateAspectRatio() {
    final imageSize = ImageSizeGetter.getSize(MemoryInput(imageFiles[0]));
    imageAspectRatio = imageSize.width / imageSize.height;
  }

  void generateWidgets() {
    updateAspectRatio();
    imageFiles.asMap().forEach((i, photoFile) {
      //Generate carousel widget
      carouselWidget.add(carouselCard(photoFile: photoFile, index: i));
      //Generate checkbox widget
      checkBoxWidgetList.add(CheckBox(
        number: i,
        carouselController: carouselController,
      ));
    });
  }

  void downloadScreenShot() async {
    await WebImageDownloader.downloadImageFromUInt8List(
        uInt8List: qrScreenShot, name: 'QR Code');
  }

  Future<void> generateScreenshot() async {
    try {
      final bytes = await controller.capture();
      print('Part 1');
      qrScreenShot = compressImage(bytes!, 1000, 1000);
      print("Captured image size: ${qrScreenShot.length} bytes");
    } catch (e) {
      print(e.toString());
    }
  }

  Uint8List compressImage(Uint8List imageData, int newWidth, int newHeight) {

      // Decode the image
      img.Image? image = img.decodeImage(imageData);

      // Resize the image
      img.Image resizedImage = img.copyResize(image!, width: newWidth, maintainAspect: true);

      // Encode the resized image to a Uint8List
      Uint8List compressedImageData = img.encodePng(resizedImage);

      return compressedImageData;

  }

  void generateUrl(){
    qrCodeURL = ref.read(qrCodeUrlProvider);
    if(qrCodeURL.isEmpty){
      ref.watch(qrCodeUrlProvider.notifier).state = generateQRCodeUrl(widget.randomID);
      qrCodeURL = ref.read(qrCodeUrlProvider);
    }
  }


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
                                showIndicator: false,
                                viewportFraction: 1,
                                aspectRatio: imageAspectRatio,
                                onScrolled: (i) {
                                  final int? page = i?.round();
                                  // indicatorController.jumpTo(i!);
                                  if (page != currentIndex) {
                                    setState(() {
                                      currentIndex = page!;
                                    });
                                  }
                                }),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 10),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              AnimatedSmoothIndicator(
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
                        BillNew(),
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
                                      Navigator.push(
                                          context, ChoosePayment.route());
                                    },
                                    child: const Text(
                                      '線上支付',
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
                                      downloadScreenShot();
                                    },
                                    child: const Text('找人代付',
                                        style: TextStyle(
                                            fontSize: 20,
                                            fontWeight: FontWeight.w900,
                                            color: Colors.black)),
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
                        QRCode_new(url: qrCodeURL,onDownload: (){
                          downloadScreenShot();
                        },onShare: (){
                          generateScreenshot();
                        },),
                        ShareQRCode(
                            imageFiles: imageFiles,
                            controller: controller,
                            imageAspectRatio: imageAspectRatio,
                            url: qrCodeURL),
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
