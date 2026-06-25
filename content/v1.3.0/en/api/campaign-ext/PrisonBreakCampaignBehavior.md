---
title: "PrisonBreakCampaignBehavior"
description: "Auto-generated class reference for PrisonBreakCampaignBehavior."
---
# PrisonBreakCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class PrisonBreakCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/PrisonBreakCampaignBehavior.cs`

## Overview

`PrisonBreakCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of PrisonBreakCampaignBehavior from the subsystem API first
PrisonBreakCampaignBehavior prisonBreakCampaignBehavior = ...;
prisonBreakCampaignBehavior.RegisterEvents();
```

### CreatePrisonBreakGuard
`public LocationCharacter CreatePrisonBreakGuard()`

**Purpose:** **Purpose:** Constructs a new prison break guard entity and returns it to the caller.

```csharp
// Obtain an instance of PrisonBreakCampaignBehavior from the subsystem API first
PrisonBreakCampaignBehavior prisonBreakCampaignBehavior = ...;
var result = prisonBreakCampaignBehavior.CreatePrisonBreakGuard();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of PrisonBreakCampaignBehavior from the subsystem API first
PrisonBreakCampaignBehavior prisonBreakCampaignBehavior = ...;
prisonBreakCampaignBehavior.SyncData(dataStore);
```

### game_menu_prison_menu_on_init
`public static void game_menu_prison_menu_on_init(MenuCallbackArgs args)`

**Purpose:** **Purpose:** Executes the game_menu_prison_menu_on_init logic.

```csharp
// Static call; no instance required
PrisonBreakCampaignBehavior.game_menu_prison_menu_on_init(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PrisonBreakCampaignBehavior prisonBreakCampaignBehavior = ...;
prisonBreakCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)