<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryItemInspectedEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryItemInspectedEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryItemInspectedEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryItemInspectedEvent.cs`

## Overview

`InventoryItemInspectedEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Item` | `public ItemRosterElement Item { get; }` |
| `ItemSide` | `public InventoryLogic.InventorySide ItemSide { get; }` |

## Usage Example

```csharp
var example = new InventoryItemInspectedEvent();
```

## See Also

- [Complete Class Catalog](../catalog)