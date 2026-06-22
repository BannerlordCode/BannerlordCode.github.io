<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsTeamDeathmatch`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsTeamDeathmatch

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PlayerStatsTeamDeathmatch` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; set; }` |
| `AverageScore` | `public float AverageScore { get; }` |


## Key Methods

### FillWith

```csharp
public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int score)
```

### FillWithNewPlayer

```csharp
public void FillWithNewPlayer(PlayerId playerId)
```

### Update

```csharp
public void Update(BattlePlayerStatsTeamDeathmatch stats, bool won)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)