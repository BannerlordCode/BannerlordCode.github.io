<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipSlot`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipSlot

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ShipSlot` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TypeId` | `public string TypeId { get; }` |
| `MainPrefabId` | `public string MainPrefabId { get; }` |
| `MatchingPieces` | `public MBReadOnlyList<ShipUpgradePiece> MatchingPieces { get; }` |


## Key Methods

### AfterRegister

```csharp
public override void AfterRegister()
```

### AddMatchingPiece

```csharp
public void AddMatchingPiece(ShipUpgradePiece upgradePiece)
```

### GetSlotTypeName

```csharp
public TextObject GetSlotTypeName()
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)