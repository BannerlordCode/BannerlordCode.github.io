<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GarrisonTroopsCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GarrisonTroopsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonTroopsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonTroopsCampaignBehavior.cs`

## Overview

`GarrisonTroopsCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetTroopsToLeaveDataForArmy
`public List<ValueTuple<MobileParty, int>> GetTroopsToLeaveDataForArmy()`

**Purpose:** Gets the current value of `troops to leave data for army`.

### GetTroopsToTakeDataForArmy
`public List<ValueTuple<MobileParty, int>> GetTroopsToTakeDataForArmy()`

**Purpose:** Gets the current value of `troops to take data for army`.

### GetNumberOfTroopsToLeaveForParty
`public int GetNumberOfTroopsToLeaveForParty()`

**Purpose:** Gets the current value of `number of troops to leave for party`.

### GetNumberOfTroopsToTakeForParty
`public int GetNumberOfTroopsToTakeForParty()`

**Purpose:** Gets the current value of `number of troops to take for party`.

## Usage Example

```csharp
var value = new GarrisonTroopsCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)