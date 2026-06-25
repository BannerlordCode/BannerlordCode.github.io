---
title: "RuralNotableInnAndOutIssueQuest"
description: "Auto-generated class reference for RuralNotableInnAndOutIssueQuest."
---
# RuralNotableInnAndOutIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RuralNotableInnAndOutIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs`

## Overview

`RuralNotableInnAndOutIssueQuest` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### IsLocationTrackedByQuest
`public override GameMenuOption.IssueQuestFlags IsLocationTrackedByQuest(Location location)`

**Purpose:** Determines whether the this instance is in the location tracked by quest state or condition.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueQuest from the subsystem API first
RuralNotableInnAndOutIssueQuest ruralNotableInnAndOutIssueQuest = ...;
var result = ruralNotableInnAndOutIssueQuest.IsLocationTrackedByQuest(location);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RuralNotableInnAndOutIssueQuest ruralNotableInnAndOutIssueQuest = ...;
ruralNotableInnAndOutIssueQuest.IsLocationTrackedByQuest(location);
```

## See Also

- [Area Index](../)