<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `init`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### CloseTutorialPanel
`public void CloseTutorialPanel()`

**Purpose:** Handles logic related to `close tutorial panel`.

## Usage Example

```csharp
var value = new TutorialItemVM();
value.Init("example", false, onFinishTutorial);
```

## See Also

- [Complete Class Catalog](../catalog)