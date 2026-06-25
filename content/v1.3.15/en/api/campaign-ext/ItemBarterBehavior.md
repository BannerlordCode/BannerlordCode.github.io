---
title: "ItemBarterBehavior"
description: "Auto-generated class reference for ItemBarterBehavior."
---
# ItemBarterBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemBarterBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BarterBehaviors/ItemBarterBehavior.cs`

## Overview

`ItemBarterBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ItemBarterBehavior from the subsystem API first
ItemBarterBehavior itemBarterBehavior = ...;
itemBarterBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of ItemBarterBehavior from the subsystem API first
ItemBarterBehavior itemBarterBehavior = ...;
itemBarterBehavior.SyncData(dataStore);
```

### CheckForBarters
`public void CheckForBarters(BarterData args)`

**Purpose:** **Purpose:** Verifies whether for barters holds true for the this instance.

```csharp
// Obtain an instance of ItemBarterBehavior from the subsystem API first
ItemBarterBehavior itemBarterBehavior = ...;
itemBarterBehavior.CheckForBarters(args);
```

### GetClosestSettlements
`public List<Settlement> GetClosestSettlements(Vec2 position)`

**Purpose:** **Purpose:** Reads and returns the closest settlements value held by the this instance.

```csharp
// Obtain an instance of ItemBarterBehavior from the subsystem API first
ItemBarterBehavior itemBarterBehavior = ...;
var result = itemBarterBehavior.GetClosestSettlements(position);
```

### CompareTo
`public int CompareTo(ItemBarterBehavior.SettlementDistanceCache.SettlementDistancePair other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for ordering.

```csharp
// Obtain an instance of ItemBarterBehavior from the subsystem API first
ItemBarterBehavior itemBarterBehavior = ...;
var result = itemBarterBehavior.CompareTo(other);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemBarterBehavior itemBarterBehavior = ...;
itemBarterBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)