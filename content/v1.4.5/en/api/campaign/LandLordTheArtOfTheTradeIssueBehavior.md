---
title: "LandLordTheArtOfTheTradeIssueBehavior"
description: "Auto-generated class reference for LandLordTheArtOfTheTradeIssueBehavior."
---
# LandLordTheArtOfTheTradeIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandLordTheArtOfTheTradeIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LandLordTheArtOfTheTradeIssueBehavior.cs`

## Overview

`LandLordTheArtOfTheTradeIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of LandLordTheArtOfTheTradeIssueBehavior from the subsystem API first
LandLordTheArtOfTheTradeIssueBehavior landLordTheArtOfTheTradeIssueBehavior = ...;
var result = landLordTheArtOfTheTradeIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LandLordTheArtOfTheTradeIssueBehavior from the subsystem API first
LandLordTheArtOfTheTradeIssueBehavior landLordTheArtOfTheTradeIssueBehavior = ...;
var result = landLordTheArtOfTheTradeIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LandLordTheArtOfTheTradeIssueBehavior from the subsystem API first
LandLordTheArtOfTheTradeIssueBehavior landLordTheArtOfTheTradeIssueBehavior = ...;
var result = landLordTheArtOfTheTradeIssueBehavior.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LandLordTheArtOfTheTradeIssueBehavior from the subsystem API first
LandLordTheArtOfTheTradeIssueBehavior landLordTheArtOfTheTradeIssueBehavior = ...;
landLordTheArtOfTheTradeIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LandLordTheArtOfTheTradeIssueBehavior from the subsystem API first
LandLordTheArtOfTheTradeIssueBehavior landLordTheArtOfTheTradeIssueBehavior = ...;
landLordTheArtOfTheTradeIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of LandLordTheArtOfTheTradeIssueBehavior from the subsystem API first
LandLordTheArtOfTheTradeIssueBehavior landLordTheArtOfTheTradeIssueBehavior = ...;
landLordTheArtOfTheTradeIssueBehavior.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LandLordTheArtOfTheTradeIssueBehavior landLordTheArtOfTheTradeIssueBehavior = ...;
landLordTheArtOfTheTradeIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)