---
title: "OrderComponent"
description: "Auto-generated class reference for OrderComponent."
---
# OrderComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderComponent`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/OrderComponent.cs`

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

**Purpose:** Reads and returns the direction value held by the this instance.

```csharp
// Obtain an instance of OrderComponent from the subsystem API first
OrderComponent orderComponent = ...;
var result = orderComponent.GetDirection(f);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
OrderComponent instance = ...;
```

## See Also

- [Area Index](../)