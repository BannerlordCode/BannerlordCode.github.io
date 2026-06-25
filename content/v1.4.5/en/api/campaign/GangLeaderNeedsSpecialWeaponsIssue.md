---
title: "GangLeaderNeedsSpecialWeaponsIssue"
description: "Auto-generated class reference for GangLeaderNeedsSpecialWeaponsIssue."
---
# GangLeaderNeedsSpecialWeaponsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GangLeaderNeedsSpecialWeaponsIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/GangLeaderNeedsSpecialWeaponsIssueBehavior.cs`

## Overview

`GangLeaderNeedsSpecialWeaponsIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssue from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssue gangLeaderNeedsSpecialWeaponsIssue = ...;
var result = gangLeaderNeedsSpecialWeaponsIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssue from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssue gangLeaderNeedsSpecialWeaponsIssue = ...;
var result = gangLeaderNeedsSpecialWeaponsIssue.IssueStayAliveConditions();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssue from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssue gangLeaderNeedsSpecialWeaponsIssue = ...;
gangLeaderNeedsSpecialWeaponsIssue.OnFailed();
```

### OnCanceled
`public override void OnCanceled()`

**Purpose:** Invoked when the canceled event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssue from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssue gangLeaderNeedsSpecialWeaponsIssue = ...;
gangLeaderNeedsSpecialWeaponsIssue.OnCanceled();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssue from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssue gangLeaderNeedsSpecialWeaponsIssue = ...;
gangLeaderNeedsSpecialWeaponsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GangLeaderNeedsSpecialWeaponsIssue from the subsystem API first
GangLeaderNeedsSpecialWeaponsIssue gangLeaderNeedsSpecialWeaponsIssue = ...;
gangLeaderNeedsSpecialWeaponsIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GangLeaderNeedsSpecialWeaponsIssue gangLeaderNeedsSpecialWeaponsIssue = ...;
gangLeaderNeedsSpecialWeaponsIssue.GetFrequency();
```

## See Also

- [Area Index](../)