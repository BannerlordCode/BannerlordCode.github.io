<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TransferCommand`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TransferCommand

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TransferCommand` is a struct in the `TaleWorlds.CampaignSystem.Inventory` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `FromSideEquipment` | `public Equipment FromSideEquipment { get; }` |
| `ToSideEquipment` | `public Equipment ToSideEquipment { get; }` |
| `FromSide` | `public InventoryLogic.InventorySide FromSide { get; }` |
| `ToSide` | `public InventoryLogic.InventorySide ToSide { get; }` |
| `FromEquipmentIndex` | `public EquipmentIndex FromEquipmentIndex { get; }` |
| `ToEquipmentIndex` | `public EquipmentIndex ToEquipmentIndex { get; }` |
| `Amount` | `public int Amount { get; }` |
| `ElementToTransfer` | `public ItemRosterElement ElementToTransfer { get; }` |
| `Character` | `public CharacterObject Character { get; }` |


## Key Methods

### Transfer

```csharp
public static TransferCommand Transfer(int amount, InventoryLogic.InventorySide fromSide, InventoryLogic.InventorySide toSide, ItemRosterElement elementToTransfer, EquipmentIndex fromEquipmentIndex, EquipmentIndex toEquipmentIndex, CharacterObject character)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)