---
title: "CustomBattleScoreboardVM"
description: "CustomBattleScoreboardVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ScoreboardBaseVM, IBattleObserver; 12 exposed members (11 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs."
---
# CustomBattleScoreboardVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CustomBattleScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs`

## Overview

CustomBattleScoreboardVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs. It is a public class, implementing/inheriting ScoreboardBaseVM, IBattleObserver; the inheritance chain is CustomBattleScoreboardVM → ScoreboardBaseVM → ViewModel. It exposes 12 public/protected members: 11 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleScoreboardVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard) the module directory; inheritance chain CustomBattleScoreboardVM → ScoreboardBaseVM → ViewModel. The surface is method-led (methods 11/12, properties 0/12), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleScoreboardVM` | `public CustomBattleScoreboardVM(BattleScoreContext scoreboardContext) : base(scoreboardContext)` | constructor |
| `Initialize` | `public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool>onToggle)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `ExecuteFastForwardAction` | `public override void ExecuteFastForwardAction()` | method |
| `ExecuteQuitAction` | `public override void ExecuteQuitAction()` | method |
| `OnBattleOver` | `public void OnBattleOver()` | method |
| `OnExitBattle` | `public void OnExitBattle()` | method |
| `TroopNumberChanged` | `public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)` | method |
| `HeroSkillIncreased` | `public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)` | method |
| `BattleResultsReady` | `public void BattleResultsReady()` | method |
| `TroopSideChanged` | `public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ScoreboardBaseVM](../ScoreboardBaseVM)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM)
- [same namespace SPScoreboardShipVM](../SPScoreboardShipVM)
