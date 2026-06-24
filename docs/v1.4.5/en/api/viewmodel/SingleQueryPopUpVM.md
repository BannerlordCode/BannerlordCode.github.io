<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleQueryPopUpVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SingleQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleQueryPopUpVM : PopUpBaseVM`
**Base:** `PopUpBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries/SingleQueryPopUpVM.cs`

## Overview

`SingleQueryPopUpVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingQueryTime` | `public float RemainingQueryTime { get; set; }` |
| `TotalQueryTime` | `public float TotalQueryTime { get; set; }` |
| `IsTimerShown` | `public bool IsTimerShown { get; set; }` |

## Key Methods

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### ExecuteAffirmativeAction
`public override void ExecuteAffirmativeAction()`

**Purpose:** Executes the `affirmative action` operation or workflow.

### ExecuteNegativeAction
`public override void ExecuteNegativeAction()`

**Purpose:** Executes the `negative action` operation or workflow.

### OnClearData
`public override void OnClearData()`

**Purpose:** Called when the `clear data` event is raised.

### SetData
`public void SetData(InquiryData data)`

**Purpose:** Sets the value or state of `data`.

## Usage Example

```csharp
var value = new SingleQueryPopUpVM();
value.OnTick(0);
```

## See Also

- [Complete Class Catalog](../catalog)