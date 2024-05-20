import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:remote_camera_official_app/common_widget/appbar.dart';
import 'package:remote_camera_official_app/common_widget/import_common_widgets.dart';
import 'package:remote_camera_official_app/core/import_core.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/preview_payment_controller.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/controller/provider.dart';
import 'package:remote_camera_official_app/features/06_preview_and_payment/widget/record_detail_card.dart';

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
          appbar(context: context, title: '付款記錄'),
          const SizedBox(height: 10,),
          ...recordCards,

        ],
      ) : loadingWidget('請稍後...'),
    );
  }
}
