---
title: "MissionGauntletConversationView"
description: "MissionGauntletConversationView: a public class in SandBox.GauntletUI, inheriting MissionView, IConversationStateHandler; 7 exposed members (5 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs."
---
# MissionGauntletConversationView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletConversationView : MissionView, IConversationStateHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs`

## Overview

MissionGauntletConversationView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs. It is a public class, implementing/inheriting MissionView, IConversationStateHandler; the inheritance chain is MissionGauntletConversationView → MissionView. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletConversationView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Missions) the module directory; inheritance chain MissionGauntletConversationView → MissionView. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConversationHandler` | `public MissionConversationLogic ConversationHandler` | property |
| `MissionGauntletConversationView` | `public MissionGauntletConversationView()` | constructor |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionScreenActivate` | `public override void OnMissionScreenActivate()` | method |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView)
