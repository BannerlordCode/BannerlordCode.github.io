---
title: "TeamQuerySystem"
description: "TeamQuerySystem: a public class in TaleWorlds.MountAndBlade; 41 exposed members (6 methods, 34 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TeamQuerySystem.cs."
---
# TeamQuerySystem

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamQuerySystem`
**File:** `TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

## Overview

TeamQuerySystem lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamQuerySystem.cs. It is a public class; the inheritance chain is TeamQuerySystem. It exposes 41 public/protected members: 6 methods, 34 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamQuerySystem is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TeamQuerySystem. The surface is property-led (properties 34/41, methods 6/41), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamQuerySystem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MemberCount` | `public int MemberCount` | property |
| `MedianPosition` | `public WorldPosition MedianPosition` | property |
| `AveragePosition` | `public Vec2 AveragePosition` | property |
| `AverageEnemyPosition` | `public Vec2 AverageEnemyPosition` | property |
| `MedianTargetFormation` | `public FormationQuerySystem MedianTargetFormation` | property |
| `MedianTargetFormationPosition` | `public WorldPosition MedianTargetFormationPosition` | property |
| `LeftFlankEdgePosition` | `public WorldPosition LeftFlankEdgePosition` | property |
| `RightFlankEdgePosition` | `public WorldPosition RightFlankEdgePosition` | property |
| `InfantryRatio` | `public float InfantryRatio` | property |
| `RangedRatio` | `public float RangedRatio` | property |
| `CavalryRatio` | `public float CavalryRatio` | property |
| `RangedCavalryRatio` | `public float RangedCavalryRatio` | property |
| `AllyUnitCount` | `public int AllyUnitCount` | property |
| `EnemyUnitCount` | `public int EnemyUnitCount` | property |
| `AllyInfantryRatio` | `public float AllyInfantryRatio` | property |
| `AllyRangedRatio` | `public float AllyRangedRatio` | property |
| `AllyCavalryRatio` | `public float AllyCavalryRatio` | property |
| `AllyRangedCavalryRatio` | `public float AllyRangedCavalryRatio` | property |
| `EnemyInfantryRatio` | `public float EnemyInfantryRatio` | property |
| `EnemyRangedRatio` | `public float EnemyRangedRatio` | property |
| `EnemyCavalryRatio` | `public float EnemyCavalryRatio` | property |
| `EnemyRangedCavalryRatio` | `public float EnemyRangedCavalryRatio` | property |
| `RemainingPowerRatio` | `public float RemainingPowerRatio` | property |
| `TeamPower` | `public float TeamPower` | property |
| `TotalPowerRatio` | `public float TotalPowerRatio` | property |
| `InsideWallsRatio` | `public float InsideWallsRatio` | property |
| `BattlePowerLogic` | `public IBattlePowerCalculationLogic BattlePowerLogic` | property |
| `CasualtyHandler` | `public CasualtyHandler CasualtyHandler` | property |
| `MaxUnderRangedAttackRatio` | `public float MaxUnderRangedAttackRatio` | property |
| `DeathCount` | `public int DeathCount` | property |
| `DeathByRangedCount` | `public int DeathByRangedCount` | property |
| `AllyRangedUnitCount` | `public int AllyRangedUnitCount` | property |
| `AllCavalryUnitCount` | `public int AllCavalryUnitCount` | property |
| `EnemyRangedUnitCount` | `public int EnemyRangedUnitCount` | property |
| `Expire` | `public void Expire()` | method |
| `ExpireAfterUnitAddRemove` | `public void ExpireAfterUnitAddRemove()` | method |
| `TeamQuerySystem` | `public TeamQuerySystem(Team team)` | constructor |
| `RegisterDeath` | `public void RegisterDeath()` | method |
| `RegisterDeathByRanged` | `public void RegisterDeathByRanged()` | method |
| `GetLocalAllyPower` | `public float GetLocalAllyPower(Vec2 target)` | method |
| `GetLocalEnemyPower` | `public float GetLocalEnemyPower(Vec2 target)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
