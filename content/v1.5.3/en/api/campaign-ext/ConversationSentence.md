---
title: "ConversationSentence"
description: "Auto-generated class reference for ConversationSentence."
---
# ConversationSentence

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationSentence `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs

## Overview

Auto-generated stub for `ConversationSentence`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Variation
`public ConversationSentence Variation(params object[] list)`

### Deserialize
`public void Deserialize(XmlNode node,Type typeOfConversationCallbacks,ConversationManager conversationManager,int defaultPriority)`

### SetObjectsToRepeatOver
`public static void SetObjectsToRepeatOver(IReadOnlyList<object> objectsToRepeatOver,int maxRepeatedDialogsInConversation = 5)`

### OnConditionDelegate
`public delegate bool OnConditionDelegate()`

### OnClickableConditionDelegate
`public delegate bool OnClickableConditionDelegate(out TextObject explanation)`

### OnPersuasionOptionDelegate
`public delegate PersuasionOptionArgs OnPersuasionOptionDelegate()`

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate()`

### OnMultipleConversationConsequenceDelegate
`public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent)`

## See Also

- [Section index](../)
