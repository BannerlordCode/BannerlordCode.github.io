---
title: "InteropHelp"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InteropHelp`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InteropHelp

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class InteropHelp`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/InteropHelp.cs`

## 概述

`InteropHelp` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IntPtr
`public static implicit operator IntPtr(SteamParamStringArray that)`

**用途 / Purpose:** 处理 `int ptr` 相关逻辑。

### TestIfPlatformSupported
`public static void TestIfPlatformSupported()`

**用途 / Purpose:** 处理 `test if platform supported` 相关逻辑。

### TestIfAvailableClient
`public static void TestIfAvailableClient()`

**用途 / Purpose:** 处理 `test if available client` 相关逻辑。

### TestIfAvailableGameServer
`public static void TestIfAvailableGameServer()`

**用途 / Purpose:** 处理 `test if available game server` 相关逻辑。

### PtrToStringUTF8
`public static string PtrToStringUTF8(IntPtr nativeUtf8)`

**用途 / Purpose:** 处理 `ptr to string u t f8` 相关逻辑。

### ByteArrayToStringUTF8
`public static string ByteArrayToStringUTF8(byte buffer)`

**用途 / Purpose:** 处理 `byte array to string u t f8` 相关逻辑。

### StringToByteArrayUTF8
`public static void StringToByteArrayUTF8(string str, byte outArrayBuffer, int outArrayBufferSize)`

**用途 / Purpose:** 处理 `string to byte array u t f8` 相关逻辑。

## 使用示例

```csharp
InteropHelp.IntPtr(that);
```

## 参见

- [完整类目录](../catalog)