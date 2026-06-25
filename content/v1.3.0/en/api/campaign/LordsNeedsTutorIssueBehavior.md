---
title: "LordsNeedsTutorIssueBehavior"
description: "Auto-generated class reference for LordsNeedsTutorIssueBehavior."
---
# LordsNeedsTutorIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordsNeedsTutorIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/LordsNeedsTutorIssueBehavior.cs`

## Overview

`LordsNeedsTutorIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
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
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.SyncData(dataStore);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
var result = lordsNeedsTutorIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
var result = lordsNeedsTutorIssueBehavior.IssueStayAliveConditions();
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can be selected in inventory info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have party role or be governor info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can lead party info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMarryInfoIsRequested
`public override void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can marry info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.OnHeroCanMarryInfoIsRequested(hero, result);
```

### OnHeroGainedSkill
`public void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**Purpose:** Invoked when the hero gained skill event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueBehavior from the subsystem API first
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.OnHeroGainedSkill(hero, skill, 0, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LordsNeedsTutorIssueBehavior lordsNeedsTutorIssueBehavior = ...;
lordsNeedsTutorIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)