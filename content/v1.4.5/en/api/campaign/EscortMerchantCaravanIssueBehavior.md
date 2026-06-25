---
title: "EscortMerchantCaravanIssueBehavior"
description: "Auto-generated class reference for EscortMerchantCaravanIssueBehavior."
---
# EscortMerchantCaravanIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EscortMerchantCaravanIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/EscortMerchantCaravanIssueBehavior.cs`

## Overview

`EscortMerchantCaravanIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of EscortMerchantCaravanIssueBehavior from the subsystem API first
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
var result = escortMerchantCaravanIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of EscortMerchantCaravanIssueBehavior from the subsystem API first
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
var result = escortMerchantCaravanIssueBehavior.AlternativeSolutionCondition(explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of EscortMerchantCaravanIssueBehavior from the subsystem API first
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
var result = escortMerchantCaravanIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of EscortMerchantCaravanIssueBehavior from the subsystem API first
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
var result = escortMerchantCaravanIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of EscortMerchantCaravanIssueBehavior from the subsystem API first
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
var result = escortMerchantCaravanIssueBehavior.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of EscortMerchantCaravanIssueBehavior from the subsystem API first
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
escortMerchantCaravanIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of EscortMerchantCaravanIssueBehavior from the subsystem API first
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
escortMerchantCaravanIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of EscortMerchantCaravanIssueBehavior from the subsystem API first
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
escortMerchantCaravanIssueBehavior.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EscortMerchantCaravanIssueBehavior escortMerchantCaravanIssueBehavior = ...;
escortMerchantCaravanIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)