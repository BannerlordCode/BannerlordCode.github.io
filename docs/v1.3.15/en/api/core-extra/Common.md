<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Common`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Common

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `Common` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PlatformFileHelper` | `public static IPlatformFileHelper PlatformFileHelper { get; set; }` |
| `ConfigName` | `public static string ConfigName { get; }` |
| `ParallelOptions` | `public static ParallelOptions ParallelOptions { get; }` |


## Key Methods

### CombineBytes

```csharp
public static byte CombineBytes(byte arr1, byte arr2, byte arr3 = null, byte arr4 = null, byte arr5 = null)
```

### CreateNanoIdFrom

```csharp
public static string CreateNanoIdFrom(string input)
```

### CalculateMD5Hash

```csharp
public static string CalculateMD5Hash(string input)
```

### ToRoman

```csharp
public static string ToRoman(int number)
```

### GetDJB2

```csharp
public static int GetDJB2(string str)
```

### SerializeObjectAsJson

```csharp
public static byte SerializeObjectAsJson(object o)
```

### SerializeObjectAsJsonString

```csharp
public static string SerializeObjectAsJsonString(object o)
```

### FromUrlSafeBase64

```csharp
public static byte FromUrlSafeBase64(string base64)
```

### FindType

```csharp
public static Type FindType(string typeName)
```

### MemoryCleanupGC

```csharp
public static void MemoryCleanupGC(bool forceTimer = false)
```

### DynamicInvokeWithLog

```csharp
public static object DynamicInvokeWithLog(this Delegate method, params object args)
```

### InvokeWithLog

```csharp
public static object InvokeWithLog(this MethodInfo methodInfo, object obj, params object args)
```

### InvokeWithLog

```csharp
public static object InvokeWithLog(this ConstructorInfo constructorInfo, params object args)
```

### TextContainsSpecialCharacters

```csharp
public static bool TextContainsSpecialCharacters(string text)
```

### ParseIpAddress

```csharp
public static uint ParseIpAddress(string address)
```

### IsAllLetters

```csharp
public static bool IsAllLetters(string text)
```

### IsAllLettersOrWhiteSpaces

```csharp
public static bool IsAllLettersOrWhiteSpaces(string text)
```

### IsCharAsian

```csharp
public static bool IsCharAsian(char character)
```

### SetInvariantCulture

```csharp
public static void SetInvariantCulture()
```

### GetMethodInfo

```csharp
public static MethodInfo GetMethodInfo(Expression<Action> expression)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)