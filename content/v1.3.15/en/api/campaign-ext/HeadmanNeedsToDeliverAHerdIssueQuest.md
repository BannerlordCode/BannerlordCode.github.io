---
title: "HeadmanNeedsToDeliverAHerdIssueQuest"
description: "Auto-generated class reference for HeadmanNeedsToDeliverAHerdIssueQuest."
---
# HeadmanNeedsToDeliverAHerdIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanNeedsToDeliverAHerdIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `TaleWorlds.CampaignSystem/Issues/HeadmanNeedsToDeliverAHerdIssueBehavior.cs`

## Overview

`HeadmanNeedsToDeliverAHerdIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public sealed override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### OnCanceled
`public override void OnCanceled()`

**Purpose:** Invoked when the canceled event is raised.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssueQuest from the subsystem API first
HeadmanNeedsToDeliverAHerdIssueQuest headmanNeedsToDeliverAHerdIssueQuest = ...;
headmanNeedsToDeliverAHerdIssueQuest.OnCanceled();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssueQuest from the subsystem API first
HeadmanNeedsToDeliverAHerdIssueQuest headmanNeedsToDeliverAHerdIssueQuest = ...;
headmanNeedsToDeliverAHerdIssueQuest.OnFailed();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssueQuest from the subsystem API first
HeadmanNeedsToDeliverAHerdIssueQuest headmanNeedsToDeliverAHerdIssueQuest = ...;
headmanNeedsToDeliverAHerdIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeadmanNeedsToDeliverAHerdIssueQuest headmanNeedsToDeliverAHerdIssueQuest = ...;
headmanNeedsToDeliverAHerdIssueQuest.OnCanceled();
```

## See Also

- [Area Index](../)