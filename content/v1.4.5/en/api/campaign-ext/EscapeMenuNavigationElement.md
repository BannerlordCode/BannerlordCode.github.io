---
title: "EscapeMenuNavigationElement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EscapeMenuNavigationElement`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EscapeMenuNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class EscapeMenuNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation.NavigationElements/EscapeMenuNavigationElement.cs`

## Overview

`EscapeMenuNavigationElement` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Navigation.NavigationElements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public override bool IsActive { get; }` |

## Key Methods

### OpenView
`public override void OpenView()`

**Purpose:** Handles logic related to `open view`.

### OpenView
`public override void OpenView(params object parameters)`

**Purpose:** Handles logic related to `open view`.

### GoToLink
`public override void GoToLink()`

**Purpose:** Handles logic related to `go to link`.

## Usage Example

```csharp
var value = new EscapeMenuNavigationElement();
value.OpenView();
```

## See Also

- [Complete Class Catalog](../catalog)