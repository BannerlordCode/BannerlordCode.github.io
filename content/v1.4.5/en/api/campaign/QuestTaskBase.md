---
title: "QuestTaskBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestTaskBase`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestTaskBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestTaskBase`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/QuestTaskBase.cs`

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
`public void Finish(FinishStates finishState)`

**Purpose:** Handles logic related to `finish`.

### AddTaskDialogs
`public void AddTaskDialogs()`

**Purpose:** Adds `task dialogs` to the current collection or state.

### SetReferences
`public virtual void SetReferences()`

**Purpose:** Sets the value or state of `references`.

### AddTaskDialogOnGameLoaded
`public void AddTaskDialogOnGameLoaded(DialogFlow dialogFlow)`

**Purpose:** Adds `task dialog on game loaded` to the current collection or state.

### AddTaskBehaviorsOnGameLoad
`public void AddTaskBehaviorsOnGameLoad(Action onSucceededAction = null, Action onFailedAction = null, Action onCanceledAction = null)`

**Purpose:** Adds `task behaviors on game load` to the current collection or state.

## Usage Example

```csharp
var value = new QuestTaskBase();
value.Finish(finishState);
```

## See Also

- [Complete Class Catalog](../catalog)