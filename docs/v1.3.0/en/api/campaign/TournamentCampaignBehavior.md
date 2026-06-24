<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs`

## Overview

`TournamentCampaignBehavior` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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

### game_menu_ui_town_arena_see_leaderboard_on_consequence
`public static void game_menu_ui_town_arena_see_leaderboard_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_ui_town_arena_see_leaderboard_on_consequence`.

## Usage Example

```csharp
var value = new TournamentCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)