<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKeyOptionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameKeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyOptionVM : KeyOptionVM`
**Base:** `KeyOptionVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys/GameKeyOptionVM.cs`

## Overview

`GameKeyOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentGameKey` | `public GameKey CurrentGameKey { get; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Set
`public override void Set(InputKey newKey)`

**Purpose:** Sets the value or state of `set`.

### Update
`public override void Update()`

**Purpose:** Updates the state or data of `update`.

### OnDone
`public override void OnDone()`

**Purpose:** Called when the `done` event is raised.

### ExecuteRevert
`public override void ExecuteRevert()`

**Purpose:** Executes the `revert` operation or workflow.

### Apply
`public void Apply()`

**Purpose:** Applies `apply` to the current object.

## Usage Example

```csharp
var value = new GameKeyOptionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)