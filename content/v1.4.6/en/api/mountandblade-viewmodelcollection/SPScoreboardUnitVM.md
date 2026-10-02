---
title: "SPScoreboardUnitVM"
description: "SPScoreboardUnitVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 8 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs."
---
# SPScoreboardUnitVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardUnitVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs`

## Overview

SPScoreboardUnitVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardUnitVM → ViewModel. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardUnitVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard) the module directory; inheritance chain SPScoreboardUnitVM → ViewModel. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM)
