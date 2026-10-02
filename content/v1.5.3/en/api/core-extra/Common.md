---
title: "Common"
description: "Auto-generated class reference for Common."
---
# Common

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Common `
**Base:** System.Object
**Source:** TaleWorlds.Library/Common.cs

## Overview

Auto-generated stub for `Common`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CombineBytes
`public static byte[] CombineBytes(byte[] arr1,byte[] arr2,byte[] arr3 = null,byte[] arr4 = null,byte[] arr5 = null)`

### CreateNanoIdFrom
`public static string CreateNanoIdFrom(string input)`

### CalculateMD5Hash
`public static string CalculateMD5Hash(string input)`

### ToRoman
`public static string ToRoman(int number)`

### GetDJB2
`public static int GetDJB2(string str)`

### SerializeObjectAsJson
`public static byte[] SerializeObjectAsJson(object o)`

### SerializeObjectAsJsonString
`public static string SerializeObjectAsJsonString(object o)`

### FromUrlSafeBase64
`public static byte[] FromUrlSafeBase64(string base64)`

### FindType
`public static Type FindType(string typeName)`

### MemoryCleanupGC
`public static void MemoryCleanupGC(bool forceTimer = false)`

### DynamicInvokeWithLog
`public static object DynamicInvokeWithLog(this Delegate method,params object[] args)`

### InvokeWithLog
`public static object InvokeWithLog(this MethodInfo methodInfo,object obj,params object[] args)`

### TextContainsSpecialCharacters
`public static bool TextContainsSpecialCharacters(string text)`

### ParseIpAddress
`public static uint ParseIpAddress(string address)`

### IsAllLetters
`public static bool IsAllLetters(string text)`

### IsAllLettersOrWhiteSpaces
`public static bool IsAllLettersOrWhiteSpaces(string text)`

### IsCharAsian
`public static bool IsCharAsian(char character)`

### SetInvariantCulture
`public static void SetInvariantCulture()`

### GetMethodInfo
`public static MethodInfo GetMethodInfo(Expression<Action> expression)`

## See Also

- [Section index](../)
