---
title: "OptionsScreenWidget"
description: "OptionsScreenWidget 的自动生成类参考。"
---
# OptionsScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsScreenWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options/OptionsScreenWidget.cs`

## 概述

`OptionsScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `OptionsScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `VideoMemoryUsageWidget` | `public Widget VideoMemoryUsageWidget { get; set; }` |
| `CurrentOptionDescriptionWidget` | `public RichTextWidget CurrentOptionDescriptionWidget { get; set; }` |
| `CurrentOptionNameWidget` | `public RichTextWidget CurrentOptionNameWidget { get; set; }` |
| `CurrentOptionExtraInformationWidget` | `public RichTextWidget CurrentOptionExtraInformationWidget { get; set; }` |
| `CurrentOptionImageWidget` | `public Widget CurrentOptionImageWidget { get; set; }` |
| `PerformanceTabToggle` | `public TabToggleWidget PerformanceTabToggle { get; set; }` |

## 主要方法

### SetCurrentOption
`public void SetCurrentOption(Widget currentOptionWidget, Sprite newgraphicsSprite)`

**用途 / Purpose:** 为 current option 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OptionsScreenWidget 实例
OptionsScreenWidget optionsScreenWidget = ...;
optionsScreenWidget.SetCurrentOption(currentOptionWidget, newgraphicsSprite);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
OptionsScreenWidget widget = ...;
```

## 参见

- [本区域目录](../)