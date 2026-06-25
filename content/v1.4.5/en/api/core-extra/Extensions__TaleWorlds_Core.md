---
title: "Extensions"
description: "Auto-generated class reference for Extensions."
---
# Extensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class Extensions`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/Extensions.cs`

## Overview

`Extensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToHexadecimalString
`public static string ToHexadecimalString(this uint number)`

**Purpose:** **Purpose:** Executes the ToHexadecimalString logic.

```csharp
// Static call; no instance required
Extensions.ToHexadecimalString(number);
```

### Description
`public static string Description(this Enum value)`

**Purpose:** **Purpose:** Executes the Description logic.

```csharp
// Static call; no instance required
Extensions.Description(value);
```

### NextFloat
`public static float NextFloat(this Random random)`

**Purpose:** **Purpose:** Executes the NextFloat logic.

```csharp
// Static call; no instance required
Extensions.NextFloat(random);
```

### Add
`public static string Add(this string str, string appendant, bool newLine = true)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Static call; no instance required
Extensions.Add(str, "example", false);
```

### Split
`public static IEnumerable<string> Split(this string str, int maxChunkSize)`

**Purpose:** **Purpose:** Splits split into multiple parts or sub-items.

```csharp
// Static call; no instance required
Extensions.Split(str, 0);
```

### GetOppositeSide
`public static BattleSideEnum GetOppositeSide(this BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the opposite side value held by the this instance.

```csharp
// Static call; no instance required
Extensions.GetOppositeSide(side);
```

## Usage Example

```csharp
Extensions.ToHexadecimalString(number);
```

## See Also

- [Area Index](../)