---
title: "Highlights"
description: "Highlights 的自动生成类参考。"
---
# Highlights

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Highlights`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Highlights.cs`

## 概述

`Highlights` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
Highlights.Initialize();
```

### OpenGroup
`public static void OpenGroup(string id)`

**用途 / Purpose:** **用途 / Purpose:** 打开group对应的资源或界面。

```csharp
// 静态调用，不需要实例
Highlights.OpenGroup("example");
```

### CloseGroup
`public static void CloseGroup(string id, bool destroy = false)`

**用途 / Purpose:** **用途 / Purpose:** 关闭group对应的资源或界面。

```csharp
// 静态调用，不需要实例
Highlights.CloseGroup("example", false);
```

### SaveScreenshot
`public static void SaveScreenshot(string highlightId, string groupId)`

**用途 / Purpose:** **用途 / Purpose:** 将 screenshot 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
Highlights.SaveScreenshot("example", "example");
```

### SaveVideo
`public static void SaveVideo(string highlightId, string groupId, int startDelta, int endDelta)`

**用途 / Purpose:** **用途 / Purpose:** 将 video 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
Highlights.SaveVideo("example", "example", 0, 0);
```

### OpenSummary
`public static void OpenSummary(List<string> groups)`

**用途 / Purpose:** **用途 / Purpose:** 打开summary对应的资源或界面。

```csharp
// 静态调用，不需要实例
Highlights.OpenSummary(groups);
```

### AddHighlight
`public static void AddHighlight(string id, string name)`

**用途 / Purpose:** **用途 / Purpose:** 将 highlight 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
Highlights.AddHighlight("example", "example");
```

### RemoveHighlight
`public static void RemoveHighlight(string id)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 highlight。

```csharp
// 静态调用，不需要实例
Highlights.RemoveHighlight("example");
```

## 使用示例

```csharp
Highlights.Initialize();
```

## 参见

- [本区域目录](../)