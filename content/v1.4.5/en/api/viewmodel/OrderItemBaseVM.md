---
title: "OrderItemBaseVM"
description: "Auto-generated class reference for OrderItemBaseVM."
---
# OrderItemBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderItemBaseVM.cs`

## Overview

`OrderItemBaseVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `OrderIconId` | `public string OrderIconId { get; set; }` |
| `SelectionState` | `public string SelectionState { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of OrderItemBaseVM from the subsystem API first
OrderItemBaseVM orderItemBaseVM = ...;
orderItemBaseVM.OnFinalize();
```

### RefreshState
`public void RefreshState()`

**Purpose:** Keeps the display or cache of `state` in sync with the underlying state.

```csharp
// Obtain an instance of OrderItemBaseVM from the subsystem API first
OrderItemBaseVM orderItemBaseVM = ...;
orderItemBaseVM.RefreshState();
```

### ExecuteAction
`public void ExecuteAction(VisualOrderExecutionParameters executionParameters)`

**Purpose:** Runs the operation or workflow associated with `action`.

```csharp
// Obtain an instance of OrderItemBaseVM from the subsystem API first
OrderItemBaseVM orderItemBaseVM = ...;
orderItemBaseVM.ExecuteAction(executionParameters);
```

### SetShortcutKey
`public void SetShortcutKey(InputKeyItemVM inputKeyItem)`

**Purpose:** Assigns a new value to `shortcut key` and updates the object's internal state.

```csharp
// Obtain an instance of OrderItemBaseVM from the subsystem API first
OrderItemBaseVM orderItemBaseVM = ...;
orderItemBaseVM.SetShortcutKey(inputKeyItem);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
OrderItemBaseVM instance = ...;
```

## See Also

- [Area Index](../)