---
title: "QuestTaskBase"
description: "Auto-generated class reference for QuestTaskBase."
---
# QuestTaskBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestTaskBase`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/QuestTaskBase.cs`

## Overview

`QuestTaskBase` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLogged` | `public bool IsLogged { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### Finish
`public void Finish(QuestTaskBase.FinishStates finishState)`

**Purpose:** **Purpose:** Concludes the this instance's flow and performs any cleanup.

```csharp
// Obtain an instance of QuestTaskBase from the subsystem API first
QuestTaskBase questTaskBase = ...;
questTaskBase.Finish(finishState);
```

### AddTaskDialogs
`public void AddTaskDialogs()`

**Purpose:** **Purpose:** Adds task dialogs to the current collection or state.

```csharp
// Obtain an instance of QuestTaskBase from the subsystem API first
QuestTaskBase questTaskBase = ...;
questTaskBase.AddTaskDialogs();
```

### SetReferences
`public virtual void SetReferences()`

**Purpose:** **Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of QuestTaskBase from the subsystem API first
QuestTaskBase questTaskBase = ...;
questTaskBase.SetReferences();
```

### AddTaskDialogOnGameLoaded
`public void AddTaskDialogOnGameLoaded(DialogFlow dialogFlow)`

**Purpose:** **Purpose:** Adds task dialog on game loaded to the current collection or state.

```csharp
// Obtain an instance of QuestTaskBase from the subsystem API first
QuestTaskBase questTaskBase = ...;
questTaskBase.AddTaskDialogOnGameLoaded(dialogFlow);
```

### AddTaskBehaviorsOnGameLoad
`public void AddTaskBehaviorsOnGameLoad(Action onSucceededAction = null, Action onFailedAction = null, Action onCanceledAction = null)`

**Purpose:** **Purpose:** Adds task behaviors on game load to the current collection or state.

```csharp
// Obtain an instance of QuestTaskBase from the subsystem API first
QuestTaskBase questTaskBase = ...;
questTaskBase.AddTaskBehaviorsOnGameLoad(null, null, null);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestTaskBase questTaskBase = ...;
questTaskBase.Finish(finishState);
```

## See Also

- [Area Index](../)