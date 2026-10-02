---
title: "MissionCombatantsLogic"
description: "MissionCombatantsLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 11 exposed members (9 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs."
---
# MissionCombatantsLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionCombatantsLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs`

## Overview

MissionCombatantsLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionCombatantsLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 11 public/protected members: 9 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionCombatantsLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionCombatantsLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 9/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | property |
| `MissionCombatantsLogic` | `public MissionCombatantsLogic(IEnumerable<IBattleCombatant>battleCombatants, IBattleCombatant playerBattleCombatant, IBattleCombatant defenderLeaderBattleCombatant, IBattleCombatant attackerLeaderBattleCombatant, Mission.MissionTeamAITypeEnum teamAIType, bool isPlayerSergeant)` | constructor |
| `GetBannerForSide` | `public Banner GetBannerForSide(BattleSideEnum side)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `IEnumerable` | `public IEnumerable<IBattleCombatant>GetAllCombatants()` | method |
| `AddPlayerTeam` | `protected void AddPlayerTeam(BattleSideEnum playerSide)` | method |
| `AddEnemyTeam` | `protected void AddEnemyTeam(BattleSideEnum enemySide)` | method |
| `AddPlayerAllyTeam` | `protected void AddPlayerAllyTeam(BattleSideEnum playerSide, IBattleCombatant allyCombatant)` | method |
| `SupportsAllyTeamOnPlayerSide` | `public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant>playerSideBattleCombatants, IBattleCombatant playerBattleCombatant, bool isPlayerSergeant, bool isNavalLandHybridMission, out IBattleCombatant allyCombatant)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
