---
title: "ButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ButtonWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ButtonWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ButtonWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ButtonWidget.cs`

## 概述

`ButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ButtonType` | `public ButtonType ButtonType { get; set; }` |
| `ToggleIndicator` | `public Widget ToggleIndicator { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `DominantSelectedState` | `public bool DominantSelectedState { get; set; }` |

## 使用示例

```csharp
var widget = new ButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)