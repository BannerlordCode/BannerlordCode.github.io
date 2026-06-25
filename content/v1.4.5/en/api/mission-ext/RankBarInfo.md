---
title: "RankBarInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RankBarInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RankBarInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Ranked
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RankBarInfo`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Ranked/RankBarInfo.cs`

## Overview

`RankBarInfo` lives in `TaleWorlds.MountAndBlade.Diamond.Ranked` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Ranked` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RankId` | `public string RankId { get; set; }` |
| `PreviousRankId` | `public string PreviousRankId { get; set; }` |
| `NextRankId` | `public string NextRankId { get; set; }` |
| `ProgressPercentage` | `public float ProgressPercentage { get; set; }` |
| `Rating` | `public int Rating { get; set; }` |
| `RatingToNextRank` | `public int RatingToNextRank { get; set; }` |
| `IsEvaluating` | `public bool IsEvaluating { get; set; }` |
| `EvaluationMatchesPlayed` | `public int EvaluationMatchesPlayed { get; set; }` |
| `TotalEvaluationMatchesRequired` | `public int TotalEvaluationMatchesRequired { get; set; }` |

## Key Methods

### CreateBarInfo
`public static RankBarInfo CreateBarInfo(string rankId, string previousRankId, string nextRankId, float progressPercentage, int rating, int ratingToNextRank)`

**Purpose:** Creates a new `bar info` instance or object.

### CreateUnrankedInfo
`public static RankBarInfo CreateUnrankedInfo(int matchesPlayed, int totalMatchesRequired)`

**Purpose:** Creates a new `unranked info` instance or object.

## Usage Example

```csharp
RankBarInfo.CreateBarInfo("example", "example", "example", 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)