---
title: "CrimeCampaignBehavior"
description: "Auto-generated class reference for CrimeCampaignBehavior."
---
# CrimeCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CrimeCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs`

## Overview

`CrimeCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CrimeCampaignBehavior from the subsystem API first
CrimeCampaignBehavior crimeCampaignBehavior = ...;
crimeCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of CrimeCampaignBehavior from the subsystem API first
CrimeCampaignBehavior crimeCampaignBehavior = ...;
crimeCampaignBehavior.SyncData(dataStore);
```

### game_menu_town_criminal_on_init
`public static void game_menu_town_criminal_on_init(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.game_menu_town_criminal_on_init(args);
```

### town_inside_criminal_on_init
`public static void town_inside_criminal_on_init(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.town_inside_criminal_on_init(args);
```

### town_discuss_criminal_surrender_on_init
`public static void town_discuss_criminal_surrender_on_init(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.town_discuss_criminal_surrender_on_init(args);
```

### criminal_inside_menu_pay_by_punishment_on_condition
`public static bool criminal_inside_menu_pay_by_punishment_on_condition(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_pay_by_punishment_on_condition(args);
```

### criminal_inside_menu_pay_by_punishment_on_consequence
`public static void criminal_inside_menu_pay_by_punishment_on_consequence(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_pay_by_punishment_on_consequence(args);
```

### criminal_inside_menu_give_money_on_condition
`public static bool criminal_inside_menu_give_money_on_condition(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_give_money_on_condition(args);
```

### criminal_inside_menu_give_money_on_consequence
`public static void criminal_inside_menu_give_money_on_consequence(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_give_money_on_consequence(args);
```

### criminal_inside_menu_give_influence_on_condition
`public static bool criminal_inside_menu_give_influence_on_condition(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_give_influence_on_condition(args);
```

### criminal_inside_menu_give_influence_on_consequence
`public static void criminal_inside_menu_give_influence_on_consequence(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_give_influence_on_consequence(args);
```

### criminal_inside_menu_give_punishment_and_money_on_condition
`public static bool criminal_inside_menu_give_punishment_and_money_on_condition(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_give_punishment_and_money_on_condition(args);
```

### criminal_inside_menu_give_punishment_and_money_on_consequence
`public static void criminal_inside_menu_give_punishment_and_money_on_consequence(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_give_punishment_and_money_on_consequence(args);
```

### criminal_inside_menu_give_your_life_on_condition
`public static bool criminal_inside_menu_give_your_life_on_condition(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_give_your_life_on_condition(args);
```

### criminal_inside_menu_give_your_life_on_consequence
`public static void criminal_inside_menu_give_your_life_on_consequence(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_give_your_life_on_consequence(args);
```

### criminal_inside_menu_ignore_charges_on_condition
`public static bool criminal_inside_menu_ignore_charges_on_condition(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_ignore_charges_on_condition(args);
```

### criminal_inside_menu_ignore_charges_on_consequence
`public static void criminal_inside_menu_ignore_charges_on_consequence(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.criminal_inside_menu_ignore_charges_on_consequence(args);
```

### town_discuss_criminal_surrender_back_on_consequence
`public static void town_discuss_criminal_surrender_back_on_consequence(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.town_discuss_criminal_surrender_back_on_consequence(args);
```

### town_discuss_criminal_surrender_on_condition
`public static bool town_discuss_criminal_surrender_on_condition(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrimeCampaignBehavior.town_discuss_criminal_surrender_on_condition(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CrimeCampaignBehavior crimeCampaignBehavior = ...;
crimeCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)