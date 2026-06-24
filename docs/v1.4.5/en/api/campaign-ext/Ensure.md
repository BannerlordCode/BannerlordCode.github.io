<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Ensure`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Ensure

**Namespace:** Jose
**Module:** Jose
**Type:** `public class Ensure`
**Area:** campaign-ext

## Overview

`Ensure` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsEmpty
`public static void IsEmpty(byte arr, string msg, params object args)`

**Purpose:** Handles logic related to `is empty`.

### IsNull
`public static void IsNull(object key, string msg, params object args)`

**Purpose:** Handles logic related to `is null`.

### BitSize
`public static void BitSize(byte array, long expectedSize, string msg, params object args)`

**Purpose:** Handles logic related to `bit size`.

### BitSize
`public static void BitSize(int actualSize, int expectedSize, string msg)`

**Purpose:** Handles logic related to `bit size`.

### IsNotEmpty
`public static void IsNotEmpty(string arg, string msg, params object args)`

**Purpose:** Handles logic related to `is not empty`.

### Divisible
`public static void Divisible(int arg, int divisor, string msg, params object args)`

**Purpose:** Handles logic related to `divisible`.

### MinValue
`public static void MinValue(long arg, long min, string msg, params object args)`

**Purpose:** Handles logic related to `min value`.

### MaxValue
`public static void MaxValue(int arg, long max, string msg, params object args)`

**Purpose:** Handles logic related to `max value`.

### MinBitSize
`public static void MinBitSize(byte arr, long minBitSize, string msg, params object args)`

**Purpose:** Handles logic related to `min bit size`.

### Contains
`public static void Contains(IDictionary<string, object> dict, string keys, string msg, params object args)`

**Purpose:** Handles logic related to `contains`.

### SameSize
`public static void SameSize(byte left, byte right, string msg, params object args)`

**Purpose:** Handles logic related to `same size`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Ensure.IsEmpty(0, "example", args);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
