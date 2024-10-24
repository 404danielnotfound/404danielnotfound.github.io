import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'dart:html' as html;
import '../../../core/enum.dart';
import '../../../theme/pallete.dart';
import '../controller/payment_controller.dart';
import '09_pop_up_confirm.dart';

class ProcessingPayment extends ConsumerStatefulWidget {
  static route({required PaymentType paymentType}) => MaterialPageRoute(
    builder: (context) => ProcessingPayment(paymentType: paymentType),
  );

  final PaymentType paymentType;
  const ProcessingPayment({super.key,required this.paymentType});

  @override
  ConsumerState createState() => _ProcessingPaymentState();
}

class _ProcessingPaymentState extends ConsumerState<ProcessingPayment> {
  @override
  void didChangeDependencies() async {
    try{
      String paymentID;
      switch(widget.paymentType){
        case PaymentType.linePay:
          String linePayUrl = '';
          [linePayUrl, paymentID] = await ref.watch(paymentControllerProvider.notifier).linePay(amount: 150,ref: ref);
          openPaymentURL(url: linePayUrl);
          Navigator.push(context, PopUpConfirm.route(onRetryPayment: (){
            openPaymentURL(url: linePayUrl);
          }, paymentID: paymentID));
        case PaymentType.jkPay:
          print('jkPay Selected');
        case _:
          String paymentDetail = '';
          print('Payment type is ${widget.paymentType.name}');
          //This includes all EZPay options
          [paymentDetail, paymentID] = await ref.watch(paymentControllerProvider.notifier).ezPay(paymentType: widget.paymentType,ref: ref);
          //print('Payment Details: $paymentDetail');
          openHtmlInNewTab(paymentDetail);
          Navigator.push(context, PopUpConfirm.route(onRetryPayment: (){
            openHtmlInNewTab(paymentDetail);
          },paymentID: paymentID));
      }

    ;
    } catch(e){
      print('Failed to make payment: ${e.toString()}');
    }

    super.didChangeDependencies();
  }


  void openPaymentURL({required String url}){
    html.window.open(url,'new_tap');
  }

  void openHtmlInNewTab(String htmlContent) {
    try{
      // Create a new Blob with the HTML content
      final blob = html.Blob([htmlContent], 'text/html');

      // Create a URL for the Blob
      final url = html.Url.createObjectUrlFromBlob(blob);

      // Open the URL in a new tab
      html.window.open(url, '_blank');

      // Release the URL object after opening the tab
      html.Url.revokeObjectUrl(url);
    }catch(e){
      final error = e.toString();
      print('There is error: $error');
    }

  }


  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            '即將跳轉至付款頁面...',
            style: TextStyle(fontSize: 15, color: Colors.black),
          ),
          SizedBox(
            width: 5,
          ),
          SpinKitDoubleBounce(
            size: 15,
            color: Pallete.mainColor,
          ),
        ],
      ),
    );
  }
}
