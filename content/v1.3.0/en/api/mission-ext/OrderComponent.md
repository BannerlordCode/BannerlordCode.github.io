---
title: "OrderComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/OrderComponent.cs`

## Overview

`OrderComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `OrderComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public abstract OrderType OrderType { get; }` |

## Key Methods

### GetDirection
`public Vec2 GetDirection(Formation f)`

**Purpose:** Gets the current value of `direction`.

## Usage Example

```csharp
var implementation = new CustomOrderComponent();
```

## See Also

- [Complete Class Catalog](../catalog)