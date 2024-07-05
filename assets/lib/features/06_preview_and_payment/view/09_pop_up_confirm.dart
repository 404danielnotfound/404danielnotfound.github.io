import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../common_widget/appbar.dart';
import '../../../common_widget/rectangle_theme_button.dart';
import '../../../core/enum.dart';
import '../../../theme/pallete.dart';
import '../../07_photo_download/view/01_loading_photo.dart';
import '../../09_FAQ/view/FAQ.dart';
import '../controller/payment_controller.dart';
import '../widget/dialogs.dart';

class PopUpConfirm extends ConsumerWidget {
  static route({required VoidCallback onRetryPayment, required paymentID}) =>
      MaterialPageRoute(
        builder: (context) => PopUpConfirm(
          onRetryPayment: onRetryPayment,
          paymentID: paymentID,
        ),
      );

  final VoidCallback onRetryPayment;
  final String paymentID;

  const PopUpConfirm(
      {super.key, required this.onRetryPayment, required this.paymentID});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            appbar(context: context, popNum: 4),
            const SizedBox(
              height: 95,
            ),
            const Text(
              '已自動跳轉至付款頁面',
              style: TextStyle(fontSize: 27, fontWeight: FontWeight.w500),
            ),
            const SizedBox(
              height: 40,
            ),
            const Icon(
              Icons.check_circle_rounded,
              color: Pallete.mainColor,
              size: 110,
            ),
            const SizedBox(
              height: 40,
            ),
            const Text(
              '沒有看到付款頁面?',
              style: TextStyle(fontSize: 19, fontWeight: FontWeight.w500),
            ),
            const SizedBox(
              height: 15,
            ),
            Container(
                margin: const EdgeInsets.symmetric(horizontal: 120),
                width: double.infinity,
                child: RectangleButton2(
                  onTap: onRetryPayment,
                  text: '再試一次',
                  textSize: 19,
                  fontWeight: FontWeight.w500,
                  padding: const EdgeInsets.symmetric(vertical: 10),
                )),
            const SizedBox(
              height: 15,
            ),
            Container(
                margin: const EdgeInsets.symmetric(horizontal: 120),
                width: double.infinity,
                child: RectangleButton2(
                    onTap: () {
                      Navigator.push(context, FAQ.route());
                    },
                    text: '常見問題',
                    textSize: 19,
                    fontWeight: FontWeight.w500,
                    backgroundColor: Pallete.greyColor,
                    padding: const EdgeInsets.symmetric(vertical: 10))),
            Expanded(child: Container()),
            Container(
                margin:
                    const EdgeInsets.symmetric(horizontal: 13, vertical: 13),
                width: double.infinity,
                child: RectangleButton2(
                    onTap: () async {
                      final paymentResult = await ref
                          .read(paymentControllerProvider.notifier)
                          .checkPaymentResult(paymentID: paymentID);
                      switch (paymentResult) {
                        case PaymentResult.paid:
                          Navigator.push(
                              context, LoadingPhoto.route(paymentID, false));
                          break;
                        case PaymentResult.pending:
                          showDialog(
                              context: context,
                              builder: (BuildContext context) =>
                                  checkPaymentDialog(
                                      context: context,
                                      bodyText: '付款進行中，請按照指示完成付款\n\n如已完成付款，請稍後再查詢',
                                      onFinished: () {
                                        Navigator.pop(context);
                                      }));
                          break;
                        case PaymentResult.failed:
                          showDialog(
                              context: context,
                              builder: (BuildContext context) =>
                                  checkPaymentDialog(
                                      context: context,
                                      bodyText: '付款失敗，請重新付款',
                                      onFinished: () {
                                        for (int i = 0; i < 5; i++) {
                                          Navigator.of(context).pop();
                                        }
                                      }));
                          break;
                        default:
                          showDialog(
                              context: context,
                              builder: (BuildContext context) =>
                                  checkPaymentDialog(
                                      context: context,
                                      bodyText: '網絡錯誤，請稍後再試',
                                      onFinished: () {
                                        Navigator.pop(context);
                                      }));
                          break;
                      }
                    },
                    text: '查詢付款結果',
                    textSize: 27,
                    fontWeight: FontWeight.w600,
                    padding: const EdgeInsets.symmetric(vertical: 15))),
          ]),
    );
  }
}
