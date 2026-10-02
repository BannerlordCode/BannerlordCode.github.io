---
title: "BattleEndLogic"
description: "BattleEndLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic, IBattleEndLogic; 14 exposed members (9 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BattleEndLogic.cs."
---
# BattleEndLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleEndLogic : MissionLogic, IBattleEndLogic`
**File:** `TaleWorlds.MountAndBlade/BattleEndLogic.cs`

## Overview

BattleEndLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BattleEndLogic.cs. It is a public class, implementing/inheriting MissionLogic, IBattleEndLogic; the inheritance chain is BattleEndLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 14 public/protected members: 9 methods, 4 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleEndLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BattleEndLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 9/14, properties 4/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BattleEndLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerVictory` | `public bool PlayerVictory` | property |
| `EnemyVictory` | `public bool EnemyVictory` | property |
| `IsEnemySideRetreating` | `public bool IsEnemySideRetreating` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `ChangeCanCheckForEndCondition` | `public void ChangeCanCheckForEndCondition(bool canCheckForEndCondition)` | method |
| `TryExit` | `public BattleEndLogic.ExitResult TryExit()` | method |
| `EnableEnemyDefenderPullBack` | `public void EnableEnemyDefenderPullBack(int neededTroopNumber)` | method |
| `SetNotificationDisabled` | `public void SetNotificationDisabled(bool value)` | method |
| `ExitResult` | `public enum ExitResult` | property |
| `ExitResult` | `public enum ExitResult` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [base / interface IBattleEndLogic](../IBattleEndLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
