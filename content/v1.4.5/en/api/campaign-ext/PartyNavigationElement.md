---
title: "PartyNavigationElement"
description: "Auto-generated class reference for PartyNavigationElement."
---
# PartyNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class PartyNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation.NavigationElements/PartyNavigationElement.cs`

## Overview

`PartyNavigationElement` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
// Obtain an instance of PartyNavigationElement from the subsystem API first
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView();
```

### OpenView
`public override void OpenView(params object parameters)`

**Purpose:** **Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of PartyNavigationElement from the subsystem API first
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView(parameters);
```

### GoToLink
`public override void GoToLink()`

**Purpose:** **Purpose:** Executes the GoToLink logic.

```csharp
// Obtain an instance of PartyNavigationElement from the subsystem API first
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.GoToLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView();
```

## See Also

- [Area Index](../)