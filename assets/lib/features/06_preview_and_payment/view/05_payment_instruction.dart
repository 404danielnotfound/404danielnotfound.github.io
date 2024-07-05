import 'package:flutter/material.dart';

import '../../../common_widget/appbar.dart';
import '../../../core/enum.dart';
import '../../../theme/pallete.dart';
import '../controller/payment_instruction_controller.dart';
import '../widget/QA_Service.dart';
import '04_processing_payment.dart';

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