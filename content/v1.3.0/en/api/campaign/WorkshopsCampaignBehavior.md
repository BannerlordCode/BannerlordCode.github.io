---
title: "WorkshopsCampaignBehavior"
description: "Auto-generated class reference for WorkshopsCampaignBehavior."
---
# WorkshopsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WorkshopsCampaignBehavior : CampaignBehaviorBase, IWorkshopWarehouseCampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/WorkshopsCampaignBehavior.cs`

## Overview

`WorkshopsCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of WorkshopsCampaignBehavior from the subsystem API first
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
workshopsCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of WorkshopsCampaignBehavior from the subsystem API first
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
workshopsCampaignBehavior.SyncData(dataStore);
```

### GetWarehouseItemRosterWeight
`public float GetWarehouseItemRosterWeight(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the warehouse item roster weight value held by the this instance.

```csharp
// Obtain an instance of WorkshopsCampaignBehavior from the subsystem API first
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
var result = workshopsCampaignBehavior.GetWarehouseItemRosterWeight(settlement);
```

### TransferWarehouseToPlayerParty
`public void TransferWarehouseToPlayerParty(Settlement settlement)`

**Purpose:** **Purpose:** Executes the TransferWarehouseToPlayerParty logic.

```csharp
// Obtain an instance of WorkshopsCampaignBehavior from the subsystem API first
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
workshopsCampaignBehavior.TransferWarehouseToPlayerParty(settlement);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of WorkshopsCampaignBehavior from the subsystem API first
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
var result = workshopsCampaignBehavior.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
workshopsCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)