import 'package:flutter/material.dart';

class LinePayFailed extends StatelessWidget {
  const LinePayFailed({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('Line Pay 付款取消/失敗',style: TextStyle(fontSize: 20,fontWeight: FontWeight.w600),),
          SizedBox(height: 20,),
          Text('請重新付款',style: TextStyle(fontSize: 20,fontWeight: FontWeight.w600),),
        ],
      ),
    );
  }
}
