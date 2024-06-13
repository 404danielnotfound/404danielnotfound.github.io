import 'package:flutter/material.dart';
import 'package:remote_camera_official_app/common_widget/appbar.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/payment_instruction_controller.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/04_processing_payment.dart';
import 'package:remote_camera_official_app/theme/import_theme.dart';

import '../../09_FAQ/view/FAQ.dart';

class PaymentInstruction extends StatelessWidget {
  final PaymentType paymentType;

  static route(PaymentType paymentType) => MaterialPageRoute(
      builder: (context) => PaymentInstruction(
            paymentType: paymentType,
          ));

  const PaymentInstruction({super.key, required this.paymentType});

  void onProcessPayment(BuildContext context){
    Navigator.push(context, ProcessingPayment.route(paymentType: paymentType));
  }

  @override
  Widget build(BuildContext context) {
    PaymentInstructionBuilder instructionBuilder =
        PaymentInstructionBuilder(paymentType: paymentType);

    return Scaffold(
      body: Stack(
        children: [
          Column(
            children: [
              appbar(
                  context: context,
                  title: instructionBuilder.instructionPageTitle(),
              popNum: 2),
              const SizedBox(
                height: 25,
              ),
              ...instructionBuilder.buildInstructionCards(),
            ],
          ),
          Column(
            children: [
              Expanded(child: Container()),
              Container(
                width: double.infinity,
                padding: EdgeInsets.symmetric(horizontal: 13),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Expanded(
                        child: RectangleButton(
                      onTap: (){
                        Navigator.push(context, FAQ.route());
                      },
                      text: '常見問題',
                      textSize: 16,
                      fontWeight: FontWeight.w400,
                      padding: const EdgeInsets.symmetric(vertical: 10),
                    )),
                    SizedBox(
                      width: 13,
                    ),
                    Expanded(
                        child: RectangleButton(
                            onTap: (){},
                            text: '聯繫客服',
                            textSize: 16,
                            fontWeight: FontWeight.w400,
                            padding: const EdgeInsets.symmetric(vertical: 10))),
                  ],
                ),
              ),
              const SizedBox(
                height: 10,
              ),
              Row(
                children: [
                  const SizedBox(
                    width: 13,
                  ),
                  Expanded(
                      child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      shape: const ContinuousRectangleBorder(),
                      backgroundColor: Pallete.mainColor,
                      foregroundColor: Pallete.textColor,
                      padding: const EdgeInsets.symmetric(vertical: 15),
                    ),
                    onPressed: () {
                      onProcessPayment(context);
                    },
                    child: Text(
                      instructionBuilder.proceedButtonText(),
                      style: const TextStyle(
                          fontSize: 25, fontWeight: FontWeight.w500),
                    ),
                  )),
                  const SizedBox(
                    width: 13,
                  ),
                ],
              ),
              const SizedBox(
                height: 13,
              ),
            ],
          )
        ],
      ),
    );
  }
}

class RectangleButton extends StatelessWidget {
  final String text;
  final double textSize;
  final FontWeight fontWeight;
  final VoidCallback onTap;
  final EdgeInsets padding;

  const RectangleButton(
      {super.key,
        required this.onTap,
        this.padding = const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        required this.text,
        required this.textSize,
        required this.fontWeight}); // Set default margin

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        shape: const ContinuousRectangleBorder(),
        backgroundColor: Pallete.greyColor,
        foregroundColor: Pallete.textColor,
        padding: padding,
      ),
      onPressed: onTap,
      child: Text(
        text,
        style: TextStyle(fontSize: textSize, fontWeight: fontWeight),
      ),
    );
  }
}

