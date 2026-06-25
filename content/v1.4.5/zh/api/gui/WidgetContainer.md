---
title: "WidgetContainer"
description: "WidgetContainer 的自动生成类参考。"
---
# WidgetContainer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `internal class WidgetContainer`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/WidgetContainer.cs`

## 概述

`WidgetContainer` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 WidgetContainer 实例
WidgetContainer widgetContainer = ...;
widgetContainer.Clear();
```

### GetActiveList
`public MBReadOnlyList<Widget> GetActiveList()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active list 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetContainer 实例
WidgetContainer widgetContainer = ...;
var result = widgetContainer.GetActiveList();
```

### Defrag
`public void Defrag()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Defrag 对应的操作。

```csharp
// 先通过子系统 API 拿到 WidgetContainer 实例
WidgetContainer widgetContainer = ...;
widgetContainer.Defrag();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WidgetContainer widgetContainer = ...;
widgetContainer.Clear();
```

## 参见

- [本区域目录](../)