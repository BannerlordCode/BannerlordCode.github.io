<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TooltipWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs`

## 概述

`TooltipWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TooltipWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PositioningType` | `public TooltipPositioningType PositioningType { get; set; }` |
| `AnimTime` | `public float AnimTime { get; set; }` |

## 使用示例

```csharp
var widget = new TooltipWidget(context);
```

## 参见

- [完整类目录](../catalog)