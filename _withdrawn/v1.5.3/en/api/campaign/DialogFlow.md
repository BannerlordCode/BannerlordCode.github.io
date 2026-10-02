---
title: "DialogFlow"
description: "Auto-generated class reference for DialogFlow."
---
# DialogFlow

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DialogFlow `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/DialogFlow.cs

## Overview

Auto-generated stub for `DialogFlow`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Variation
`public DialogFlow Variation(string text,params object[] propertiesAndWeights)`

### NpcLine
`public DialogFlow NpcLine(string npcText,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null)`

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(string npcText,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null)`

### PlayerLine
`public DialogFlow PlayerLine(string playerText,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null)`

### BeginPlayerOptions
`public DialogFlow BeginPlayerOptions(string inputToken = null,bool optionUsedOnce = false)`

### BeginNpcOptions
`public DialogFlow BeginNpcOptions(string inputToken = null,bool optionUsedOnce = false)`

### PlayerOption
`public DialogFlow PlayerOption(string text,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null)`

### PlayerSpecialOption
`public DialogFlow PlayerSpecialOption(TextObject text,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null)`

### PlayerRepeatableOption
`public DialogFlow PlayerRepeatableOption(TextObject text,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null)`

### NpcOption
`public DialogFlow NpcOption(string text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null)`

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(string text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null)`

### EndPlayerOptions
`public DialogFlow EndPlayerOptions()`

### EndNpcOptions
`public DialogFlow EndNpcOptions()`

### Condition
`public DialogFlow Condition(ConversationSentence.OnConditionDelegate conditionDelegate)`

### ClickableCondition
`public DialogFlow ClickableCondition(ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate)`

### Consequence
`public DialogFlow Consequence(ConversationSentence.OnConsequenceDelegate consequenceDelegate)`

### CreateDialogFlow
`public static DialogFlow CreateDialogFlow(string inputToken = null,int priority = 100)`

### NpcDefaultOption
`public DialogFlow NpcDefaultOption(string text)`

### GenerateToken
`public DialogFlow GenerateToken(out string token)`

### GotoDialogState
`public DialogFlow GotoDialogState(string input)`

### GotoDialogStateBranched
`public DialogFlow GotoDialogStateBranched(string input,ConversationSentence.OnConditionDelegate conditionDelegate,string alternative)`

### GetOutputToken
`public DialogFlow GetOutputToken(out string oState)`

### GoBackToDialogState
`public DialogFlow GoBackToDialogState(string iState)`

### CloseDialog
`public DialogFlow CloseDialog()`

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id,string inputToken,string outputToken,string text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnConsequenceDelegate consequenceDelegate,object relatedObject,int priority = 100,ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null,ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDel`

### AddDialogLine
`public ConversationSentence AddDialogLine(string id,string inputToken,string outputToken,string text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnConsequenceDelegate consequenceDelegate,object relatedObject,int priority = 100,ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

## See Also

- [Section index](../)
