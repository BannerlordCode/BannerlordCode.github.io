---
title: "LordNeedsHorsesIssueBehavior"
description: "Auto-generated class reference for LordNeedsHorsesIssueBehavior."
---
# LordNeedsHorsesIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordNeedsHorsesIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LordNeedsHorsesIssueBehavior.cs`

## Overview

`LordNeedsHorsesIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
var result = lordNeedsHorsesIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
var result = lordNeedsHorsesIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
var result = lordNeedsHorsesIssueBehavior.AlternativeSolutionCondition(explanation);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** **Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
lordNeedsHorsesIssueBehavior.AlternativeSolutionStartConsequence();
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
var result = lordNeedsHorsesIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
var result = lordNeedsHorsesIssueBehavior.IssueStayAliveConditions();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** **Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
lordNeedsHorsesIssueBehavior.OnFailed();
```

### ComputeMountsOverInfantryCountRatio
`public static float ComputeMountsOverInfantryCountRatio(MobileParty issueParty, out int numInfantry)`

**Purpose:** **Purpose:** Executes the ComputeMountsOverInfantryCountRatio logic.

```csharp
// Static call; no instance required
LordNeedsHorsesIssueBehavior.ComputeMountsOverInfantryCountRatio(issueParty, numInfantry);
```

### IsMountCamel
`public static bool IsMountCamel(ItemObject mountObject)`

**Purpose:** **Purpose:** Determines whether the this instance is in the mount camel state or condition.

```csharp
// Static call; no instance required
LordNeedsHorsesIssueBehavior.IsMountCamel(mountObject);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
lordNeedsHorsesIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LordNeedsHorsesIssueBehavior from the subsystem API first
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
lordNeedsHorsesIssueBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LordNeedsHorsesIssueBehavior lordNeedsHorsesIssueBehavior = ...;
lordNeedsHorsesIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)