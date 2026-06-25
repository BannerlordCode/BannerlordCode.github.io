---
title: "TournamentCampaignBehavior"
description: "Auto-generated class reference for TournamentCampaignBehavior."
---
# TournamentCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentCampaignBehavior.cs`

## Overview

`TournamentCampaignBehavior` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TournamentCampaignBehavior from the subsystem API first
TournamentCampaignBehavior tournamentCampaignBehavior = ...;
tournamentCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of TournamentCampaignBehavior from the subsystem API first
TournamentCampaignBehavior tournamentCampaignBehavior = ...;
tournamentCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of TournamentCampaignBehavior from the subsystem API first
TournamentCampaignBehavior tournamentCampaignBehavior = ...;
tournamentCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### game_menu_ui_town_arena_see_leaderboard_on_consequence
`public static void game_menu_ui_town_arena_see_leaderboard_on_consequence(MenuCallbackArgs args)`

**Purpose:** Executes the game_menu_ui_town_arena_see_leaderboard_on_consequence logic.

```csharp
// Static call; no instance required
TournamentCampaignBehavior.game_menu_ui_town_arena_see_leaderboard_on_consequence(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentCampaignBehavior tournamentCampaignBehavior = ...;
tournamentCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)