---
title: "GauntletInventoryScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletInventoryScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletInventoryScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletInventoryScreen : ScreenBase, IInventoryStateHandler, IGameStateListener, IChangeableScreen`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/GauntletInventoryScreen.cs`

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

**Purpose:** Executes the `looting script` operation or workflow.

### ExecuteSellAllLoot
`public void ExecuteSellAllLoot()`

**Purpose:** Executes the `sell all loot` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteConfirm
`public void ExecuteConfirm()`

**Purpose:** Executes the `confirm` operation or workflow.

### ExecuteSwitchToPreviousTab
`public void ExecuteSwitchToPreviousTab()`

**Purpose:** Executes the `switch to previous tab` operation or workflow.

### ExecuteSwitchToNextTab
`public void ExecuteSwitchToNextTab()`

**Purpose:** Executes the `switch to next tab` operation or workflow.

### ExecuteBuySingle
`public void ExecuteBuySingle()`

**Purpose:** Executes the `buy single` operation or workflow.

### ExecuteSellSingle
`public void ExecuteSellSingle()`

**Purpose:** Executes the `sell single` operation or workflow.

### ExecuteTakeAll
`public void ExecuteTakeAll()`

**Purpose:** Executes the `take all` operation or workflow.

### ExecuteGiveAll
`public void ExecuteGiveAll()`

**Purpose:** Executes the `give all` operation or workflow.

### ExecuteBuyConsumableItem
`public void ExecuteBuyConsumableItem()`

**Purpose:** Executes the `buy consumable item` operation or workflow.

## Usage Example

```csharp
var value = new GauntletInventoryScreen();
value.ExecuteLootingScript();
```

## See Also

- [Complete Class Catalog](../catalog)