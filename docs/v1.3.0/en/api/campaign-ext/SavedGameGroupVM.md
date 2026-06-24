<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SavedGameGroupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SavedGameGroupVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SavedGameGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameGroupVM.cs`

## Overview

`SavedGameGroupVM` lives in `SandBox.ViewModelCollection.SaveLoad` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.SaveLoad` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `SavedGamesList` | `public MBBindingList<SavedGameVM> SavedGamesList { get; set; }` |
| `IdentifierID` | `public string IdentifierID { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new SavedGameGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)