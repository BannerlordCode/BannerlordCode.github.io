<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameInstructionsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameInstructionsVM

**Namespace:** SandBox.ViewModelCollection.BoardGame
**Module:** SandBox.ViewModelCollection
**Type:** `public class BoardGameInstructionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs`

## Overview

`BoardGameInstructionsVM` lives in `SandBox.ViewModelCollection.BoardGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.BoardGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled { get; set; }` |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled { get; set; }` |
| `InstructionsText` | `public string InstructionsText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `CurrentPageText` | `public string CurrentPageText { get; set; }` |
| `InstructionList` | `public MBBindingList<BoardGameInstructionVM> InstructionList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteShowPrevious
`public void ExecuteShowPrevious()`

**Purpose:** Executes the `show previous` operation or workflow.

### ExecuteShowNext
`public void ExecuteShowNext()`

**Purpose:** Executes the `show next` operation or workflow.

## Usage Example

```csharp
var value = new BoardGameInstructionsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)