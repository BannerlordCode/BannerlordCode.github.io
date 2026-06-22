<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDecisionPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecisionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomDecisionPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionPopupWidget.cs`

## 概述

`KingdomDecisionPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `DelayAfterKingsDecision` | `public int DelayAfterKingsDecision { get; set; }` |
| `IsKingsDecisionDone` | `public bool IsKingsDecisionDone { get; set; }` |

## 使用示例

```csharp
// KingdomDecisionPopupWidget (Widget) 的典型用法
// 声明/访问一个 KingdomDecisionPopupWidget
var widget = root.GetChild("kingdomDecisionPopupWidget");;
```

## 参见

- [完整类目录](../catalog)