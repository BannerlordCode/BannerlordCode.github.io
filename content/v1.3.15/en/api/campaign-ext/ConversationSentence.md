---
title: "ConversationSentence"
description: "Auto-generated class reference for ConversationSentence."
---
# ConversationSentence

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationSentence`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs`

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
`public ConversationSentence Variation(params object list)`

**Purpose:** **Purpose:** Executes the Variation logic.

```csharp
// Obtain an instance of ConversationSentence from the subsystem API first
ConversationSentence conversationSentence = ...;
var result = conversationSentence.Variation(list);
```

### Deserialize
`public void Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conversationManager, int defaultPriority)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ConversationSentence from the subsystem API first
ConversationSentence conversationSentence = ...;
conversationSentence.Deserialize(node, typeOfConversationCallbacks, conversationManager, 0);
```

### SetObjectsToRepeatOver
`public static void SetObjectsToRepeatOver(IReadOnlyList<object> objectsToRepeatOver, int maxRepeatedDialogsInConversation = 5)`

**Purpose:** **Purpose:** Assigns a new value to objects to repeat over and updates the object's internal state.

```csharp
// Static call; no instance required
ConversationSentence.SetObjectsToRepeatOver(objectsToRepeatOver, 0);
```

### OnConditionDelegate
`public delegate bool OnConditionDelegate()`

**Purpose:** **Purpose:** Invoked when the condition delegate event is raised.

```csharp
// Obtain an instance of ConversationSentence from the subsystem API first
ConversationSentence conversationSentence = ...;
var result = conversationSentence.OnConditionDelegate();
```

### OnClickableConditionDelegate
`public delegate bool OnClickableConditionDelegate(out TextObject explanation)`

**Purpose:** **Purpose:** Invoked when the clickable condition delegate event is raised.

```csharp
// Obtain an instance of ConversationSentence from the subsystem API first
ConversationSentence conversationSentence = ...;
var result = conversationSentence.OnClickableConditionDelegate(explanation);
```

### OnPersuasionOptionDelegate
`public delegate PersuasionOptionArgs OnPersuasionOptionDelegate()`

**Purpose:** **Purpose:** Invoked when the persuasion option delegate event is raised.

```csharp
// Obtain an instance of ConversationSentence from the subsystem API first
ConversationSentence conversationSentence = ...;
var result = conversationSentence.OnPersuasionOptionDelegate();
```

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate()`

**Purpose:** **Purpose:** Invoked when the consequence delegate event is raised.

```csharp
// Obtain an instance of ConversationSentence from the subsystem API first
ConversationSentence conversationSentence = ...;
conversationSentence.OnConsequenceDelegate();
```

### OnMultipleConversationConsequenceDelegate
`public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent)`

**Purpose:** **Purpose:** Invoked when the multiple conversation consequence delegate event is raised.

```csharp
// Obtain an instance of ConversationSentence from the subsystem API first
ConversationSentence conversationSentence = ...;
var result = conversationSentence.OnMultipleConversationConsequenceDelegate(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ConversationSentence conversationSentence = ...;
conversationSentence.Variation(list);
```

## See Also

- [Area Index](../)