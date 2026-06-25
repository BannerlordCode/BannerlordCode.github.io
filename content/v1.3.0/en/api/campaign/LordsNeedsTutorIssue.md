---
title: "LordsNeedsTutorIssue"
description: "Auto-generated class reference for LordsNeedsTutorIssue."
---
# LordsNeedsTutorIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordsNeedsTutorIssue`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/LordsNeedsTutorIssueBehavior.cs`

## Overview

`LordsNeedsTutorIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.SyncData(dataStore);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
var result = lordsNeedsTutorIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
var result = lordsNeedsTutorIssue.IssueStayAliveConditions();
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can be selected in inventory info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have party role or be governor info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can lead party info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMarryInfoIsRequested
`public override void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can marry info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.OnHeroCanMarryInfoIsRequested(hero, result);
```

### OnHeroGainedSkill
`public void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**Purpose:** **Purpose:** Invoked when the hero gained skill event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssue from the subsystem API first
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.OnHeroGainedSkill(hero, skill, 0, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LordsNeedsTutorIssue lordsNeedsTutorIssue = ...;
lordsNeedsTutorIssue.RegisterEvents();
```

## See Also

- [Area Index](../)