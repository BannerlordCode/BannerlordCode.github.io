---
title: "LordsNeedsTutorIssueQuest"
description: "Auto-generated class reference for LordsNeedsTutorIssueQuest."
---
# LordsNeedsTutorIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordsNeedsTutorIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `TaleWorlds.CampaignSystem/Issues/LordsNeedsTutorIssueBehavior.cs`

## Overview

`LordsNeedsTutorIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can be selected in inventory info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueQuest from the subsystem API first
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have party role or be governor info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueQuest from the subsystem API first
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can lead party info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueQuest from the subsystem API first
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueQuest from the subsystem API first
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMarryInfoIsRequested
`public override void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can marry info is requested event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueQuest from the subsystem API first
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanMarryInfoIsRequested(hero, result);
```

### OnHeroGainedSkill
`public void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**Purpose:** Invoked when the hero gained skill event is raised.

```csharp
// Obtain an instance of LordsNeedsTutorIssueQuest from the subsystem API first
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroGainedSkill(hero, skill, 0, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

## See Also

- [Area Index](../)