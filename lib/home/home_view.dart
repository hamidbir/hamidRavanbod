//! Home view include all of item in site such as Navigation bar, Project view and so on!
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:hamidravanbod/experience/experience_view.dart';
import 'package:hamidravanbod/footer/footer_view.dart';
import 'package:hamidravanbod/header/header_view.dart';
import 'package:hamidravanbod/project/project_view.dart';
import 'package:hamidravanbod/skills/skills_view.dart';

class HomeView extends StatefulWidget {
  const HomeView({Key? key}) : super(key: key);

  @override
  _HomeViewState createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  //* Keys to different parts of the personal site
  final projectKey = GlobalKey();
  final skillsKey = GlobalKey();
  final experienceKey = GlobalKey();
  //* ScrollController with initialScrollOffset = 0
  final ScrollController scrollController =
      ScrollController(initialScrollOffset: 0);

  List<NavigationItem> navigationItems = [];
  // @override
  // void afterFirstLayout(BuildContext context) {
  //   setState(() {
  //     navigationItems = [
  //       NavigationItem('projects', key: projectKey),
  //       NavigationItem('skills', key: skillsKey),
  //       NavigationItem('Experience', key: experienceKey),
  //       //NavigationItem('Blog',key: ),
  //     ];
  //   });
  // }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    //* Implement inheritance from a segment for cascading controller availability in the segments
    return Scaffold(
      appBar: AppBar(
        elevation: 0.0,
        backgroundColor: Colors.transparent,
        leading: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const SizedBox(
              width: 32,
            ),
            Image.asset('assets/images/mainIcon.png'),
          ],
        ),
        centerTitle: true,
        title: const Text('Hamid Ravanbod',
            style: TextStyle(
                fontFamily: 'bradly',
                color: Colors.redAccent,
                fontWeight: FontWeight.bold,
                fontSize: 40)),
      ),
      //endDrawer: DrawerView(),
      body: SizedBox(
          width: width,
          height: height,
          child: SingleChildScrollView(
              child: Column(
            children: const [
              //Container(color: Colors.yellow),
              HeaderView(),
              ProjectView(),
              SkillsView(),
              ExperienceView(),
              FooterView()
            ],
          ))

          // child: SingleChildScrollView(
          //   //  controller: scrollController,
          //   child: Column(
          //     mainAxisSize: MainAxisSize.max,
          //     children: [
          //       // NavigationBarView(),
          //       // HeaderView(),
          //       // ProjectView(key: projectKey),
          //       // SkillsView(key: skillsKey),
          //       // ExperienceView(key: experienceKey),
          //       // //BlogView(),
          //       // FooterView()
          //     ],
          //   ),
          // ),
          ),
      //floatingActionButton: BackToTop(),
    );
  }
}

//! Function Find the beginning of each section to set buttons to automatically scroll to that section
_getPosition(GlobalKey key) {
  final RenderBox rb = key.currentContext!.findRenderObject() as RenderBox;
  final position = rb.localToGlobal(Offset.zero);
  final scrollOffset = position.dy;
  return scrollOffset;
}

class NavigationItem {
  final String text;
  final Icon? icon;
  final GlobalKey key;

  NavigationItem(this.text, {this.icon, required this.key});
  double get position => _getPosition(key);
}

final navigationItemText = [''];
final navigationItemIcon = [Icon(Icons.ac_unit)];
