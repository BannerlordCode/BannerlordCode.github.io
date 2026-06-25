---
title: "DisabledAlphaChangerWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DisabledAlphaChangerWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisabledAlphaChangerWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DisabledAlphaChangerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs`

## 概述

`DisabledAlphaChangerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `DisabledAlphaChangerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DisabledAlpha` | `public float DisabledAlpha { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `UpdateChildrenAlphas` | `public bool UpdateChildrenAlphas { get; set; }` |

## 使用示例

```csharp
var widget = new DisabledAlphaChangerWidget(context);
```

## 参见

- [完整类目录](../catalog)