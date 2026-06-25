---
title: "BoostCohesionPopupWidget"
description: "BoostCohesionPopupWidget 的自动生成类参考。"
---
# BoostCohesionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostCohesionPopupWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy/BoostCohesionPopupWidget.cs`

## 概述

`BoostCohesionPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `BoostCohesionPopupWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClosePopupButton` | `public ButtonWidget ClosePopupButton { get; set; }` |

## 主要方法

### ClosePopup
`public void ClosePopup(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 关闭popup对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 BoostCohesionPopupWidget 实例
BoostCohesionPopupWidget boostCohesionPopupWidget = ...;
boostCohesionPopupWidget.ClosePopup(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
BoostCohesionPopupWidget widget = ...;
```

## 参见

- [本区域目录](../)