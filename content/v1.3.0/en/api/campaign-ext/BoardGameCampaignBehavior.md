---
title: "BoardGameCampaignBehavior"
description: "Auto-generated class reference for BoardGameCampaignBehavior."
---
# BoardGameCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class BoardGameCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs`

## Overview

`BoardGameCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WonBoardGamesInOneWeekInSettlement` | `public IEnumerable<Settlement> WonBoardGamesInOneWeekInSettlement { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of BoardGameCampaignBehavior from the subsystem API first
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of BoardGameCampaignBehavior from the subsystem API first
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `session launched` event is raised.

```csharp
// Obtain an instance of BoardGameCampaignBehavior from the subsystem API first
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### InitializeConversationVars
`public void InitializeConversationVars()`

**Purpose:** Prepares the resources, state, or bindings required by `conversation vars`.

```csharp
// Obtain an instance of BoardGameCampaignBehavior from the subsystem API first
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.InitializeConversationVars();
```

### OnMissionStarted
`public void OnMissionStarted(IMission mission)`

**Purpose:** Invoked when the `mission started` event is raised.

```csharp
// Obtain an instance of BoardGameCampaignBehavior from the subsystem API first
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.OnMissionStarted(mission);
```

### OnHeroKilled
`public void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the `hero killed` event is raised.

```csharp
// Obtain an instance of BoardGameCampaignBehavior from the subsystem API first
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.OnHeroKilled(victim, killer, detail, false);
```

### taverngamehost_player_sitting_now_on_condition
`public static bool taverngamehost_player_sitting_now_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
BoardGameCampaignBehavior.taverngamehost_player_sitting_now_on_condition();
```

### PlayerWonAgainstTavernChampion
`public void PlayerWonAgainstTavernChampion()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BoardGameCampaignBehavior from the subsystem API first
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.PlayerWonAgainstTavernChampion();
```

### SetBetAmount
`public void SetBetAmount(int bet)`

**Purpose:** Assigns a new value to `bet amount` and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameCampaignBehavior from the subsystem API first
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.SetBetAmount(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameCampaignBehavior boardGameCampaignBehavior = ...;
boardGameCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)