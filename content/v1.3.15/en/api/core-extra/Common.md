---
title: "Common"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Common`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Common

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Common`
**Area:** core-extra

## Overview

`Common` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlatformFileHelper` | `public static IPlatformFileHelper PlatformFileHelper { get; set; }` |
| `ConfigName` | `public static string ConfigName { get; }` |
| `ParallelOptions` | `public static ParallelOptions ParallelOptions { get; }` |

## Key Methods

### CombineBytes
`public static byte CombineBytes(byte arr1, byte arr2, byte arr3 = null, byte arr4 = null, byte arr5 = null)`

**Purpose:** Handles logic related to `combine bytes`.

### CreateNanoIdFrom
`public static string CreateNanoIdFrom(string input)`

**Purpose:** Creates a new `nano id from` instance or object.

### CalculateMD5Hash
`public static string CalculateMD5Hash(string input)`

**Purpose:** Handles logic related to `calculate m d5 hash`.

### ToRoman
`public static string ToRoman(int number)`

**Purpose:** Handles logic related to `to roman`.

### GetDJB2
`public static int GetDJB2(string str)`

**Purpose:** Gets the current value of `d j b2`.

### SerializeObjectAsJson
`public static byte SerializeObjectAsJson(object o)`

**Purpose:** Handles logic related to `serialize object as json`.

### SerializeObjectAsJsonString
`public static string SerializeObjectAsJsonString(object o)`

**Purpose:** Handles logic related to `serialize object as json string`.

### FromUrlSafeBase64
`public static byte FromUrlSafeBase64(string base64)`

**Purpose:** Handles logic related to `from url safe base64`.

### FindType
`public static Type FindType(string typeName)`

**Purpose:** Handles logic related to `find type`.

### MemoryCleanupGC
`public static void MemoryCleanupGC(bool forceTimer = false)`

**Purpose:** Handles logic related to `memory cleanup g c`.

### DynamicInvokeWithLog
`public static object DynamicInvokeWithLog(this Delegate method, params object args)`

**Purpose:** Handles logic related to `dynamic invoke with log`.

### InvokeWithLog
`public static object InvokeWithLog(this MethodInfo methodInfo, object obj, params object args)`

**Purpose:** Handles logic related to `invoke with log`.

### InvokeWithLog
`public static object InvokeWithLog(this ConstructorInfo constructorInfo, params object args)`

**Purpose:** Handles logic related to `invoke with log`.

### TextContainsSpecialCharacters
`public static bool TextContainsSpecialCharacters(string text)`

**Purpose:** Handles logic related to `text contains special characters`.

### ParseIpAddress
`public static uint ParseIpAddress(string address)`

**Purpose:** Handles logic related to `parse ip address`.

### IsAllLetters
`public static bool IsAllLetters(string text)`

**Purpose:** Handles logic related to `is all letters`.

### IsAllLettersOrWhiteSpaces
`public static bool IsAllLettersOrWhiteSpaces(string text)`

**Purpose:** Handles logic related to `is all letters or white spaces`.

### IsCharAsian
`public static bool IsCharAsian(char character)`

**Purpose:** Handles logic related to `is char asian`.

### SetInvariantCulture
`public static void SetInvariantCulture()`

**Purpose:** Sets the value or state of `invariant culture`.

### GetMethodInfo
`public static MethodInfo GetMethodInfo(Expression<Action> expression)`

**Purpose:** Gets the current value of `method info`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Common.CombineBytes(0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
