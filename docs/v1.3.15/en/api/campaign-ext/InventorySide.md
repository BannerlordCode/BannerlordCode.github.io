<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventorySide`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventorySide

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum InventorySide`
**Area:** campaign-ext

## Overview

`InventorySide` lives in `TaleWorlds.CampaignSystem.Inventory`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `OtherInventory` |
| `PlayerInventory` |
| `CivilianEquipment` |
| `BattleEquipment` |
| `StealthEquipment` |
| `None` |

## Usage Example

```csharp
InventorySide example = InventorySide.OtherInventory;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
