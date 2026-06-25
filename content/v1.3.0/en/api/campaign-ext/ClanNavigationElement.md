---
title: "ClanNavigationElement"
description: "Auto-generated class reference for ClanNavigationElement."
---
# ClanNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class ClanNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs`

## Overview

`ClanNavigationElement` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Navigation.NavigationElements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public override string StringId { get; }` |
| `IsActive` | `public override bool IsActive { get; }` |
| `IsLockingNavigation` | `public override bool IsLockingNavigation { get; }` |
| `HasAlert` | `public override bool HasAlert { get; }` |

## Key Methods

### OpenView
`public override void OpenView()`

**Purpose:** **Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of ClanNavigationElement from the subsystem API first
ClanNavigationElement clanNavigationElement = ...;
clanNavigationElement.OpenView();
```

### OpenView
`public override void OpenView(params object parameters)`

**Purpose:** **Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of ClanNavigationElement from the subsystem API first
ClanNavigationElement clanNavigationElement = ...;
clanNavigationElement.OpenView(parameters);
```

### OnClanScreenPermission
`public void OnClanScreenPermission(bool isAvailable, TextObject reasonString)`

**Purpose:** **Purpose:** Invoked when the clan screen permission event is raised.

```csharp
// Obtain an instance of ClanNavigationElement from the subsystem API first
ClanNavigationElement clanNavigationElement = ...;
clanNavigationElement.OnClanScreenPermission(false, reasonString);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanNavigationElement clanNavigationElement = ...;
clanNavigationElement.OpenView();
```

## See Also

- [Area Index](../)