import 'package:flutter/material.dart';
import 'package:hamidravanbod/skills/skills_view.dart';
import 'package:hamidravanbod/utils/color_assets.dart';

class OutlinedSkillContanier extends StatelessWidget {
  const OutlinedSkillContanier({
    Key? key,
    required this.index,
    this.rowIndex,
    this.isMobile,
  }) : super(key: key);

  final int index;
  final int? rowIndex;
  final bool? isMobile;

  @override
  Widget build(BuildContext context) {
    final parsedIndex = isMobile ?? false ? index : (index * 2) + rowIndex!;
    final colors = ColorAssets.all;
    return Container(
      width: isMobile ?? false ? double.infinity : null,
      padding: EdgeInsets.all(10),
      decoration: BoxDecoration(
        border: Border.all(
            width: 3, color: colors.elementAt(index % colors.length)),
        borderRadius: BorderRadius.circular(3),
      ),
      child: Text(
        skills.elementAt(parsedIndex),
        style: Theme.of(context).textTheme.headline4,
      ),
    );
  }
}
