---
title: "MissionGauntletSingleplayerEscapeMenu"
description: "MissionGauntletSingleplayerEscapeMenu: a public class in TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer, inheriting MissionGauntletEscapeMenuBase; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletSingleplayerEscapeMenu

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletSingleplayerEscapeMenu : MissionGauntletEscapeMenuBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionGauntletSingleplayerEscapeMenu lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs. It is a public class, implementing/inheriting MissionGauntletEscapeMenuBase; the inheritance chain is MissionGauntletSingleplayerEscapeMenu → MissionGauntletEscapeMenuBase → MissionEscapeMenuView → MissionView → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletSingleplayerEscapeMenu lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`, inheritance chain MissionGauntletSingleplayerEscapeMenu → MissionGauntletEscapeMenuBase → MissionEscapeMenuView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionGauntletSingleplayerEscapeMenu` | `public MissionGauntletSingleplayerEscapeMenu(bool isIronmanMode) : base(" ")` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnFocusChangeOnGameWindow` | `public override void OnFocusChangeOnGameWindow(bool focusGained)` | method |
| `OnSceneRenderingStarted` | `public override void OnSceneRenderingStarted()` | method |
| `List` | `protected override List<EscapeMenuItemVM>GetEscapeMenuItems()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionGauntletEscapeMenuBase](../MissionGauntletEscapeMenuBase/)
- [same namespace MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView/)
- [same namespace MissionGauntletBattleScore](../MissionGauntletBattleScore/)
- [same namespace MissionGauntletFormationMarker](../MissionGauntletFormationMarker/)
- [same namespace MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler/)
