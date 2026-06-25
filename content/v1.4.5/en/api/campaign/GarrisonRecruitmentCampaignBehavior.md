---
title: "GarrisonRecruitmentCampaignBehavior"
description: "Auto-generated class reference for GarrisonRecruitmentCampaignBehavior."
---
# GarrisonRecruitmentCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonRecruitmentCampaignBehavior : CampaignBehaviorBase, IGarrisonRecruitmentBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs`

## Overview

`GarrisonRecruitmentCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### VolunteerTroop
`public struct VolunteerTroop(Hero ownerNotable, int notableVolunteerArrayIndex)`

**Purpose:** **Purpose:** Executes the VolunteerTroop logic.

```csharp
// Obtain an instance of GarrisonRecruitmentCampaignBehavior from the subsystem API first
GarrisonRecruitmentCampaignBehavior garrisonRecruitmentCampaignBehavior = ...;
var result = garrisonRecruitmentCampaignBehavior.VolunteerTroop(ownerNotable, 0);
```

### CompareTo
`public int CompareTo(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for ordering.

```csharp
// Obtain an instance of GarrisonRecruitmentCampaignBehavior from the subsystem API first
GarrisonRecruitmentCampaignBehavior garrisonRecruitmentCampaignBehavior = ...;
var result = garrisonRecruitmentCampaignBehavior.CompareTo(obj);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GarrisonRecruitmentCampaignBehavior from the subsystem API first
GarrisonRecruitmentCampaignBehavior garrisonRecruitmentCampaignBehavior = ...;
garrisonRecruitmentCampaignBehavior.RegisterEvents();
```

### GetGarrisonChangeExplainedNumber
`public ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)`

**Purpose:** **Purpose:** Reads and returns the garrison change explained number value held by the this instance.

```csharp
// Obtain an instance of GarrisonRecruitmentCampaignBehavior from the subsystem API first
GarrisonRecruitmentCampaignBehavior garrisonRecruitmentCampaignBehavior = ...;
var result = garrisonRecruitmentCampaignBehavior.GetGarrisonChangeExplainedNumber(town);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GarrisonRecruitmentCampaignBehavior from the subsystem API first
GarrisonRecruitmentCampaignBehavior garrisonRecruitmentCampaignBehavior = ...;
garrisonRecruitmentCampaignBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GarrisonRecruitmentCampaignBehavior garrisonRecruitmentCampaignBehavior = ...;
garrisonRecruitmentCampaignBehavior.VolunteerTroop(ownerNotable, 0);
```

## See Also

- [Area Index](../)