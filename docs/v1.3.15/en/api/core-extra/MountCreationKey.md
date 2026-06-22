<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MountCreationKey`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MountCreationKey

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MountCreationKey` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `_leftFrontLegColorIndex` | `public byte _leftFrontLegColorIndex { get; }` |
| `_rightFrontLegColorIndex` | `public byte _rightFrontLegColorIndex { get; }` |
| `_leftBackLegColorIndex` | `public byte _leftBackLegColorIndex { get; }` |
| `_rightBackLegColorIndex` | `public byte _rightBackLegColorIndex { get; }` |
| `MaterialIndex` | `public byte MaterialIndex { get; }` |
| `MeshMultiplierIndex` | `public byte MeshMultiplierIndex { get; }` |


## Key Methods

### FromString

```csharp
public static MountCreationKey FromString(string str)
```

### ToString

```csharp
public override string ToString()
```

### GetRandomMountKeyString

```csharp
public static string GetRandomMountKeyString(ItemObject mountItem, int randomSeed)
```

### GetRandomMountKey

```csharp
public static MountCreationKey GetRandomMountKey(ItemObject mountItem, int randomSeed)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)