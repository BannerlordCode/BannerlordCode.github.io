<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsBase

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PlayerStatsBase` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `KillCount` | `public int KillCount { get; set; }` |
| `DeathCount` | `public int DeathCount { get; set; }` |
| `AssistCount` | `public int AssistCount { get; set; }` |
| `WinCount` | `public int WinCount { get; set; }` |
| `LoseCount` | `public int LoseCount { get; set; }` |
| `ForfeitCount` | `public int ForfeitCount { get; set; }` |
| `AverageKillPerDeath` | `public float AverageKillPerDeath { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |


## Key Methods

### FillWith

```csharp
public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount)
```

### Update

```csharp
public virtual void Update(BattlePlayerStatsBase battleStats, bool won)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)