---
title: "PartyNavigationElement"
description: "Auto-generated class reference for PartyNavigationElement."
---
# PartyNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class PartyNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/PartyNavigationElement.cs`

## Overview

`PartyNavigationElement` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Opens the resource or UI associated with `view`.

```csharp
// Obtain an instance of PartyNavigationElement from the subsystem API first
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView();
```

### OpenView
`public override void OpenView(params object parameters)`

**Purpose:** Opens the resource or UI associated with `view`.

```csharp
// Obtain an instance of PartyNavigationElement from the subsystem API first
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView(parameters);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView();
```

## See Also

- [Area Index](../)