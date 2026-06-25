---
title: "RecruitmentAgentSpawnBehavior"
description: "Auto-generated class reference for RecruitmentAgentSpawnBehavior."
---
# RecruitmentAgentSpawnBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class RecruitmentAgentSpawnBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/RecruitmentAgentSpawnBehavior.cs`

## Overview

`RecruitmentAgentSpawnBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RecruitmentAgentSpawnBehavior from the subsystem API first
RecruitmentAgentSpawnBehavior recruitmentAgentSpawnBehavior = ...;
recruitmentAgentSpawnBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of RecruitmentAgentSpawnBehavior from the subsystem API first
RecruitmentAgentSpawnBehavior recruitmentAgentSpawnBehavior = ...;
recruitmentAgentSpawnBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RecruitmentAgentSpawnBehavior recruitmentAgentSpawnBehavior = ...;
recruitmentAgentSpawnBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)