---
title: "BoardGameVM"
description: "Auto-generated class reference for BoardGameVM."
---
# BoardGameVM

**Namespace:** SandBox.ViewModelCollection.BoardGame
**Module:** SandBox.ViewModelCollection
**Type:** `public class BoardGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.BoardGame/BoardGameVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of BoardGameVM from the subsystem API first
BoardGameVM boardGameVM = ...;
boardGameVM.RefreshValues();
```

### Activate
`public void Activate()`

**Purpose:** Activates the resource, state, or feature represented by the this instance.

```csharp
// Obtain an instance of BoardGameVM from the subsystem API first
BoardGameVM boardGameVM = ...;
boardGameVM.Activate();
```

### DiceRoll
`public void DiceRoll(int roll)`

**Purpose:** Executes the DiceRoll logic.

```csharp
// Obtain an instance of BoardGameVM from the subsystem API first
BoardGameVM boardGameVM = ...;
boardGameVM.DiceRoll(0);
```

### SwitchTurns
`public void SwitchTurns()`

**Purpose:** Executes the SwitchTurns logic.

```csharp
// Obtain an instance of BoardGameVM from the subsystem API first
BoardGameVM boardGameVM = ...;
boardGameVM.SwitchTurns();
```

### ExecuteRoll
`public void ExecuteRoll()`

**Purpose:** Runs the operation or workflow associated with roll.

```csharp
// Obtain an instance of BoardGameVM from the subsystem API first
BoardGameVM boardGameVM = ...;
boardGameVM.ExecuteRoll();
```

### ExecuteForfeit
`public void ExecuteForfeit()`

**Purpose:** Runs the operation or workflow associated with forfeit.

```csharp
// Obtain an instance of BoardGameVM from the subsystem API first
BoardGameVM boardGameVM = ...;
boardGameVM.ExecuteForfeit();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BoardGameVM from the subsystem API first
BoardGameVM boardGameVM = ...;
boardGameVM.OnFinalize();
```

### SetRollDiceKey
`public void SetRollDiceKey(HotKey key)`

**Purpose:** Assigns a new value to roll dice key and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameVM from the subsystem API first
BoardGameVM boardGameVM = ...;
boardGameVM.SetRollDiceKey(key);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameVM boardGameVM = ...;
boardGameVM.RefreshValues();
```

## See Also

- [Area Index](../)