---
title: "GridLayout"
description: "GridLayout 的自动生成类参考。"
---
# GridLayout

**Namespace:** TaleWorlds.GauntletUI.Layout
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GridLayout : ILayout`
**Base:** `ILayout`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.Layout/GridLayout.cs`

## 概述

`GridLayout` 位于 `TaleWorlds.GauntletUI.Layout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Layout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VerticalLayoutMethod` | `public GridVerticalLayoutMethod VerticalLayoutMethod { get; set; }` |
| `HorizontalLayoutMethod` | `public GridHorizontalLayoutMethod HorizontalLayoutMethod { get; }` |
| `Direction` | `public GridDirection Direction { get; }` |
| `RowHeights` | `public IReadOnlyList<float> RowHeights { get; }` |
| `ColumnWidths` | `public IReadOnlyList<float> ColumnWidths { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
GridLayout instance = ...;
```

## 参见

- [本区域目录](../)