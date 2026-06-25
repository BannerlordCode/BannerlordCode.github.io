---
title: "VillageType"
description: "Auto-generated class reference for VillageType."
---
# VillageType

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class VillageType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/VillageType.cs`

## Overview

`VillageType` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrimaryProduction` | `public ItemObject PrimaryProduction { get; }` |

## Key Methods

### Initialize
`public VillageType Initialize(TextObject shortName, string meshName, string meshNameUnderConstruction, string meshNameBurned, (ItemObject, float) productions)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of VillageType from the subsystem API first
VillageType villageType = ...;
var result = villageType.Initialize(shortName, "example", "example", "example", (ItemObject, 0);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of VillageType from the subsystem API first
VillageType villageType = ...;
var result = villageType.ToString();
```

### AddProductions
`public void AddProductions(IEnumerable<(ItemObject, float)> productions)`

**Purpose:** **Purpose:** Adds productions to the current collection or state.

```csharp
// Obtain an instance of VillageType from the subsystem API first
VillageType villageType = ...;
villageType.AddProductions(iEnumerable<(ItemObject, 0);
```

### GetProductionPerDay
`public float GetProductionPerDay(ItemObject item)`

**Purpose:** **Purpose:** Reads and returns the production per day value held by the this instance.

```csharp
// Obtain an instance of VillageType from the subsystem API first
VillageType villageType = ...;
var result = villageType.GetProductionPerDay(item);
```

### GetProductionPerDay
`public float GetProductionPerDay(ItemCategory itemCategory)`

**Purpose:** **Purpose:** Reads and returns the production per day value held by the this instance.

```csharp
// Obtain an instance of VillageType from the subsystem API first
VillageType villageType = ...;
var result = villageType.GetProductionPerDay(itemCategory);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillageType villageType = ...;
villageType.Initialize(shortName, "example", "example", "example", (ItemObject, 0);
```

## See Also

- [Area Index](../)