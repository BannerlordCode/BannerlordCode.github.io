---
title: "LordDefectionCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LordDefectionCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LordDefectionCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordDefectionCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/LordDefectionCampaignBehavior.cs`

## Overview

`LordDefectionCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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

### ClearPersuasion
`public void ClearPersuasion()`

**Purpose:** Handles logic related to `clear persuasion`.

### conversation_lord_player_has_failed_in_defection_on_condition
`public bool conversation_lord_player_has_failed_in_defection_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_player_has_failed_in_defection_on_condition`.

### conversation_lord_recruit_check_if_reservations_met_on_condition
`public bool conversation_lord_recruit_check_if_reservations_met_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_recruit_check_if_reservations_met_on_condition`.

### conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition
`public bool conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition`.

### conversation_lord_defect_to_clan_without_barter_on_consequence
`public void conversation_lord_defect_to_clan_without_barter_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_defect_to_clan_without_barter_on_consequence`.

### conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition
`public bool conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition`.

### conversation_player_is_asking_to_recruit_enemy_on_condition
`public bool conversation_player_is_asking_to_recruit_enemy_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_asking_to_recruit_enemy_on_condition`.

### conversation_player_is_asking_to_recruit_neutral_on_condition
`public bool conversation_player_is_asking_to_recruit_neutral_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_asking_to_recruit_neutral_on_condition`.

### conversation_lord_from_ruling_clan_on_condition
`public bool conversation_lord_from_ruling_clan_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_from_ruling_clan_on_condition`.

### conversation_lord_redirects_to_clan_leader_on_condition
`public bool conversation_lord_redirects_to_clan_leader_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_redirects_to_clan_leader_on_condition`.

## Usage Example

```csharp
var value = new LordDefectionCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)