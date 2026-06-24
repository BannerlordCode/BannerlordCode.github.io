<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationSentence`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationSentence

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationSentence`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs`

## 概述

`ConversationSentence` 位于 `TaleWorlds.CampaignSystem.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Text` | `public TextObject Text { get; }` |
| `Index` | `public int Index { get; }` |
| `Id` | `public string Id { get; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; set; }` |
| `IsSpecial` | `public bool IsSpecial { get; set; }` |
| `IsUsedOnce` | `public bool IsUsedOnce { get; set; }` |
| `Priority` | `public int Priority { get; }` |
| `InputToken` | `public int InputToken { get; }` |
| `OutputToken` | `public int OutputToken { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `IsWithVariation` | `public bool IsWithVariation { get; }` |
| `PersuationOptionArgs` | `public PersuasionOptionArgs PersuationOptionArgs { get; }` |
| `HasPersuasion` | `public bool HasPersuasion { get; }` |
| `SkillName` | `public string SkillName { get; }` |
| `TraitName` | `public string TraitName { get; }` |
| `CurrentProcessedRepeatObject` | `public static object CurrentProcessedRepeatObject { get; }` |
| `SelectedRepeatObject` | `public static object SelectedRepeatObject { get; }` |
| `SelectedRepeatLine` | `public static TextObject SelectedRepeatLine { get; }` |

## 主要方法

### Variation
`public ConversationSentence Variation(params object list)`

**用途 / Purpose:** 处理 `variation` 相关逻辑。

### Deserialize
`public void Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conversationManager, int defaultPriority)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### SetObjectsToRepeatOver
`public static void SetObjectsToRepeatOver(IReadOnlyList<object> objectsToRepeatOver, int maxRepeatedDialogsInConversation = 5)`

**用途 / Purpose:** 设置 `objects to repeat over` 的值或状态。

### OnConditionDelegate
`public delegate bool OnConditionDelegate()`

**用途 / Purpose:** 当 `condition delegate` 事件触发时调用此方法。

### OnClickableConditionDelegate
`public delegate bool OnClickableConditionDelegate(out TextObject explanation)`

**用途 / Purpose:** 当 `clickable condition delegate` 事件触发时调用此方法。

### OnPersuasionOptionDelegate
`public delegate PersuasionOptionArgs OnPersuasionOptionDelegate()`

**用途 / Purpose:** 当 `persuasion option delegate` 事件触发时调用此方法。

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate()`

**用途 / Purpose:** 当 `consequence delegate` 事件触发时调用此方法。

### OnMultipleConversationConsequenceDelegate
`public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent)`

**用途 / Purpose:** 当 `multiple conversation consequence delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ConversationSentence();
value.Variation(list);
```

## 参见

- [完整类目录](../catalog)