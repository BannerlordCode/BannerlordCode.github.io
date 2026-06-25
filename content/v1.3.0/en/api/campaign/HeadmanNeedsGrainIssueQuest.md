---
title: "HeadmanNeedsGrainIssueQuest"
description: "Auto-generated class reference for HeadmanNeedsGrainIssueQuest."
---
# HeadmanNeedsGrainIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanNeedsGrainIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `TaleWorlds.CampaignSystem/Issues/HeadmanNeedsGrainIssueBehavior.cs`

## Overview

`HeadmanNeedsGrainIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
HeadmanNeedsGrainIssueQuest instance = ...;
```

## See Also

- [Area Index](../)