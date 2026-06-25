---
title: "PartyManageTroopPopupWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyManageTroopPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyManageTroopPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyManageTroopPopupWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyManageTroopPopupWidget.cs`

## 概述

`PartyManageTroopPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyManageTroopPopupWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PrimaryInputKeyVisualParent` | `public Widget PrimaryInputKeyVisualParent { get; set; }` |
| `SecondaryInputKeyVisualParent` | `public Widget SecondaryInputKeyVisualParent { get; set; }` |
| `TertiaryInputKeyVisualParent` | `public Widget TertiaryInputKeyVisualParent { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable { get; set; }` |

## 使用示例

```csharp
var widget = new PartyManageTroopPopupWidget(context);
```

## 参见

- [完整类目录](../catalog)