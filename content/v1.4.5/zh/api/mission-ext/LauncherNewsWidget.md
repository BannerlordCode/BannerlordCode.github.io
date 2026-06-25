---
title: "LauncherNewsWidget"
description: "LauncherNewsWidget 的自动生成类参考。"
---
# LauncherNewsWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherNewsWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets/LauncherNewsWidget.cs`

## 概述

`LauncherNewsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `LauncherNewsWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TimeToShowNewsItemInSeconds` | `public float TimeToShowNewsItemInSeconds { get; set; }` |
| `RadioButtonContainer` | `public ListPanel RadioButtonContainer { get; set; }` |
| `TimeLeftFillWidget` | `public Widget TimeLeftFillWidget { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
LauncherNewsWidget widget = ...;
```

## 参见

- [本区域目录](../)