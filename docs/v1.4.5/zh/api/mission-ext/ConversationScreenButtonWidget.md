<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationScreenButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationScreenButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationScreenButtonWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation/ConversationScreenButtonWidget.cs`

## 概述

`ConversationScreenButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ConversationScreenButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnswerList` | `public ListPanel AnswerList { get; set; }` |
| `ContinueButton` | `public ButtonWidget ContinueButton { get; set; }` |
| `IsPersuasionActive` | `public bool IsPersuasionActive { get; set; }` |

## 主要方法

### ConversationScreenButtonWidget
`public class ConversationScreenButtonWidget(UIContext context)`

**用途 / Purpose:** 处理 `conversation screen button widget` 相关逻辑。

## 使用示例

```csharp
var widget = new ConversationScreenButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)