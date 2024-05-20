import 'package:flutter/material.dart';
import 'package:remote_camera_official_app/common_widget/appbar.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/04_processing_payment.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/instruction_card.dart';
import 'package:remote_camera_official_app/theme/import_theme.dart';
import '../../../common_widget/rectangle_theme_button.dart';

class ATMPaymentInstruction extends StatelessWidget {
  static route() =>
      MaterialPageRoute(builder: (context) => const ATMPaymentInstruction());

  const ATMPaymentInstruction({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Column(
            children: [
              appbar(context: context, title: 'ATM付款流程'),
              const SizedBox(
                height: 25,
              ),
              instructionCard(
                  '01', '移步至合作的銀行ATM', 'lib/assets/pics/bank.png'),
              instructionCard(
                  '02', '抵達ATM後點擊下方的獲取付款資訊', 'lib/assets/pics/info.png'),
              instructionCard('03', '轉賬至專用匯款賬戶', 'lib/assets/pics/atm.png'),
              instructionCard('04', '完成繳費後系統將自動發送下載鏈接到您的手機/郵箱',
                  'lib/assets/pics/downloadIcon.png'),
              instructionCard('05', '以上步驟也可以透過網路銀行完成',
                  'lib/assets/pics/phone.png'),
            ],
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: GestureDetector(
              onTap: () {
                Navigator.push(context,
                    ProcessingPayment.route(paymentType: PaymentType.atm));
              },
              child: Container(
                padding: EdgeInsets.all(8),
                margin: EdgeInsets.all(15),
                width: double.infinity,
                height: 50,
                decoration: BoxDecoration(
                  color: Pallete.mainColor,
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.5),
                      blurRadius: 5.0,
                      offset: Offset(2.0, 5.0),
                    ),
                  ],
                ),
                child: Center(
                  child: Text(
                    '獲取付款資訊',
                    style: TextStyle(fontSize: 25, fontWeight: FontWeight.w500),
                  ),
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
