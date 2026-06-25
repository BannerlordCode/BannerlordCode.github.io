---
title: "GangLeaderNeedsSpecialWeaponsIssueBehavior"
description: "Auto-generated class reference for GangLeaderNeedsSpecialWeaponsIssueBehavior."
---
# GangLeaderNeedsSpecialWeaponsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GangLeaderNeedsSpecialWeaponsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/GangLeaderNeedsSpecialWeaponsIssueBehavior.cs`

## Overview

`GangLeaderNeedsSpecialWeaponsIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GangLeaderNeedsSpecialWeaponsIssueBehavior gangLeaderNeedsSpecialWeaponsIssueBehavior = ...;
gangLeaderNeedsSpecialWeaponsIssueBehavior.GetFrequency();
```

## See Also

- [Area Index](../)