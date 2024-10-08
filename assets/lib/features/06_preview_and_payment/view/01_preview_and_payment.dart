import 'dart:typed_data';
import 'package:flutter/material.dart' hide CarouselController;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_carousel_widget/flutter_carousel_widget.dart';
import '../../../common_widget/rectangle_theme_button.dart';
import '../../../core/utils.dart';
import '../controller/preview_payment_controller.dart';
import '../controller/provider.dart';
import '../widget/QA_Service.dart';
import '../widget/bill.dart';
import '../widget/carouselCard_preview.dart';
import '../widget/checkBoxes.dart';
import '../widget/countdown.dart';
import '../widget/pageIndicator.dart';
import '../widget/qr_code.dart';
import '02_choose_payment.dart';
import '07_payment_record.dart';

class PreviewAndPaymentPage extends ConsumerStatefulWidget {
  static route({required List<Uint8List> photoPreviewFiles}) => MaterialPageRoute(
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


  @override
  void initState() {
    imageFiles = widget.photoPreviewFiles;
    previewIDList =
        stringToList((ref.read(photoSessionCollectionProvider))['photoID']);
    generateWidgets();
    super.initState();
  }

  @override
  void didChangeDependencies() async {

    super.didChangeDependencies();
  }

  void generateWidgets() {
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

  onPay() {
    ref.read(previewPhotoProvider.notifier).state = imageFiles[0];

    if (ref.read(checkedPhotoIDProvider).isNotEmpty) {
      ref.read(previewPaymentControllerProvider.notifier).updateFinalPrice(ref);
      Navigator.push(context, ChoosePayment.route());
    } else {
      showSnackBar(context, '請選擇要購買的照片');
    }
  }

  @override
  Widget build(BuildContext context) {
    bool hasPaymentRecord = (ref.read(photoSessionCollectionProvider)['payment']).isNotEmpty;

    return Scaffold(
        body: SingleChildScrollView(
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
          aspectRatio: getAspectRatio(image: imageFiles[0]),
          onScrolled: (i) {
            final int? page = i?.round();
            if (page != currentIndex) {
              ref.read(indicatorIndexProvider.notifier).state =
                  page!;
              currentIndex = page!;
            }
          }),
                      ),
                    ),
                    PageIndicator(imageFiles),
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
                    Bill(),
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
                onPay();
              },
              text: '前往付款',
              textSize: 20,
              fontWeight: FontWeight.w900,
              padding: const EdgeInsets.symmetric(
                  horizontal: 12, vertical: 12),
            ),
            const SizedBox(
              height: 10,
            ),
            hasPaymentRecord? RectangleButton(
              onTap: () {
                Navigator.push(context, PaymentRecord.route());
              },
              text: '購買記錄',
              textSize: 20,
              fontWeight: FontWeight.w900,
              padding: const EdgeInsets.symmetric(
                  horizontal: 12, vertical: 12),
            ):Container(),
            const SizedBox(
              height: 10,
            ),
            const CountdownTimer2(),
          ],
        )
                        ],
                      ),
                    ),
                    const SizedBox(height: 22,),
                    QRCodeShare(
                      previewImageFile: imageFiles[0],
                      padding: 30,
                    ),
                    const SizedBox(height: 20,),
                    qaAndService(context),
                    const SizedBox(height: 20,)
                  ],
                ),
        ));
  }
}
