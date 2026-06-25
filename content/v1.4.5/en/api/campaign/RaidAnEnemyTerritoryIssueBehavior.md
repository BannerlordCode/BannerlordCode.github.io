---
title: "RaidAnEnemyTerritoryIssueBehavior"
description: "Auto-generated class reference for RaidAnEnemyTerritoryIssueBehavior."
---
# RaidAnEnemyTerritoryIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaidAnEnemyTerritoryIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RaidAnEnemyTerritoryIssueBehavior.cs`

## Overview

`RaidAnEnemyTerritoryIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of RaidAnEnemyTerritoryIssueBehavior from the subsystem API first
RaidAnEnemyTerritoryIssueBehavior raidAnEnemyTerritoryIssueBehavior = ...;
var result = raidAnEnemyTerritoryIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of RaidAnEnemyTerritoryIssueBehavior from the subsystem API first
RaidAnEnemyTerritoryIssueBehavior raidAnEnemyTerritoryIssueBehavior = ...;
var result = raidAnEnemyTerritoryIssueBehavior.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RaidAnEnemyTerritoryIssueBehavior from the subsystem API first
RaidAnEnemyTerritoryIssueBehavior raidAnEnemyTerritoryIssueBehavior = ...;
raidAnEnemyTerritoryIssueBehavior.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of RaidAnEnemyTerritoryIssueBehavior from the subsystem API first
RaidAnEnemyTerritoryIssueBehavior raidAnEnemyTerritoryIssueBehavior = ...;
raidAnEnemyTerritoryIssueBehavior.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of RaidAnEnemyTerritoryIssueBehavior from the subsystem API first
RaidAnEnemyTerritoryIssueBehavior raidAnEnemyTerritoryIssueBehavior = ...;
raidAnEnemyTerritoryIssueBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RaidAnEnemyTerritoryIssueBehavior raidAnEnemyTerritoryIssueBehavior = ...;
raidAnEnemyTerritoryIssueBehavior.GetFrequency();
```

## See Also

- [Area Index](../)