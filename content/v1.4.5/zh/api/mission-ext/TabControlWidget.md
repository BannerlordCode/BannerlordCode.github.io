---
title: "TabControlWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TabControlWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TabControlWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TabControlWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TabControlWidget.cs`

## 概述

`TabControlWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TabControlWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FirstButton` | `public ButtonWidget FirstButton { get; set; }` |
| `SecondButton` | `public ButtonWidget SecondButton { get; set; }` |
| `SecondItem` | `public Widget SecondItem { get; set; }` |
| `FirstItem` | `public Widget FirstItem { get; set; }` |

## 主要方法

### OnFirstButtonClick
`public void OnFirstButtonClick(Widget widget)`

**用途 / Purpose:** 当 `first button click` 事件触发时调用此方法。

### OnSecondButtonClick
`public void OnSecondButtonClick(Widget widget)`

**用途 / Purpose:** 当 `second button click` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new TabControlWidget(context);
```

## 参见

- [完整类目录](../catalog)