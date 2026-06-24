<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BanditSpawnCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BanditSpawnCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditSpawnCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditSpawnCampaignBehavior.cs`

## Overview

`BanditSpawnCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### InitializeInitialHideouts
`public void InitializeInitialHideouts()`

**Purpose:** Initializes the state, resources, or bindings for `initial hideouts`.

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### DailyTick
`public void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### AddBanditToHideout
`public MobileParty AddBanditToHideout(Hideout hideoutComponent, PartyTemplateObject overridenPartyTemplate = null, bool isBanditBossParty = false)`

**Purpose:** Adds `bandit to hideout` to the current collection or state.

### SpawnBanditsAroundHideoutAtNewGame
`public void SpawnBanditsAroundHideoutAtNewGame()`

**Purpose:** Handles logic related to `spawn bandits around hideout at new game`.

### SpawnLootersAtNewGame
`public void SpawnLootersAtNewGame()`

**Purpose:** Handles logic related to `spawn looters at new game`.

## Usage Example

```csharp
var value = new BanditSpawnCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)