---
title: "NotableWantsDaughterFoundIssueQuest"
description: "Auto-generated class reference for NotableWantsDaughterFoundIssueQuest."
---
# NotableWantsDaughterFoundIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class NotableWantsDaughterFoundIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `SandBox/Issues/NotableWantsDaughterFoundIssueBehavior.cs`

## Overview

`NotableWantsDaughterFoundIssueQuest` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**Purpose:** Invoked when the before mission opened event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueQuest from the subsystem API first
NotableWantsDaughterFoundIssueQuest notableWantsDaughterFoundIssueQuest = ...;
notableWantsDaughterFoundIssueQuest.OnBeforeMissionOpened();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueQuest from the subsystem API first
NotableWantsDaughterFoundIssueQuest notableWantsDaughterFoundIssueQuest = ...;
notableWantsDaughterFoundIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public override void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can move to settlement info is requested event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueQuest from the subsystem API first
NotableWantsDaughterFoundIssueQuest notableWantsDaughterFoundIssueQuest = ...;
notableWantsDaughterFoundIssueQuest.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NotableWantsDaughterFoundIssueQuest notableWantsDaughterFoundIssueQuest = ...;
notableWantsDaughterFoundIssueQuest.OnBeforeMissionOpened();
```

## See Also

- [Area Index](../)