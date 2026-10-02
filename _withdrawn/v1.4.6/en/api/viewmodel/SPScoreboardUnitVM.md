---
title: "SPScoreboardUnitVM"
description: "SPScoreboardUnitVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard, inheriting ViewModel; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPScoreboardUnitVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardUnitVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPScoreboardUnitVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardUnitVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardUnitVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`, inheritance chain SPScoreboardUnitVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SPScoreboardUnitVM` | `public SPScoreboardUnitVM(BasicCharacterObject character)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateScores` | `public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)` | method |
| `UpdateHeroSkills` | `public void UpdateHeroSkills(SkillObject gainedSkill, int currentSkill)` | method |
| `IsGainedAnySkills` | `public bool IsGainedAnySkills` | property |
| `MBBindingList` | `public MBBindingList<SPScoreboardSkillItemVM>GainedSkills` | property |
| `IsHero` | `public bool IsHero` | property |
| `Score` | `public SPScoreboardStatsVM Score` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM/)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM/)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys/)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM/)
