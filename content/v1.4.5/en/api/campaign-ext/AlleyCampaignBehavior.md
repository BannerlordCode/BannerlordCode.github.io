---
title: "AlleyCampaignBehavior"
description: "Auto-generated class reference for AlleyCampaignBehavior."
---
# AlleyCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class AlleyCampaignBehavior : CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/AlleyCampaignBehavior.cs`

## Overview

`AlleyCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
alleyCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
alleyCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
alleyCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### GetIsPlayerAlleyUnderAttack
`public bool GetIsPlayerAlleyUnderAttack(Alley alley)`

**Purpose:** Reads and returns the is player alley under attack value held by the this instance.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
var result = alleyCampaignBehavior.GetIsPlayerAlleyUnderAttack(alley);
```

### GetPlayerOwnedAlleyTroopCount
`public int GetPlayerOwnedAlleyTroopCount(Alley alley)`

**Purpose:** Reads and returns the player owned alley troop count value held by the this instance.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
var result = alleyCampaignBehavior.GetPlayerOwnedAlleyTroopCount(alley);
```

### GetResponseTimeLeftForAttackInDays
`public int GetResponseTimeLeftForAttackInDays(Alley alley)`

**Purpose:** Reads and returns the response time left for attack in days value held by the this instance.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
var result = alleyCampaignBehavior.GetResponseTimeLeftForAttackInDays(alley);
```

### AbandonAlleyFromClanMenu
`public void AbandonAlleyFromClanMenu(Alley alley)`

**Purpose:** Executes the AbandonAlleyFromClanMenu logic.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
alleyCampaignBehavior.AbandonAlleyFromClanMenu(alley);
```

### IsHeroAlleyLeaderOfAnyPlayerAlley
`public bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero)`

**Purpose:** Determines whether the this instance is in the hero alley leader of any player alley state or condition.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
var result = alleyCampaignBehavior.IsHeroAlleyLeaderOfAnyPlayerAlley(hero);
```

### GetAllAssignedClanMembersForOwnedAlleys
`public List<Hero> GetAllAssignedClanMembersForOwnedAlleys()`

**Purpose:** Reads and returns the all assigned clan members for owned alleys value held by the this instance.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
var result = alleyCampaignBehavior.GetAllAssignedClanMembersForOwnedAlleys();
```

### ChangeAlleyMember
`public void ChangeAlleyMember(Alley alley, Hero newAlleyLead)`

**Purpose:** Executes the ChangeAlleyMember logic.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
alleyCampaignBehavior.ChangeAlleyMember(alley, newAlleyLead);
```

### OnPlayerRetreatedFromMission
`public void OnPlayerRetreatedFromMission()`

**Purpose:** Invoked when the player retreated from mission event is raised.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
alleyCampaignBehavior.OnPlayerRetreatedFromMission();
```

### OnPlayerDiedInMission
`public void OnPlayerDiedInMission()`

**Purpose:** Invoked when the player died in mission event is raised.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
alleyCampaignBehavior.OnPlayerDiedInMission();
```

### GetAssignedClanMemberOfAlley
`public Hero GetAssignedClanMemberOfAlley(Alley alley)`

**Purpose:** Reads and returns the assigned clan member of alley value held by the this instance.

```csharp
// Obtain an instance of AlleyCampaignBehavior from the subsystem API first
AlleyCampaignBehavior alleyCampaignBehavior = ...;
var result = alleyCampaignBehavior.GetAssignedClanMemberOfAlley(alley);
```

### alley_related_menu_on_init
`public static void alley_related_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the alley_related_menu_on_init logic.

```csharp
// Static call; no instance required
AlleyCampaignBehavior.alley_related_menu_on_init(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AlleyCampaignBehavior alleyCampaignBehavior = ...;
alleyCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)