---
title: "GameMenuWidget"
description: "GameMenuWidget 的自动生成类参考。"
---
# GameMenuWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs`

## 概述

`GameMenuWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GameMenuWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EncounterModeMenuWidth` | `public int EncounterModeMenuWidth { get; set; }` |
| `EncounterModeMenuHeight` | `public int EncounterModeMenuHeight { get; set; }` |
| `EncounterModeMenuMarginTop` | `public int EncounterModeMenuMarginTop { get; set; }` |
| `NormalModeMenuWidth` | `public int NormalModeMenuWidth { get; set; }` |
| `NormalModeMenuHeight` | `public int NormalModeMenuHeight { get; }` |
| `NormalModeMenuMarginTop` | `public int NormalModeMenuMarginTop { get; }` |
| `IsOverlayExtended` | `public bool IsOverlayExtended { get; }` |
| `ScopeTargeter` | `public NavigationScopeTargeter ScopeTargeter { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `TitleContainerWidget` | `public Widget TitleContainerWidget { get; set; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `Overlay` | `public Widget Overlay { get; set; }` |
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget { get; set; }` |
| `ExtendButtonArrowWidget` | `public BrushWidget ExtendButtonArrowWidget { get; set; }` |
| `OptionItemsList` | `public ListPanel OptionItemsList { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `OverriddenSpriteMapBrush` | `public Brush OverriddenSpriteMapBrush { get; set; }` |

## 主要方法

### UpdateOverlayState
`public void UpdateOverlayState()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 overlay state 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameMenuWidget 实例
GameMenuWidget gameMenuWidget = ...;
gameMenuWidget.UpdateOverlayState();
```

### OnOptionStateChanged
`public void OnOptionStateChanged()`

**用途 / Purpose:** **用途 / Purpose:** 在 option state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuWidget 实例
GameMenuWidget gameMenuWidget = ...;
gameMenuWidget.OnOptionStateChanged();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
GameMenuWidget widget = ...;
```

## 参见

- [本区域目录](../)