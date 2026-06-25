---
title: "BarterItemVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterItemVisualBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BarterItemVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterItemVisualBrushWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/BarterItemVisualBrushWidget.cs`

## 概述

`BarterItemVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `BarterItemVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpriteWidget` | `public BrushWidget SpriteWidget { get; set; }` |
| `SpriteClipWidget` | `public Widget SpriteClipWidget { get; set; }` |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` |
| `MaskedTextureWidget` | `public MaskedTextureWidget MaskedTextureWidget { get; set; }` |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `FiefImagePath` | `public string FiefImagePath { get; set; }` |

## 主要方法

### BarterItemVisualBrushWidget
`public class BarterItemVisualBrushWidget(UIContext context)`

**用途 / Purpose:** 处理 `barter item visual brush widget` 相关逻辑。

## 使用示例

```csharp
var widget = new BarterItemVisualBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)