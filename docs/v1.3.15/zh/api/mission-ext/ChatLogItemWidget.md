<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChatLogItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChatLogItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs`

## 概述

`ChatLogItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `OneLineTextWidget` | `public RichTextWidget OneLineTextWidget { get; set; }` |
| `CollapsableWidget` | `public ChatCollapsableListPanel CollapsableWidget { get; set; }` |
| `ChatLine` | `public string ChatLine { get; set; }` |
| `ChatLogWidget` | `public ChatLogWidget ChatLogWidget { get; set; }` |

## 使用示例

```csharp
// ChatLogItemWidget (Widget) 的典型用法
// 声明/访问一个 ChatLogItemWidget
var widget = root.GetChild("chatLogItemWidget");;
```

## 参见

- [完整类目录](../catalog)