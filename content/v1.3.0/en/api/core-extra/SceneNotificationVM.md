---
title: "SceneNotificationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneNotificationVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs`

## Overview

`SceneNotificationVM` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveData` | `public SceneNotificationData ActiveData { get; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `ClickToContinueText` | `public string ClickToContinueText { get; set; }` |
| `TitleText` | `public string TitleText { get; }` |
| `AffirmativeDescription` | `public string AffirmativeDescription { get; }` |
| `CancelDescription` | `public string CancelDescription { get; }` |
| `SceneID` | `public string SceneID { get; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; }` |
| `IsButtonOkShown` | `public bool IsButtonOkShown { get; }` |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown { get; }` |
| `AffirmativeTitleText` | `public string AffirmativeTitleText { get; }` |
| `NegativeTitleText` | `public string NegativeTitleText { get; }` |
| `Scene` | `public object Scene { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `AffirmativeHint` | `public BasicTooltipViewModel AffirmativeHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### CreateNotification
`public void CreateNotification(SceneNotificationData data)`

**Purpose:** Creates a new `notification` instance or object.

### ForceClose
`public void ForceClose()`

**Purpose:** Handles logic related to `force close`.

### ExecuteAffirmativeProcess
`public void ExecuteAffirmativeProcess()`

**Purpose:** Executes the `affirmative process` operation or workflow.

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Executes the `close` operation or workflow.

### ExecuteNegativeProcess
`public void ExecuteNegativeProcess()`

**Purpose:** Executes the `negative process` operation or workflow.

### ClearData
`public void ClearData()`

**Purpose:** Handles logic related to `clear data`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new SceneNotificationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)