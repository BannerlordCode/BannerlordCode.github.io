---
title: "Common"
description: "Common：TaleWorlds.Library 的 public 类；公开成员 27 个（方法 24、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/Common.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Common

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class Common`
**File:** `TaleWorlds.Library/Common.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

Common 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Common.cs。它是一个 public 类，继承链为 Common。public/protected 成员共 27 个：24 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Common 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 Common。成员构成以方法为主（方法 24/27，属性 3/27），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Common.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlatformFileHelper` | `public static IPlatformFileHelper PlatformFileHelper` | 属性 |
| `byte[]CombineBytes` | `public static byte[]CombineBytes(byte[]arr1, byte[]arr2, byte[]arr3 = null, byte[]arr4 = null, byte[]arr5 = null)` | 方法 |
| `CreateNanoIdFrom` | `public static string CreateNanoIdFrom(string input)` | 方法 |
| `CalculateMD5Hash` | `public static string CalculateMD5Hash(string input)` | 方法 |
| `ToRoman` | `public static string ToRoman(int number)` | 方法 |
| `GetDJB2` | `public static int GetDJB2(string str)` | 方法 |
| `byte[]SerializeObjectAsJson` | `public static byte[]SerializeObjectAsJson(object o)` | 方法 |
| `SerializeObjectAsJsonString` | `public static string SerializeObjectAsJsonString(object o)` | 方法 |
| `DeserializeObjectFromJson` | `public static T DeserializeObjectFromJson<T>(string json)` | 方法 |
| `byte[]FromUrlSafeBase64` | `public static byte[]FromUrlSafeBase64(string base64)` | 方法 |
| `ConfigName` | `public static string ConfigName` | 属性 |
| `FindType` | `public static Type FindType(string typeName)` | 方法 |
| `MemoryCleanupGC` | `public static void MemoryCleanupGC(bool forceTimer = false)` | 方法 |
| `DynamicInvokeWithLog` | `public static object DynamicInvokeWithLog(this Delegate method, params object[]args)` | 方法 |
| `InvokeWithLog` | `public static object InvokeWithLog(this MethodInfo methodInfo, object obj, params object[]args)` | 方法 |
| `InvokeWithLog` | `public static object InvokeWithLog(this ConstructorInfo constructorInfo, params object[]args)` | 方法 |
| `TextContainsSpecialCharacters` | `public static bool TextContainsSpecialCharacters(string text)` | 方法 |
| `ParseIpAddress` | `public static uint ParseIpAddress(string address)` | 方法 |
| `IsAllLetters` | `public static bool IsAllLetters(string text)` | 方法 |
| `IsAllLettersOrWhiteSpaces` | `public static bool IsAllLettersOrWhiteSpaces(string text)` | 方法 |
| `IsCharAsian` | `public static bool IsCharAsian(char character)` | 方法 |
| `SetInvariantCulture` | `public static void SetInvariantCulture()` | 方法 |
| `GetMethodInfo` | `public static MethodInfo GetMethodInfo(Expression<Action>expression)` | 方法 |
| `GetMethodInfo` | `public static MethodInfo GetMethodInfo<T>(Expression<Action<T>>expression)` | 方法 |
| `TResult>` | `public static MethodInfo GetMethodInfo<T, TResult>(Expression<Func<T, TResult>>expression)` | 方法 |
| `GetMethodInfo` | `public static MethodInfo GetMethodInfo(LambdaExpression expression)` | 方法 |
| `ParallelOptions` | `public static ParallelOptions ParallelOptions` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
