---
title: "GauntletInventoryScreen"
description: "Auto-generated class reference for GauntletInventoryScreen."
---
# GauntletInventoryScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletInventoryScreen : ScreenBase, IInventoryStateHandler, IGameStateListener, IChangeableScreen`
**Base:** `ScreenBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/GauntletInventoryScreen.cs`

## Overview

`GauntletInventoryScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InventoryState` | `public InventoryState InventoryState { get; }` |

## Key Methods

### ExecuteLootingScript
`public void ExecuteLootingScript()`

**Purpose:** Runs the operation or workflow associated with `looting script`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteLootingScript();
```

### ExecuteSellAllLoot
`public void ExecuteSellAllLoot()`

**Purpose:** Runs the operation or workflow associated with `sell all loot`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteSellAllLoot();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteCancel();
```

### ExecuteConfirm
`public void ExecuteConfirm()`

**Purpose:** Runs the operation or workflow associated with `confirm`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteConfirm();
```

### ExecuteSwitchToPreviousTab
`public void ExecuteSwitchToPreviousTab()`

**Purpose:** Runs the operation or workflow associated with `switch to previous tab`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteSwitchToPreviousTab();
```

### ExecuteSwitchToNextTab
`public void ExecuteSwitchToNextTab()`

**Purpose:** Runs the operation or workflow associated with `switch to next tab`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteSwitchToNextTab();
```

### ExecuteBuySingle
`public void ExecuteBuySingle()`

**Purpose:** Runs the operation or workflow associated with `buy single`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteBuySingle();
```

### ExecuteSellSingle
`public void ExecuteSellSingle()`

**Purpose:** Runs the operation or workflow associated with `sell single`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteSellSingle();
```

### ExecuteTakeAll
`public void ExecuteTakeAll()`

**Purpose:** Runs the operation or workflow associated with `take all`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteTakeAll();
```

### ExecuteGiveAll
`public void ExecuteGiveAll()`

**Purpose:** Runs the operation or workflow associated with `give all`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteGiveAll();
```

### ExecuteBuyConsumableItem
`public void ExecuteBuyConsumableItem()`

**Purpose:** Runs the operation or workflow associated with `buy consumable item`.

```csharp
// Obtain an instance of GauntletInventoryScreen from the subsystem API first
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteBuyConsumableItem();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteLootingScript();
```

## See Also

- [Area Index](../)