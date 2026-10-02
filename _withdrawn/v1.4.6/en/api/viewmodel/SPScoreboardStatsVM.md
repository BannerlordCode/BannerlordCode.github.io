---
title: "SPScoreboardStatsVM"
description: "SPScoreboardStatsVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard, inheriting ViewModel; 14 exposed members (4 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPScoreboardStatsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardStatsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPScoreboardStatsVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardStatsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 4 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardStatsVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`, inheritance chain SPScoreboardStatsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/14, methods 4/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SPScoreboardStatsVM` | `public SPScoreboardStatsVM(TextObject name)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateScores` | `public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)` | method |
| `IsAnyStatRelevant` | `public bool IsAnyStatRelevant()` | method |
| `GetScoreForOneAliveMember` | `public SPScoreboardStatsVM GetScoreForOneAliveMember()` | method |
| `NameText` | `public string NameText` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `IsMainParty` | `public bool IsMainParty` | property |
| `Kill` | `public int Kill` | property |
| `Dead` | `public int Dead` | property |
| `Wounded` | `public int Wounded` | property |
| `Routed` | `public int Routed` | property |
| `Remaining` | `public int Remaining` | property |
| `ReadyToUpgrade` | `public int ReadyToUpgrade` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM/)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM/)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys/)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM/)
