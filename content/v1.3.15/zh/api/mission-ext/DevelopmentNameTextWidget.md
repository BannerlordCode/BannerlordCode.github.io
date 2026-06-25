---
title: "DevelopmentNameTextWidget"
description: "DevelopmentNameTextWidget 的自动生成类参考。"
---
# DevelopmentNameTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentNameTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs`

## 概述

`DevelopmentNameTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `DevelopmentNameTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxText` | `public string MaxText { get; set; }` |
| `MaxTextStayTime` | `public float MaxTextStayTime { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |

## 主要方法

### StartMaxTextAnimation
`public void StartMaxTextAnimation()`

**用途 / Purpose:** 启动「max text animation」流程或状态机。

```csharp
// 先通过子系统 API 拿到 DevelopmentNameTextWidget 实例
DevelopmentNameTextWidget developmentNameTextWidget = ...;
developmentNameTextWidget.StartMaxTextAnimation();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
DevelopmentNameTextWidget widget = ...;
```

## 参见

- [本区域目录](../)