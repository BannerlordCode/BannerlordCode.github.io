---
title: "MapNavigationElementBase"
description: "Auto-generated class reference for MapNavigationElementBase."
---
# MapNavigationElementBase

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public abstract class MapNavigationElementBase : INavigationElement`
**Base:** `INavigationElement`
**File:** `SandBox.View/Map/Navigation/MapNavigationElementBase.cs`

## Overview

`MapNavigationElementBase` lives in `SandBox.View.Map.Navigation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Navigation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Permission` | `public NavigationPermissionItem Permission { get; }` |
| `Tooltip` | `public TextObject Tooltip { get; }` |
| `AlertTooltip` | `public TextObject AlertTooltip { get; }` |
| `IsActive` | `public abstract bool IsActive { get; }` |
| `IsLockingNavigation` | `public abstract bool IsLockingNavigation { get; }` |
| `HasAlert` | `public abstract bool HasAlert { get; }` |
| `StringId` | `public abstract string StringId { get; }` |

## Key Methods

### OpenView
`public abstract void OpenView()`

**Purpose:** **Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of MapNavigationElementBase from the subsystem API first
MapNavigationElementBase mapNavigationElementBase = ...;
mapNavigationElementBase.OpenView();
```

### OpenView
`public abstract void OpenView(params object parameters)`

**Purpose:** **Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of MapNavigationElementBase from the subsystem API first
MapNavigationElementBase mapNavigationElementBase = ...;
mapNavigationElementBase.OpenView(parameters);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapNavigationElementBase instance = ...;
```

## See Also

- [Area Index](../)