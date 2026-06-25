---
title: "PartyNameplateWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyNameplateWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyNameplateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyNameplateWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs`

## 概述

`PartyNameplateWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyNameplateWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeadGroupWidget` | `public Widget HeadGroupWidget { get; set; }` |
| `NameplateLayoutListPanel` | `public ListPanel NameplateLayoutListPanel { get; set; }` |
| `PartyBannerWidget` | `public MaskedTextureWidget PartyBannerWidget { get; set; }` |
| `TrackerFrame` | `public Widget TrackerFrame { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `HeadPosition` | `public Vec2 HeadPosition { get; set; }` |
| `ShouldShowFullName` | `public bool ShouldShowFullName { get; set; }` |
| `CanParley` | `public bool CanParley { get; set; }` |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial { get; set; }` |
| `IsInArmy` | `public bool IsInArmy { get; set; }` |
| `IsInSettlement` | `public bool IsInSettlement { get; set; }` |
| `IsArmy` | `public bool IsArmy { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `IsHigh` | `public bool IsHigh { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsDisorganized` | `public bool IsDisorganized { get; set; }` |
| `NameplateTextWidget` | `public TextWidget NameplateTextWidget { get; set; }` |
| `NameplateExtraInfoTextWidget` | `public TextWidget NameplateExtraInfoTextWidget { get; set; }` |
| `NameplateFullNameTextWidget` | `public TextWidget NameplateFullNameTextWidget { get; set; }` |
| `SpeedTextWidget` | `public TextWidget SpeedTextWidget { get; set; }` |
| `SpeedIconWidget` | `public Widget SpeedIconWidget { get; set; }` |
| `ParleyIconWidget` | `public Widget ParleyIconWidget { get; set; }` |
| `DisorganizedWidget` | `public Widget DisorganizedWidget { get; set; }` |

## 使用示例

```csharp
var widget = new PartyNameplateWidget(context);
```

## 参见

- [完整类目录](../catalog)