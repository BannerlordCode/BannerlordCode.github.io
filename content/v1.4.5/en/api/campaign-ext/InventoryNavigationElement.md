---
title: "InventoryNavigationElement"
description: "Auto-generated class reference for InventoryNavigationElement."
---
# InventoryNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class InventoryNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation.NavigationElements/InventoryNavigationElement.cs`

## Overview

`InventoryNavigationElement` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Navigation.NavigationElements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLockingNavigation` | `public override bool IsLockingNavigation { get; }` |

## Key Methods

### OpenView
`public override void OpenView()`

**Purpose:** **Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of InventoryNavigationElement from the subsystem API first
InventoryNavigationElement inventoryNavigationElement = ...;
inventoryNavigationElement.OpenView();
```

### OpenView
`public override void OpenView(params object parameters)`

**Purpose:** **Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of InventoryNavigationElement from the subsystem API first
InventoryNavigationElement inventoryNavigationElement = ...;
inventoryNavigationElement.OpenView(parameters);
```

### GoToLink
`public override void GoToLink()`

**Purpose:** **Purpose:** Executes the GoToLink logic.

```csharp
// Obtain an instance of InventoryNavigationElement from the subsystem API first
InventoryNavigationElement inventoryNavigationElement = ...;
inventoryNavigationElement.GoToLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InventoryNavigationElement inventoryNavigationElement = ...;
inventoryNavigationElement.OpenView();
```

## See Also

- [Area Index](../)