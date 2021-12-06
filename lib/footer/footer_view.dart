import 'package:flutter/material.dart';
import 'package:hamidravanbod/components/mobile_desktop_view_builder.dart';
import 'package:hamidravanbod/constants.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class FooterView extends StatelessWidget {
  const FooterView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MobileDesktopViewBuilder(
        mobileView: FooterMobileView(), desktopView: FooterDesktopView());
  }
}

class FooterMobileView extends StatelessWidget {
  const FooterMobileView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final currentYear = DateTime.now().year;
    return Container(
      padding: kScreenPadding,
      height: 150,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              for (final social in socials)
                IconButton(
                  icon: social.icon,
                  onPressed: () => launch(social.url),
                  hoverColor: Colors.transparent,
                  splashColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  color: Colors.red,
                ),
            ],
          ),
          const SizedBox(
            height: 20,
          ),
          Text(
            '© Hamid Ravanbod $currentYear',
            style: const TextStyle(color: Colors.redAccent),
          ),
          const SizedBox(
            height: 20,
          ),
          InkWell(
            hoverColor: Colors.transparent,
            splashColor: Colors.transparent,
            highlightColor: Colors.transparent,
            mouseCursor: MaterialStateMouseCursor.clickable,
            child: const Text(
              'See the source code',
              style: TextStyle(
                  decoration: TextDecoration.underline,
                  color: Colors.redAccent),
            ),
            onTap: () => launch('https://github.com/hamidbir/PersonalSite'),
          ),
        ],
      ),
    );
  }
}

class FooterDesktopView extends StatelessWidget {
  const FooterDesktopView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final currentYear = DateTime.now().year;
    return Container(
      width: kInitWidth,
      padding: kScreenPadding,
      height: 100,
      child: Row(
        children: [
          Text(
            '© Hamid Ravanbod $currentYear -- ',
            style: TextStyle(color: Colors.redAccent),
          ),
          InkWell(
            hoverColor: Colors.transparent,
            splashColor: Colors.transparent,
            highlightColor: Colors.transparent,
            mouseCursor: MaterialStateMouseCursor.clickable,
            child: const Text(
              'See the source code',
              style: TextStyle(
                  decoration: TextDecoration.underline,
                  color: Colors.redAccent),
            ),
            onTap: () => launch('https://github.com/hamidbir/PersonalSite'),
          ),
          const Spacer(),
          for (final social in socials)
            IconButton(
              icon: social.icon,
              onPressed: () => launch(social.url),
              hoverColor: Colors.transparent,
              splashColor: Colors.transparent,
              highlightColor: Colors.transparent,
              color: Colors.red,
            ),
          const SizedBox(
            width: 60,
          )
        ],
      ),
    );
  }
}

class SocialsInfo {
  final Widget icon;
  final String url;
  SocialsInfo({
    required this.icon,
    required this.url,
  });
}

final socials = [
  SocialsInfo(
      icon: FaIcon(FontAwesomeIcons.telegram),
      url: 'https://t.me/hamidprv1999'),
  SocialsInfo(
      icon: FaIcon(FontAwesomeIcons.twitter),
      url: 'https://twitter.com/Hamid70859844'),
  SocialsInfo(
      icon: FaIcon(FontAwesomeIcons.linkedin),
      url: 'https://www.linkedin.com/in/hamid-ravanbod/'),
];
