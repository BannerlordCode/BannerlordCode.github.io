<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Common`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Common

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Common` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PlatformFileHelper` | `public static IPlatformFileHelper PlatformFileHelper { get; set; }` |
| `ConfigName` | `public static string ConfigName { get; }` |
| `ParallelOptions` | `public static ParallelOptions ParallelOptions { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)