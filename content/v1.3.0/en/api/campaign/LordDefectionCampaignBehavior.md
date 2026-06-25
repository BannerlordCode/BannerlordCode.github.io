---
title: "LordDefectionCampaignBehavior"
description: "Auto-generated class reference for LordDefectionCampaignBehavior."
---
# LordDefectionCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordDefectionCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs`

## Overview

`LordDefectionCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `session launched` event is raised.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### ClearPersuasion
`public void ClearPersuasion()`

**Purpose:** Removes all `persuasion` from the current object.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.ClearPersuasion();
```

### conversation_lord_player_has_failed_in_defection_on_condition
`public bool conversation_lord_player_has_failed_in_defection_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_player_has_failed_in_defection_on_condition();
```

### conversation_lord_recruit_check_if_reservations_met_on_condition
`public bool conversation_lord_recruit_check_if_reservations_met_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_recruit_check_if_reservations_met_on_condition();
```

### conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition
`public bool conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition();
```

### conversation_lord_defect_to_clan_without_barter_on_consequence
`public void conversation_lord_defect_to_clan_without_barter_on_consequence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.conversation_lord_defect_to_clan_without_barter_on_consequence();
```

### conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition
`public bool conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition();
```

### conversation_player_is_asking_to_recruit_enemy_on_condition
`public bool conversation_player_is_asking_to_recruit_enemy_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_player_is_asking_to_recruit_enemy_on_condition();
```

### conversation_player_is_asking_to_recruit_neutral_on_condition
`public bool conversation_player_is_asking_to_recruit_neutral_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_player_is_asking_to_recruit_neutral_on_condition();
```

### conversation_lord_from_ruling_clan_on_condition
`public bool conversation_lord_from_ruling_clan_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_from_ruling_clan_on_condition();
```

### conversation_lord_redirects_to_clan_leader_on_condition
`public bool conversation_lord_redirects_to_clan_leader_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordDefectionCampaignBehavior from the subsystem API first
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_redirects_to_clan_leader_on_condition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)