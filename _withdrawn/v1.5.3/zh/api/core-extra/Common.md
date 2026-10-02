---
title: "Common"
description: "Common 的自动生成类参考。"
---
# Common

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Common `
**Base:** System.Object
**Source:** TaleWorlds.Library/Common.cs

## 概述

`Common` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/Common.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CombineBytes
`public static byte[] CombineBytes(byte[] arr1,byte[] arr2,byte[] arr3 = null,byte[] arr4 = null,byte[] arr5 = null) `

### CreateNanoIdFrom
`public static string CreateNanoIdFrom(string input) `

### CalculateMD5Hash
`public static string CalculateMD5Hash(string input) `

### ToRoman
`public static string ToRoman(int number) `

### GetDJB2
`public static int GetDJB2(string str) `

### SerializeObjectAsJson
`public static byte[] SerializeObjectAsJson(object o) `

### SerializeObjectAsJsonString
`public static string SerializeObjectAsJsonString(object o) `

### FromUrlSafeBase64
`public static byte[] FromUrlSafeBase64(string base64) `

### FindType
`public static Type FindType(string typeName) `

### MemoryCleanupGC
`public static void MemoryCleanupGC(bool forceTimer = false) `

### DynamicInvokeWithLog
`public static object DynamicInvokeWithLog(this Delegate method,params object[] args) `

### InvokeWithLog
`public static object InvokeWithLog(this MethodInfo methodInfo,object obj,params object[] args) `
`public static object InvokeWithLog(this ConstructorInfo constructorInfo,params object[] args) `

### TextContainsSpecialCharacters
`public static bool TextContainsSpecialCharacters(string text) `

### ParseIpAddress
`public static uint ParseIpAddress(string address) `

### IsAllLetters
`public static bool IsAllLetters(string text) `

### IsAllLettersOrWhiteSpaces
`public static bool IsAllLettersOrWhiteSpaces(string text) `

### IsCharAsian
`public static bool IsCharAsian(char character) `

### SetInvariantCulture
`public static void SetInvariantCulture() `

### GetMethodInfo
`public static MethodInfo GetMethodInfo(Expression<Action> expression) `
`public static MethodInfo GetMethodInfo(LambdaExpression expression) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
