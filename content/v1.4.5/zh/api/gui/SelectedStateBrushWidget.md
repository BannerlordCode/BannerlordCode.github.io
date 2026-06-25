---
title: "SelectedStateBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SelectedStateBrushWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SelectedStateBrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SelectedStateBrushWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/SelectedStateBrushWidget.cs`

## 概述

`SelectedStateBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SelectedStateBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedState` | `public string SelectedState { get; set; }` |

## 主要方法

### SelectedStateBrushWidget
`public class SelectedStateBrushWidget(UIContext context)`

**用途 / Purpose:** 处理 `selected state brush widget` 相关逻辑。

## 使用示例

```csharp
var widget = new SelectedStateBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)