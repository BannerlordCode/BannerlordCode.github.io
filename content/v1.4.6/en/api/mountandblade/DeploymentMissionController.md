---
title: "DeploymentMissionController"
description: "DeploymentMissionController: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 16 exposed members (13 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DeploymentMissionController.cs."
---
# DeploymentMissionController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class DeploymentMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentMissionController.cs`

## Overview

DeploymentMissionController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DeploymentMissionController.cs. It is a public class (abstract), implementing/inheriting MissionLogic; the inheritance chain is DeploymentMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 16 public/protected members: 13 methods, 1 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeploymentMissionController is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DeploymentMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 13/16, properties 1/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DeploymentMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TeamSetupOver` | `public bool TeamSetupOver` | property |
| `OnAfterSetupTeams;` | `public event Action OnAfterSetupTeams;` | event |
| `DeploymentMissionController` | `public DeploymentMissionController(bool isPlayerAttacker)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `FinishDeployment` | `public void FinishDeployment()` | method |
| `OnAgentControllerSetToPlayer` | `public override void OnAgentControllerSetToPlayer(Agent agent)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `SetupAgentAIStatesForSide` | `protected void SetupAgentAIStatesForSide(BattleSideEnum battleSide)` | method |
| `OnAfterStart` | `protected abstract void OnAfterStart();` | method |
| `OnSetupTeamsOfSide` | `protected abstract void OnSetupTeamsOfSide(BattleSideEnum side);` | method |
| `OnSetupTeamsFinished` | `protected abstract void OnSetupTeamsFinished();` | method |
| `BeforeDeploymentFinished` | `protected abstract void BeforeDeploymentFinished();` | method |
| `AfterDeploymentFinished` | `protected abstract void AfterDeploymentFinished();` | method |
| `SetupAIOfEnemySide` | `protected virtual void SetupAIOfEnemySide(BattleSideEnum enemySide)` | method |
| `SetupAIOfEnemyTeam` | `protected virtual void SetupAIOfEnemyTeam(Team team)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
