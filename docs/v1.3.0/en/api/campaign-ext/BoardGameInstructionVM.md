<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameInstructionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameInstructionVM

**Namespace:** SandBox.ViewModelCollection.BoardGame
**Module:** SandBox.ViewModelCollection
**Type:** `public class BoardGameInstructionVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs`

## Overview

`BoardGameInstructionVM` lives in `SandBox.ViewModelCollection.BoardGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.BoardGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new BoardGameInstructionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)