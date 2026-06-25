---
title: "Kernel32"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Kernel32`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Kernel32

**命名空间:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**模块:** TaleWorlds.TwoDimension
**类型:** `public static class Kernel32`
**领域:** campaign-ext

## 概述

`Kernel32` 位于 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### LoadLibrary
`public static extern IntPtr LoadLibrary(string lpFileName)`

**用途 / Purpose:** 加载 `library` 数据。

### GetModuleHandle
`public static extern IntPtr GetModuleHandle(string lpModuleName)`

**用途 / Purpose:** 获取 `module handle` 的当前值。

### GetLastError
`public static extern int GetLastError()`

**用途 / Purpose:** 获取 `last error` 的当前值。

### GetConsoleWindow
`public static extern IntPtr GetConsoleWindow()`

**用途 / Purpose:** 获取 `console window` 的当前值。

### GetUserGeoID
`public static extern int GetUserGeoID(Kernel32.GeoTypeId type)`

**用途 / Purpose:** 获取 `user geo i d` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Kernel32.LoadLibrary("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
