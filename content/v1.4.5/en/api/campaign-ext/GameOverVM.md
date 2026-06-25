---
title: "GameOverVM"
description: "Auto-generated class reference for GameOverVM."
---
# GameOverVM

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameOverVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.GameOver/GameOverVM.cs`

## Overview

`GameOverVM` lives in `SandBox.ViewModelCollection.GameOver` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.GameOver` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CloseText` | `public string CloseText { get; set; }` |
| `StatisticsTitle` | `public string StatisticsTitle { get; set; }` |
| `ReasonAsString` | `public string ReasonAsString { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `IsPositiveGameOver` | `public bool IsPositiveGameOver { get; set; }` |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey { get; set; }` |
| `Categories` | `public MBBindingList<GameOverStatCategoryVM> Categories { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameOverVM from the subsystem API first
GameOverVM gameOverVM = ...;
gameOverVM.RefreshValues();
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of GameOverVM from the subsystem API first
GameOverVM gameOverVM = ...;
gameOverVM.ExecuteClose();
```

### SetCloseInputKey
`public void SetCloseInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to close input key and updates the object's internal state.

```csharp
// Obtain an instance of GameOverVM from the subsystem API first
GameOverVM gameOverVM = ...;
gameOverVM.SetCloseInputKey(hotKey);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GameOverVM from the subsystem API first
GameOverVM gameOverVM = ...;
gameOverVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameOverVM gameOverVM = ...;
gameOverVM.RefreshValues();
```

## See Also

- [Area Index](../)