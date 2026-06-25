---
title: "LordNeedsHorsesIssue"
description: "Auto-generated class reference for LordNeedsHorsesIssue."
---
# LordNeedsHorsesIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordNeedsHorsesIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LordNeedsHorsesIssueBehavior.cs`

## Overview

`LordNeedsHorsesIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
var result = lordNeedsHorsesIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
var result = lordNeedsHorsesIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
var result = lordNeedsHorsesIssue.AlternativeSolutionCondition(explanation);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
lordNeedsHorsesIssue.AlternativeSolutionStartConsequence();
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
var result = lordNeedsHorsesIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
var result = lordNeedsHorsesIssue.IssueStayAliveConditions();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
lordNeedsHorsesIssue.OnFailed();
```

### ComputeMountsOverInfantryCountRatio
`public static float ComputeMountsOverInfantryCountRatio(MobileParty issueParty, out int numInfantry)`

**Purpose:** Executes the ComputeMountsOverInfantryCountRatio logic.

```csharp
// Static call; no instance required
LordNeedsHorsesIssue.ComputeMountsOverInfantryCountRatio(issueParty, numInfantry);
```

### IsMountCamel
`public static bool IsMountCamel(ItemObject mountObject)`

**Purpose:** Determines whether the this instance is in the mount camel state or condition.

```csharp
// Static call; no instance required
LordNeedsHorsesIssue.IsMountCamel(mountObject);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
lordNeedsHorsesIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LordNeedsHorsesIssue from the subsystem API first
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
lordNeedsHorsesIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LordNeedsHorsesIssue lordNeedsHorsesIssue = ...;
lordNeedsHorsesIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)