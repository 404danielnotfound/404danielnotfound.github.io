import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../common_widget/appbar.dart';
import '../../../common_widget/loading_page.dart';
import '../controller/preview_payment_controller.dart';
import '../controller/provider.dart';
import '../widget/record_detail_card.dart';


class PaymentRecord extends ConsumerStatefulWidget {
  static route() => MaterialPageRoute(
        builder: (context) => const PaymentRecord(),
      );

  const PaymentRecord({super.key});

  @override
  ConsumerState createState() => _PaymentRecordState();
}

class _PaymentRecordState extends ConsumerState<PaymentRecord> {
  bool dataReady = false;
  List<dynamic> paymentRecord = [];
  List<Widget> recordCards = [];

  @override
  void didChangeDependencies() async  {
    await ref.watch(previewPaymentControllerProvider.notifier).getPhotoSessionCollection(ref);
    final photoSessionCollection = ref.read(photoSessionCollectionProvider);
    paymentRecord = photoSessionCollection['payment'];
    for (var recordID in paymentRecord) {
      final recordDetail = await ref.read(previewPaymentControllerProvider.notifier).getPaymentCollection(recordID);
      recordCards.add(recordDetailCard(recordDetail,recordID,context));
    }

    setState(() {
      dataReady = true;
    });

    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: dataReady ? Column(
        children: [
          appbar(context: context, title: '購買記錄',cancel: false),
          const SizedBox(height: 10,),
          Expanded(child: SingleChildScrollView(
            child: Column(
              children: [
                ...recordCards
              ],
            ),
          ))
        ],
      ) : loadingWidget('請稍後...'),
    );
  }
}

