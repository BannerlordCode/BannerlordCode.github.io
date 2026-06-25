---
title: "RundownColumnDividerCollectionWidget"
description: "RundownColumnDividerCollectionWidget 的自动生成类参考。"
---
# RundownColumnDividerCollectionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownColumnDividerCollectionWidget : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownColumnDividerCollectionWidget.cs`

## 概述

`RundownColumnDividerCollectionWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `RundownColumnDividerCollectionWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DividerWidth` | `public float DividerWidth { get; set; }` |
| `DividerSprite` | `public Sprite DividerSprite { get; set; }` |
| `DividerColor` | `public Color DividerColor { get; set; }` |

## 主要方法

### Refresh
`public void Refresh(IReadOnlyList<float> columnWidths)`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RundownColumnDividerCollectionWidget 实例
RundownColumnDividerCollectionWidget rundownColumnDividerCollectionWidget = ...;
rundownColumnDividerCollectionWidget.Refresh(columnWidths);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
RundownColumnDividerCollectionWidget widget = ...;
```

## 参见

- [本区域目录](../)