---
title: "ContainerPageControlButtonListWidget"
description: "ContainerPageControlButtonListWidget 的自动生成类参考。"
---
# ContainerPageControlButtonListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContainerPageControlButtonListWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlButtonListWidget.cs`

## 概述

`ContainerPageControlButtonListWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ContainerPageControlButtonListWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PageButtonTemplate` | `public ButtonWidget PageButtonTemplate { get; set; }` |
| `FullButtonBrush` | `public string FullButtonBrush { get; set; }` |
| `EmptyButtonBrush` | `public string EmptyButtonBrush { get; set; }` |
| `PageButtonItemsListPanel` | `public ListPanel PageButtonItemsListPanel { get; set; }` |

## 主要方法

### ContainerPageControlButtonListWidget
`public class ContainerPageControlButtonListWidget(UIContext context)`

**用途 / Purpose:** 调用 ContainerPageControlButtonListWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 ContainerPageControlButtonListWidget 实例
ContainerPageControlButtonListWidget containerPageControlButtonListWidget = ...;
var result = containerPageControlButtonListWidget.ContainerPageControlButtonListWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ContainerPageControlButtonListWidget widget = ...;
```

## 参见

- [本区域目录](../)