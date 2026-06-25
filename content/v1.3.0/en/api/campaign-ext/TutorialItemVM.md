---
title: "TutorialItemVM"
description: "Auto-generated class reference for TutorialItemVM."
---
# TutorialItemVM

**Namespace:** SandBox.ViewModelCollection.Tutorial
**Module:** SandBox.ViewModelCollection
**Type:** `public class TutorialItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs`

## Overview

`TutorialItemVM` lives in `SandBox.ViewModelCollection.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SetIsActive` | `public Action<bool> SetIsActive { get; }` |
| `DisableCurrentTutorialHint` | `public HintViewModel DisableCurrentTutorialHint { get; set; }` |
| `AreTutorialsEnabled` | `public bool AreTutorialsEnabled { get; set; }` |
| `TutorialsEnabledText` | `public string TutorialsEnabledText { get; set; }` |
| `TutorialTitleText` | `public string TutorialTitleText { get; set; }` |
| `DisableAllTutorialsHint` | `public HintViewModel DisableAllTutorialsHint { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `StepCountText` | `public string StepCountText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `SoundId` | `public string SoundId { get; set; }` |
| `CenterImage` | `public ImageIdentifierVM CenterImage { get; set; }` |
| `RequiresMouse` | `public bool RequiresMouse { get; set; }` |

## Key Methods

### Init
`public void Init(string tutorialTypeId, bool requiresMouse, Action onFinishTutorial)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of TutorialItemVM from the subsystem API first
TutorialItemVM tutorialItemVM = ...;
tutorialItemVM.Init("example", false, onFinishTutorial);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TutorialItemVM from the subsystem API first
TutorialItemVM tutorialItemVM = ...;
tutorialItemVM.RefreshValues();
```

### CloseTutorialPanel
`public void CloseTutorialPanel()`

**Purpose:** Closes the resource or UI associated with `tutorial panel`.

```csharp
// Obtain an instance of TutorialItemVM from the subsystem API first
TutorialItemVM tutorialItemVM = ...;
tutorialItemVM.CloseTutorialPanel();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TutorialItemVM tutorialItemVM = ...;
tutorialItemVM.Init("example", false, onFinishTutorial);
```

## See Also

- [Area Index](../)