<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePeer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattlePeer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BattlePeer` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Name` | `public string Name { get; }` |
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `TeamNo` | `public int TeamNo { get; }` |
| `BattleJoinType` | `public BattleJoinType BattleJoinType { get; }` |
| `Quit` | `public bool Quit { get; }` |
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `SessionKey` | `public int SessionKey { get; }` |
| `QuitType` | `public BattlePeerQuitType QuitType { get; }` |


## Key Methods

### Rejoin

```csharp
public void Rejoin(int teamNo)
```

### InitializeSession

```csharp
public void InitializeSession(int index, int sessionKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)