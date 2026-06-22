<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DecisionSupporterGridWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DecisionSupporterGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DecisionSupporterGridWidget : GridWidget`
**Base:** `GridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupporterGridWidget.cs`

## 概述

`DecisionSupporterGridWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `VisibleCount` | `public int VisibleCount { get; set; }` |
| `MoreTextWidget` | `public TextWidget MoreTextWidget { get; set; }` |

## 使用示例

```csharp
// DecisionSupporterGridWidget (Widget) 的典型用法
// 声明/访问一个 DecisionSupporterGridWidget
var widget = root.GetChild("decisionSupporterGridWidget");;
```

## 参见

- [完整类目录](../catalog)