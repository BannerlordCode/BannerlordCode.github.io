---
title: "HttpDriverManager"
description: "HttpDriverManager 的自动生成类参考。"
---
# HttpDriverManager

**Namespace:** TaleWorlds.Library.Http
**Module:** TaleWorlds.Library
**Type:** `public static class HttpDriverManager`
**Base:** 无
**File:** `TaleWorlds.Library/Http/HttpDriverManager.cs`

## 概述

`HttpDriverManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `HttpDriverManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddHttpDriver
`public static void AddHttpDriver(string name, IHttpDriver driver)`

**用途 / Purpose:** **用途 / Purpose:** 将 http driver 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
HttpDriverManager.AddHttpDriver("example", driver);
```

### SetDefault
`public static void SetDefault(string name)`

**用途 / Purpose:** **用途 / Purpose:** 为 default 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
HttpDriverManager.SetDefault("example");
```

### GetHttpDriver
`public static IHttpDriver GetHttpDriver(string name)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 http driver 的结果。

```csharp
// 静态调用，不需要实例
HttpDriverManager.GetHttpDriver("example");
```

### GetDefaultHttpDriver
`public static IHttpDriver GetDefaultHttpDriver()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default http driver 的结果。

```csharp
// 静态调用，不需要实例
HttpDriverManager.GetDefaultHttpDriver();
```

## 使用示例

```csharp
var manager = HttpDriverManager.Current;
```

## 参见

- [本区域目录](../)