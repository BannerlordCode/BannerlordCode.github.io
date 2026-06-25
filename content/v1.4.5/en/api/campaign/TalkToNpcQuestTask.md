---
title: "TalkToNpcQuestTask"
description: "Auto-generated class reference for TalkToNpcQuestTask."
---
# TalkToNpcQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TalkToNpcQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues.IssueQuestTasks/TalkToNpcQuestTask.cs`

## Overview

`TalkToNpcQuestTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsTaskCharacter
`public bool IsTaskCharacter()`

**Purpose:** **Purpose:** Determines whether the this instance is in the task character state or condition.

```csharp
// Obtain an instance of TalkToNpcQuestTask from the subsystem API first
TalkToNpcQuestTask talkToNpcQuestTask = ...;
var result = talkToNpcQuestTask.IsTaskCharacter();
```

### SetReferences
`public override void SetReferences()`

**Purpose:** **Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of TalkToNpcQuestTask from the subsystem API first
TalkToNpcQuestTask talkToNpcQuestTask = ...;
talkToNpcQuestTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TalkToNpcQuestTask talkToNpcQuestTask = ...;
talkToNpcQuestTask.IsTaskCharacter();
```

## See Also

- [Area Index](../)