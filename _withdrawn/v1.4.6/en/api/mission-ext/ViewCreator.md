---
title: "ViewCreator"
description: "ViewCreator: a public class in TaleWorlds.MountAndBlade.View; 24 exposed members (24 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ViewCreator

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class ViewCreator`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ViewCreator lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs. It is a public class; the inheritance chain is ViewCreator. It exposes 24 public/protected members: 24 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ViewCreator lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View`, inheritance chain ViewCreator. The surface is method-led (methods 24/24, properties 0/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateCreditsScreen` | `public static ScreenBase CreateCreditsScreen()` | method |
| `CreateOptionsScreen` | `public static ScreenBase CreateOptionsScreen(bool fromMainMenu)` | method |
| `CreateMBFaceGeneratorScreen` | `public static ScreenBase CreateMBFaceGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer = false, IFaceGeneratorCustomFilter filter = null)` | method |
| `CreateMissionAgentStatusUIHandler` | `public static MissionView CreateMissionAgentStatusUIHandler(Mission mission = null)` | method |
| `CreateMissionMainAgentEquipDropView` | `public static MissionView CreateMissionMainAgentEquipDropView(Mission mission)` | method |
| `CreateMissionSiegeEngineMarkerView` | `public static MissionView CreateMissionSiegeEngineMarkerView(Mission mission)` | method |
| `CreateMissionMainAgentEquipmentController` | `public static MissionView CreateMissionMainAgentEquipmentController(Mission mission = null)` | method |
| `CreateMissionMainAgentCheerBarkControllerView` | `public static MissionView CreateMissionMainAgentCheerBarkControllerView(Mission mission = null)` | method |
| `CreateMissionAgentLockVisualizerView` | `public static MissionView CreateMissionAgentLockVisualizerView(Mission mission = null)` | method |
| `CreateOptionsUIHandler` | `public static MissionView CreateOptionsUIHandler()` | method |
| `CreateSingleplayerMissionKillNotificationUIHandler` | `public static MissionView CreateSingleplayerMissionKillNotificationUIHandler()` | method |
| `CreateMissionAgentLabelUIHandler` | `public static MissionView CreateMissionAgentLabelUIHandler(Mission mission)` | method |
| `CreateMissionOrderUIHandler` | `public static MissionView CreateMissionOrderUIHandler(Mission mission = null)` | method |
| `CreateMissionOrderOfBattleUIHandler` | `public static MissionView CreateMissionOrderOfBattleUIHandler(Mission mission, OrderOfBattleVM dataSource)` | method |
| `CreateMissionSpectatorControlView` | `public static MissionView CreateMissionSpectatorControlView(Mission mission = null)` | method |
| `CreateMissionBattleScoreUIHandler` | `public static MissionView CreateMissionBattleScoreUIHandler(Mission mission, ScoreboardBaseVM dataSource)` | method |
| `CreateMissionBoundaryCrossingView` | `public static MissionView CreateMissionBoundaryCrossingView()` | method |
| `CreateMissionLeaveView` | `public static MissionView CreateMissionLeaveView()` | method |
| `CreatePhotoModeView` | `public static MissionView CreatePhotoModeView()` | method |
| `CreateMissionSingleplayerEscapeMenu` | `public static MissionView CreateMissionSingleplayerEscapeMenu(bool isIronmanMode)` | method |
| `CreateOrderTroopPlacerView` | `public static MissionView CreateOrderTroopPlacerView(OrderController orderController)` | method |
| `CreateMissionFormationMarkerUIHandler` | `public static MissionView CreateMissionFormationMarkerUIHandler(Mission mission = null)` | method |
| `CreateMissionHintView` | `public static MissionView CreateMissionHintView(Mission mission = null)` | method |
| `CreateMissionObjectiveView` | `public static MissionView CreateMissionObjectiveView(Mission mission = null)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentVisuals](../AgentVisuals/)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator/)
- [same namespace BannerVisual](../BannerVisual/)
- [same namespace BannerVisualCreator](../BannerVisualCreator/)
