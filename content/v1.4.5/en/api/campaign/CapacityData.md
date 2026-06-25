---
title: "CapacityData"
description: "Auto-generated class reference for CapacityData."
---
# CapacityData

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CapacityData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/InventoryLogic.cs`

## Overview

`CapacityData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CapacityData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCapacity
`public int GetCapacity()`

**Purpose:** Reads and returns the `capacity` value held by the current object.

```csharp
// Obtain an instance of CapacityData from the subsystem API first
CapacityData capacityData = ...;
var result = capacityData.GetCapacity();
```

### CanForceTransaction
`public bool CanForceTransaction()`

**Purpose:** Checks whether the current object meets the preconditions for `force transaction`.

```csharp
// Obtain an instance of CapacityData from the subsystem API first
CapacityData capacityData = ...;
var result = capacityData.CanForceTransaction();
```

### GetCapacityExceededWarningText
`public TextObject GetCapacityExceededWarningText()`

**Purpose:** Reads and returns the `capacity exceeded warning text` value held by the current object.

```csharp
// Obtain an instance of CapacityData from the subsystem API first
CapacityData capacityData = ...;
var result = capacityData.GetCapacityExceededWarningText();
```

### GetCapacityExceededHintText
`public TextObject GetCapacityExceededHintText()`

**Purpose:** Reads and returns the `capacity exceeded hint text` value held by the current object.

```csharp
// Obtain an instance of CapacityData from the subsystem API first
CapacityData capacityData = ...;
var result = capacityData.GetCapacityExceededHintText();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CapacityData entry = ...;
```

## See Also

- [Area Index](../)