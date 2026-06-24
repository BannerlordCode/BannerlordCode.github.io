<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTipsVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameTipsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameTipsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu/GameTipsVM.cs`

## Overview

`GameTipsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentTip` | `public string CurrentTip { get; set; }` |
| `GameTipTitle` | `public string GameTipTitle { get; set; }` |
| `NavigationButtonsEnabled` | `public bool NavigationButtonsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecutePreviousTip
`public void ExecutePreviousTip()`

**Purpose:** Executes the `previous tip` operation or workflow.

### ExecuteNextTip
`public void ExecuteNextTip()`

**Purpose:** Executes the `next tip` operation or workflow.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

## Usage Example

```csharp
var value = new GameTipsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)