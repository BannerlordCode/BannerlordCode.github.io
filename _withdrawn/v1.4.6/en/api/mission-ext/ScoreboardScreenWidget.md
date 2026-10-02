---
title: "ScoreboardScreenWidget"
description: "ScoreboardScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard, inheriting Widget; 24 exposed members (1 methods, 22 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScoreboardScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScoreboardScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ScoreboardScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ScoreboardScreenWidget → Widget → PropertyOwnerObject. It exposes 24 public/protected members: 1 methods, 22 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScoreboardScreenWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`, inheritance chain ScoreboardScreenWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 22/24, methods 1/24), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardScreenWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ScoreboardScreenWidget` | `public ScoreboardScreenWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ShowScoreboard` | `public bool ShowScoreboard` | property |
| `IsOver` | `public bool IsOver` | property |
| `BattleResult` | `public int BattleResult` | property |
| `IsMainCharacterDead` | `public bool IsMainCharacterDead` | property |
| `IsSimulation` | `public bool IsSimulation` | property |
| `IsMouseEnabled` | `public bool IsMouseEnabled` | property |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel` | property |
| `ScrollGradient` | `public Widget ScrollGradient` | property |
| `ControlButtonsPanel` | `public Widget ControlButtonsPanel` | property |
| `InputKeysPanel` | `public ListPanel InputKeysPanel` | property |
| `ShowMouseIconWidget` | `public Widget ShowMouseIconWidget` | property |
| `FastForwardWidget` | `public Widget FastForwardWidget` | property |
| `QuitButton` | `public ButtonWidget QuitButton` | property |
| `ShowScoreboardToggle` | `public ButtonWidget ShowScoreboardToggle` | property |
| `BattleRewardsWidget` | `public ScoreboardBattleRewardsWidget BattleRewardsWidget` | property |
| `FlagsSuccess` | `public DelayedStateChanger FlagsSuccess` | property |
| `FlagsRetreat` | `public DelayedStateChanger FlagsRetreat` | property |
| `FlagsDefeat` | `public DelayedStateChanger FlagsDefeat` | property |
| `ShieldStateChanger` | `public DelayedStateChanger ShieldStateChanger` | property |
| `ShipsStateChanger` | `public DelayedStateChanger ShipsStateChanger` | property |
| `TitleStateChanger` | `public DelayedStateChanger TitleStateChanger` | property |
| `TitleBackgroundStateChanger` | `public DelayedStateChanger TitleBackgroundStateChanger` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ScoreboardBattleResultTitleBackgroundWidget](../ScoreboardBattleResultTitleBackgroundWidget/)
- [same namespace ScoreboardBattleRewardsWidget](../ScoreboardBattleRewardsWidget/)
- [same namespace ScoreboardGainedSkillsListPanel](../ScoreboardGainedSkillsListPanel/)
- [same namespace ScoreboardShipsNavigatableGridWidget](../ScoreboardShipsNavigatableGridWidget/)
