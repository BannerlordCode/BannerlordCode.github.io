---
title: "Common"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Common`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `combine bytes` 相关逻辑。

### CalculateMD5Hash
`public static string CalculateMD5Hash(string input)`

**用途 / Purpose:** 处理 `calculate m d5 hash` 相关逻辑。

### ToRoman
`public static string ToRoman(int number)`

**用途 / Purpose:** 处理 `to roman` 相关逻辑。

### GetDJB2
`public static int GetDJB2(string str)`

**用途 / Purpose:** 获取 `d j b2` 的当前值。

### SerializeObjectAsJson
`public static byte SerializeObjectAsJson(object o)`

**用途 / Purpose:** 处理 `serialize object as json` 相关逻辑。

### SerializeObjectAsJsonString
`public static string SerializeObjectAsJsonString(object o)`

**用途 / Purpose:** 处理 `serialize object as json string` 相关逻辑。

### FromUrlSafeBase64
`public static byte FromUrlSafeBase64(string base64)`

**用途 / Purpose:** 处理 `from url safe base64` 相关逻辑。

### FindType
`public static Type FindType(string typeName)`

**用途 / Purpose:** 处理 `find type` 相关逻辑。

### MemoryCleanupGC
`public static void MemoryCleanupGC(bool forceTimer = false)`

**用途 / Purpose:** 处理 `memory cleanup g c` 相关逻辑。

### DynamicInvokeWithLog
`public static object DynamicInvokeWithLog(this Delegate method, params object args)`

**用途 / Purpose:** 处理 `dynamic invoke with log` 相关逻辑。

### InvokeWithLog
`public static object InvokeWithLog(this MethodInfo methodInfo, object obj, params object args)`

**用途 / Purpose:** 处理 `invoke with log` 相关逻辑。

### InvokeWithLog
`public static object InvokeWithLog(this ConstructorInfo constructorInfo, params object args)`

**用途 / Purpose:** 处理 `invoke with log` 相关逻辑。

### TextContainsSpecialCharacters
`public static bool TextContainsSpecialCharacters(string text)`

**用途 / Purpose:** 处理 `text contains special characters` 相关逻辑。

### ParseIpAddress
`public static uint ParseIpAddress(string address)`

**用途 / Purpose:** 处理 `parse ip address` 相关逻辑。

### IsAllLetters
`public static bool IsAllLetters(string text)`

**用途 / Purpose:** 处理 `is all letters` 相关逻辑。

### IsAllLettersOrWhiteSpaces
`public static bool IsAllLettersOrWhiteSpaces(string text)`

**用途 / Purpose:** 处理 `is all letters or white spaces` 相关逻辑。

### IsCharAsian
`public static bool IsCharAsian(char character)`

**用途 / Purpose:** 处理 `is char asian` 相关逻辑。

### SetInvariantCulture
`public static void SetInvariantCulture()`

**用途 / Purpose:** 设置 `invariant culture` 的值或状态。

### GetMethodInfo
`public static MethodInfo GetMethodInfo(Expression<Action> expression)`

**用途 / Purpose:** 获取 `method info` 的当前值。

### GetMethodInfo
`public static MethodInfo GetMethodInfo(LambdaExpression expression)`

**用途 / Purpose:** 获取 `method info` 的当前值。

## 使用示例

```csharp
Common.CombineBytes(0, 0, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)