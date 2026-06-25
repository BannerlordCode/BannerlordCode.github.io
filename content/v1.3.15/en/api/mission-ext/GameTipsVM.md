---
title: "GameTipsVM"
description: "Auto-generated class reference for GameTipsVM."
---
# GameTipsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameTipsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs`

## Overview

`GameTipsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentTip` | `public string CurrentTip { get; set; }` |
| `GameTipTitle` | `public string GameTipTitle { get; set; }` |
| `NavigationButtonsEnabled` | `public bool NavigationButtonsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameTipsVM from the subsystem API first
GameTipsVM gameTipsVM = ...;
gameTipsVM.RefreshValues();
```

### ExecutePreviousTip
`public void ExecutePreviousTip()`

**Purpose:** Runs the operation or workflow associated with previous tip.

```csharp
// Obtain an instance of GameTipsVM from the subsystem API first
GameTipsVM gameTipsVM = ...;
gameTipsVM.ExecutePreviousTip();
```

### ExecuteNextTip
`public void ExecuteNextTip()`

**Purpose:** Runs the operation or workflow associated with next tip.

```csharp
// Obtain an instance of GameTipsVM from the subsystem API first
GameTipsVM gameTipsVM = ...;
gameTipsVM.ExecuteNextTip();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of GameTipsVM from the subsystem API first
GameTipsVM gameTipsVM = ...;
gameTipsVM.OnTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameTipsVM gameTipsVM = ...;
gameTipsVM.RefreshValues();
```

## See Also

- [Area Index](../)