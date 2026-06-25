---
title: "FoodConsumptionBehavior"
description: "Auto-generated class reference for FoodConsumptionBehavior."
---
# FoodConsumptionBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FoodConsumptionBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/FoodConsumptionBehavior.cs`

## Overview

`FoodConsumptionBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of FoodConsumptionBehavior from the subsystem API first
FoodConsumptionBehavior foodConsumptionBehavior = ...;
foodConsumptionBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of FoodConsumptionBehavior from the subsystem API first
FoodConsumptionBehavior foodConsumptionBehavior = ...;
foodConsumptionBehavior.SyncData(dataStore);
```

### DailyTickParty
`public void DailyTickParty(MobileParty party)`

**Purpose:** Executes the DailyTickParty logic.

```csharp
// Obtain an instance of FoodConsumptionBehavior from the subsystem API first
FoodConsumptionBehavior foodConsumptionBehavior = ...;
foodConsumptionBehavior.DailyTickParty(party);
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of FoodConsumptionBehavior from the subsystem API first
FoodConsumptionBehavior foodConsumptionBehavior = ...;
foodConsumptionBehavior.OnTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FoodConsumptionBehavior foodConsumptionBehavior = ...;
foodConsumptionBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)