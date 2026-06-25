---
title: "WorkshopsCharactersCampaignBehavior"
description: "Auto-generated class reference for WorkshopsCharactersCampaignBehavior."
---
# WorkshopsCharactersCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WorkshopsCharactersCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/WorkshopsCharactersCampaignBehavior.cs`

## Overview

`WorkshopsCharactersCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of WorkshopsCharactersCampaignBehavior from the subsystem API first
WorkshopsCharactersCampaignBehavior workshopsCharactersCampaignBehavior = ...;
workshopsCharactersCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of WorkshopsCharactersCampaignBehavior from the subsystem API first
WorkshopsCharactersCampaignBehavior workshopsCharactersCampaignBehavior = ...;
workshopsCharactersCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of WorkshopsCharactersCampaignBehavior from the subsystem API first
WorkshopsCharactersCampaignBehavior workshopsCharactersCampaignBehavior = ...;
workshopsCharactersCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WorkshopsCharactersCampaignBehavior workshopsCharactersCampaignBehavior = ...;
workshopsCharactersCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)