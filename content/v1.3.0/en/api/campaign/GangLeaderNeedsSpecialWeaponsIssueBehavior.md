---
title: "GangLeaderNeedsSpecialWeaponsIssueBehavior"
description: "Auto-generated class reference for GangLeaderNeedsSpecialWeaponsIssueBehavior."
---
# GangLeaderNeedsSpecialWeaponsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GangLeaderNeedsSpecialWeaponsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsSpecialWeaponsIssueBehavior.cs`

## Overview

`GangLeaderNeedsSpecialWeaponsIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfDaggersRequested` | `public int NumberOfDaggersRequested { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssueBehavior from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssueBehavior gangLeaderNeedsSpecialWeaponsIssueBehavior = ...;
gangLeaderNeedsSpecialWeaponsIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssueBehavior from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssueBehavior gangLeaderNeedsSpecialWeaponsIssueBehavior = ...;
gangLeaderNeedsSpecialWeaponsIssueBehavior.SyncData(dataStore);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssueBehavior from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssueBehavior gangLeaderNeedsSpecialWeaponsIssueBehavior = ...;
var result = gangLeaderNeedsSpecialWeaponsIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssueBehavior from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssueBehavior gangLeaderNeedsSpecialWeaponsIssueBehavior = ...;
var result = gangLeaderNeedsSpecialWeaponsIssueBehavior.IssueStayAliveConditions();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssueBehavior from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssueBehavior gangLeaderNeedsSpecialWeaponsIssueBehavior = ...;
gangLeaderNeedsSpecialWeaponsIssueBehavior.OnFailed();
```

### OnCanceled
`public override void OnCanceled()`

**Purpose:** Invoked when the canceled event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssueBehavior from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssueBehavior gangLeaderNeedsSpecialWeaponsIssueBehavior = ...;
gangLeaderNeedsSpecialWeaponsIssueBehavior.OnCanceled();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GangLeaderNeedsSpecialWeaponsIssueBehavior gangLeaderNeedsSpecialWeaponsIssueBehavior = ...;
gangLeaderNeedsSpecialWeaponsIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)