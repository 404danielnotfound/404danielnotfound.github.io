import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter/material.dart';
import 'package:remote_camera_official_app/common_widget/rectangle_theme_button.dart';
import 'package:remote_camera_official_app/features/05_contactRequest/controller/contact_provider.dart';
import 'package:remote_camera_official_app/features/05_contactRequest/view/input_field.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/04_processing_payment.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/05_sotre_instruction.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/view/06_ATM_instruction.dart';
import '../../../core/utils.dart';
import '../../../theme/pallete.dart';
import '../../01_home/view/01_home_view.dart';

class ConfirmContactPage extends ConsumerStatefulWidget {

  final PaymentType paymentType;

  static route(PaymentType paymentType) => MaterialPageRoute(
    builder: (context) => ConfirmContactPage(paymentType: paymentType,
  ));

  ConfirmContactPage({super.key,required this.paymentType});

  @override
  ConsumerState createState() => _ContactRequestPageState();
}

class _ContactRequestPageState extends ConsumerState<ConfirmContactPage> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final inputController = TextEditingController();

  @override
  void dispose() {
    inputController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    inputController.value = TextEditingValue(text: ref.read(contactDataProvider));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async {
        bool result = await popDialogeCheck(context, ref);
        if (result == true) {
          WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
            Navigator.pushReplacement(context, HomeView.route());
          });
          return true;
        } else {
          return false;
        }
      },
      child: Scaffold(
        body: Form(
            key: _formKey,
            child: Stack(children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: EdgeInsets.symmetric(horizontal: 20),
                        child: Text(
                          '您的付款結果將會寄送到:',
                          style: TextStyle(
                              color: Colors.black,
                              fontSize: 20,
                              fontWeight: FontWeight.w800),
                        ),
                      )),
                  const SizedBox(
                    height: 30,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: InputField(
                        controller: inputController, hintText: '郵箱/手機',initialValue: ref.read(contactDataProvider),),
                  ),
                  const SizedBox(
                    height: 30,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      RectangleButton(
                          margin: const EdgeInsets.only(right: 40),
                          child: const IntrinsicWidth(
                            child: Row(
                              children: [
                                Text(
                                  '提交',
                                  style: TextStyle(fontSize: 20),
                                ),
                                Icon(
                                  Icons.arrow_forward,
                                  size: 20,
                                  color: Colors.black,
                                )
                              ],
                            ),
                          ),
                          onTap: () {
                            if (_formKey.currentState!.validate()) {
                              // Validate the form
                              // Form is valid, process the input data
                              String inputData = inputController.text;
                              ref.watch(contactDataProvider.notifier).state = inputData;
                              if(widget.paymentType == PaymentType.store){
                                Navigator.push(context, StorePaymentInstruction.route());
                              }

                              else if(widget.paymentType == PaymentType.atm){
                                Navigator.push(context, ATMPaymentInstruction.route());
                            } else {
                                Navigator.push(context, ProcessingPayment.route(paymentType: widget.paymentType));
                              }

                            }
                          }),
                    ],
                  ),
                ],
              ),
              Align(
                alignment: Alignment.bottomCenter,
                child: Container(
                  height: 30,
                  width: double.infinity,
                  color: Pallete.mainColor,
                ),
              ),
            ])),
      ),
    );
  }
}
