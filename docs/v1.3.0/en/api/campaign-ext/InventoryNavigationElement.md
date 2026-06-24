<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryNavigationElement`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class InventoryNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/InventoryNavigationElement.cs`

## Overview

`InventoryNavigationElement` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Handles logic related to `open view`.

### OpenView
`public override void OpenView(params object parameters)`

**Purpose:** Handles logic related to `open view`.

## Usage Example

```csharp
var value = new InventoryNavigationElement();
value.OpenView();
```

## See Also

- [Complete Class Catalog](../catalog)