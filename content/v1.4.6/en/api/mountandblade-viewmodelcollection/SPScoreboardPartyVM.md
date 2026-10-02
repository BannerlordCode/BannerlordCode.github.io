---
title: "SPScoreboardPartyVM"
description: "SPScoreboardPartyVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 11 exposed members (5 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs."
---
# SPScoreboardPartyVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardPartyVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs`

## Overview

SPScoreboardPartyVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardPartyVM → ViewModel. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardPartyVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard) the module directory; inheritance chain SPScoreboardPartyVM → ViewModel. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant` | property |
| `CurrentPower` | `public float CurrentPower` | property |
| `InitialPower` | `public float InitialPower` | property |
| `SPScoreboardPartyVM` | `public SPScoreboardPartyVM(IBattleCombatant battleCombatant)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateScores` | `public void UpdateScores(BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)` | method |
| `UpdateHeroSkills` | `public void UpdateHeroSkills(BasicCharacterObject heroCharacter, SkillObject upgradedSkill)` | method |
| `GetUnitAddIfNotExists` | `public SPScoreboardUnitVM GetUnitAddIfNotExists(BasicCharacterObject character)` | method |
| `GetUnit` | `public SPScoreboardUnitVM GetUnit(BasicCharacterObject character)` | method |
| `Score` | `public SPScoreboardStatsVM Score` | property |
| `MBBindingList` | `public MBBindingList<SPScoreboardUnitVM>Members` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys)
- [same namespace SPScoreboardShipVM](../SPScoreboardShipVM)
