---
title: "Watchdog"
description: "Watchdog 的自动生成类参考。"
---
# Watchdog

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class Watchdog`
**Base:** 无
**File:** `TaleWorlds.Library/Watchdog.cs`

## 概述

`Watchdog` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetDumpDirectory
`public static void SetDumpDirectory(string Path)`

**用途 / Purpose:** 为 dump directory 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Watchdog.SetDumpDirectory("example");
```

### DetachAndClose
`public static void DetachAndClose()`

**用途 / Purpose:** 调用 DetachAndClose 对应的操作。

```csharp
// 静态调用，不需要实例
Watchdog.DetachAndClose();
```

### LogProperty
`public static void LogProperty(string FileName, string GroupName, string Key, string Value)`

**用途 / Purpose:** 调用 LogProperty 对应的操作。

```csharp
// 静态调用，不需要实例
Watchdog.LogProperty("example", "example", "example", "example");
```

### Attached
`public static bool Attached()`

**用途 / Purpose:** 调用 Attached 对应的操作。

```csharp
// 静态调用，不需要实例
Watchdog.Attached();
```

## 使用示例

```csharp
Watchdog.SetDumpDirectory("example");
```

## 参见

- [本区域目录](../)