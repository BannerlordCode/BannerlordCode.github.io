---
title: "SPScoreboardSideVM"
description: "SPScoreboardSideVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 20 exposed members (8 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs."
---
# SPScoreboardSideVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardSideVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs`

## Overview

SPScoreboardSideVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardSideVM → ViewModel. It exposes 20 public/protected members: 8 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardSideVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard) the module directory; inheritance chain SPScoreboardSideVM → ViewModel. The surface is property-led (properties 11/20, methods 8/20), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSideVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPScoreboardSideVM` | `public SPScoreboardSideVM(TextObject name, Banner sideFlag, bool isSimulation, bool isPlayerSide)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateScores` | `public void UpdateScores(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)` | method |
| `UpdateHeroSkills` | `public void UpdateHeroSkills(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)` | method |
| `GetPartyAddIfNotExists` | `public SPScoreboardPartyVM GetPartyAddIfNotExists(IBattleCombatant battleCombatant, bool isPlayerParty)` | method |
| `GetParty` | `public SPScoreboardPartyVM GetParty(IBattleCombatant battleCombatant)` | method |
| `RemoveTroop` | `public SPScoreboardStatsVM RemoveTroop(IBattleCombatant battleCombatant, BasicCharacterObject troop)` | method |
| `AddTroop` | `public void AddTroop(IBattleCombatant battleCombatant, BasicCharacterObject currentTroop, SPScoreboardStatsVM scoreToBringOver)` | method |
| `GetShipAddIfNotExists` | `public SPScoreboardShipVM GetShipAddIfNotExists(IShipOrigin ship, string shipType, IBattleCombatant owner, TeamSideEnum teamSideEnum)` | method |
| `CurrentPower` | `public float CurrentPower` | property |
| `InitialPower` | `public float InitialPower` | property |
| `BannerVisual` | `public BannerImageIdentifierVM BannerVisual` | property |
| `BannerVisualSmall` | `public BannerImageIdentifierVM BannerVisualSmall` | property |
| `Score` | `public SPScoreboardStatsVM Score` | property |
| `MBBindingList` | `public MBBindingList<SPScoreboardPartyVM>Parties` | property |
| `MBBindingList` | `public MBBindingList<SPScoreboardShipVM>Ships` | property |
| `SortController` | `public SPScoreboardSortControllerVM SortController` | property |
| `Morale` | `public float Morale` | property |
| `MoraleHint` | `public BasicTooltipViewModel MoraleHint` | property |
| `IsPlayerSide` | `public bool IsPlayerSide` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM)
