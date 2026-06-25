---
title: "ArenaDuelQuestTask"
description: "Auto-generated class reference for ArenaDuelQuestTask."
---
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

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of ArenaDuelQuestTask from the subsystem API first
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.AfterStart(mission);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of ArenaDuelQuestTask from the subsystem API first
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.SetReferences();
```

### OnGameMenuOpened
`public void OnGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Invoked when the game menu opened event is raised.

```csharp
// Obtain an instance of ArenaDuelQuestTask from the subsystem API first
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.OnGameMenuOpened(args);
```

### MissionTick
`public void MissionTick(float dt)`

**Purpose:** Executes the MissionTick logic.

```csharp
// Obtain an instance of ArenaDuelQuestTask from the subsystem API first
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.MissionTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.AfterStart(mission);
```

## See Also

- [Area Index](../)