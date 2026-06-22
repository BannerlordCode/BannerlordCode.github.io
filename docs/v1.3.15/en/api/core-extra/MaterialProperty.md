<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MaterialProperty`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MaterialProperty

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `MaterialProperty` is a struct in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Monster` | `public Monster Monster { get; }` |
| `Maneuver` | `public int Maneuver { get; }` |
| `ChargeDamage` | `public int ChargeDamage { get; }` |
| `Speed` | `public int Speed { get; }` |
| `BodyLength` | `public int BodyLength { get; }` |
| `HitPoints` | `public int HitPoints { get; }` |
| `HitPointBonus` | `public int HitPointBonus { get; }` |
| `IsRideable` | `public bool IsRideable { get; }` |
| `IsPackAnimal` | `public bool IsPackAnimal { get; }` |
| `IsMount` | `public bool IsMount { get; }` |
| `IsLiveStock` | `public bool IsLiveStock { get; }` |
| `HorseMaterialNames` | `public MBReadOnlyList<HorseComponent.MaterialProperty> HorseMaterialNames { get; }` |
| `MeatCount` | `public int MeatCount { get; }` |
| `HideCount` | `public int HideCount { get; }` |
| `SkeletonScale` | `public SkeletonScale SkeletonScale { get; }` |
| `Name` | `public string Name { get; }` |


## Key Methods

### GetCopy

```csharp
public override ItemComponent GetCopy()
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)