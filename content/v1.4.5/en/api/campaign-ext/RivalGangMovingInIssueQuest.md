---
title: "RivalGangMovingInIssueQuest"
description: "Auto-generated class reference for RivalGangMovingInIssueQuest."
---
# RivalGangMovingInIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RivalGangMovingInIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/RivalGangMovingInIssueBehavior.cs`

## Overview

`RivalGangMovingInIssueQuest` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnHeroCanDieInfoIsRequested
`public override void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can die info is requested event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssueQuest from the subsystem API first
RivalGangMovingInIssueQuest rivalGangMovingInIssueQuest = ...;
rivalGangMovingInIssueQuest.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssueQuest from the subsystem API first
RivalGangMovingInIssueQuest rivalGangMovingInIssueQuest = ...;
rivalGangMovingInIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RivalGangMovingInIssueQuest rivalGangMovingInIssueQuest = ...;
rivalGangMovingInIssueQuest.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

## See Also

- [Area Index](../)