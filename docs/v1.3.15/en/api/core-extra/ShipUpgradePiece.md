<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipUpgradePiece`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipUpgradePiece

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ShipUpgradePiece` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `TargetSlots` | `public MBReadOnlyList<ShipSlot> TargetSlots { get; }` |
| `LightValue` | `public int LightValue { get; }` |
| `MediumValue` | `public int MediumValue { get; }` |
| `HeavyValue` | `public int HeavyValue { get; }` |
| `SlotPrefabChildTagId` | `public string SlotPrefabChildTagId { get; }` |
| `NotMerchandise` | `public bool NotMerchandise { get; }` |
| `CombatFactor` | `public float CombatFactor { get; }` |
| `CrewCapacityBonusMultiplier` | `public float CrewCapacityBonusMultiplier { get; }` |
| `RequiredPortLevel` | `public int RequiredPortLevel { get; }` |
| `ShipWeightBonusMultiplier` | `public float ShipWeightBonusMultiplier { get; }` |
| `RequiredCulture1` | `public BasicCultureObject RequiredCulture1 { get; }` |
| `DecreaseForwardDragMultiplier` | `public float DecreaseForwardDragMultiplier { get; }` |
| `CampaignSpeedBonusMultiplier` | `public float CampaignSpeedBonusMultiplier { get; }` |
| `MaxHitPointsBonusMultiplier` | `public float MaxHitPointsBonusMultiplier { get; }` |
| `MaxSailHitPointsBonusMultiplier` | `public float MaxSailHitPointsBonusMultiplier { get; }` |
| `SeaWorthinessBonus` | `public int SeaWorthinessBonus { get; }` |
| `CrewShieldHitPointsBonusMultiplier` | `public float CrewShieldHitPointsBonusMultiplier { get; }` |
| `InventoryCapacityBonusMultiplier` | `public float InventoryCapacityBonusMultiplier { get; }` |


## Key Methods

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### ToString

```csharp
public override string ToString()
```

### GetName

```csharp
public override TextObject GetName()
```

### DoesPieceMatchSlot

```csharp
public bool DoesPieceMatchSlot(ShipSlot slot)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)