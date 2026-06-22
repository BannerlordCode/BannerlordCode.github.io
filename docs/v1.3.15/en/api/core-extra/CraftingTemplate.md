<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingTemplate`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingTemplate

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `CraftingTemplate` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `BuildOrders` | `public PieceData BuildOrders { get; }` |
| `WeaponDescriptions` | `public WeaponDescription WeaponDescriptions { get; }` |
| `Pieces` | `public List<CraftingPiece> Pieces { get; }` |
| `ItemType` | `public ItemObject.ItemTypeEnum ItemType { get; }` |
| `ItemModifierGroup` | `public ItemModifierGroup ItemModifierGroup { get; }` |
| `ItemHolsters` | `public string ItemHolsters { get; }` |
| `ItemHolsterPositionShift` | `public Vec3 ItemHolsterPositionShift { get; }` |
| `UseWeaponAsHolsterMesh` | `public bool UseWeaponAsHolsterMesh { get; }` |
| `AlwaysShowHolsterWithWeapon` | `public bool AlwaysShowHolsterWithWeapon { get; }` |
| `RotateWeaponInHolster` | `public bool RotateWeaponInHolster { get; }` |
| `PieceTypeToScaleHolsterWith` | `public CraftingPiece.PieceTypes PieceTypeToScaleHolsterWith { get; }` |
| `All` | `public static MBReadOnlyList<CraftingTemplate> All { get; }` |


## Key Methods

### GetIndexOfUsageDataWithId

```csharp
public int GetIndexOfUsageDataWithId(string weaponDescriptionId)
```

### IsPieceTypeHiddenOnHolster

```csharp
public bool IsPieceTypeHiddenOnHolster(CraftingPiece.PieceTypes pieceType)
```

### GetStatDatas

```csharp
public IEnumerable<KeyValuePair<CraftingTemplate.CraftingStatTypes, float>> GetStatDatas(string weaponDescriptionId, DamageTypes thrustDamageType, DamageTypes swingDamageType)
```

### ToString

```csharp
public override string ToString()
```

### IsPieceTypeUsable

```csharp
public bool IsPieceTypeUsable(CraftingPiece.PieceTypes pieceType)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### GetTemplateFromId

```csharp
public static CraftingTemplate GetTemplateFromId(string templateId)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)