---
title: "SiegeDeploymentHandler"
description: "SiegeDeploymentHandler: a public class in TaleWorlds.MountAndBlade, inheriting BattleDeploymentHandler; 18 exposed members (15 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs."
---
# SiegeDeploymentHandler

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Handlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeDeploymentHandler : BattleDeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs`

## Overview

SiegeDeploymentHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs. It is a public class, implementing/inheriting BattleDeploymentHandler; the inheritance chain is SiegeDeploymentHandler → BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 18 public/protected members: 15 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeDeploymentHandler is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Missions.Handlers) the module directory; inheritance chain SiegeDeploymentHandler → BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 15/18, properties 2/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<DeploymentPoint>PlayerDeploymentPoints` | property |
| `IEnumerable` | `public IEnumerable<DeploymentPoint>AllDeploymentPoints` | property |
| `SiegeDeploymentHandler` | `public SiegeDeploymentHandler(bool isPlayerAttacker) : base(isPlayerAttacker)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `FinishDeployment` | `public override void FinishDeployment()` | method |
| `DeployAllSiegeWeaponsOfPlayer` | `public void DeployAllSiegeWeaponsOfPlayer()` | method |
| `GetMaxDeployableWeaponCountOfPlayer` | `public int GetMaxDeployableWeaponCountOfPlayer(Type weapon)` | method |
| `DeployAllSiegeWeaponsOfAi` | `public void DeployAllSiegeWeaponsOfAi()` | method |
| `RemoveDeploymentPoints` | `public void RemoveDeploymentPoints(BattleSideEnum side)` | method |
| `RemoveUnavailableDeploymentPoints` | `public void RemoveUnavailableDeploymentPoints(BattleSideEnum side)` | method |
| `UnHideDeploymentPoints` | `public void UnHideDeploymentPoints(BattleSideEnum side)` | method |
| `GetDeployableWeaponCountOfPlayer` | `public int GetDeployableWeaponCountOfPlayer(Type weapon)` | method |
| `AutoDeployTeamUsingTeamAI` | `public void AutoDeployTeamUsingTeamAI(Team team, bool autoAssignDetachments = true)` | method |
| `AutoAssignDetachmentsForDeployment` | `public void AutoAssignDetachmentsForDeployment(Team team)` | method |
| `Mission_IsFormationUnitPositionAvailable_AdditionalCondition` | `protected bool Mission_IsFormationUnitPositionAvailable_AdditionalCondition(WorldPosition position, Team team)` | method |
| `GetEstimatedAverageDefenderPosition` | `public Vec2 GetEstimatedAverageDefenderPosition()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BattleDeploymentHandler](../BattleDeploymentHandler)
- [same namespace BattleDeploymentHandler](../BattleDeploymentHandler)
