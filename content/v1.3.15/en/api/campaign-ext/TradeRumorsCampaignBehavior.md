---
title: "TradeRumorsCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeRumorsCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `sync data`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### OnTradeRumorIsTaken
`public void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** Called when the `trade rumor is taken` event is raised.

### AddTradeRumors
`public void AddTradeRumors(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** Adds `trade rumors` to the current collection or state.

### DailyTick
`public void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### DeleteExpiredRumors
`public void DeleteExpiredRumors()`

**Purpose:** Handles logic related to `delete expired rumors`.

### AddDailyTradeRumors
`public void AddDailyTradeRumors(int numberOfTradeRumors)`

**Purpose:** Adds `daily trade rumors` to the current collection or state.

## Usage Example

```csharp
var value = new TradeRumorsCampaignBehavior();
value.SyncData(dataStore);
```

## See Also

- [Complete Class Catalog](../catalog)