---
title: "MissionGauntletCheatView"
description: "MissionGauntletCheatView: a public class in SandBox.GauntletUI, inheriting MissionCheatView; 5 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs."
---
# MissionGauntletCheatView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletCheatView : MissionCheatView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs`

## Overview

MissionGauntletCheatView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs. It is a public class, implementing/inheriting MissionCheatView; the inheritance chain is MissionGauntletCheatView → MissionCheatView. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletCheatView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Missions) the module directory; inheritance chain MissionGauntletCheatView → MissionCheatView. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MissionCheatView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `GetIsCheatsAvailable` | `public override bool GetIsCheatsAvailable()` | method |
| `InitializeScreen` | `public override void InitializeScreen()` | method |
| `FinalizeScreen` | `public override void FinalizeScreen()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView)
