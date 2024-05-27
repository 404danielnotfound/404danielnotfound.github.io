import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/payment_controller.dart';
import 'package:remote_camera_official_app/core/enum.dart';
import 'dart:html' as html;
import '../../../theme/pallete.dart';

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
      switch(widget.paymentType){
        case PaymentType.linePay:
          final linePayUrl = await ref.watch(paymentControllerProvider.notifier).linePay(amount: 150);
          openPaymentURL(url: linePayUrl);
        case PaymentType.jkPay:
          print('sdf');
        case _:
          //This includes all EZPay options
          final paymentDetail = await ref.watch(paymentControllerProvider.notifier).ezPay(paymentType: widget.paymentType);
          //print('Payment Details: $paymentDetail');
          openHtmlInNewTab(paymentDetail);
      }

      Navigator.of(context)..pop()..pop();
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
