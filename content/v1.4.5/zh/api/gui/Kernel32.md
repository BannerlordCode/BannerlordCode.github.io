---
title: "Kernel32"
description: "Kernel32 的自动生成类参考。"
---
# Kernel32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class Kernel32`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/Kernel32.cs`

## 概述

`Kernel32` 位于 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### LoadLibrary
`public static extern IntPtr LoadLibrary(string lpFileName)`

**用途 / Purpose:** 从持久化存储或流中读取 「library」。

```csharp
// 静态调用，不需要实例
Kernel32.LoadLibrary("example");
```

### GetModuleHandle
`public static extern IntPtr GetModuleHandle(string lpModuleName)`

**用途 / Purpose:** 读取并返回当前对象中 「module handle」 的结果。

```csharp
// 静态调用，不需要实例
Kernel32.GetModuleHandle("example");
```

### GetLastError
`public static extern int GetLastError()`

**用途 / Purpose:** 读取并返回当前对象中 「last error」 的结果。

```csharp
// 静态调用，不需要实例
Kernel32.GetLastError();
```

### GetConsoleWindow
`public static extern IntPtr GetConsoleWindow()`

**用途 / Purpose:** 读取并返回当前对象中 「console window」 的结果。

```csharp
// 静态调用，不需要实例
Kernel32.GetConsoleWindow();
```

### GetUserGeoID
`public static extern int GetUserGeoID(GeoTypeId type)`

**用途 / Purpose:** 读取并返回当前对象中 「user geo i d」 的结果。

```csharp
// 静态调用，不需要实例
Kernel32.GetUserGeoID(type);
```

## 使用示例

```csharp
Kernel32.LoadLibrary("example");
```

## 参见

- [本区域目录](../)