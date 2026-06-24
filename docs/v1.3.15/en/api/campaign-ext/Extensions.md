<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Extensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Extensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class Extensions`
**Area:** campaign-ext

## Overview

`Extensions` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
Extensions.ToHexadecimalString(number);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
