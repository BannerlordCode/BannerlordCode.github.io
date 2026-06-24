<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheatActionItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CheatActionItemVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public class CheatActionItemVM : CheatItemBaseVM`
**Base:** `CheatItemBaseVM`
**File:** `SandBox.ViewModelCollection/Map/Cheat/CheatActionItemVM.cs`

## Overview

`CheatActionItemVM` lives in `SandBox.ViewModelCollection.Map.Cheat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Cheat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteAction
`public override void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

## Usage Example

```csharp
var value = new CheatActionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)