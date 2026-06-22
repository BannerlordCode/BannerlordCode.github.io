<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleResult`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BattleResult` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsCancelled` | `public bool IsCancelled { get; }` |
| `WinnerTeamNo` | `public int WinnerTeamNo { get; }` |
| `IsPremadeGame` | `public bool IsPremadeGame { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |
| `PlayerEntries` | `public Dictionary<string, BattlePlayerEntry> PlayerEntries { get; }` |


## Key Methods

### AddOrUpdatePlayerEntry

```csharp
public void AddOrUpdatePlayerEntry(PlayerId playerId, int teamNo, string gameMode, Guid party, int overriddenInitialPlayTime = -1)
```

### TryGetPlayerEntry

```csharp
public bool TryGetPlayerEntry(PlayerId playerId, out BattlePlayerEntry battlePlayerEntry)
```

### HandlePlayerDisconnect

```csharp
public void HandlePlayerDisconnect(PlayerId playerId)
```

### DebugPrint

```csharp
public void DebugPrint()
```

### SetBattleFinished

```csharp
public void SetBattleFinished(int winnerTeamNo, bool isPremadeGame, PremadeGameType premadeGameType)
```

### SetBattleCancelled

```csharp
public void SetBattleCancelled()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)