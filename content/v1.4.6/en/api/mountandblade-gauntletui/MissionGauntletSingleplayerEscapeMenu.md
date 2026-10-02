---
title: "MissionGauntletSingleplayerEscapeMenu"
description: "MissionGauntletSingleplayerEscapeMenu: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MissionGauntletEscapeMenuBase; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs."
---
# MissionGauntletSingleplayerEscapeMenu

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletSingleplayerEscapeMenu : MissionGauntletEscapeMenuBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs`

## Overview

MissionGauntletSingleplayerEscapeMenu lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs. It is a public class, implementing/inheriting MissionGauntletEscapeMenuBase; the inheritance chain is MissionGauntletSingleplayerEscapeMenu → MissionGauntletEscapeMenuBase → MissionEscapeMenuView. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletSingleplayerEscapeMenu is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer) the module directory; inheritance chain MissionGauntletSingleplayerEscapeMenu → MissionGauntletEscapeMenuBase → MissionEscapeMenuView. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. MissionEscapeMenuView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletSingleplayerEscapeMenu` | `public MissionGauntletSingleplayerEscapeMenu(bool isIronmanMode) : base(" ")` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnFocusChangeOnGameWindow` | `public override void OnFocusChangeOnGameWindow(bool focusGained)` | method |
| `OnSceneRenderingStarted` | `public override void OnSceneRenderingStarted()` | method |
| `List` | `protected override List<EscapeMenuItemVM>GetEscapeMenuItems()` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionGauntletEscapeMenuBase](../MissionGauntletEscapeMenuBase)
- [same namespace MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView)
- [same namespace MissionGauntletBattleScore](../MissionGauntletBattleScore)
- [same namespace MissionGauntletFormationMarker](../MissionGauntletFormationMarker)
- [same namespace MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler)
