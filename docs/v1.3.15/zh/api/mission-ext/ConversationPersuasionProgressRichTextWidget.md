<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationPersuasionProgressRichTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationPersuasionProgressRichTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationPersuasionProgressRichTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationPersuasionProgressRichTextWidget.cs`

## 概述

`ConversationPersuasionProgressRichTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `FadeOutTime` | `public float FadeOutTime { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |

## 使用示例

```csharp
// ConversationPersuasionProgressRichTextWidget (Widget) 的典型用法
// 声明/访问一个 ConversationPersuasionProgressRichTextWidget
var widget = root.GetChild("conversationPersuasionProgressRichTextWidget");;
```

## 参见

- [完整类目录](../catalog)