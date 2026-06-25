---
title: "LinQuick"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LinQuick`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LinQuick

**Namespace:** TaleWorlds.LinQuick
**Module:** TaleWorlds.LinQuick
**Type:** `public static class LinQuick`
**Area:** campaign-ext

## Overview

`LinQuick` lives in `TaleWorlds.LinQuick`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
LinQuick.AverageQ(source);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
