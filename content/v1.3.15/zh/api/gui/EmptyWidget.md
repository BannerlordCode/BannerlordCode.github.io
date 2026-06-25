---
title: "EmptyWidget"
description: "EmptyWidget 的自动生成类参考。"
---
# EmptyWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `internal class EmptyWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EmptyWidget.cs`

## 概述

`EmptyWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `EmptyWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### UpdateBrushes
`public override void UpdateBrushes(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 brushes 的最新表示。

```csharp
// 先通过子系统 API 拿到 EmptyWidget 实例
EmptyWidget emptyWidget = ...;
emptyWidget.UpdateBrushes(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
EmptyWidget widget = ...;
```

## 参见

- [本区域目录](../)