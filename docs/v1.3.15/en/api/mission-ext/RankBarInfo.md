<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RankBarInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RankBarInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Ranked
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `RankBarInfo` is a class in the `TaleWorlds.MountAndBlade.Diamond.Ranked` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static RankBarInfo CreateBarInfo(string rankId, string previousRankId, string nextRankId, float progressPercentage, int rating, int ratingToNextRank)
```

### CreateUnrankedInfo

```csharp
public static RankBarInfo CreateUnrankedInfo(int matchesPlayed, int totalMatchesRequired)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)