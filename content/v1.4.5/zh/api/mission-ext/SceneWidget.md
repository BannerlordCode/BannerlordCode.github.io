---
title: "SceneWidget"
description: "SceneWidget 的自动生成类参考。"
---
# SceneWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs`

## 概述

`SceneWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SceneWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Scene` | `public object Scene { get; set; }` |
| `AffirmativeButton` | `public ButtonWidget AffirmativeButton { get; set; }` |
| `CancelButton` | `public ButtonWidget CancelButton { get; set; }` |
| `ClickToContinueTextWidget` | `public RichTextWidget ClickToContinueTextWidget { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `FadeImageWidget` | `public Widget FadeImageWidget { get; set; }` |
| `PreparingVisualWidget` | `public Widget PreparingVisualWidget { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `FadeInDuration` | `public float FadeInDuration { get; set; }` |
| `IsOkShown` | `public bool IsOkShown { get; set; }` |
| `IsCancelShown` | `public bool IsCancelShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `AffirmativeTitleText` | `public string AffirmativeTitleText { get; set; }` |
| `NegativeTitleText` | `public string NegativeTitleText { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
SceneWidget widget = ...;
```

## 参见

- [本区域目录](../)