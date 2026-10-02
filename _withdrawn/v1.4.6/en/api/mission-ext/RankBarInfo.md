---
title: "RankBarInfo"
description: "RankBarInfo: a public class in TaleWorlds.MountAndBlade.Diamond.Ranked; 13 exposed members (2 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RankBarInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Ranked`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class RankBarInfo`
**File:** `TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

RankBarInfo lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs. It is a public class; the inheritance chain is RankBarInfo. It exposes 13 public/protected members: 2 methods, 9 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RankBarInfo lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Ranked`, inheritance chain RankBarInfo. The surface is property-led (properties 9/13, methods 2/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RankId` | `public string RankId` | property |
| `PreviousRankId` | `public string PreviousRankId` | property |
| `NextRankId` | `public string NextRankId` | property |
| `ProgressPercentage` | `public float ProgressPercentage` | property |
| `Rating` | `public int Rating` | property |
| `RatingToNextRank` | `public int RatingToNextRank` | property |
| `IsEvaluating` | `public bool IsEvaluating` | property |
| `EvaluationMatchesPlayed` | `public int EvaluationMatchesPlayed` | property |
| `TotalEvaluationMatchesRequired` | `public int TotalEvaluationMatchesRequired` | property |
| `RankBarInfo` | `public RankBarInfo()` | constructor |
| `RankBarInfo` | `public RankBarInfo(string rankId, string previousRankId, string nextRankId, float progressPercentage, int rating, int ratingToNextRank, bool isEvaluating, int evaluationMatchesPlayed, int totalEvaluationMatchesRequired)` | constructor |
| `CreateBarInfo` | `public static RankBarInfo CreateBarInfo(string rankId, string previousRankId, string nextRankId, float progressPercentage, int rating, int ratingToNextRank)` | method |
| `CreateUnrankedInfo` | `public static RankBarInfo CreateUnrankedInfo(int matchesPlayed, int totalMatchesRequired)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameTypeRankInfo](../GameTypeRankInfo/)
- [same namespace Ranks](../Ranks/)
