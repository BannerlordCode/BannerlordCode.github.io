---
title: "PartiesBuyFoodCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartiesBuyFoodCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartiesBuyFoodCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartiesBuyFoodCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/PartiesBuyFoodCampaignBehavior.cs`

## Overview

`PartiesBuyFoodCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `hourly tick party`.

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

## Usage Example

```csharp
var value = new PartiesBuyFoodCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)