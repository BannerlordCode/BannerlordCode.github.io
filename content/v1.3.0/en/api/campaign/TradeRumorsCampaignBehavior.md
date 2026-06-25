---
title: "TradeRumorsCampaignBehavior"
description: "Auto-generated class reference for TradeRumorsCampaignBehavior."
---
# TradeRumorsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeRumorsCampaignBehavior : CampaignBehaviorBase, ITradeRumorCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TradeRumorsCampaignBehavior.cs`

## Overview

`TradeRumorsCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TradeRumors` | `public IEnumerable<TradeRumor> TradeRumors { get; }` |

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of TradeRumorsCampaignBehavior from the subsystem API first
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TradeRumorsCampaignBehavior from the subsystem API first
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.RegisterEvents();
```

### OnTradeRumorIsTaken
`public void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** Invoked when the trade rumor is taken event is raised.

```csharp
// Obtain an instance of TradeRumorsCampaignBehavior from the subsystem API first
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.OnTradeRumorIsTaken(newRumors, null);
```

### AddTradeRumors
`public void AddTradeRumors(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** Adds trade rumors to the current collection or state.

```csharp
// Obtain an instance of TradeRumorsCampaignBehavior from the subsystem API first
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.AddTradeRumors(newRumors, null);
```

### DailyTick
`public void DailyTick()`

**Purpose:** Executes the DailyTick logic.

```csharp
// Obtain an instance of TradeRumorsCampaignBehavior from the subsystem API first
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.DailyTick();
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the settlement entered event is raised.

```csharp
// Obtain an instance of TradeRumorsCampaignBehavior from the subsystem API first
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.OnSettlementEntered(mobileParty, settlement, hero);
```

### DeleteExpiredRumors
`public void DeleteExpiredRumors()`

**Purpose:** Executes the DeleteExpiredRumors logic.

```csharp
// Obtain an instance of TradeRumorsCampaignBehavior from the subsystem API first
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.DeleteExpiredRumors();
```

### AddDailyTradeRumors
`public void AddDailyTradeRumors(int numberOfTradeRumors)`

**Purpose:** Adds daily trade rumors to the current collection or state.

```csharp
// Obtain an instance of TradeRumorsCampaignBehavior from the subsystem API first
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.AddDailyTradeRumors(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TradeRumorsCampaignBehavior tradeRumorsCampaignBehavior = ...;
tradeRumorsCampaignBehavior.SyncData(dataStore);
```

## See Also

- [Area Index](../)