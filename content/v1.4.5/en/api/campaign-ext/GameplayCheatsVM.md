---
title: "GameplayCheatsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameplayCheatsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameplayCheatsVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameplayCheatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Cheat/GameplayCheatsVM.cs`

## Overview

`GameplayCheatsVM` lives in `SandBox.ViewModelCollection.Map.Cheat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Cheat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `ButtonCloseLabel` | `public string ButtonCloseLabel { get; set; }` |
| `Cheats` | `public MBBindingList<CheatItemBaseVM> Cheats { get; set; }` |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Executes the `close` operation or workflow.

### SetCloseInputKey
`public void SetCloseInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `close input key`.

## Usage Example

```csharp
var value = new GameplayCheatsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)