---
title: "KingdomClanTypeVisualBrushWidget"
description: "KingdomClanTypeVisualBrushWidget 的自动生成类参考。"
---
# KingdomClanTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomClanTypeVisualBrushWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/KingdomClanTypeVisualBrushWidget.cs`

## 概述

`KingdomClanTypeVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `KingdomClanTypeVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |

## 主要方法

### KingdomClanTypeVisualBrushWidget
`public class KingdomClanTypeVisualBrushWidget(UIContext context)`

**用途 / Purpose:** 处理与 「kingdom clan type visual brush widget」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 KingdomClanTypeVisualBrushWidget 实例
KingdomClanTypeVisualBrushWidget kingdomClanTypeVisualBrushWidget = ...;
var result = kingdomClanTypeVisualBrushWidget.KingdomClanTypeVisualBrushWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
KingdomClanTypeVisualBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)