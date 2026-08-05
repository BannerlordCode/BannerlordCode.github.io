---
title: "InventoryCategoryType"
description: "The v1.4.5 merchant filter enum passed by InventoryScreenHelper into inventory trade initialization."
---
# InventoryCategoryType

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum InventoryCategoryType`  
**Owner:** [InventoryScreenHelper](../InventoryScreenHelper)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## Responsibility

`InventoryCategoryType` selects the category filter used when [InventoryScreenHelper](../InventoryScreenHelper) initializes a trade inventory. It is separate from [InventoryItemType](../InventoryItemType): this enum describes the merchant filter, while the flag enum classifies individual items.

## Mental model

The category travels as an initialization argument rather than as a roster mutation:

```
trade entry -> InventoryCategoryType -> InventoryLogic.Initialize -> merchant filter
```

Most helper entries default to `None`. A caller that owns a real settlement trade context can select a category through `OpenScreenAsTrade`; the helper still owns state creation and trade listener setup.

## Values

| Value | Source meaning |
| --- | --- |
| `None` | `-1`; no category filter. |
| `All` | All supported merchant categories. |
| `Armors` | Armor category. |
| `Weapon` | Weapon category. |
| `Shield` | Shield category. |
| `HorseCategory` | Horse and harness category. |
| `Goods` | Goods category. |
| `CategoryTypeAmount` | Sentinel marking the count boundary, not a merchant filter. |

## Real use

The source trade entry accepts the filter beside a real settlement roster and component:

```csharp
ItemRoster items = Settlement.CurrentSettlement.ItemRoster;
InventoryScreenHelper.OpenScreenAsTrade(
    items,
    Settlement.CurrentSettlement.SettlementComponent,
    InventoryScreenHelper.InventoryCategoryType.Goods);
```

The `Settlement.CurrentSettlement` context comes from the campaign town-visit flow. The enum itself does not open the state, calculate prices, or change settlement gold.

## Dependencies

- [InventoryScreenHelper](../InventoryScreenHelper) accepts the value and attaches the merchant listener.
- [InventoryLogic](../../campaign/InventoryLogic) receives the category during initialization.
- [ItemObject](../../core-extra/ItemObject) provides item categories displayed by the inventory logic.
- [InventoryState](../../campaign/InventoryState) hosts the initialized logic.

## Risks and version boundary

`None` is `-1`, while `CategoryTypeAmount` is a sentinel at the end of the enum. Neither should be treated as a visible item category. Passing a category value does not establish a settlement context; the caller still must supply a valid roster and `SettlementComponent`.

## Navigation

- [↑ API system index](../)
- [Owner: InventoryScreenHelper](../InventoryScreenHelper)
- [Sibling: InventoryItemType](../InventoryItemType)
- [Related: InventoryLogic](../../campaign/InventoryLogic)
- [中文页面](../../../../zh/api/system/InventoryCategoryType)
