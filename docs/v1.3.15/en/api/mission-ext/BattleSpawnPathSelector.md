<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleSpawnPathSelector`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleSpawnPathSelector

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BattleSpawnPathSelector` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `InitialPath` | `public Path InitialPath { get; }` |


## Key Methods

### Initialize

```csharp
public void Initialize()
```

### HasPath

```csharp
public bool HasPath(Path path)
```

### GetInitialPathDataOfSide

```csharp
public bool GetInitialPathDataOfSide(BattleSideEnum side, out SpawnPathData pathPathData)
```

### GetReinforcementPathsDataOfSide

```csharp
public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum side)
```

### FindBestInitialPath

```csharp
public static Path FindBestInitialPath(Mission mission, out float pivotRatio, out bool isInverted)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)