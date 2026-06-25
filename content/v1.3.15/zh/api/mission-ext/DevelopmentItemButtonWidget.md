---
title: "DevelopmentItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DevelopmentItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs`

## 概述

`DevelopmentItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `DevelopmentItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelectedItem` | `public bool IsSelectedItem { get; set; }` |
| `SelectedBlackOverlayWidget` | `public Widget SelectedBlackOverlayWidget { get; set; }` |
| `NameTextWidget` | `public DevelopmentNameTextWidget NameTextWidget { get; set; }` |
| `AddToQueueButtonWidget` | `public ButtonWidget AddToQueueButtonWidget { get; set; }` |
| `SetAsActiveButtonWidget` | `public ButtonWidget SetAsActiveButtonWidget { get; set; }` |
| `DevelopmentLevelVisualWidget` | `public Widget DevelopmentLevelVisualWidget { get; set; }` |
| `ProgressClipWidget` | `public Widget ProgressClipWidget { get; set; }` |
| `IsProgressShown` | `public bool IsProgressShown { get; set; }` |
| `CanBuild` | `public bool CanBuild { get; set; }` |
| `DevelopmentBackVisualWidget` | `public Widget DevelopmentBackVisualWidget { get; set; }` |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget { get; set; }` |
| `IsProgressIndicatorsEnabled` | `public bool IsProgressIndicatorsEnabled { get; set; }` |
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `Progress` | `public int Progress { get; set; }` |

## 使用示例

```csharp
var widget = new DevelopmentItemButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)