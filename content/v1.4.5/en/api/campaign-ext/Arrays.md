---
title: "Arrays"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Arrays`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Arrays

**Namespace:** Jose
**Module:** Jose
**Type:** `public class Arrays`
**Area:** campaign-ext

## Overview

`Arrays` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FirstHalf
`public static byte FirstHalf(byte arr)`

**Purpose:** Handles logic related to `first half`.

### SecondHalf
`public static byte SecondHalf(byte arr)`

**Purpose:** Handles logic related to `second half`.

### Concat
`public static byte Concat(params byte arrays)`

**Purpose:** Handles logic related to `concat`.

### Slice
`public static byte Slice(byte array, int count)`

**Purpose:** Handles logic related to `slice`.

### Xor
`public static byte Xor(byte left, long right)`

**Purpose:** Handles logic related to `xor`.

### Xor
`public static byte Xor(byte left, byte right)`

**Purpose:** Handles logic related to `xor`.

### ConstantTimeEquals
`public static bool ConstantTimeEquals(byte expected, byte actual)`

**Purpose:** Handles logic related to `constant time equals`.

### Dump
`public static string Dump(byte arr, string label = "")`

**Purpose:** Handles logic related to `dump`.

### Random
`public static byte Random(int sizeBits = 128)`

**Purpose:** Handles logic related to `random`.

### IntToBytes
`public static byte IntToBytes(int value)`

**Purpose:** Handles logic related to `int to bytes`.

### LongToBytes
`public static byte LongToBytes(long value)`

**Purpose:** Handles logic related to `long to bytes`.

### BytesToLong
`public static long BytesToLong(byte array)`

**Purpose:** Handles logic related to `bytes to long`.

### LeftmostBits
`public static byte LeftmostBits(byte data, int lengthBits)`

**Purpose:** Handles logic related to `leftmost bits`.

### RightmostBits
`public static byte RightmostBits(byte data, int lengthBits)`

**Purpose:** Handles logic related to `rightmost bits`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Arrays.FirstHalf(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
