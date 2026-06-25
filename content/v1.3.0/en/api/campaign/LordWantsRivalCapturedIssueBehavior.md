---
title: "LordWantsRivalCapturedIssueBehavior"
description: "Auto-generated class reference for LordWantsRivalCapturedIssueBehavior."
---
# LordWantsRivalCapturedIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordWantsRivalCapturedIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/LordWantsRivalCapturedIssueBehavior.cs`

## Overview

`LordWantsRivalCapturedIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LordWantsRivalCapturedIssueBehavior from the subsystem API first
LordWantsRivalCapturedIssueBehavior lordWantsRivalCapturedIssueBehavior = ...;
lordWantsRivalCapturedIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of LordWantsRivalCapturedIssueBehavior from the subsystem API first
LordWantsRivalCapturedIssueBehavior lordWantsRivalCapturedIssueBehavior = ...;
lordWantsRivalCapturedIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of LordWantsRivalCapturedIssueBehavior from the subsystem API first
LordWantsRivalCapturedIssueBehavior lordWantsRivalCapturedIssueBehavior = ...;
lordWantsRivalCapturedIssueBehavior.OnCheckForIssue(hero);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of LordWantsRivalCapturedIssueBehavior from the subsystem API first
LordWantsRivalCapturedIssueBehavior lordWantsRivalCapturedIssueBehavior = ...;
var result = lordWantsRivalCapturedIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of LordWantsRivalCapturedIssueBehavior from the subsystem API first
LordWantsRivalCapturedIssueBehavior lordWantsRivalCapturedIssueBehavior = ...;
var result = lordWantsRivalCapturedIssueBehavior.IssueStayAliveConditions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LordWantsRivalCapturedIssueBehavior lordWantsRivalCapturedIssueBehavior = ...;
lordWantsRivalCapturedIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)