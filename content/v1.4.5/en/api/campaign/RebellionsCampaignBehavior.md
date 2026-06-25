---
title: "RebellionsCampaignBehavior"
description: "Auto-generated class reference for RebellionsCampaignBehavior."
---
# RebellionsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RebellionsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/RebellionsCampaignBehavior.cs`

## Overview

`RebellionsCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RebellionsCampaignBehavior from the subsystem API first
RebellionsCampaignBehavior rebellionsCampaignBehavior = ...;
rebellionsCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of RebellionsCampaignBehavior from the subsystem API first
RebellionsCampaignBehavior rebellionsCampaignBehavior = ...;
rebellionsCampaignBehavior.SyncData(dataStore);
```

### StartRebellionEvent
`public void StartRebellionEvent(Settlement settlement)`

**Purpose:** Starts the rebellion event flow or state machine.

```csharp
// Obtain an instance of RebellionsCampaignBehavior from the subsystem API first
RebellionsCampaignBehavior rebellionsCampaignBehavior = ...;
rebellionsCampaignBehavior.StartRebellionEvent(settlement);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RebellionsCampaignBehavior rebellionsCampaignBehavior = ...;
rebellionsCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)