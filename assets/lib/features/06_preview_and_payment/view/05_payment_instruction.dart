import 'package:flutter/material.dart';
import 'package:remote_camera_official_app/common_widget/appbar.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/payment_instruction_controller.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/04_processing_payment.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/QA_Service.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/dialogs.dart';
import 'package:remote_camera_official_app/theme/import_theme.dart';

import '../../../common_widget/rectangle_theme_button.dart';
import '../../09_FAQ/view/FAQ.dart';

class PaymentInstruction extends StatelessWidget {
  final PaymentType paymentType;

  static route(PaymentType paymentType) => MaterialPageRoute(
      builder: (context) => PaymentInstruction(
            paymentType: paymentType,
          ));

  const PaymentInstruction({super.key, required this.paymentType});

  void onProcessPayment(BuildContext context) {
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
              qaAndService(context),
              const SizedBox(
                height: 10,
              ),
              Row(
                children: [
                  const SizedBox(
                    width: 20,
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
                    width: 20,
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