---
title: "FormOrder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormOrder`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/FormOrder.cs`

## Overview

`FormOrder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomFlankWidth` | `public float CustomFlankWidth { get; set; }` |
| `OrderType` | `public OrderType OrderType { get; }` |

## Key Methods

### FormOrderCustom
`public static FormOrder FormOrderCustom(float customWidth)`

**Purpose:** Handles logic related to `form order custom`.

### OnApply
`public void OnApply(Formation formation)`

**Purpose:** Called when the `apply` event is raised.

### GetUnitCountOf
`public static int GetUnitCountOf(Formation formation)`

**Purpose:** Gets the current value of `unit count of`.

### OnApplyToCustomArrangement
`public bool OnApplyToCustomArrangement(Formation formation, IFormationArrangement arrangement)`

**Purpose:** Called when the `apply to custom arrangement` event is raised.

### GetMaxFileCountStatic
`public static int? GetMaxFileCountStatic(FormOrder.FormOrderEnum order, int unitCount)`

**Purpose:** Gets the current value of `max file count static`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
FormOrder.FormOrderCustom(0);
```

## See Also

- [Complete Class Catalog](../catalog)