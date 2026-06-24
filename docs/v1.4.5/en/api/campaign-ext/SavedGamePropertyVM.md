<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SavedGamePropertyVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SavedGamePropertyVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SavedGamePropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.SaveLoad/SavedGamePropertyVM.cs`

## Overview

`SavedGamePropertyVM` lives in `SandBox.ViewModelCollection.SaveLoad` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.SaveLoad` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `PropertyType` | `public string PropertyType { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new SavedGamePropertyVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)