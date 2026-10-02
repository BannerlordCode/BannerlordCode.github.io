---
title: "BattleSimulation"
description: "BattleSimulation: a public class in TaleWorlds.CampaignSystem, inheriting IBattleObserver; 19 exposed members (12 methods, 5 properties, 1 fields). Source: TaleWorlds.CampaignSystem/BattleSimulation.cs."
---
# BattleSimulation

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BattleSimulation : IBattleObserver`
**File:** `TaleWorlds.CampaignSystem/BattleSimulation.cs`

## Overview

BattleSimulation lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/BattleSimulation.cs. It is a public class, implementing/inheriting IBattleObserver; the inheritance chain is BattleSimulation → IBattleObserver. It exposes 19 public/protected members: 12 methods, 5 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSimulation is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain BattleSimulation → IBattleObserver. The surface is method-led (methods 12/19, properties 5/19), so it mostly exposes operations. IBattleObserver on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/BattleSimulation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSimulationFinished` | `public bool IsSimulationFinished` | property |
| `MapEvent` | `public MapEvent MapEvent` | property |
| `IsPlayerRetreated` | `public bool IsPlayerRetreated` | property |
| `BattleObserver` | `public IBattleObserver BattleObserver` | property |
| `List` | `public List<List<BattleResultPartyData>>Teams` | property |
| `BattleSimulation` | `public BattleSimulation(FlattenedTroopRoster selectedTroopsForPlayerSide, FlattenedTroopRoster selectedTroopsForOtherSide)` | constructor |
| `Play` | `public void Play()` | method |
| `FastForward` | `public void FastForward()` | method |
| `Skip` | `public void Skip()` | method |
| `Pause` | `public void Pause()` | method |
| `OnFinished` | `public void OnFinished()` | method |
| `OnPlayerRetreat` | `public void OnPlayerRetreat()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `ResetSimulation` | `public void ResetSimulation()` | method |
| `TroopNumberChanged` | `public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0)` | method |
| `HeroSkillIncreased` | `public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill)` | method |
| `BattleResultsReady` | `public void BattleResultsReady()` | method |
| `TroopSideChanged` | `public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)` | method |
| `FlattenedTroopRoster[]SelectedTroops` | `public readonly FlattenedTroopRoster[]SelectedTroops` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
