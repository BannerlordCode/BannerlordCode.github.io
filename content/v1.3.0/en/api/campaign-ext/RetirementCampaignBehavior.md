---
title: "RetirementCampaignBehavior"
description: "Auto-generated class reference for RetirementCampaignBehavior."
---
# RetirementCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class RetirementCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/RetirementCampaignBehavior.cs`

## Overview

`RetirementCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of RetirementCampaignBehavior from the subsystem API first
RetirementCampaignBehavior retirementCampaignBehavior = ...;
retirementCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RetirementCampaignBehavior from the subsystem API first
RetirementCampaignBehavior retirementCampaignBehavior = ...;
retirementCampaignBehavior.RegisterEvents();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RetirementCampaignBehavior retirementCampaignBehavior = ...;
retirementCampaignBehavior.SyncData(dataStore);
```

## See Also

- [Area Index](../)