---
title: "BoardGameInstructionsVM"
description: "Auto-generated class reference for BoardGameInstructionsVM."
---
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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of BoardGameInstructionsVM from the subsystem API first
BoardGameInstructionsVM boardGameInstructionsVM = ...;
boardGameInstructionsVM.RefreshValues();
```

### ExecuteShowPrevious
`public void ExecuteShowPrevious()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with show previous.

```csharp
// Obtain an instance of BoardGameInstructionsVM from the subsystem API first
BoardGameInstructionsVM boardGameInstructionsVM = ...;
boardGameInstructionsVM.ExecuteShowPrevious();
```

### ExecuteShowNext
`public void ExecuteShowNext()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with show next.

```csharp
// Obtain an instance of BoardGameInstructionsVM from the subsystem API first
BoardGameInstructionsVM boardGameInstructionsVM = ...;
boardGameInstructionsVM.ExecuteShowNext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameInstructionsVM boardGameInstructionsVM = ...;
boardGameInstructionsVM.RefreshValues();
```

## See Also

- [Area Index](../)