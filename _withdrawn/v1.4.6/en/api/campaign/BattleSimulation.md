---
title: "BattleSimulation"
description: "BattleSimulation: a public class in TaleWorlds.CampaignSystem, inheriting IBattleObserver; 19 exposed members (12 methods, 5 properties, 1 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/BattleSimulation.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleSimulation

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BattleSimulation : IBattleObserver`
**File:** `TaleWorlds.CampaignSystem/BattleSimulation.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

BattleSimulation lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/BattleSimulation.cs. It is a public class, implementing/inheriting IBattleObserver; the inheritance chain is BattleSimulation → IBattleObserver. It exposes 19 public/protected members: 12 methods, 5 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSimulation lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain BattleSimulation → IBattleObserver. The surface is method-led (methods 12/19, properties 5/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/BattleSimulation.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IBattleObserver](../../core-extra/IBattleObserver/)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
