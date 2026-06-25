---
title: "LandLordCompanyOfTroubleIssue"
description: "Auto-generated class reference for LandLordCompanyOfTroubleIssue."
---
# LandLordCompanyOfTroubleIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandLordCompanyOfTroubleIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LandLordCompanyOfTroubleIssueBehavior.cs`

## Overview

`LandLordCompanyOfTroubleIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LandLordCompanyOfTroubleIssue from the subsystem API first
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
var result = landLordCompanyOfTroubleIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LandLordCompanyOfTroubleIssue from the subsystem API first
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
var result = landLordCompanyOfTroubleIssue.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LandLordCompanyOfTroubleIssue from the subsystem API first
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
landLordCompanyOfTroubleIssue.RegisterEvents();
```

### company_of_trouble_menu_game_menu_on_init_background
`public static void company_of_trouble_menu_game_menu_on_init_background(MenuCallbackArgs args)`

**Purpose:** **Purpose:** Executes the company_of_trouble_menu_game_menu_on_init_background logic.

```csharp
// Static call; no instance required
LandLordCompanyOfTroubleIssue.company_of_trouble_menu_game_menu_on_init_background(args);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of LandLordCompanyOfTroubleIssue from the subsystem API first
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
landLordCompanyOfTroubleIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LandLordCompanyOfTroubleIssue from the subsystem API first
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
landLordCompanyOfTroubleIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
landLordCompanyOfTroubleIssue.GetFrequency();
```

## See Also

- [Area Index](../)