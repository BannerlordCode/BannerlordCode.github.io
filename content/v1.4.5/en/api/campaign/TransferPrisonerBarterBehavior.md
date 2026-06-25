---
title: "TransferPrisonerBarterBehavior"
description: "Auto-generated class reference for TransferPrisonerBarterBehavior."
---
# TransferPrisonerBarterBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TransferPrisonerBarterBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors/TransferPrisonerBarterBehavior.cs`

## Overview

`TransferPrisonerBarterBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TransferPrisonerBarterBehavior from the subsystem API first
TransferPrisonerBarterBehavior transferPrisonerBarterBehavior = ...;
transferPrisonerBarterBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of TransferPrisonerBarterBehavior from the subsystem API first
TransferPrisonerBarterBehavior transferPrisonerBarterBehavior = ...;
transferPrisonerBarterBehavior.SyncData(dataStore);
```

### CheckForBarters
`public void CheckForBarters(BarterData args)`

**Purpose:** Verifies whether for barters holds true for the this instance.

```csharp
// Obtain an instance of TransferPrisonerBarterBehavior from the subsystem API first
TransferPrisonerBarterBehavior transferPrisonerBarterBehavior = ...;
transferPrisonerBarterBehavior.CheckForBarters(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TransferPrisonerBarterBehavior transferPrisonerBarterBehavior = ...;
transferPrisonerBarterBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)