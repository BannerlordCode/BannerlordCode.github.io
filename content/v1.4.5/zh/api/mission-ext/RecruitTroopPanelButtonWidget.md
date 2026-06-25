---
title: "RecruitTroopPanelButtonWidget"
description: "RecruitTroopPanelButtonWidget 的自动生成类参考。"
---
# RecruitTroopPanelButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Recruitment
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RecruitTroopPanelButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Recruitment/RecruitTroopPanelButtonWidget.cs`

## 概述

`RecruitTroopPanelButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `RecruitTroopPanelButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CanBeRecruited` | `public bool CanBeRecruited { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `RemoveFromCartButton` | `public ButtonWidget RemoveFromCartButton { get; set; }` |
| `CharacterImageWidget` | `public ImageIdentifierWidget CharacterImageWidget { get; set; }` |
| `IsTroopEmpty` | `public bool IsTroopEmpty { get; set; }` |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
RecruitTroopPanelButtonWidget widget = ...;
```

## 参见

- [本区域目录](../)