---
title: "SPScoreboardStatsVM"
description: "SPScoreboardStatsVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 14 exposed members (4 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs."
---
# SPScoreboardStatsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardStatsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs`

## Overview

SPScoreboardStatsVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardStatsVM → ViewModel. It exposes 14 public/protected members: 4 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardStatsVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard) the module directory; inheritance chain SPScoreboardStatsVM → ViewModel. The surface is property-led (properties 9/14, methods 4/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM)
