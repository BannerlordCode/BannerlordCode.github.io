---
title: "ScoutEnemyGarrisonsIssueBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoutEnemyGarrisonsIssueBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScoutEnemyGarrisonsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ScoutEnemyGarrisonsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ScoutEnemyGarrisonsIssueBehavior.cs`

## Overview

`ScoutEnemyGarrisonsIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### IsScoutingCompleted
`public bool IsScoutingCompleted()`

**Purpose:** Handles logic related to `is scouting completed`.

### SetScoutingCompleted
`public void SetScoutingCompleted()`

**Purpose:** Sets the value or state of `scouting completed`.

### ResetCurrentProgress
`public void ResetCurrentProgress()`

**Purpose:** Resets `current progress` to its initial state.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
var value = new ScoutEnemyGarrisonsIssueBehavior();
value.GetFrequency();
```

## See Also

- [Complete Class Catalog](../catalog)