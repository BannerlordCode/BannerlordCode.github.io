---
title: "GoldBarterBehavior"
description: "Auto-generated class reference for GoldBarterBehavior."
---
# GoldBarterBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GoldBarterBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors/GoldBarterBehavior.cs`

## Overview

`GoldBarterBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GoldBarterBehavior from the subsystem API first
GoldBarterBehavior goldBarterBehavior = ...;
goldBarterBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GoldBarterBehavior from the subsystem API first
GoldBarterBehavior goldBarterBehavior = ...;
goldBarterBehavior.SyncData(dataStore);
```

### CheckForBarters
`public void CheckForBarters(BarterData args)`

**Purpose:** Verifies whether for barters holds true for the this instance.

```csharp
// Obtain an instance of GoldBarterBehavior from the subsystem API first
GoldBarterBehavior goldBarterBehavior = ...;
goldBarterBehavior.CheckForBarters(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GoldBarterBehavior goldBarterBehavior = ...;
goldBarterBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)