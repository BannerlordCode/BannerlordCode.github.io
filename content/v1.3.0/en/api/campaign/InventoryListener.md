---
title: "InventoryListener"
description: "Auto-generated class reference for InventoryListener."
---
# InventoryListener

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryListener`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs`

## Overview

`InventoryListener` lives in `TaleWorlds.CampaignSystem.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGold
`public abstract int GetGold()`

**Purpose:** Reads and returns the gold value held by the this instance.

```csharp
// Obtain an instance of InventoryListener from the subsystem API first
InventoryListener inventoryListener = ...;
var result = inventoryListener.GetGold();
```

### GetTraderName
`public abstract TextObject GetTraderName()`

**Purpose:** Reads and returns the trader name value held by the this instance.

```csharp
// Obtain an instance of InventoryListener from the subsystem API first
InventoryListener inventoryListener = ...;
var result = inventoryListener.GetTraderName();
```

### SetGold
`public abstract void SetGold(int gold)`

**Purpose:** Assigns a new value to gold and updates the object's internal state.

```csharp
// Obtain an instance of InventoryListener from the subsystem API first
InventoryListener inventoryListener = ...;
inventoryListener.SetGold(0);
```

### GetOppositeParty
`public abstract PartyBase GetOppositeParty()`

**Purpose:** Reads and returns the opposite party value held by the this instance.

```csharp
// Obtain an instance of InventoryListener from the subsystem API first
InventoryListener inventoryListener = ...;
var result = inventoryListener.GetOppositeParty();
```

### OnTransaction
`public abstract void OnTransaction()`

**Purpose:** Invoked when the transaction event is raised.

```csharp
// Obtain an instance of InventoryListener from the subsystem API first
InventoryListener inventoryListener = ...;
inventoryListener.OnTransaction();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
InventoryListener instance = ...;
```

## See Also

- [Area Index](../)