<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationSentence`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationSentence

**命名空间:** TaleWorlds.CampaignSystem.Conversation
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ConversationSentence` 是 `TaleWorlds.CampaignSystem.Conversation` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public ConversationSentence Variation(params object list)
```

### Deserialize

```csharp
public void Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conversationManager, int defaultPriority)
```

### SetObjectsToRepeatOver

```csharp
public static void SetObjectsToRepeatOver(IReadOnlyList<object> objectsToRepeatOver, int maxRepeatedDialogsInConversation = 5)
```

### OnConditionDelegate

```csharp
public delegate bool OnConditionDelegate()
```

### OnClickableConditionDelegate

```csharp
public delegate bool OnClickableConditionDelegate(out TextObject explanation)
```

### OnPersuasionOptionDelegate

```csharp
public delegate PersuasionOptionArgs OnPersuasionOptionDelegate()
```

### OnConsequenceDelegate

```csharp
public delegate void OnConsequenceDelegate()
```

### OnMultipleConversationConsequenceDelegate

```csharp
public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)