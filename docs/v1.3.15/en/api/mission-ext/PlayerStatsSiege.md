<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsSiege`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsSiege

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PlayerStatsSiege` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `WallsBreached` | `public int WallsBreached { get; set; }` |
| `SiegeEngineKills` | `public int SiegeEngineKills { get; set; }` |
| `SiegeEnginesDestroyed` | `public int SiegeEnginesDestroyed { get; set; }` |
| `ObjectiveGoldGained` | `public int ObjectiveGoldGained { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `AverageScore` | `public int AverageScore { get; }` |
| `AverageKillCount` | `public int AverageKillCount { get; }` |


## Key Methods

### FillWith

```csharp
public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int wallsBreached, int siegeEngineKills, int siegeEnginesDestroyed, int objectiveGoldGained, int score)
```

### FillWithNewPlayer

```csharp
public void FillWithNewPlayer(PlayerId playerId)
```

### Update

```csharp
public void Update(BattlePlayerStatsSiege stats, bool won)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)