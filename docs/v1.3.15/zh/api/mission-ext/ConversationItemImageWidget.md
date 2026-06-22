<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationItemImageWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationItemImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationItemImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationItemImageWidget.cs`

## 概述

`ConversationItemImageWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NormalBrush` | `public Brush NormalBrush { get; set; }` |
| `SpecialBrush` | `public Brush SpecialBrush { get; set; }` |
| `IsSpecial` | `public bool IsSpecial { get; set; }` |

## 使用示例

```csharp
// ConversationItemImageWidget (Widget) 的典型用法
// 声明/访问一个 ConversationItemImageWidget
var widget = root.GetChild("conversationItemImageWidget");;
```

## 参见

- [完整类目录](../catalog)