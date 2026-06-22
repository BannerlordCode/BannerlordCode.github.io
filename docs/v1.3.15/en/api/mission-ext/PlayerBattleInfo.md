<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerBattleInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerBattleInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PlayerBattleInfo` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `Fled` | `public bool Fled { get; }` |
| `Disconnected` | `public bool Disconnected { get; set; }` |
| `JoinType` | `public BattleJoinType JoinType { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `CurrentState` | `public PlayerBattleInfo.State CurrentState { get; }` |


## Key Methods

### Flee

```csharp
public void Flee()
```

### Disconnect

```csharp
public void Disconnect()
```

### Initialize

```csharp
public void Initialize(int peerIndex)
```

### RejoinBattle

```csharp
public void RejoinBattle(int teamNo)
```

### Clone

```csharp
public PlayerBattleInfo Clone()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)