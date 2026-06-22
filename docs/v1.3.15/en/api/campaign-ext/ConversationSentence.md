<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationSentence`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationSentence

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ConversationSentence` is a class in the `TaleWorlds.CampaignSystem.Conversation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)