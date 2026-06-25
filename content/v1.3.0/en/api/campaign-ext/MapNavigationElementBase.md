---
title: "MapNavigationElementBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNavigationElementBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `open view`.

### OpenView
`public abstract void OpenView(params object parameters)`

**Purpose:** Handles logic related to `open view`.

## Usage Example

```csharp
var implementation = new CustomMapNavigationElementBase();
```

## See Also

- [Complete Class Catalog](../catalog)