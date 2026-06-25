---
title: "DescriptionItemVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DescriptionItemVisualBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DescriptionItemVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DescriptionItemVisualBrushWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement/DescriptionItemVisualBrushWidget.cs`

## 概述

`DescriptionItemVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `DescriptionItemVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |

## 主要方法

### DescriptionItemVisualBrushWidget
`public class DescriptionItemVisualBrushWidget(UIContext context)`

**用途 / Purpose:** 处理 `description item visual brush widget` 相关逻辑。

## 使用示例

```csharp
var widget = new DescriptionItemVisualBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)