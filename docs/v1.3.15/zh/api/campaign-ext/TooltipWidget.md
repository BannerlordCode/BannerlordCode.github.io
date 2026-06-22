<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
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

## 主要属性

| Name | Signature |
|------|-----------|
| `PositioningType` | `public TooltipPositioningType PositioningType { get; set; }` |
| `AnimTime` | `public float AnimTime { get { return this._animTime; }` |

## 使用示例

```csharp
// TooltipWidget (Widget) 的典型用法
// 声明/访问一个 TooltipWidget
var widget = root.GetChild("tooltipWidget");;
```

## 参见

- [完整类目录](../catalog)