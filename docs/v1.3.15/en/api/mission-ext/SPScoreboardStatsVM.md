<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardStatsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardStatsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SPScoreboardStatsVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsMainParty` | `public bool IsMainParty { get; set; }` |
| `Kill` | `public int Kill { get; set; }` |
| `Dead` | `public int Dead { get; set; }` |
| `Wounded` | `public int Wounded { get; set; }` |
| `Routed` | `public int Routed { get; set; }` |
| `Remaining` | `public int Remaining { get; set; }` |
| `ReadyToUpgrade` | `public int ReadyToUpgrade { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateScores

```csharp
public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)
```

### IsAnyStatRelevant

```csharp
public bool IsAnyStatRelevant()
```

### GetScoreForOneAliveMember

```csharp
public SPScoreboardStatsVM GetScoreForOneAliveMember()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)