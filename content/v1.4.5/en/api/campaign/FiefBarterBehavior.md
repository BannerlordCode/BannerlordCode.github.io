---
title: "FiefBarterBehavior"
description: "Auto-generated class reference for FiefBarterBehavior."
---
# FiefBarterBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FiefBarterBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors/FiefBarterBehavior.cs`

## Overview

`FiefBarterBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of FiefBarterBehavior from the subsystem API first
FiefBarterBehavior fiefBarterBehavior = ...;
fiefBarterBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of FiefBarterBehavior from the subsystem API first
FiefBarterBehavior fiefBarterBehavior = ...;
fiefBarterBehavior.SyncData(dataStore);
```

### CheckForBarters
`public void CheckForBarters(BarterData args)`

**Purpose:** **Purpose:** Verifies whether for barters holds true for the this instance.

```csharp
// Obtain an instance of FiefBarterBehavior from the subsystem API first
FiefBarterBehavior fiefBarterBehavior = ...;
fiefBarterBehavior.CheckForBarters(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FiefBarterBehavior fiefBarterBehavior = ...;
fiefBarterBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)