---
title: "LinQuick"
description: "Auto-generated class reference for LinQuick."
---
# LinQuick

**Namespace:** TaleWorlds.LinQuick
**Module:** TaleWorlds.LinQuick
**Type:** `public static class LinQuick`
**Base:** none
**File:** `bin/TaleWorlds.LinQuick/TaleWorlds.LinQuick/LinQuick.cs`

## Overview

`LinQuick` lives in `TaleWorlds.LinQuick` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.LinQuick` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AverageQ
`public static float AverageQ(this float source)`

**Purpose:** Executes the AverageQ logic.

```csharp
// Static call; no instance required
LinQuick.AverageQ(source);
```

### AverageQ
`public static float AverageQ(this IEnumerable<float> source)`

**Purpose:** Executes the AverageQ logic.

```csharp
// Static call; no instance required
LinQuick.AverageQ(source);
```

### MaxQ
`public static int MaxQ(this int source)`

**Purpose:** Executes the MaxQ logic.

```csharp
// Static call; no instance required
LinQuick.MaxQ(source);
```

### MaxQ
`public static int MaxQ(this List<int> source)`

**Purpose:** Executes the MaxQ logic.

```csharp
// Static call; no instance required
LinQuick.MaxQ(source);
```

### MaxQ
`public static int MaxQ(this IReadOnlyList<int> source)`

**Purpose:** Executes the MaxQ logic.

```csharp
// Static call; no instance required
LinQuick.MaxQ(source);
```

## Usage Example

```csharp
LinQuick.AverageQ(source);
```

## See Also

- [Area Index](../)