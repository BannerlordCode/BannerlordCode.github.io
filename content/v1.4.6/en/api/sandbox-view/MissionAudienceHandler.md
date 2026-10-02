---
title: "MissionAudienceHandler"
description: "MissionAudienceHandler: a public class in SandBox.View, inheriting MissionView; 7 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/MissionAudienceHandler.cs."
---
# MissionAudienceHandler

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionAudienceHandler : MissionView`
**File:** `SandBox.View/Missions/MissionAudienceHandler.cs`

## Overview

MissionAudienceHandler lives in the SandBox.View module, source file SandBox.View/Missions/MissionAudienceHandler.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionAudienceHandler → MissionView. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAudienceHandler is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions) the module directory; inheritance chain MissionAudienceHandler → MissionView. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionAudienceHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAudienceHandler` | `public MissionAudienceHandler(float density)` | constructor |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnInit` | `public void OnInit()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [same namespace MissionCampaignBattleSpectatorView](../MissionCampaignBattleSpectatorView)
