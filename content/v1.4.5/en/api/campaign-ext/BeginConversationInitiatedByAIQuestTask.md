---
title: "BeginConversationInitiatedByAIQuestTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BeginConversationInitiatedByAIQuestTask`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BeginConversationInitiatedByAIQuestTask

**Namespace:** SandBox.Issues.IssueQuestTasks
**Module:** SandBox.Issues
**Type:** `public class BeginConversationInitiatedByAIQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Issues.IssueQuestTasks/BeginConversationInitiatedByAIQuestTask.cs`

## Overview

`BeginConversationInitiatedByAIQuestTask` lives in `SandBox.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MissionTick
`public void MissionTick(float dt)`

**Purpose:** Handles logic related to `mission tick`.

### SetReferences
`public override void SetReferences()`

**Purpose:** Sets the value or state of `references`.

## Usage Example

```csharp
var value = new BeginConversationInitiatedByAIQuestTask();
value.MissionTick(0);
```

## See Also

- [Complete Class Catalog](../catalog)