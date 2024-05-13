import 'package:flutter/material.dart';
import 'dart:html' as html;

import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';

class HTMLPay extends StatefulWidget {
  static route(String htmlPage) => MaterialPageRoute(
    builder: (context) => HTMLPay(htmlPage: htmlPage,)
  );
  final String htmlPage;
  const HTMLPay({super.key,required this.htmlPage});

  @override
  State<HTMLPay> createState() => _HTMLPayState();
}

class _HTMLPayState extends State<HTMLPay> {

  @override
  Widget build(BuildContext context) {
    print('html page opened');
    return Scaffold(
      body: SingleChildScrollView(
        child: HtmlWidget(
          widget.htmlPage,
        ),
      ),
    );
  }
}
