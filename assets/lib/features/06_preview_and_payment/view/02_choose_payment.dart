import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:remote_camera_official_app/common_widget/rectangle_theme_button.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/provider.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/03_confirmContact.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/QA_Service.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/dialogs.dart';
import '../../../common_widget/appbar.dart';
import '../../../core/enum.dart';
import '../widget/paymentCard.dart';

class ChoosePayment extends ConsumerWidget {
  static route() => MaterialPageRoute(
        builder: (context) => const ChoosePayment(),
      );

  const ChoosePayment({super.key});

  void paymentProceed(
      {required BuildContext context, required PaymentType paymentType}) {
    Navigator.push(context, ConfirmContactPage.route(paymentType));
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    double screenWidth = MediaQuery.of(context).size.width;
    double paymentCardWidth = (screenWidth - 15 * 3) / 2;

    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          appbar(context: context, title: '選擇付款方式'),
          const Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.only(left: 18, bottom: 0),
                child: Text('線上支付',
                    style:
                        TextStyle(fontSize: 18, fontWeight: FontWeight.w600)),
              ),
            ],
          ),
          Padding(
            padding:
                const EdgeInsets.only(left: 15, right: 15, top: 10, bottom: 15),
            child: Row(
              children: [
                paymentCardType2(
                    onTap: () {
                      paymentProceed(
                          context: context, paymentType: PaymentType.card);
                    },
                    name: '信用卡',
                    logoAssetPath: 'lib/assets/icon/payment/card.png',
                    width: paymentCardWidth),
                const SizedBox(
                  width: 15,
                ),
                paymentCardType1(
                    onTap: () {
                      paymentProceed(
                          context: context, paymentType: PaymentType.linePay);
                    },
                    logoAssetPath: 'lib/assets/icon/payment/linepay.png',
                    width: paymentCardWidth),
              ],
            ),
          ),
          const Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.only(left: 18, top: 20),
                child: Text(
                  '線下支付',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                ),
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.only(left: 15, right: 15, top: 10),
            child: Row(
              children: [
                paymentCardType2(
                    onTap: () async {
                      showDialog(context: context, builder: (BuildContext context) => storePaymentDialog(context: context));
                    },
                    name: '超商繳費',
                    logoAssetPath: 'lib/assets/icon/payment/store.png',
                    width: paymentCardWidth),
                const SizedBox(
                  width: 15,
                ),
                paymentCardType2(
                    onTap: () {
                      paymentProceed(
                          context: context, paymentType: PaymentType.atm);
                    },
                    name: 'ATM轉賬',
                    logoAssetPath: 'lib/assets/icon/payment/atm.png',
                    width: paymentCardWidth),
              ],
            ),
          ),
          const Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.only(left: 18, bottom: 0, top: 40),
                child: Text(
                  '請家人或朋友幫忙付款',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                  softWrap: true,
                ),
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.only(left: 15, right: 15, top: 10),
            child: Row(
              children: [
                paymentCardType3(
                    onTap: () {
                      showDialog(
                          context: context,
                          builder: (BuildContext context) =>
                          helpMePay(ref.read(previewPhotoProvider),context));
                    },
                    name: '找人代付',
                    logoAssetPath: 'lib/assets/icon/payment/store.png',
                    width: paymentCardWidth),
              ],
            ),
          ),
          const Spacer(),
          qaAndService(context),
          SizedBox(height: 15,),
        ],
      ),
    );
  }
}
