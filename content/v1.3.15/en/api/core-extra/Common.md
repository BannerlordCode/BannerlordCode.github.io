---
title: "Common"
description: "Auto-generated class reference for Common."
---
# Common

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Common`
**Base:** none
**File:** `TaleWorlds.Library/Common.cs`

## Overview

`Common` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Combines multiple `bytes` inputs into a single unified result.

```csharp
// Static call; no instance required
Common.CombineBytes(0, 0, 0, 0, 0);
```

### CreateNanoIdFrom
`public static string CreateNanoIdFrom(string input)`

**Purpose:** Constructs a new `nano id from` entity and returns it to the caller.

```csharp
// Static call; no instance required
Common.CreateNanoIdFrom("example");
```

### CalculateMD5Hash
`public static string CalculateMD5Hash(string input)`

**Purpose:** Calculates the current value or result of `m d5 hash`.

```csharp
// Static call; no instance required
Common.CalculateMD5Hash("example");
```

### ToRoman
`public static string ToRoman(int number)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Common.ToRoman(0);
```

### GetDJB2
`public static int GetDJB2(string str)`

**Purpose:** Reads and returns the `d j b2` value held by the current object.

```csharp
// Static call; no instance required
Common.GetDJB2("example");
```

### SerializeObjectAsJson
`public static byte SerializeObjectAsJson(object o)`

**Purpose:** Serializes `object as json` into a storable or transmittable format.

```csharp
// Static call; no instance required
Common.SerializeObjectAsJson(o);
```

### SerializeObjectAsJsonString
`public static string SerializeObjectAsJsonString(object o)`

**Purpose:** Serializes `object as json string` into a storable or transmittable format.

```csharp
// Static call; no instance required
Common.SerializeObjectAsJsonString(o);
```

### FromUrlSafeBase64
`public static byte FromUrlSafeBase64(string base64)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Common.FromUrlSafeBase64("example");
```

### FindType
`public static Type FindType(string typeName)`

**Purpose:** Looks up the matching `type` in the current collection or scope.

```csharp
// Static call; no instance required
Common.FindType("example");
```

### MemoryCleanupGC
`public static void MemoryCleanupGC(bool forceTimer = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Common.MemoryCleanupGC(false);
```

### DynamicInvokeWithLog
`public static object DynamicInvokeWithLog(this Delegate method, params object args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Common.DynamicInvokeWithLog(method, args);
```

### InvokeWithLog
`public static object InvokeWithLog(this MethodInfo methodInfo, object obj, params object args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Common.InvokeWithLog(methodInfo, obj, args);
```

### InvokeWithLog
`public static object InvokeWithLog(this ConstructorInfo constructorInfo, params object args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Common.InvokeWithLog(constructorInfo, args);
```

### TextContainsSpecialCharacters
`public static bool TextContainsSpecialCharacters(string text)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Common.TextContainsSpecialCharacters("example");
```

### ParseIpAddress
`public static uint ParseIpAddress(string address)`

**Purpose:** Parses external input into a `ip address` the current system understands.

```csharp
// Static call; no instance required
Common.ParseIpAddress("example");
```

### IsAllLetters
`public static bool IsAllLetters(string text)`

**Purpose:** Determines whether the current object is in the `all letters` state or condition.

```csharp
// Static call; no instance required
Common.IsAllLetters("example");
```

### IsAllLettersOrWhiteSpaces
`public static bool IsAllLettersOrWhiteSpaces(string text)`

**Purpose:** Determines whether the current object is in the `all letters or white spaces` state or condition.

```csharp
// Static call; no instance required
Common.IsAllLettersOrWhiteSpaces("example");
```

### IsCharAsian
`public static bool IsCharAsian(char character)`

**Purpose:** Determines whether the current object is in the `char asian` state or condition.

```csharp
// Static call; no instance required
Common.IsCharAsian(character);
```

### SetInvariantCulture
`public static void SetInvariantCulture()`

**Purpose:** Assigns a new value to `invariant culture` and updates the object's internal state.

```csharp
// Static call; no instance required
Common.SetInvariantCulture();
```

### GetMethodInfo
`public static MethodInfo GetMethodInfo(Expression<Action> expression)`

**Purpose:** Reads and returns the `method info` value held by the current object.

```csharp
// Static call; no instance required
Common.GetMethodInfo(expression);
```

### GetMethodInfo
`public static MethodInfo GetMethodInfo(LambdaExpression expression)`

**Purpose:** Reads and returns the `method info` value held by the current object.

```csharp
// Static call; no instance required
Common.GetMethodInfo(expression);
```

## Usage Example

```csharp
Common.CombineBytes(0, 0, 0, 0, 0);
```

## See Also

- [Area Index](../)