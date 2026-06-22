<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStatsDuel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsDuel

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PlayerStatsDuel` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DuelsWon` | `public int DuelsWon { get; set; }` |
| `InfantryWins` | `public int InfantryWins { get; set; }` |
| `ArcherWins` | `public int ArcherWins { get; set; }` |
| `CavalryWins` | `public int CavalryWins { get; set; }` |


## Key Methods

### FillWith

```csharp
public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int duelsWon, int infantryWins, int archerWins, int cavalryWins)
```

### FillWithNewPlayer

```csharp
public void FillWithNewPlayer(PlayerId playerId)
```

### Update

```csharp
public void Update(BattlePlayerStatsDuel stats, bool won)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)