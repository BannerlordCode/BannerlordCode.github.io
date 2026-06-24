<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationSentence`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationSentence

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationSentence`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationSentence.cs`

## Overview

`ConversationSentence` lives in `TaleWorlds.CampaignSystem.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public TextObject Text { get; }` |
| `Index` | `public int Index { get; }` |
| `Id` | `public string Id { get; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; set; }` |
| `IsSpecial` | `public bool IsSpecial { get; set; }` |
| `IsUsedOnce` | `public bool IsUsedOnce { get; }` |
| `Priority` | `public int Priority { get; }` |
| `InputToken` | `public int InputToken { get; }` |
| `OutputToken` | `public int OutputToken { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `IsWithVariation` | `public bool IsWithVariation { get; }` |
| `PersuationOptionArgs` | `public PersuasionOptionArgs PersuationOptionArgs { get; }` |
| `SkillName` | `public string SkillName { get; }` |
| `TraitName` | `public string TraitName { get; }` |

## Key Methods

### OnConditionDelegate
`public delegate bool OnConditionDelegate()`

**Purpose:** Called when the `condition delegate` event is raised.

### OnClickableConditionDelegate
`public delegate bool OnClickableConditionDelegate(out TextObject explanation)`

**Purpose:** Called when the `clickable condition delegate` event is raised.

### OnPersuasionOptionDelegate
`public delegate PersuasionOptionArgs OnPersuasionOptionDelegate()`

**Purpose:** Called when the `persuasion option delegate` event is raised.

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate()`

**Purpose:** Called when the `consequence delegate` event is raised.

### OnMultipleConversationConsequenceDelegate
`public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent)`

**Purpose:** Called when the `multiple conversation consequence delegate` event is raised.

### Variation
`public ConversationSentence Variation(params object list)`

**Purpose:** Handles logic related to `variation`.

### Deserialize
`public void Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conversationManager, int defaultPriority)`

**Purpose:** Handles logic related to `deserialize`.

### SetObjectsToRepeatOver
`public static void SetObjectsToRepeatOver(IReadOnlyList<object> objectsToRepeatOver, int maxRepeatedDialogsInConversation = 5)`

**Purpose:** Sets the value or state of `objects to repeat over`.

## Usage Example

```csharp
var value = new ConversationSentence();
value.OnConditionDelegate();
```

## See Also

- [Complete Class Catalog](../catalog)