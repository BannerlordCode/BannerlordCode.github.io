---
title: "RecruitTroopTutorialQuestTask"
description: "Auto-generated class reference for RecruitTroopTutorialQuestTask."
---
# RecruitTroopTutorialQuestTask

**Namespace:** StoryMode.Quests.QuestTasks
**Module:** StoryMode.Quests
**Type:** `public class RecruitTroopTutorialQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.QuestTasks/RecruitTroopTutorialQuestTask.cs`

## Overview

`RecruitTroopTutorialQuestTask` lives in `StoryMode.Quests.QuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.QuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeTaskOnLoad
`public void InitializeTaskOnLoad(int targetRecruitAmount, Func<CharacterObject, bool> recruitTypeConditions, Settlement recruitSettlement = null)`

**Purpose:** Prepares the resources, state, or bindings required by task on load.

```csharp
// Obtain an instance of RecruitTroopTutorialQuestTask from the subsystem API first
RecruitTroopTutorialQuestTask recruitTroopTutorialQuestTask = ...;
recruitTroopTutorialQuestTask.InitializeTaskOnLoad(0, func<CharacterObject, false, null);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of RecruitTroopTutorialQuestTask from the subsystem API first
RecruitTroopTutorialQuestTask recruitTroopTutorialQuestTask = ...;
recruitTroopTutorialQuestTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RecruitTroopTutorialQuestTask recruitTroopTutorialQuestTask = ...;
recruitTroopTutorialQuestTask.InitializeTaskOnLoad(0, func<CharacterObject, false, null);
```

## See Also

- [Area Index](../)