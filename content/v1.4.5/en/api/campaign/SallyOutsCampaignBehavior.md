---
title: "SallyOutsCampaignBehavior"
description: "Auto-generated class reference for SallyOutsCampaignBehavior."
---
# SallyOutsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SallyOutsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/SallyOutsCampaignBehavior.cs`

## Overview

`SallyOutsCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of SallyOutsCampaignBehavior from the subsystem API first
SallyOutsCampaignBehavior sallyOutsCampaignBehavior = ...;
sallyOutsCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of SallyOutsCampaignBehavior from the subsystem API first
SallyOutsCampaignBehavior sallyOutsCampaignBehavior = ...;
sallyOutsCampaignBehavior.SyncData(dataStore);
```

### HourlyTickSettlement
`public void HourlyTickSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Executes the HourlyTickSettlement logic.

```csharp
// Obtain an instance of SallyOutsCampaignBehavior from the subsystem API first
SallyOutsCampaignBehavior sallyOutsCampaignBehavior = ...;
sallyOutsCampaignBehavior.HourlyTickSettlement(settlement);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SallyOutsCampaignBehavior sallyOutsCampaignBehavior = ...;
sallyOutsCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)