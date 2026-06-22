<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs`

## 概述

`QuestItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `MainStoryLineItemBrush` | `public Brush MainStoryLineItemBrush { get; set; }` |
| `NavalStorylineItemBrush` | `public Brush NavalStorylineItemBrush { get; set; }` |
| `NormalItemBrush` | `public Brush NormalItemBrush { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; set; }` |
| `IsMainStoryLineQuest` | `public bool IsMainStoryLineQuest { get; set; }` |
| `IsNavalStorylineQuest` | `public bool IsNavalStorylineQuest { get; set; }` |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden { get; set; }` |
| `QuestNameText` | `public TextWidget QuestNameText { get; set; }` |
| `QuestDateText` | `public TextWidget QuestDateText { get; set; }` |
| `QuestNameYOffset` | `public int QuestNameYOffset { get; set; }` |
| `QuestNameXOffset` | `public int QuestNameXOffset { get; set; }` |
| `QuestDateYOffset` | `public int QuestDateYOffset { get; set; }` |
| `QuestDateXOffset` | `public int QuestDateXOffset { get; set; }` |

## 使用示例

```csharp
// QuestItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 QuestItemButtonWidget
var widget = root.GetChild("questItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)