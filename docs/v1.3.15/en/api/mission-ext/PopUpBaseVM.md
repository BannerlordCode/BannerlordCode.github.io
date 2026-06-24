<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopUpBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PopUpBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class PopUpBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs`

## Overview

`PopUpBaseVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `PopUpLabel` | `public string PopUpLabel { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; set; }` |
| `IsButtonOkShown` | `public bool IsButtonOkShown { get; set; }` |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown { get; set; }` |
| `IsButtonOkEnabled` | `public bool IsButtonOkEnabled { get; set; }` |
| `IsButtonCancelEnabled` | `public bool IsButtonCancelEnabled { get; set; }` |
| `ButtonOkHint` | `public HintViewModel ButtonOkHint { get; set; }` |
| `ButtonCancelHint` | `public HintViewModel ButtonCancelHint { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### ExecuteAffirmativeAction
`public abstract void ExecuteAffirmativeAction()`

**Purpose:** Executes the `affirmative action` operation or workflow.

### ExecuteNegativeAction
`public abstract void ExecuteNegativeAction()`

**Purpose:** Executes the `negative action` operation or workflow.

### OnTick
`public virtual void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnClearData
`public virtual void OnClearData()`

**Purpose:** Called when the `clear data` event is raised.

### ForceRefreshKeyVisuals
`public void ForceRefreshKeyVisuals()`

**Purpose:** Handles logic related to `force refresh key visuals`.

### CloseQuery
`public void CloseQuery()`

**Purpose:** Handles logic related to `close query`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var implementation = new CustomPopUpBaseVM();
```

## See Also

- [Complete Class Catalog](../catalog)