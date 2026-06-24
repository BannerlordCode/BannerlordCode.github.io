<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravansCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session launched` event is raised.

### SpawnCaravan
`public void SpawnCaravan(Hero hero, bool initialSpawn = false)`

**Purpose:** Handles logic related to `spawn caravan`.

### DailyTick
`public void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `hourly tick party`.

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Called when the `settlement left` event is raised.

### OnSellAction
`public void OnSellAction(Settlement soldSettlement, int sellPrice)`

**Purpose:** Called when the `sell action` event is raised.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### CreateNewLog
`public CaravansCampaignBehavior.TradeActionLog CreateNewLog(Settlement boughtSettlement, int buyPrice, ItemRosterElement itemRosterElement)`

**Purpose:** Creates a new `new log` instance or object.

### ReleaseLog
`public void ReleaseLog(CaravansCampaignBehavior.TradeActionLog log)`

**Purpose:** Handles logic related to `release log`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new CaravansCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)