---
title: "TutorialVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialVM

**Namespace:** SandBox.ViewModelCollection.Tutorial
**Module:** SandBox.ViewModelCollection
**Type:** `public class TutorialVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### SetCurrentTutorial
`public void SetCurrentTutorial(TutorialItemVM.ItemPlacements placement, string tutorialTypeId, bool requiresMouse)`

**Purpose:** Sets the value or state of `current tutorial`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### CloseTutorialStep
`public void CloseTutorialStep(bool finalizeAllSteps = false)`

**Purpose:** Handles logic related to `close tutorial step`.

### FinalizeTutorial
`public void FinalizeTutorial()`

**Purpose:** Handles logic related to `finalize tutorial`.

## Usage Example

```csharp
var value = new TutorialVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)