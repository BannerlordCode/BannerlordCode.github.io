---
title: "CaravansCampaignBehavior"
description: "Auto-generated class reference for CaravansCampaignBehavior."
---
# CaravansCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravansCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs`

## Overview

`CaravansCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TradeAgreementsCampaignBehavior` | `public ITradeAgreementsCampaignBehavior TradeAgreementsCampaignBehavior { get; }` |
| `ProfitRate` | `public float ProfitRate { get; }` |
| `Size` | `public int Size { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### SpawnCaravan
`public void SpawnCaravan(Hero hero, bool initialSpawn = false)`

**Purpose:** **Purpose:** Executes the SpawnCaravan logic.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.SpawnCaravan(hero, false);
```

### DailyTick
`public void DailyTick()`

**Purpose:** **Purpose:** Executes the DailyTick logic.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.DailyTick();
```

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the HourlyTickParty logic.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.HourlyTickParty(mobileParty);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** **Purpose:** Invoked when the settlement entered event is raised.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSettlementEntered(mobileParty, settlement, hero);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)`

**Purpose:** **Purpose:** Invoked when the settlement left event is raised.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSettlementLeft(mobileParty, settlement);
```

### OnSellAction
`public void OnSellAction(Settlement soldSettlement, int sellPrice)`

**Purpose:** **Purpose:** Invoked when the sell action event is raised.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.OnSellAction(soldSettlement, 0);
```

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.Reset();
```

### CreateNewLog
`public CaravansCampaignBehavior.TradeActionLog CreateNewLog(Settlement boughtSettlement, int buyPrice, ItemRosterElement itemRosterElement)`

**Purpose:** **Purpose:** Constructs a new new log entity and returns it to the caller.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
var result = caravansCampaignBehavior.CreateNewLog(boughtSettlement, 0, itemRosterElement);
```

### ReleaseLog
`public void ReleaseLog(CaravansCampaignBehavior.TradeActionLog log)`

**Purpose:** **Purpose:** Executes the ReleaseLog logic.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.ReleaseLog(log);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of CaravansCampaignBehavior from the subsystem API first
CaravansCampaignBehavior caravansCampaignBehavior = ...;
var result = caravansCampaignBehavior.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CaravansCampaignBehavior caravansCampaignBehavior = ...;
caravansCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)