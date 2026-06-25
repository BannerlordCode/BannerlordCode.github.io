---
title: "GuardsCampaignBehavior"
description: "Auto-generated class reference for GuardsCampaignBehavior."
---
# GuardsCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class GuardsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/GuardsCampaignBehavior.cs`

## Overview

`GuardsCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GuardsCampaignBehavior from the subsystem API first
GuardsCampaignBehavior guardsCampaignBehavior = ...;
guardsCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GuardsCampaignBehavior from the subsystem API first
GuardsCampaignBehavior guardsCampaignBehavior = ...;
guardsCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of GuardsCampaignBehavior from the subsystem API first
GuardsCampaignBehavior guardsCampaignBehavior = ...;
guardsCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GuardsCampaignBehavior guardsCampaignBehavior = ...;
guardsCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)