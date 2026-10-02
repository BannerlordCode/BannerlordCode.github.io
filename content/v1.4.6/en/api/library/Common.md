---
title: "Common"
description: "Common: a public class in TaleWorlds.Library; 27 exposed members (24 methods, 3 properties, 0 fields). Source: TaleWorlds.Library/Common.cs."
---
# Common

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class Common`
**File:** `TaleWorlds.Library/Common.cs`

## Overview

Common lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Common.cs. It is a public class; the inheritance chain is Common. It exposes 27 public/protected members: 24 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Common is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain Common. The surface is method-led (methods 24/27, properties 3/27), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Common.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlatformFileHelper` | `public static IPlatformFileHelper PlatformFileHelper` | property |
| `byte[]CombineBytes` | `public static byte[]CombineBytes(byte[]arr1, byte[]arr2, byte[]arr3 = null, byte[]arr4 = null, byte[]arr5 = null)` | method |
| `CreateNanoIdFrom` | `public static string CreateNanoIdFrom(string input)` | method |
| `CalculateMD5Hash` | `public static string CalculateMD5Hash(string input)` | method |
| `ToRoman` | `public static string ToRoman(int number)` | method |
| `GetDJB2` | `public static int GetDJB2(string str)` | method |
| `byte[]SerializeObjectAsJson` | `public static byte[]SerializeObjectAsJson(object o)` | method |
| `SerializeObjectAsJsonString` | `public static string SerializeObjectAsJsonString(object o)` | method |
| `DeserializeObjectFromJson` | `public static T DeserializeObjectFromJson<T>(string json)` | method |
| `byte[]FromUrlSafeBase64` | `public static byte[]FromUrlSafeBase64(string base64)` | method |
| `ConfigName` | `public static string ConfigName` | property |
| `FindType` | `public static Type FindType(string typeName)` | method |
| `MemoryCleanupGC` | `public static void MemoryCleanupGC(bool forceTimer = false)` | method |
| `DynamicInvokeWithLog` | `public static object DynamicInvokeWithLog(this Delegate method, params object[]args)` | method |
| `InvokeWithLog` | `public static object InvokeWithLog(this MethodInfo methodInfo, object obj, params object[]args)` | method |
| `InvokeWithLog` | `public static object InvokeWithLog(this ConstructorInfo constructorInfo, params object[]args)` | method |
| `TextContainsSpecialCharacters` | `public static bool TextContainsSpecialCharacters(string text)` | method |
| `ParseIpAddress` | `public static uint ParseIpAddress(string address)` | method |
| `IsAllLetters` | `public static bool IsAllLetters(string text)` | method |
| `IsAllLettersOrWhiteSpaces` | `public static bool IsAllLettersOrWhiteSpaces(string text)` | method |
| `IsCharAsian` | `public static bool IsCharAsian(char character)` | method |
| `SetInvariantCulture` | `public static void SetInvariantCulture()` | method |
| `GetMethodInfo` | `public static MethodInfo GetMethodInfo(Expression<Action>expression)` | method |
| `GetMethodInfo` | `public static MethodInfo GetMethodInfo<T>(Expression<Action<T>>expression)` | method |
| `TResult>` | `public static MethodInfo GetMethodInfo<T, TResult>(Expression<Func<T, TResult>>expression)` | method |
| `GetMethodInfo` | `public static MethodInfo GetMethodInfo(LambdaExpression expression)` | method |
| `ParallelOptions` | `public static ParallelOptions ParallelOptions` | property |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
