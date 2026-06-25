---
title: "GameMenuTroopSelectionItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuTroopSelectionItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuTroopSelectionItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuTroopSelectionItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu/GameMenuTroopSelectionItemButtonWidget.cs`

## 概述

`GameMenuTroopSelectionItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GameMenuTroopSelectionItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AddButtonWidget` | `public ButtonWidget AddButtonWidget { get; set; }` |
| `RemoveButtonWidget` | `public ButtonWidget RemoveButtonWidget { get; set; }` |
| `CheckmarkVisualWidget` | `public Widget CheckmarkVisualWidget { get; set; }` |
| `AddRemoveControls` | `public Widget AddRemoveControls { get; set; }` |
| `HeroHealthParent` | `public Widget HeroHealthParent { get; set; }` |
| `IsRosterFull` | `public bool IsRosterFull { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsTroopHero` | `public bool IsTroopHero { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |

## 使用示例

```csharp
var widget = new GameMenuTroopSelectionItemButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)