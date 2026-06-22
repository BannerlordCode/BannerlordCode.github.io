<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipHull`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipHull

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ShipHull` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `BaseSpeed` | `public float BaseSpeed { get; }` |
| `Value` | `public int Value { get; }` |
| `HasHold` | `public bool HasHold { get; }` |
| `CanNavigateShallowWater` | `public bool CanNavigateShallowWater { get; }` |
| `CanEquipFigurehead` | `public bool CanEquipFigurehead { get; }` |
| `ProductionBuildWeight` | `public float ProductionBuildWeight { get; }` |
| `SeaWorthiness` | `public int SeaWorthiness { get; }` |
| `Type` | `public ShipHull.ShipType Type { get; }` |
| `IsTradeShip` | `public bool IsTradeShip { get; }` |
| `MissionShipObjectId` | `public string MissionShipObjectId { get; }` |
| `DefaultFormationGroup` | `public int DefaultFormationGroup { get; }` |
| `InventoryCapacity` | `public int InventoryCapacity { get; }` |
| `MaxHitPoints` | `public int MaxHitPoints { get; }` |
| `MaxFireHitPoints` | `public int MaxFireHitPoints { get; }` |
| `MaxSailHitPoints` | `public int MaxSailHitPoints { get; }` |
| `TotalCrewCapacity` | `public int TotalCrewCapacity { get; }` |


## Key Methods

### ToString

```csharp
public override string ToString()
```

### GetName

```csharp
public override TextObject GetName()
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)