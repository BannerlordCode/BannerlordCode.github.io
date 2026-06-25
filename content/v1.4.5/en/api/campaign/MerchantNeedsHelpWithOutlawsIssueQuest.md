---
title: "MerchantNeedsHelpWithOutlawsIssueQuest"
description: "Auto-generated class reference for MerchantNeedsHelpWithOutlawsIssueQuest."
---
# MerchantNeedsHelpWithOutlawsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MerchantNeedsHelpWithOutlawsIssueQuest`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/MerchantNeedsHelpWithOutlawsIssueQuestBehavior.cs`

## Overview

`MerchantNeedsHelpWithOutlawsIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
var result = merchantNeedsHelpWithOutlawsIssueQuest.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
var result = merchantNeedsHelpWithOutlawsIssueQuest.AlternativeSolutionCondition(explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
var result = merchantNeedsHelpWithOutlawsIssueQuest.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
var result = merchantNeedsHelpWithOutlawsIssueQuest.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
var result = merchantNeedsHelpWithOutlawsIssueQuest.IssueStayAliveConditions();
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** **Purpose:** Determines whether the this instance is in the settlement busy state or condition.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
merchantNeedsHelpWithOutlawsIssueQuest.IsSettlementBusy(settlement, asker, priority);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
merchantNeedsHelpWithOutlawsIssueQuest.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
merchantNeedsHelpWithOutlawsIssueQuest.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of MerchantNeedsHelpWithOutlawsIssueQuest from the subsystem API first
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
merchantNeedsHelpWithOutlawsIssueQuest.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MerchantNeedsHelpWithOutlawsIssueQuest merchantNeedsHelpWithOutlawsIssueQuest = ...;
merchantNeedsHelpWithOutlawsIssueQuest.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)