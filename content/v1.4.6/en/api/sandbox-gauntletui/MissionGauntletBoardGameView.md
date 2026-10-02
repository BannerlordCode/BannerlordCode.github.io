---
title: "MissionGauntletBoardGameView"
description: "MissionGauntletBoardGameView: a public class in SandBox.GauntletUI, inheriting MissionView, IBoardGameHandler; 10 exposed members (7 methods, 2 properties, 0 fields). Source: SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs."
---
# MissionGauntletBoardGameView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletBoardGameView : MissionView, IBoardGameHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs`

## Overview

MissionGauntletBoardGameView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs. It is a public class, implementing/inheriting MissionView, IBoardGameHandler; the inheritance chain is MissionGauntletBoardGameView → MissionView. It exposes 10 public/protected members: 7 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletBoardGameView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Missions) the module directory; inheritance chain MissionGauntletBoardGameView → MissionView. The surface is method-led (methods 7/10, properties 2/10), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `_missionBoardGameHandler` | `public MissionBoardGameLogic _missionBoardGameHandler` | property |
| `Camera` | `public Camera Camera` | property |
| `MissionGauntletBoardGameView` | `public MissionGauntletBoardGameView()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenActivate` | `public override void OnMissionScreenActivate()` | method |
| `OnEscape` | `public override bool OnEscape()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView)
- [same namespace MissionGauntletCheatView](../MissionGauntletCheatView)
