import 'package:flutter/material.dart';
import 'package:hamidravanbod/home/home_view.dart';

void main() {
  runApp(const MyApp());
}

//* main Class: include Font program, theme program, and home view
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hamid Ravanbod ',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          primarySwatch: Colors.blue,
          textTheme: const TextTheme(
            headline2: TextStyle(color: Colors.black, fontFamily: 'bradly'),
            headline4: TextStyle(
                color: Colors.black, fontFamily: 'comic', fontSize: 30),
          ),
          fontFamily: 'comic'),
      home: const HomeView(),
    );
  }
}
