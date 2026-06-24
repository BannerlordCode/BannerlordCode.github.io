<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CapacityData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CapacityData

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CapacityData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`

## Overview

`CapacityData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CapacityData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCapacity
`public int GetCapacity()`

**Purpose:** Gets the current value of `capacity`.

### CanForceTransaction
`public bool CanForceTransaction()`

**Purpose:** Checks whether the current object can `force transaction`.

### GetCapacityExceededWarningText
`public TextObject GetCapacityExceededWarningText()`

**Purpose:** Gets the current value of `capacity exceeded warning text`.

### GetCapacityExceededHintText
`public TextObject GetCapacityExceededHintText()`

**Purpose:** Gets the current value of `capacity exceeded hint text`.

## Usage Example

```csharp
var value = new CapacityData();
```

## See Also

- [Complete Class Catalog](../catalog)