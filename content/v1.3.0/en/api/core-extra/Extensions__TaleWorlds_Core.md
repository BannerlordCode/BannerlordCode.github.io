---
title: "Extensions__TaleWorlds_Core"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Extensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Extensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class Extensions`
**Base:** none
**File:** `TaleWorlds.Core/Extensions.cs`

## Overview

`Extensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToHexadecimalString
`public static string ToHexadecimalString(this uint number)`

**Purpose:** Handles logic related to `to hexadecimal string`.

### Description
`public static string Description(this Enum value)`

**Purpose:** Handles logic related to `description`.

### NextFloat
`public static float NextFloat(this Random random)`

**Purpose:** Handles logic related to `next float`.

### Add
`public static string Add(this string str, string appendant, bool newLine = true)`

**Purpose:** Adds `add` to the current collection or state.

### Split
`public static IEnumerable<string> Split(this string str, int maxChunkSize)`

**Purpose:** Handles logic related to `split`.

### GetOppositeSide
`public static BattleSideEnum GetOppositeSide(this BattleSideEnum side)`

**Purpose:** Gets the current value of `opposite side`.

## Usage Example

```csharp
Extensions.ToHexadecimalString(number);
```

## See Also

- [Complete Class Catalog](../catalog)