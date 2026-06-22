<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyQuestProgressWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyQuestProgressWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyQuestProgressWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyQuestProgressWidget.cs`

## 概述

`PartyQuestProgressWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemCount` | `public int ItemCount { get; set; }` |
| `DividerContainer` | `public ListPanel DividerContainer { get; set; }` |
| `DividerBrush` | `public Brush DividerBrush { get; set; }` |

## 使用示例

```csharp
// PartyQuestProgressWidget (Widget) 的典型用法
// 声明/访问一个 PartyQuestProgressWidget
var widget = root.GetChild("partyQuestProgressWidget");;
```

## 参见

- [完整类目录](../catalog)