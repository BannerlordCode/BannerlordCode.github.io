---
title: "PurchaseItemTutorialQuestTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PurchaseItemTutorialQuestTask`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PurchaseItemTutorialQuestTask

**Namespace:** StoryMode.Quests.QuestTasks
**Module:** StoryMode.Quests
**Type:** `public class PurchaseItemTutorialQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `StoryMode/Quests/QuestTasks/PurchaseItemTutorialQuestTask.cs`

## Overview

`PurchaseItemTutorialQuestTask` lives in `StoryMode.Quests.QuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.QuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeTaskOnLoad
`public void InitializeTaskOnLoad(int targetItemAmount, ItemObject item)`

**Purpose:** Initializes the state, resources, or bindings for `task on load`.

### SetReferences
`public override void SetReferences()`

**Purpose:** Sets the value or state of `references`.

## Usage Example

```csharp
var value = new PurchaseItemTutorialQuestTask();
value.InitializeTaskOnLoad(0, item);
```

## See Also

- [Complete Class Catalog](../catalog)