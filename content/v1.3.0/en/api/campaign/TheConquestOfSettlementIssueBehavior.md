---
title: "TheConquestOfSettlementIssueBehavior"
description: "Auto-generated class reference for TheConquestOfSettlementIssueBehavior."
---
# TheConquestOfSettlementIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TheConquestOfSettlementIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/TheConquestOfSettlementIssueBehavior.cs`

## Overview

`TheConquestOfSettlementIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TheConquestOfSettlementIssueBehavior from the subsystem API first
TheConquestOfSettlementIssueBehavior theConquestOfSettlementIssueBehavior = ...;
theConquestOfSettlementIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of TheConquestOfSettlementIssueBehavior from the subsystem API first
TheConquestOfSettlementIssueBehavior theConquestOfSettlementIssueBehavior = ...;
theConquestOfSettlementIssueBehavior.SyncData(dataStore);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of TheConquestOfSettlementIssueBehavior from the subsystem API first
TheConquestOfSettlementIssueBehavior theConquestOfSettlementIssueBehavior = ...;
var result = theConquestOfSettlementIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of TheConquestOfSettlementIssueBehavior from the subsystem API first
TheConquestOfSettlementIssueBehavior theConquestOfSettlementIssueBehavior = ...;
var result = theConquestOfSettlementIssueBehavior.IssueStayAliveConditions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TheConquestOfSettlementIssueBehavior theConquestOfSettlementIssueBehavior = ...;
theConquestOfSettlementIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)