---
title: "PartiesBuyFoodCampaignBehavior"
description: "Auto-generated class reference for PartiesBuyFoodCampaignBehavior."
---
# PartiesBuyFoodCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartiesBuyFoodCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/PartiesBuyFoodCampaignBehavior.cs`

## Overview

`PartiesBuyFoodCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of PartiesBuyFoodCampaignBehavior from the subsystem API first
PartiesBuyFoodCampaignBehavior partiesBuyFoodCampaignBehavior = ...;
partiesBuyFoodCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of PartiesBuyFoodCampaignBehavior from the subsystem API first
PartiesBuyFoodCampaignBehavior partiesBuyFoodCampaignBehavior = ...;
partiesBuyFoodCampaignBehavior.SyncData(dataStore);
```

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PartiesBuyFoodCampaignBehavior from the subsystem API first
PartiesBuyFoodCampaignBehavior partiesBuyFoodCampaignBehavior = ...;
partiesBuyFoodCampaignBehavior.HourlyTickParty(mobileParty);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the `settlement entered` event is raised.

```csharp
// Obtain an instance of PartiesBuyFoodCampaignBehavior from the subsystem API first
PartiesBuyFoodCampaignBehavior partiesBuyFoodCampaignBehavior = ...;
partiesBuyFoodCampaignBehavior.OnSettlementEntered(mobileParty, settlement, hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartiesBuyFoodCampaignBehavior partiesBuyFoodCampaignBehavior = ...;
partiesBuyFoodCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)