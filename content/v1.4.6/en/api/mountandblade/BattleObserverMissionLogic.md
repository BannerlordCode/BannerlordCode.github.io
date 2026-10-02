---
title: "BattleObserverMissionLogic"
description: "BattleObserverMissionLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 8 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs."
---
# BattleObserverMissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

## Overview

BattleObserverMissionLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BattleObserverMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 7 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleObserverMissionLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BattleObserverMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 7/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleObserver` | `public IBattleObserver BattleObserver` | property |
| `SetObserver` | `public void SetObserver(IBattleObserver observer)` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | method |
| `OnMissionResultReady` | `public override void OnMissionResultReady(MissionResult missionResult)` | method |
| `GetDeathToBuiltAgentRatioForSide` | `public float GetDeathToBuiltAgentRatioForSide(BattleSideEnum side)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
