---
title: "CrimeCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CrimeCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CrimeCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CrimeCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CrimeCampaignBehavior.cs`

## Overview

`CrimeCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### game_menu_town_criminal_on_init
`public static void game_menu_town_criminal_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_criminal_on_init`.

### town_inside_criminal_on_init
`public static void town_inside_criminal_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `town_inside_criminal_on_init`.

### town_discuss_criminal_surrender_on_init
`public static void town_discuss_criminal_surrender_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `town_discuss_criminal_surrender_on_init`.

### criminal_inside_menu_pay_by_punishment_on_condition
`public static bool criminal_inside_menu_pay_by_punishment_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_pay_by_punishment_on_condition`.

### criminal_inside_menu_pay_by_punishment_on_consequence
`public static void criminal_inside_menu_pay_by_punishment_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_pay_by_punishment_on_consequence`.

### criminal_inside_menu_give_money_on_condition
`public static bool criminal_inside_menu_give_money_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_give_money_on_condition`.

### criminal_inside_menu_give_money_on_consequence
`public static void criminal_inside_menu_give_money_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_give_money_on_consequence`.

### criminal_inside_menu_give_influence_on_condition
`public static bool criminal_inside_menu_give_influence_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_give_influence_on_condition`.

### criminal_inside_menu_give_influence_on_consequence
`public static void criminal_inside_menu_give_influence_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_give_influence_on_consequence`.

### criminal_inside_menu_give_punishment_and_money_on_condition
`public static bool criminal_inside_menu_give_punishment_and_money_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_give_punishment_and_money_on_condition`.

### criminal_inside_menu_give_punishment_and_money_on_consequence
`public static void criminal_inside_menu_give_punishment_and_money_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_give_punishment_and_money_on_consequence`.

### criminal_inside_menu_give_your_life_on_condition
`public static bool criminal_inside_menu_give_your_life_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_give_your_life_on_condition`.

### criminal_inside_menu_give_your_life_on_consequence
`public static void criminal_inside_menu_give_your_life_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_give_your_life_on_consequence`.

### criminal_inside_menu_ignore_charges_on_condition
`public static bool criminal_inside_menu_ignore_charges_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_ignore_charges_on_condition`.

### criminal_inside_menu_ignore_charges_on_consequence
`public static void criminal_inside_menu_ignore_charges_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `criminal_inside_menu_ignore_charges_on_consequence`.

### town_discuss_criminal_surrender_back_on_consequence
`public static void town_discuss_criminal_surrender_back_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `town_discuss_criminal_surrender_back_on_consequence`.

### town_discuss_criminal_surrender_on_condition
`public static bool town_discuss_criminal_surrender_on_condition(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `town_discuss_criminal_surrender_on_condition`.

## Usage Example

```csharp
var value = new CrimeCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)