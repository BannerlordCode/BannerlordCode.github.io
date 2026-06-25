---
title: "QuestsNavigationElement"
description: "Auto-generated class reference for QuestsNavigationElement."
---
# QuestsNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class QuestsNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation.NavigationElements/QuestsNavigationElement.cs`

## Overview

`QuestsNavigationElement` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Navigation.NavigationElements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenView
`public override void OpenView()`

**Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of QuestsNavigationElement from the subsystem API first
QuestsNavigationElement questsNavigationElement = ...;
questsNavigationElement.OpenView();
```

### OpenView
`public override void OpenView(params object parameters)`

**Purpose:** Opens the resource or UI associated with view.

```csharp
// Obtain an instance of QuestsNavigationElement from the subsystem API first
QuestsNavigationElement questsNavigationElement = ...;
questsNavigationElement.OpenView(parameters);
```

### GoToLink
`public override void GoToLink()`

**Purpose:** Executes the GoToLink logic.

```csharp
// Obtain an instance of QuestsNavigationElement from the subsystem API first
QuestsNavigationElement questsNavigationElement = ...;
questsNavigationElement.GoToLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestsNavigationElement questsNavigationElement = ...;
questsNavigationElement.OpenView();
```

## See Also

- [Area Index](../)