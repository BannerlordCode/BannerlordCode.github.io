---
title: "CraftingOrderSlots"
description: "Auto-generated class reference for CraftingOrderSlots."
---
# CraftingOrderSlots

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderSlots`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CraftingCampaignBehavior.cs`

## Overview

`CraftingOrderSlots` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsThereAvailableSlot
`public bool IsThereAvailableSlot()`

**Purpose:** **Purpose:** Determines whether the this instance is in the there available slot state or condition.

```csharp
// Obtain an instance of CraftingOrderSlots from the subsystem API first
CraftingOrderSlots craftingOrderSlots = ...;
var result = craftingOrderSlots.IsThereAvailableSlot();
```

### GetAvailableSlot
`public int GetAvailableSlot()`

**Purpose:** **Purpose:** Reads and returns the available slot value held by the this instance.

```csharp
// Obtain an instance of CraftingOrderSlots from the subsystem API first
CraftingOrderSlots craftingOrderSlots = ...;
var result = craftingOrderSlots.GetAvailableSlot();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingOrderSlots craftingOrderSlots = ...;
craftingOrderSlots.IsThereAvailableSlot();
```

## See Also

- [Area Index](../)