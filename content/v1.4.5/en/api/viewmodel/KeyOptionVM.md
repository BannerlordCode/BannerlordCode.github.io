---
title: "KeyOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KeyOptionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class KeyOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/KeyOptionVM.cs`

## Overview

`KeyOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentKey` | `public Key CurrentKey { get; set; }` |
| `Key` | `public Key Key { get; set; }` |
| `OptionValueText` | `public string OptionValueText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `IsChanged` | `public bool IsChanged { get; set; }` |
| `RevertHint` | `public HintViewModel RevertHint { get; set; }` |
| `ExtraInformationText` | `public string ExtraInformationText { get; set; }` |

## Key Methods

### Set
`public abstract void Set(InputKey newKey)`

**Purpose:** Sets the value or state of `set`.

### Update
`public abstract void Update()`

**Purpose:** Updates the state or data of `update`.

### OnDone
`public abstract void OnDone()`

**Purpose:** Called when the `done` event is raised.

### ExecuteRevert
`public abstract void ExecuteRevert()`

**Purpose:** Executes the `revert` operation or workflow.

## Usage Example

```csharp
var implementation = new CustomKeyOptionVM();
```

## See Also

- [Complete Class Catalog](../catalog)