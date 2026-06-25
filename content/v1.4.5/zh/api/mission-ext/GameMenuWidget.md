---
title: "GameMenuWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu/GameMenuWidget.cs`

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

**用途 / Purpose:** 更新 `overlay state` 的状态或数据。

### OnOptionStateChanged
`public void OnOptionStateChanged()`

**用途 / Purpose:** 当 `option state changed` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new GameMenuWidget(context);
```

## 参见

- [完整类目录](../catalog)