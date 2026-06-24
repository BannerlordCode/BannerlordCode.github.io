<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingOrderSlots`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingOrderSlots

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderSlots`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs`

## Overview

`CraftingOrderSlots` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomOrders` | `public MBReadOnlyList<CraftingOrder> CustomOrders { get; }` |

## Key Methods

### IsThereAvailableSlot
`public bool IsThereAvailableSlot()`

**Purpose:** Handles logic related to `is there available slot`.

### GetAvailableSlot
`public int GetAvailableSlot()`

**Purpose:** Gets the current value of `available slot`.

## Usage Example

```csharp
var value = new CraftingOrderSlots();
value.IsThereAvailableSlot();
```

## See Also

- [Complete Class Catalog](../catalog)