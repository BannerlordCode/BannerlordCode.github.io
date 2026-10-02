---
title: "SPScoreboardSkillItemVM"
description: "SPScoreboardSkillItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSkillItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPScoreboardSkillItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardSkillItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSkillItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPScoreboardSkillItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSkillItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardSkillItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardSkillItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`, inheritance chain SPScoreboardSkillItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSkillItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SPScoreboardSkillItemVM` | `public SPScoreboardSkillItemVM(SkillObject skill, int initialValue)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateSkill` | `public void UpdateSkill(int newValue)` | method |
| `IsValid` | `public bool IsValid()` | method |
| `Level` | `public string Level` | property |
| `SkillId` | `public string SkillId` | property |
| `Description` | `public string Description` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM/)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM/)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys/)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM/)
