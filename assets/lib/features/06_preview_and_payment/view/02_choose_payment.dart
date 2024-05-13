import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:remote_camera_official_app/common_widget/rectangle_theme_button.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/03_processing_payment.dart';
import 'package:remote_camera_official_app/theme/pallete.dart';
import '../util/enum.dart';
import '../widget/paymentCard.dart';

class ChoosePayment extends ConsumerWidget {
  static route() => MaterialPageRoute(
        builder: (context) => const ChoosePayment(),
      );

  const ChoosePayment({super.key});

  void processPayment(
      {required BuildContext context, required PaymentType paymentType}) {
    Navigator.push(context, ProcessingPayment.route(paymentType: paymentType));
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    double screenWidth = MediaQuery.of(context).size.width;
    double paymentCardWidth = (screenWidth - 15 * 3) / 2;

    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          IntrinsicHeight(
            child: Stack(
              children: [
                Align(
                  alignment: Alignment.centerLeft,
                  child: RectangleButton(
                    onTap: () {
                      Navigator.pop(context);
                    },
                    margin: const EdgeInsets.symmetric(
                        horizontal: 20, vertical: 20),
                    child: const Text(
                      '取消',
                      style: TextStyle(fontSize: 14),
                    ),
                  ),
                ),
                const Align(
                  alignment: Alignment.center,
                  child: Text('請選擇付款方式',
                      style:
                          TextStyle(fontSize: 18, fontWeight: FontWeight.w600)),
                )
              ],
            ),
          ),
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
                paymentCardType1(
                    onTap: () {
                      processPayment(
                          context: context, paymentType: PaymentType.jkPay);
                    },
                    logoAssetPath: 'lib/assets/pics/jkpay2.png',
                    width: paymentCardWidth),
                const SizedBox(
                  width: 15,
                ),
                paymentCardType1(
                    onTap: () {
                      processPayment(
                          context: context, paymentType: PaymentType.linePay);
                    },
                    logoAssetPath: 'lib/assets/pics/linepay.png',
                    width: paymentCardWidth),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 15, right: 15),
            child: Row(
              children: [
                paymentCardType2(
                    onTap: () {
                      processPayment(
                          context: context, paymentType: PaymentType.card);
                    },
                    name: '信用卡',
                    logoAssetPath: 'lib/assets/pics/card.png',
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
                    onTap: () {
                      processPayment(
                          context: context, paymentType: PaymentType.store);
                    },
                    name: '超商繳費',
                    logoAssetPath: 'lib/assets/pics/store.png',
                    width: paymentCardWidth),
                const SizedBox(
                  width: 15,
                ),
                paymentCardType2(
                    onTap: () {
                      processPayment(
                          context: context, paymentType: PaymentType.atm);
                    },
                    name: 'ATM轉賬',
                    logoAssetPath: 'lib/assets/pics/atm.png',
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
                    onTap: () {},
                    name: '找人代付',
                    logoAssetPath: 'lib/assets/pics/store.png',
                    width: paymentCardWidth),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
