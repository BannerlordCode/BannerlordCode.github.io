---
title: "Number"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Number`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Number

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Number`
**Area:** campaign-ext

## Overview

`Number` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetConversationHeroPoliticalPhilosophy
`public bool GetConversationHeroPoliticalPhilosophy(out TextObject philosophyString)`

**Purpose:** Gets the current value of `conversation hero political philosophy`.

### GetConversationHeroPoliticalPhilosophy_2
`public bool GetConversationHeroPoliticalPhilosophy_2(out TextObject philosophyString_2)`

**Purpose:** Gets the current value of `conversation hero political philosophy_2`.

### GetConversationHeroPoliticalPhilosophy_3
`public bool GetConversationHeroPoliticalPhilosophy_3(out TextObject philosophyString_3)`

**Purpose:** Gets the current value of `conversation hero political philosophy_3`.

### GetLiegeTitle
`public TextObject GetLiegeTitle()`

**Purpose:** Gets the current value of `liege title`.

### UsesLordConversations
`public bool UsesLordConversations(Hero hero)`

**Purpose:** Handles logic related to `uses lord conversations`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### conversation_player_marriage_list_options_on_consequence
`public static void conversation_player_marriage_list_options_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_marriage_list_options_on_consequence`.

### conversation_player_marriage_select_on_condition
`public bool conversation_player_marriage_select_on_condition()`

**Purpose:** Handles logic related to `conversation_player_marriage_select_on_condition`.

### conversation_player_marriage_on_consequence
`public void conversation_player_marriage_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_marriage_on_consequence`.

### conversation_player_marriage_on_refusal_consequence
`public void conversation_player_marriage_on_refusal_consequence()`

**Purpose:** Handles logic related to `conversation_player_marriage_on_refusal_consequence`.

### conversation_player_children_marriage_on_condition
`public bool conversation_player_children_marriage_on_condition()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_on_condition`.

### conversation_player_children_marriage_list_options_on_consequence
`public void conversation_player_children_marriage_list_options_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_list_options_on_consequence`.

### conversation_player_children_marriage_select_on_condition
`public bool conversation_player_children_marriage_select_on_condition()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_select_on_condition`.

### conversation_player_children_marriage_on_consequence
`public void conversation_player_children_marriage_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_on_consequence`.

### conversation_player_children_marriage_on_refusal_consequence
`public void conversation_player_children_marriage_on_refusal_consequence()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_on_refusal_consequence`.

### conversation_wanderer_generic_introduction_on_condition
`public bool conversation_wanderer_generic_introduction_on_condition()`

**Purpose:** Handles logic related to `conversation_wanderer_generic_introduction_on_condition`.

### conversation_lord_active_mission_response_cont_on_condition
`public bool conversation_lord_active_mission_response_cont_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_active_mission_response_cont_on_condition`.

### conversation_mission_in_progress_on_condition
`public bool conversation_mission_in_progress_on_condition()`

**Purpose:** Handles logic related to `conversation_mission_in_progress_on_condition`.

### conversation_lord_active_mission_response_failed_on_condition
`public bool conversation_lord_active_mission_response_failed_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_active_mission_response_failed_on_condition`.

## Usage Example

```csharp
// First obtain a Number instance from game state, then call one of its public methods
var value = new Number();
value.GetConversationHeroPoliticalPhilosophy(philosophyString);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
