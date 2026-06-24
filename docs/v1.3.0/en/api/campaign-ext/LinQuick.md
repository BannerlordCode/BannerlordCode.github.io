<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LinQuick`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LinQuick

**Namespace:** TaleWorlds.LinQuick
**Module:** TaleWorlds.LinQuick
**Type:** `public static class LinQuick`
**Base:** none
**File:** `TaleWorlds.LinQuick/LinQuick.cs`

## Overview

`LinQuick` lives in `TaleWorlds.LinQuick` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.LinQuick` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AverageQ
`public static float AverageQ(this float source)`

**Purpose:** Handles logic related to `average q`.

### AverageQ
`public static float AverageQ(this IEnumerable<float> source)`

**Purpose:** Handles logic related to `average q`.

### MaxQ
`public static int MaxQ(this int source)`

**Purpose:** Handles logic related to `max q`.

### MaxQ
`public static int MaxQ(this List<int> source)`

**Purpose:** Handles logic related to `max q`.

### MaxQ
`public static int MaxQ(this IReadOnlyList<int> source)`

**Purpose:** Handles logic related to `max q`.

## Usage Example

```csharp
LinQuick.AverageQ(source);
```

## See Also

- [Complete Class Catalog](../catalog)