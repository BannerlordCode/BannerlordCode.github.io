<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryTransferItemEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryTransferItemEvent

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryTransferItemEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs`

## Overview

`InventoryTransferItemEvent` lives in `TaleWorlds.CampaignSystem.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Item` | `public ItemObject Item { get; }` |
| `IsBuyForPlayer` | `public bool IsBuyForPlayer { get; }` |

## Usage Example

```csharp
var value = new InventoryTransferItemEvent();
```

## See Also

- [Complete Class Catalog](../catalog)