---
title: "MultiplayerClassLoadoutTroopCardBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerClassLoadoutTroopCardBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopCardBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopCardBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopCardBrushWidget.cs`

## 概述

`MultiplayerClassLoadoutTroopCardBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerClassLoadoutTroopCardBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureID` | `public string CultureID { get; set; }` |
| `Border` | `public BrushWidget Border { get; set; }` |
| `ClassBorder` | `public BrushWidget ClassBorder { get; set; }` |
| `ClassFrame` | `public BrushWidget ClassFrame { get; set; }` |

## 使用示例

```csharp
var widget = new MultiplayerClassLoadoutTroopCardBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)