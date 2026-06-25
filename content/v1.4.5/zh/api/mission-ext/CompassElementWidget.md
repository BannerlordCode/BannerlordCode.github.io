---
title: "CompassElementWidget"
description: "CompassElementWidget 的自动生成类参考。"
---
# CompassElementWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassElementWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/CompassElementWidget.cs`

## 概述

`CompassElementWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CompassElementWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public float Position { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `FlagWidget` | `public Widget FlagWidget { get; set; }` |

## 主要方法

### CompassElementWidget
`public class CompassElementWidget(UIContext context)`

**用途 / Purpose:** 处理与 「compass element widget」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CompassElementWidget 实例
CompassElementWidget compassElementWidget = ...;
var result = compassElementWidget.CompassElementWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CompassElementWidget widget = ...;
```

## 参见

- [本区域目录](../)