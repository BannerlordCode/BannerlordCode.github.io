<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionResult`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionResult

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MissionResult` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `BattleState` | `public BattleState BattleState { get; }` |
| `BattleResolved` | `public bool BattleResolved { get; }` |
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `PlayerDefeated` | `public bool PlayerDefeated { get; }` |
| `EnemyRetreated` | `public bool EnemyRetreated { get; }` |


## Key Methods

### CreateSuccessful

```csharp
public static MissionResult CreateSuccessful(IMission mission, bool enemyRetreated = false)
```

### CreateDefeated

```csharp
public static MissionResult CreateDefeated(IMission mission)
```

### CreateDefenderPushedBack

```csharp
public static MissionResult CreateDefenderPushedBack()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)