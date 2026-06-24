<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArenaMasterCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArenaMasterCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class ArenaMasterCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/ArenaMasterCampaignBehavior.cs`

## Overview

`ArenaMasterCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### conversation_tournament_soon_on_condition
`public static bool conversation_tournament_soon_on_condition()`

**Purpose:** Handles logic related to `conversation_tournament_soon_on_condition`.

### conversation_arena_join_tournament_on_consequence
`public static void conversation_arena_join_tournament_on_consequence()`

**Purpose:** Handles logic related to `conversation_arena_join_tournament_on_consequence`.

### conversation_arena_join_fight_on_consequence
`public static void conversation_arena_join_fight_on_consequence()`

**Purpose:** Handles logic related to `conversation_arena_join_fight_on_consequence`.

## Usage Example

```csharp
var value = new ArenaMasterCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)