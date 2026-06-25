---
title: "ProdigalSonIssueQuest"
description: "Auto-generated class reference for ProdigalSonIssueQuest."
---
# ProdigalSonIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class ProdigalSonIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `SandBox/Issues/ProdigalSonIssueBehavior.cs`

## Overview

`ProdigalSonIssueQuest` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of ProdigalSonIssueQuest from the subsystem API first
ProdigalSonIssueQuest prodigalSonIssueQuest = ...;
prodigalSonIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public override void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can move to settlement info is requested event is raised.

```csharp
// Obtain an instance of ProdigalSonIssueQuest from the subsystem API first
ProdigalSonIssueQuest prodigalSonIssueQuest = ...;
prodigalSonIssueQuest.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProdigalSonIssueQuest prodigalSonIssueQuest = ...;
prodigalSonIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Area Index](../)