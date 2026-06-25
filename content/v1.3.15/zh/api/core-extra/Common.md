---
title: "Common"
description: "Common 的自动生成类参考。"
---
# Common

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Common`
**Base:** 无
**File:** `TaleWorlds.Library/Common.cs`

## 概述

`Common` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlatformFileHelper` | `public static IPlatformFileHelper PlatformFileHelper { get; set; }` |
| `ConfigName` | `public static string ConfigName { get; }` |
| `ParallelOptions` | `public static ParallelOptions ParallelOptions { get; }` |

## 主要方法

### CombineBytes
`public static byte CombineBytes(byte arr1, byte arr2, byte arr3 = null, byte arr4 = null, byte arr5 = null)`

**用途 / Purpose:** 将多个「bytes」合并成一个统一结果。

```csharp
// 静态调用，不需要实例
Common.CombineBytes(0, 0, 0, 0, 0);
```

### CreateNanoIdFrom
`public static string CreateNanoIdFrom(string input)`

**用途 / Purpose:** 构建一个新的 「nano id from」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Common.CreateNanoIdFrom("example");
```

### CalculateMD5Hash
`public static string CalculateMD5Hash(string input)`

**用途 / Purpose:** 计算「m d5 hash」的当前值或结果。

```csharp
// 静态调用，不需要实例
Common.CalculateMD5Hash("example");
```

### ToRoman
`public static string ToRoman(int number)`

**用途 / Purpose:** 处理与 「to roman」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Common.ToRoman(0);
```

### GetDJB2
`public static int GetDJB2(string str)`

**用途 / Purpose:** 读取并返回当前对象中 「d j b2」 的结果。

```csharp
// 静态调用，不需要实例
Common.GetDJB2("example");
```

### SerializeObjectAsJson
`public static byte SerializeObjectAsJson(object o)`

**用途 / Purpose:** 将「object as json」序列化为可存储或传输的格式。

```csharp
// 静态调用，不需要实例
Common.SerializeObjectAsJson(o);
```

### SerializeObjectAsJsonString
`public static string SerializeObjectAsJsonString(object o)`

**用途 / Purpose:** 将「object as json string」序列化为可存储或传输的格式。

```csharp
// 静态调用，不需要实例
Common.SerializeObjectAsJsonString(o);
```

### FromUrlSafeBase64
`public static byte FromUrlSafeBase64(string base64)`

**用途 / Purpose:** 处理与 「from url safe base64」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Common.FromUrlSafeBase64("example");
```

### FindType
`public static Type FindType(string typeName)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「type」。

```csharp
// 静态调用，不需要实例
Common.FindType("example");
```

### MemoryCleanupGC
`public static void MemoryCleanupGC(bool forceTimer = false)`

**用途 / Purpose:** 处理与 「memory cleanup gc」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Common.MemoryCleanupGC(false);
```

### DynamicInvokeWithLog
`public static object DynamicInvokeWithLog(this Delegate method, params object args)`

**用途 / Purpose:** 处理与 「dynamic invoke with log」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Common.DynamicInvokeWithLog(method, args);
```

### InvokeWithLog
`public static object InvokeWithLog(this MethodInfo methodInfo, object obj, params object args)`

**用途 / Purpose:** 处理与 「invoke with log」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Common.InvokeWithLog(methodInfo, obj, args);
```

### InvokeWithLog
`public static object InvokeWithLog(this ConstructorInfo constructorInfo, params object args)`

**用途 / Purpose:** 处理与 「invoke with log」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Common.InvokeWithLog(constructorInfo, args);
```

### TextContainsSpecialCharacters
`public static bool TextContainsSpecialCharacters(string text)`

**用途 / Purpose:** 处理与 「text contains special characters」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Common.TextContainsSpecialCharacters("example");
```

### ParseIpAddress
`public static uint ParseIpAddress(string address)`

**用途 / Purpose:** 将外部输入解析为当前系统可识别的「ip address」。

```csharp
// 静态调用，不需要实例
Common.ParseIpAddress("example");
```

### IsAllLetters
`public static bool IsAllLetters(string text)`

**用途 / Purpose:** 判断当前对象是否处于 「all letters」 状态或条件。

```csharp
// 静态调用，不需要实例
Common.IsAllLetters("example");
```

### IsAllLettersOrWhiteSpaces
`public static bool IsAllLettersOrWhiteSpaces(string text)`

**用途 / Purpose:** 判断当前对象是否处于 「all letters or white spaces」 状态或条件。

```csharp
// 静态调用，不需要实例
Common.IsAllLettersOrWhiteSpaces("example");
```

### IsCharAsian
`public static bool IsCharAsian(char character)`

**用途 / Purpose:** 判断当前对象是否处于 「char asian」 状态或条件。

```csharp
// 静态调用，不需要实例
Common.IsCharAsian(character);
```

### SetInvariantCulture
`public static void SetInvariantCulture()`

**用途 / Purpose:** 为 「invariant culture」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Common.SetInvariantCulture();
```

### GetMethodInfo
`public static MethodInfo GetMethodInfo(Expression<Action> expression)`

**用途 / Purpose:** 读取并返回当前对象中 「method info」 的结果。

```csharp
// 静态调用，不需要实例
Common.GetMethodInfo(expression);
```

### GetMethodInfo
`public static MethodInfo GetMethodInfo(LambdaExpression expression)`

**用途 / Purpose:** 读取并返回当前对象中 「method info」 的结果。

```csharp
// 静态调用，不需要实例
Common.GetMethodInfo(expression);
```

## 使用示例

```csharp
Common.CombineBytes(0, 0, 0, 0, 0);
```

## 参见

- [本区域目录](../)