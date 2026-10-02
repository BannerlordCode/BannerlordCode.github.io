---
title: "ScoreboardBattleRewardsWidget"
description: "ScoreboardBattleRewardsWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard, inheriting Widget; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleRewardsWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScoreboardBattleRewardsWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScoreboardBattleRewardsWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleRewardsWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ScoreboardBattleRewardsWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleRewardsWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ScoreboardBattleRewardsWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScoreboardBattleRewardsWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`, inheritance chain ScoreboardBattleRewardsWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleRewardsWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ScoreboardBattleRewardsWidget` | `public ScoreboardBattleRewardsWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `StartAnimation` | `public void StartAnimation()` | method |
| `Reset` | `public void Reset()` | method |
| `AnimationDelay` | `public float AnimationDelay` | property |
| `AnimationInterval` | `public float AnimationInterval` | property |
| `ItemContainer` | `public Widget ItemContainer` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ScoreboardBattleResultTitleBackgroundWidget](../ScoreboardBattleResultTitleBackgroundWidget/)
- [same namespace ScoreboardGainedSkillsListPanel](../ScoreboardGainedSkillsListPanel/)
- [same namespace ScoreboardScreenWidget](../ScoreboardScreenWidget/)
- [same namespace ScoreboardShipsNavigatableGridWidget](../ScoreboardShipsNavigatableGridWidget/)
