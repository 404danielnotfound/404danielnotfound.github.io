import 'package:flutter/material.dart';
import 'package:remote_camera_official_app/common_widget/appbar.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/04_processing_payment.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/instruction_card.dart';
import 'package:remote_camera_official_app/theme/import_theme.dart';
import '../../../common_widget/rectangle_theme_button.dart';

class StorePaymentInstruction extends StatelessWidget {
  static route() =>
      MaterialPageRoute(builder: (context) => const StorePaymentInstruction());

  const StorePaymentInstruction({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Column(
            children: [
              appbar(context: context, title: '超商付款流程'),
              const SizedBox(
                height: 25,
              ),
              instructionCard(
                  '01', '移步至附近的便利商店', 'lib/assets/pics/storeIcon.png'),
              instructionCard(
                  '02', '到達商店後點擊下方的獲取繳費條碼按鈕', 'lib/assets/pics/barcode.png'),
              instructionCard(
                  '03', '將繳費條碼出示給店員 店員將協助您完成繳費', 'lib/assets/pics/cashier.png'),
              instructionCard('04', '完成繳費後系統將自動發送下載鏈接到您的手機/郵箱',
                  'lib/assets/pics/downloadIcon.png'),
            ],
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: GestureDetector(
              onTap: () {
                Navigator.push(context,
                    ProcessingPayment.route(paymentType: PaymentType.store));
              },
              child: Container(
                padding: EdgeInsets.all(8),
                margin: EdgeInsets.all(13),
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
                    '獲取付款條碼',
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
