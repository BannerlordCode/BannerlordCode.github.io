---
title: "BeginConversationInitiatedByAIQuestTask"
description: "Auto-generated class reference for BeginConversationInitiatedByAIQuestTask."
---
# BeginConversationInitiatedByAIQuestTask

**Namespace:** SandBox.Issues.IssueQuestTasks
**Module:** SandBox.Issues
**Type:** `public class BeginConversationInitiatedByAIQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `SandBox/Issues/IssueQuestTasks/BeginConversationInitiatedByAIQuestTask.cs`

## Overview

`BeginConversationInitiatedByAIQuestTask` lives in `SandBox.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MissionTick
`public void MissionTick(float dt)`

**Purpose:** **Purpose:** Executes the MissionTick logic.

```csharp
// Obtain an instance of BeginConversationInitiatedByAIQuestTask from the subsystem API first
BeginConversationInitiatedByAIQuestTask beginConversationInitiatedByAIQuestTask = ...;
beginConversationInitiatedByAIQuestTask.MissionTick(0);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** **Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of BeginConversationInitiatedByAIQuestTask from the subsystem API first
BeginConversationInitiatedByAIQuestTask beginConversationInitiatedByAIQuestTask = ...;
beginConversationInitiatedByAIQuestTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BeginConversationInitiatedByAIQuestTask beginConversationInitiatedByAIQuestTask = ...;
beginConversationInitiatedByAIQuestTask.MissionTick(0);
```

## See Also

- [Area Index](../)