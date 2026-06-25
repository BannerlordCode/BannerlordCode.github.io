---
title: "ArenaMasterCampaignBehavior"
description: "Auto-generated class reference for ArenaMasterCampaignBehavior."
---
# ArenaMasterCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class ArenaMasterCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/ArenaMasterCampaignBehavior.cs`

## Overview

`ArenaMasterCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ArenaMasterCampaignBehavior from the subsystem API first
ArenaMasterCampaignBehavior arenaMasterCampaignBehavior = ...;
arenaMasterCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of ArenaMasterCampaignBehavior from the subsystem API first
ArenaMasterCampaignBehavior arenaMasterCampaignBehavior = ...;
arenaMasterCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of ArenaMasterCampaignBehavior from the subsystem API first
ArenaMasterCampaignBehavior arenaMasterCampaignBehavior = ...;
arenaMasterCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** **Purpose:** Invoked when the settlement entered event is raised.

```csharp
// Obtain an instance of ArenaMasterCampaignBehavior from the subsystem API first
ArenaMasterCampaignBehavior arenaMasterCampaignBehavior = ...;
arenaMasterCampaignBehavior.OnSettlementEntered(mobileParty, settlement, hero);
```

### conversation_tournament_soon_on_condition
`public static bool conversation_tournament_soon_on_condition()`

**Purpose:** **Purpose:** Executes the conversation_tournament_soon_on_condition logic.

```csharp
// Static call; no instance required
ArenaMasterCampaignBehavior.conversation_tournament_soon_on_condition();
```

### conversation_arena_join_tournament_on_consequence
`public static void conversation_arena_join_tournament_on_consequence()`

**Purpose:** **Purpose:** Executes the conversation_arena_join_tournament_on_consequence logic.

```csharp
// Static call; no instance required
ArenaMasterCampaignBehavior.conversation_arena_join_tournament_on_consequence();
```

### conversation_arena_join_fight_on_consequence
`public static void conversation_arena_join_fight_on_consequence()`

**Purpose:** **Purpose:** Executes the conversation_arena_join_fight_on_consequence logic.

```csharp
// Static call; no instance required
ArenaMasterCampaignBehavior.conversation_arena_join_fight_on_consequence();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArenaMasterCampaignBehavior arenaMasterCampaignBehavior = ...;
arenaMasterCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)