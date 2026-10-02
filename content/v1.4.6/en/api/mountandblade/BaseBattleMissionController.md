---
title: "BaseBattleMissionController"
description: "BaseBattleMissionController: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 17 exposed members (16 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs."
---
# BaseBattleMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs`

## Overview

BaseBattleMissionController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs. It is a public class (abstract), implementing/inheriting MissionLogic; the inheritance chain is BaseBattleMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 17 public/protected members: 16 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BaseBattleMissionController is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Source.Missions) the module directory; inheritance chain BaseBattleMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 16/17, properties 0/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BaseBattleMissionController` | `protected BaseBattleMissionController(bool isPlayerAttacker)` | constructor |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `SetupTeam` | `protected virtual void SetupTeam(Team team)` | method |
| `CreateDefenderTroops` | `protected abstract void CreateDefenderTroops();` | method |
| `CreateAttackerTroops` | `protected abstract void CreateAttackerTroops();` | method |
| `GetTeamAI` | `public virtual TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `IsPlayerDead` | `protected bool IsPlayerDead()` | method |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `IncrementDeploymedTroops` | `protected void IncrementDeploymedTroops(BattleSideEnum side)` | method |
| `CreatePlayer` | `protected virtual void CreatePlayer()` | method |
| `BecomeEnemy` | `protected void BecomeEnemy()` | method |
| `BecomePlayer` | `protected void BecomePlayer()` | method |
| `SwapTeams` | `protected void SwapTeams()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace BattleSpawnLogic](../BattleSpawnLogic)
- [same namespace CaravanBattleMissionHandler](../CaravanBattleMissionHandler)
- [same namespace DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController)
- [same namespace DebugObjectDestroyerMissionController](../DebugObjectDestroyerMissionController)
