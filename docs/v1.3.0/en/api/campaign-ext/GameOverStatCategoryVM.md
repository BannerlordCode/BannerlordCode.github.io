<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverStatCategoryVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameOverStatCategoryVM

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameOverStatCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs`

## Overview

`GameOverStatCategoryVM` lives in `SandBox.ViewModelCollection.GameOver` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.GameOver` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ID` | `public string ID { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Items` | `public MBBindingList<GameOverStatItemVM> Items { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSelectCategory
`public void ExecuteSelectCategory()`

**Purpose:** Executes the `select category` operation or workflow.

## Usage Example

```csharp
var value = new GameOverStatCategoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)