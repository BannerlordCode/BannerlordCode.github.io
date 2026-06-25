---
title: "FakeInventoryListener"
description: "Auto-generated class reference for FakeInventoryListener."
---
# FakeInventoryListener

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FakeInventoryListener : InventoryListener`
**Base:** `InventoryListener`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/FakeInventoryListener.cs`

## Overview

`FakeInventoryListener` lives in `TaleWorlds.CampaignSystem.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGold
`public override int GetGold()`

**Purpose:** **Purpose:** Reads and returns the gold value held by the this instance.

```csharp
// Obtain an instance of FakeInventoryListener from the subsystem API first
FakeInventoryListener fakeInventoryListener = ...;
var result = fakeInventoryListener.GetGold();
```

### GetTraderName
`public override TextObject GetTraderName()`

**Purpose:** **Purpose:** Reads and returns the trader name value held by the this instance.

```csharp
// Obtain an instance of FakeInventoryListener from the subsystem API first
FakeInventoryListener fakeInventoryListener = ...;
var result = fakeInventoryListener.GetTraderName();
```

### SetGold
`public override void SetGold(int gold)`

**Purpose:** **Purpose:** Assigns a new value to gold and updates the object's internal state.

```csharp
// Obtain an instance of FakeInventoryListener from the subsystem API first
FakeInventoryListener fakeInventoryListener = ...;
fakeInventoryListener.SetGold(0);
```

### OnTransaction
`public override void OnTransaction()`

**Purpose:** **Purpose:** Invoked when the transaction event is raised.

```csharp
// Obtain an instance of FakeInventoryListener from the subsystem API first
FakeInventoryListener fakeInventoryListener = ...;
fakeInventoryListener.OnTransaction();
```

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**Purpose:** **Purpose:** Reads and returns the opposite party value held by the this instance.

```csharp
// Obtain an instance of FakeInventoryListener from the subsystem API first
FakeInventoryListener fakeInventoryListener = ...;
var result = fakeInventoryListener.GetOppositeParty();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FakeInventoryListener fakeInventoryListener = ...;
fakeInventoryListener.GetGold();
```

## See Also

- [Area Index](../)