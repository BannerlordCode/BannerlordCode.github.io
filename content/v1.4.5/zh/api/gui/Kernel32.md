---
title: "Kernel32"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Kernel32`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Kernel32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class Kernel32`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/Kernel32.cs`

## 概述

`Kernel32` 位于 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
`public static extern int GetUserGeoID(GeoTypeId type)`

**用途 / Purpose:** 获取 `user geo i d` 的当前值。

## 使用示例

```csharp
Kernel32.LoadLibrary("example");
```

## 参见

- [完整类目录](../catalog)