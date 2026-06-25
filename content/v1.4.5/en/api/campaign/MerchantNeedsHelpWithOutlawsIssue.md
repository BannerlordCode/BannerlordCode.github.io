---
title: "MerchantNeedsHelpWithOutlawsIssue"
description: "Auto-generated class reference for MerchantNeedsHelpWithOutlawsIssue."
---
# MerchantNeedsHelpWithOutlawsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MerchantNeedsHelpWithOutlawsIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/MerchantNeedsHelpWithOutlawsIssueQuestBehavior.cs`

## Overview

`MerchantNeedsHelpWithOutlawsIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
var result = merchantNeedsHelpWithOutlawsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
var result = merchantNeedsHelpWithOutlawsIssue.AlternativeSolutionCondition(explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
var result = merchantNeedsHelpWithOutlawsIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
var result = merchantNeedsHelpWithOutlawsIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
var result = merchantNeedsHelpWithOutlawsIssue.IssueStayAliveConditions();
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Determines whether the this instance is in the settlement busy state or condition.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
merchantNeedsHelpWithOutlawsIssue.IsSettlementBusy(settlement, asker, priority);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
merchantNeedsHelpWithOutlawsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
merchantNeedsHelpWithOutlawsIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssue from the subsystem API first
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
merchantNeedsHelpWithOutlawsIssue.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MerchantNeedsHelpWithOutlawsIssue merchantNeedsHelpWithOutlawsIssue = ...;
merchantNeedsHelpWithOutlawsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)