---
title: "LordNeedsHorsesIssueQuest"
description: "Auto-generated class reference for LordNeedsHorsesIssueQuest."
---
# LordNeedsHorsesIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordNeedsHorsesIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LordNeedsHorsesIssueBehavior.cs`

## Overview

`LordNeedsHorsesIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnFailed
`public override void OnFailed()`

**Purpose:** **Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of LordNeedsHorsesIssueQuest from the subsystem API first
LordNeedsHorsesIssueQuest lordNeedsHorsesIssueQuest = ...;
lordNeedsHorsesIssueQuest.OnFailed();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LordNeedsHorsesIssueQuest lordNeedsHorsesIssueQuest = ...;
lordNeedsHorsesIssueQuest.OnFailed();
```

## See Also

- [Area Index](../)