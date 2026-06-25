---
title: "HeroAgentSpawnCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroAgentSpawnCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroAgentSpawnCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroAgentSpawnCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/HeroAgentSpawnCampaignBehavior.cs`

## Overview

`HeroAgentSpawnCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Called when the `settlement left` event is raised.

### OnPrisonersChangeInSettlement
`public void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**Purpose:** Called when the `prisoners change in settlement` event is raised.

## Usage Example

```csharp
var value = new HeroAgentSpawnCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)