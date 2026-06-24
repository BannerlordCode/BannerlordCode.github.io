<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArenaDuelQuestTask`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArenaDuelQuestTask

**Namespace:** SandBox.Issues.IssueQuestTasks
**Module:** SandBox.Issues
**Type:** `public class ArenaDuelQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs`

## Overview

`ArenaDuelQuestTask` lives in `SandBox.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AfterStart
`public void AfterStart(IMission mission)`

**Purpose:** Handles logic related to `after start`.

### SetReferences
`public override void SetReferences()`

**Purpose:** Sets the value or state of `references`.

### OnGameMenuOpened
`public void OnGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Called when the `game menu opened` event is raised.

### MissionTick
`public void MissionTick(float dt)`

**Purpose:** Handles logic related to `mission tick`.

## Usage Example

```csharp
var value = new ArenaDuelQuestTask();
value.AfterStart(mission);
```

## See Also

- [Complete Class Catalog](../catalog)