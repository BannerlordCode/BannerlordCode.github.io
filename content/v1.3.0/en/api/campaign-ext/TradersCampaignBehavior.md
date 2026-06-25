---
title: "TradersCampaignBehavior"
description: "Auto-generated class reference for TradersCampaignBehavior."
---
# TradersCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class TradersCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/TradersCampaignBehavior.cs`

## Overview

`TradersCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TradersCampaignBehavior from the subsystem API first
TradersCampaignBehavior tradersCampaignBehavior = ...;
tradersCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of TradersCampaignBehavior from the subsystem API first
TradersCampaignBehavior tradersCampaignBehavior = ...;
tradersCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `session launched` event is raised.

```csharp
// Obtain an instance of TradersCampaignBehavior from the subsystem API first
TradersCampaignBehavior tradersCampaignBehavior = ...;
tradersCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TradersCampaignBehavior tradersCampaignBehavior = ...;
tradersCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)