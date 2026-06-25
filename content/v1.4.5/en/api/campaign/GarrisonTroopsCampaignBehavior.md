---
title: "GarrisonTroopsCampaignBehavior"
description: "Auto-generated class reference for GarrisonTroopsCampaignBehavior."
---
# GarrisonTroopsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonTroopsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/GarrisonTroopsCampaignBehavior.cs`

## Overview

`GarrisonTroopsCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNumberOfTroopsToLeaveForParty
`public int GetNumberOfTroopsToLeaveForParty()`

**Purpose:** Reads and returns the number of troops to leave for party value held by the this instance.

```csharp
// Obtain an instance of GarrisonTroopsCampaignBehavior from the subsystem API first
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
var result = garrisonTroopsCampaignBehavior.GetNumberOfTroopsToLeaveForParty();
```

### GetNumberOfTroopsToTakeForParty
`public int GetNumberOfTroopsToTakeForParty()`

**Purpose:** Reads and returns the number of troops to take for party value held by the this instance.

```csharp
// Obtain an instance of GarrisonTroopsCampaignBehavior from the subsystem API first
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
var result = garrisonTroopsCampaignBehavior.GetNumberOfTroopsToTakeForParty();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GarrisonTroopsCampaignBehavior from the subsystem API first
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
garrisonTroopsCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GarrisonTroopsCampaignBehavior from the subsystem API first
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
garrisonTroopsCampaignBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
garrisonTroopsCampaignBehavior.GetNumberOfTroopsToLeaveForParty();
```

## See Also

- [Area Index](../)