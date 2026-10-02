---
title: "ScoreboardGainedSkillsListPanel"
description: "ScoreboardGainedSkillsListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs."
---
# ScoreboardGainedSkillsListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScoreboardGainedSkillsListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs`

## Overview

ScoreboardGainedSkillsListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is ScoreboardGainedSkillsListPanel → ListPanel. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScoreboardGainedSkillsListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard) the module directory; inheritance chain ScoreboardGainedSkillsListPanel → ListPanel. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardGainedSkillsListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScoreboardGainedSkillsListPanel` | `public ScoreboardGainedSkillsListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `SetCurrentUnit` | `public void SetCurrentUnit(ScoreboardSkillItemHoverToggleWidget unit)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ScoreboardBattleResultTitleBackgroundWidget](../ScoreboardBattleResultTitleBackgroundWidget)
- [same namespace ScoreboardBattleRewardsWidget](../ScoreboardBattleRewardsWidget)
- [same namespace ScoreboardScreenWidget](../ScoreboardScreenWidget)
- [same namespace ScoreboardShipsNavigatableGridWidget](../ScoreboardShipsNavigatableGridWidget)
