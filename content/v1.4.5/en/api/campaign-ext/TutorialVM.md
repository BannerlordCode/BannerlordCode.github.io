---
title: "TutorialVM"
description: "Auto-generated class reference for TutorialVM."
---
# TutorialVM

**Namespace:** SandBox.ViewModelCollection.Tutorial
**Module:** SandBox.ViewModelCollection
**Type:** `public class TutorialVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tutorial/TutorialVM.cs`

## Overview

`TutorialVM` lives in `SandBox.ViewModelCollection.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static TutorialVM Instance { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `LeftItem` | `public TutorialItemVM LeftItem { get; set; }` |
| `RightItem` | `public TutorialItemVM RightItem { get; set; }` |
| `BottomItem` | `public TutorialItemVM BottomItem { get; set; }` |
| `TopItem` | `public TutorialItemVM TopItem { get; set; }` |
| `LeftBottomItem` | `public TutorialItemVM LeftBottomItem { get; set; }` |
| `LeftTopItem` | `public TutorialItemVM LeftTopItem { get; set; }` |
| `RightBottomItem` | `public TutorialItemVM RightBottomItem { get; set; }` |
| `RightTopItem` | `public TutorialItemVM RightTopItem { get; set; }` |
| `CenterItem` | `public TutorialItemVM CenterItem { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TutorialVM from the subsystem API first
TutorialVM tutorialVM = ...;
tutorialVM.RefreshValues();
```

### SetCurrentTutorial
`public void SetCurrentTutorial(TutorialItemVM.ItemPlacements placement, string tutorialTypeId, bool requiresMouse)`

**Purpose:** Assigns a new value to `current tutorial` and updates the object's internal state.

```csharp
// Obtain an instance of TutorialVM from the subsystem API first
TutorialVM tutorialVM = ...;
tutorialVM.SetCurrentTutorial(placement, "example", false);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of TutorialVM from the subsystem API first
TutorialVM tutorialVM = ...;
tutorialVM.Tick(0);
```

### CloseTutorialStep
`public void CloseTutorialStep(bool finalizeAllSteps = false)`

**Purpose:** Closes the resource or UI associated with `tutorial step`.

```csharp
// Obtain an instance of TutorialVM from the subsystem API first
TutorialVM tutorialVM = ...;
tutorialVM.CloseTutorialStep(false);
```

### FinalizeTutorial
`public void FinalizeTutorial()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TutorialVM from the subsystem API first
TutorialVM tutorialVM = ...;
tutorialVM.FinalizeTutorial();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TutorialVM tutorialVM = ...;
tutorialVM.RefreshValues();
```

## See Also

- [Area Index](../)