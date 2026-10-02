---
title: "SPScoreboardVM"
description: "SPScoreboardVM: a public class in SandBox.ViewModelCollection, inheriting ScoreboardBaseVM, IBattleObserver; 19 exposed members (17 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/SPScoreboardVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPScoreboardVM

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SPScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**File:** `SandBox.ViewModelCollection/SPScoreboardVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SPScoreboardVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SPScoreboardVM.cs. It is a public class, implementing/inheriting ScoreboardBaseVM, IBattleObserver; the inheritance chain is SPScoreboardVM → ScoreboardBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 17 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection`, inheritance chain SPScoreboardVM → ScoreboardBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 17/19, properties 1/19), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SPScoreboardVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateSimulation` | `public static SPScoreboardVM CreateSimulation(BattleSimulation simulation)` | method |
| `CreateMission` | `public static SPScoreboardVM CreateMission(Mission mission)` | method |
| `CreateCustom` | `public static SPScoreboardVM CreateCustom(BattleScoreContext battleScoreContext, BattleSimulation simulation = null)` | method |
| `SPScoreboardVM` | `public SPScoreboardVM(BattleScoreContext scoreboardContext, BattleSimulation simulation) : base(scoreboardContext)` | constructor |
| `UpdateQuitText` | `protected override void UpdateQuitText()` | method |
| `Initialize` | `public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool>onToggle)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `ExecutePlayAction` | `public override void ExecutePlayAction()` | method |
| `ExecuteFastForwardAction` | `public override void ExecuteFastForwardAction()` | method |
| `ExecutePauseSimulationAction` | `public override void ExecutePauseSimulationAction()` | method |
| `ExecuteEndSimulationAction` | `public override void ExecuteEndSimulationAction()` | method |
| `ExecuteQuitAction` | `public override void ExecuteQuitAction()` | method |
| `OnBattleOver` | `public void OnBattleOver()` | method |
| `OnExitBattle` | `public void OnExitBattle()` | method |
| `TroopNumberChanged` | `public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)` | method |
| `HeroSkillIncreased` | `public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)` | method |
| `BattleResultsReady` | `public void BattleResultsReady()` | method |
| `TroopSideChanged` | `public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)` | method |
| `MBBindingList` | `public override MBBindingList<BattleResultVM>BattleResults` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScoreboardBaseVM](../../viewmodel/ScoreboardBaseVM/)
- [base / interface IBattleObserver](../../core-extra/IBattleObserver/)
- [same namespace PerkObjectComparer](../PerkObjectComparer/)
- [same namespace SandBoxUIHelper](../SandBoxUIHelper/)
- [same namespace SPOrderOfBattleVM](../SPOrderOfBattleVM/)
- [same namespace TournamentRewardVM](../TournamentRewardVM/)
