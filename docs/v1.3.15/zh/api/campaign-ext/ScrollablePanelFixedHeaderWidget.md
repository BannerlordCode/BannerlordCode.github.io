<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScrollablePanelFixedHeaderWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScrollablePanelFixedHeaderWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollablePanelFixedHeaderWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanelFixedHeaderWidget.cs`

## 概述

`ScrollablePanelFixedHeaderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FixedHeader` | `public Widget FixedHeader { get; set; }` |
| `TopOffset` | `public float TopOffset { get; set; }` |
| `BottomOffset` | `public float BottomOffset { get; set; }` |
| `HeaderHeight` | `public float HeaderHeight { get { return this._headerHeight; }` |
| `AdditionalTopOffset` | `public float AdditionalTopOffset { get { return this._additionalTopOffset; }` |
| `AdditionalBottomOffset` | `public float AdditionalBottomOffset { get { return this._additionalBottomOffset; }` |
| `IsRelevant` | `public bool IsRelevant { get { return this._isRelevant; }` |

## 使用示例

```csharp
// ScrollablePanelFixedHeaderWidget (Widget) 的典型用法
// 声明/访问一个 ScrollablePanelFixedHeaderWidget
var widget = root.GetChild("scrollablePanelFixedHeaderWidget");;
```

## 参见

- [完整类目录](../catalog)