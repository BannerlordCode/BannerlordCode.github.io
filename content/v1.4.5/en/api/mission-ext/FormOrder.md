---
title: "FormOrder"
description: "Auto-generated class reference for FormOrder."
---
# FormOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormOrder`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormOrder.cs`

## Overview

`FormOrder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomFlankWidth` | `public float CustomFlankWidth { get; set; }` |

## Key Methods

### FormOrderCustom
`public static FormOrder FormOrderCustom(float customWidth)`

**Purpose:** **Purpose:** Executes the FormOrderCustom logic.

```csharp
// Static call; no instance required
FormOrder.FormOrderCustom(0);
```

### OnApply
`public void OnApply(Formation formation)`

**Purpose:** **Purpose:** Invoked when the apply event is raised.

```csharp
// Obtain an instance of FormOrder from the subsystem API first
FormOrder formOrder = ...;
formOrder.OnApply(formation);
```

### GetUnitCountOf
`public static int GetUnitCountOf(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the unit count of value held by the this instance.

```csharp
// Static call; no instance required
FormOrder.GetUnitCountOf(formation);
```

### OnApplyToCustomArrangement
`public bool OnApplyToCustomArrangement(Formation formation, IFormationArrangement arrangement)`

**Purpose:** **Purpose:** Invoked when the apply to custom arrangement event is raised.

```csharp
// Obtain an instance of FormOrder from the subsystem API first
FormOrder formOrder = ...;
var result = formOrder.OnApplyToCustomArrangement(formation, arrangement);
```

### GetMaxFileCountStatic
`public static int? GetMaxFileCountStatic(FormOrderEnum order, int unitCount)`

**Purpose:** **Purpose:** Reads and returns the max file count static value held by the this instance.

```csharp
// Static call; no instance required
FormOrder.GetMaxFileCountStatic(order, 0);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of FormOrder from the subsystem API first
FormOrder formOrder = ...;
var result = formOrder.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of FormOrder from the subsystem API first
FormOrder formOrder = ...;
var result = formOrder.GetHashCode();
```

## Usage Example

```csharp
FormOrder.FormOrderCustom(0);
```

## See Also

- [Area Index](../)