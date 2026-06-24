<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverStatItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameOverStatItemVM

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameOverStatItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.GameOver/GameOverStatItemVM.cs`

## Overview

`GameOverStatItemVM` lives in `SandBox.ViewModelCollection.GameOver` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.GameOver` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefinitionText` | `public string DefinitionText { get; set; }` |
| `ValueText` | `public string ValueText { get; set; }` |
| `StatTypeAsString` | `public string StatTypeAsString { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new GameOverStatItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)