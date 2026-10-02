---
title: "ScoreboardSkillItemHoverToggleWidget"
description: "ScoreboardSkillItemHoverToggleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting HoverToggleWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs."
---
# ScoreboardSkillItemHoverToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScoreboardSkillItemHoverToggleWidget : HoverToggleWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs`

## Overview

ScoreboardSkillItemHoverToggleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs. It is a public class, implementing/inheriting HoverToggleWidget; the inheritance chain is ScoreboardSkillItemHoverToggleWidget → HoverToggleWidget → Widget. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScoreboardSkillItemHoverToggleWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard) the module directory; inheritance chain ScoreboardSkillItemHoverToggleWidget → HoverToggleWidget → Widget. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SkillsShowWidget` | `public ScoreboardGainedSkillsListPanel SkillsShowWidget` | property |
| `GainedSkillsList` | `public ListPanel GainedSkillsList` | property |
| `ScoreboardSkillItemHoverToggleWidget` | `public ScoreboardSkillItemHoverToggleWidget(UIContext context) : base(context)` | constructor |
| `List` | `public List<Widget>GetAllSkillWidgets()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface HoverToggleWidget](../HoverToggleWidget)
- [same namespace ScoreboardBattleResultTitleBackgroundWidget](../ScoreboardBattleResultTitleBackgroundWidget)
- [same namespace ScoreboardBattleRewardsWidget](../ScoreboardBattleRewardsWidget)
- [same namespace ScoreboardGainedSkillsListPanel](../ScoreboardGainedSkillsListPanel)
- [same namespace ScoreboardScreenWidget](../ScoreboardScreenWidget)
