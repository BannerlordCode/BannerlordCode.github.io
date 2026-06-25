---
title: "InventoryEquipmentTypeChangedEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryEquipmentTypeChangedEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryEquipmentTypeChangedEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryEquipmentTypeChangedEvent : EventBase`
**Base:** `EventBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/InventoryEquipmentTypeChangedEvent.cs`

## Overview

`InventoryEquipmentTypeChangedEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCurrentlyWarSet` | `public bool IsCurrentlyWarSet { get; }` |

## Usage Example

```csharp
var example = new InventoryEquipmentTypeChangedEvent();
```

## See Also

- [Complete Class Catalog](../catalog)