---
title: "CampaignBehaviorBase"
description: "Auto-generated class reference for CampaignBehaviorBase."
---
# CampaignBehaviorBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**Base:** `ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`

## Overview

`CampaignBehaviorBase` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public abstract void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CampaignBehaviorBase from the subsystem API first
CampaignBehaviorBase campaignBehaviorBase = ...;
campaignBehaviorBase.RegisterEvents();
```

### SyncData
`public abstract void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of CampaignBehaviorBase from the subsystem API first
CampaignBehaviorBase campaignBehaviorBase = ...;
campaignBehaviorBase.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CampaignBehaviorBase instance = ...;
```

## See Also

- [Area Index](../)