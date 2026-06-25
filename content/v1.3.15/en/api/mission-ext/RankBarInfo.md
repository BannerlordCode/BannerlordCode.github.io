---
title: "RankBarInfo"
description: "Auto-generated class reference for RankBarInfo."
---
# RankBarInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Ranked
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RankBarInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs`

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

**Purpose:** Constructs a new bar info entity and returns it to the caller.

```csharp
// Static call; no instance required
RankBarInfo.CreateBarInfo("example", "example", "example", 0, 0, 0);
```

### CreateUnrankedInfo
`public static RankBarInfo CreateUnrankedInfo(int matchesPlayed, int totalMatchesRequired)`

**Purpose:** Constructs a new unranked info entity and returns it to the caller.

```csharp
// Static call; no instance required
RankBarInfo.CreateUnrankedInfo(0, 0);
```

## Usage Example

```csharp
RankBarInfo.CreateBarInfo("example", "example", "example", 0, 0, 0);
```

## See Also

- [Area Index](../)