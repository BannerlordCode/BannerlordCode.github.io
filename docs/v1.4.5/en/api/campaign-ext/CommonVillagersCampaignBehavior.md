<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommonVillagersCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CommonVillagersCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class CommonVillagersCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/CommonVillagersCampaignBehavior.cs`

## Overview

`CommonVillagersCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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

### OnSettlementOwnerChanged
`public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Called when the `settlement owner changed` event is raised.

### conversation_town_or_village_escort_complete_on_condition
`public bool conversation_town_or_village_escort_complete_on_condition()`

**Purpose:** Handles logic related to `conversation_town_or_village_escort_complete_on_condition`.

### conversation_town_or_village_escort_complete_on_consequence
`public void conversation_town_or_village_escort_complete_on_consequence()`

**Purpose:** Handles logic related to `conversation_town_or_village_escort_complete_on_consequence`.

## Usage Example

```csharp
var value = new CommonVillagersCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)