---
title: "FollowAgentQuestTask"
description: "Auto-generated class reference for FollowAgentQuestTask."
---
# FollowAgentQuestTask

**Namespace:** SandBox.Issues.IssueQuestTasks
**Module:** SandBox.Issues
**Type:** `public class FollowAgentQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues.IssueQuestTasks/FollowAgentQuestTask.cs`

## Overview

`FollowAgentQuestTask` lives in `SandBox.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MissionTick
`public void MissionTick(float dt)`

**Purpose:** **Purpose:** Executes the MissionTick logic.

```csharp
// Obtain an instance of FollowAgentQuestTask from the subsystem API first
FollowAgentQuestTask followAgentQuestTask = ...;
followAgentQuestTask.MissionTick(0);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** **Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of FollowAgentQuestTask from the subsystem API first
FollowAgentQuestTask followAgentQuestTask = ...;
followAgentQuestTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FollowAgentQuestTask followAgentQuestTask = ...;
followAgentQuestTask.MissionTick(0);
```

## See Also

- [Area Index](../)