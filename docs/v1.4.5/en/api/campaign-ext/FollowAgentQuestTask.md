<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FollowAgentQuestTask`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FollowAgentQuestTask

**Namespace:** SandBox.Issues.IssueQuestTasks
**Module:** SandBox.Issues
**Type:** `public class FollowAgentQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Issues.IssueQuestTasks/FollowAgentQuestTask.cs`

## Overview

`FollowAgentQuestTask` lives in `SandBox.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new FollowAgentQuestTask();
value.MissionTick(0);
```

## See Also

- [Complete Class Catalog](../catalog)