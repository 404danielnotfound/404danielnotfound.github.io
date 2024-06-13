import 'package:flutter/material.dart';
import 'package:remote_camera_official_app/common_widget/rectangle_theme_button.dart';
import 'package:remote_camera_official_app/theme/import_theme.dart';
import '../../../common_widget/appbar.dart';
import '../../09_FAQ/view/FAQ.dart';

class PopUpConfirm extends StatelessWidget {
  static route({required VoidCallback onRetryPayment}) => MaterialPageRoute(
    builder: (context) => PopUpConfirm(onRetryPayment: onRetryPayment,),
  );

  final VoidCallback onRetryPayment;

  const PopUpConfirm({super.key, required this.onRetryPayment,});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
        appbar(context: context,popNum: 4),
        const SizedBox(
          height: 110,
        ),
        const Text(
          '已自動跳轉至付款頁面',
          style: TextStyle(fontSize: 27, fontWeight: FontWeight.w500),
        ),
        const SizedBox(
          height: 40,
        ),
        const Icon(
          Icons.check_circle_rounded,
          color: Pallete.mainColor,
          size: 110,
        ),
        const SizedBox(
          height: 40,
        ),
        const Text(
          '沒有看到付款頁面?',
          style: TextStyle(fontSize: 15, fontWeight: FontWeight.w500),
        ),
            const SizedBox(
              height: 15,
            ),
            Container(
                margin: const EdgeInsets.symmetric(horizontal: 120),
                width: double.infinity,
                child: RectangleButton2(onTap: onRetryPayment, text: '再試一次', textSize: 19, fontWeight: FontWeight.w500,padding: const EdgeInsets.symmetric(vertical: 10),)),
            const SizedBox(height: 15,),
            Container(
                margin: const EdgeInsets.symmetric(horizontal: 120),
                width: double.infinity,
                child: RectangleButton2(onTap: (){
                  Navigator.push(context, FAQ.route());
                }, text: '常見問題', textSize: 19, fontWeight: FontWeight.w500,backgroundColor: Pallete.greyColor,padding: const EdgeInsets.symmetric(vertical: 10))),
            Expanded(child: Container()),
            Container(
                margin: const EdgeInsets.symmetric(horizontal: 13,vertical: 13),
                width: double.infinity,
                child: RectangleButton2(onTap: (){}, text: '查詢付款結果', textSize: 27, fontWeight: FontWeight.w600,padding: const EdgeInsets.symmetric(vertical: 15))),

      ]),
    );
  }
}
