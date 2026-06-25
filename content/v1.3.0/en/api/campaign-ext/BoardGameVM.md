---
title: "BoardGameVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameVM

**Namespace:** SandBox.ViewModelCollection.BoardGame
**Module:** SandBox.ViewModelCollection
**Type:** `public class BoardGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs`

## Overview

`BoardGameVM` lives in `SandBox.ViewModelCollection.BoardGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.BoardGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instructions` | `public BoardGameInstructionsVM Instructions { get; set; }` |
| `CanRoll` | `public bool CanRoll { get; set; }` |
| `IsPlayersTurn` | `public bool IsPlayersTurn { get; set; }` |
| `IsGameUsingDice` | `public bool IsGameUsingDice { get; set; }` |
| `DiceResult` | `public string DiceResult { get; set; }` |
| `RollDiceText` | `public string RollDiceText { get; set; }` |
| `TurnOwnerText` | `public string TurnOwnerText { get; set; }` |
| `BoardGameType` | `public string BoardGameType { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `ForfeitText` | `public string ForfeitText { get; set; }` |
| `RollDiceKey` | `public InputKeyItemVM RollDiceKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Activate
`public void Activate()`

**Purpose:** Handles logic related to `activate`.

### DiceRoll
`public void DiceRoll(int roll)`

**Purpose:** Handles logic related to `dice roll`.

### SwitchTurns
`public void SwitchTurns()`

**Purpose:** Handles logic related to `switch turns`.

### ExecuteRoll
`public void ExecuteRoll()`

**Purpose:** Executes the `roll` operation or workflow.

### ExecuteForfeit
`public void ExecuteForfeit()`

**Purpose:** Executes the `forfeit` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetRollDiceKey
`public void SetRollDiceKey(HotKey key)`

**Purpose:** Sets the value or state of `roll dice key`.

## Usage Example

```csharp
var value = new BoardGameVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)