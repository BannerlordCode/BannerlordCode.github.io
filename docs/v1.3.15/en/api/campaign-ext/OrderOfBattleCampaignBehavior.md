<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OrderOfBattleCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/OrderOfBattleCampaignBehavior.cs`

## Overview

`OrderOfBattleCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetFormationDataAtIndex
`public OrderOfBattleCampaignBehavior.OrderOfBattleFormationData GetFormationDataAtIndex(int formationIndex, bool isSiegeBattle, bool isInArmy)`

**Purpose:** Gets the current value of `formation data at index`.

### SetFormationInfos
`public void SetFormationInfos(List<OrderOfBattleCampaignBehavior.OrderOfBattleFormationData> formationInfos, bool isSiegeBattle, bool isInArmy)`

**Purpose:** Sets the value or state of `formation infos`.

## Usage Example

```csharp
var value = new OrderOfBattleCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)