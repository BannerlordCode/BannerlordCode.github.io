---
title: "DialogFlow"
description: "DialogFlow 的自动生成类参考。"
---
# DialogFlow

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DialogFlow `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/DialogFlow.cs

## 概述

`DialogFlow` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/DialogFlow.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Variation
`public DialogFlow Variation(string text,params object[] propertiesAndWeights) `
`public DialogFlow Variation(TextObject text,params object[] propertiesAndWeights) `

### NpcLine
`public DialogFlow NpcLine(string npcText,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `
`public DialogFlow NpcLine(TextObject npcText,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(string npcText,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `
`public DialogFlow NpcLineWithVariation(TextObject npcText,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `

### PlayerLine
`public DialogFlow PlayerLine(string playerText,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `
`public DialogFlow PlayerLine(TextObject playerText,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `

### BeginPlayerOptions
`public DialogFlow BeginPlayerOptions(string inputToken = null,bool optionUsedOnce = false) `

### BeginNpcOptions
`public DialogFlow BeginNpcOptions(string inputToken = null,bool optionUsedOnce = false) `

### PlayerOption
`public DialogFlow PlayerOption(string text,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `
`public DialogFlow PlayerOption(TextObject text,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `

### PlayerSpecialOption
`public DialogFlow PlayerSpecialOption(TextObject text,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `

### PlayerRepeatableOption
`public DialogFlow PlayerRepeatableOption(TextObject text,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `

### NpcOption
`public DialogFlow NpcOption(string text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `
`public DialogFlow NpcOption(TextObject text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(string text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `
`public DialogFlow NpcOptionWithVariation(TextObject text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null,string inputToken = null,string outputToken = null) `

### EndPlayerOptions
`public DialogFlow EndPlayerOptions() `

### EndNpcOptions
`public DialogFlow EndNpcOptions() `

### Condition
`public DialogFlow Condition(ConversationSentence.OnConditionDelegate conditionDelegate) `

### ClickableCondition
`public DialogFlow ClickableCondition(ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate) `

### Consequence
`public DialogFlow Consequence(ConversationSentence.OnConsequenceDelegate consequenceDelegate) `

### CreateDialogFlow
`public static DialogFlow CreateDialogFlow(string inputToken = null,int priority = 100) `

### NpcDefaultOption
`public DialogFlow NpcDefaultOption(string text) `

### GenerateToken
`public DialogFlow GenerateToken(out string token) `

### GotoDialogState
`public DialogFlow GotoDialogState(string input) `

### GotoDialogStateBranched
`public DialogFlow GotoDialogStateBranched(string input,ConversationSentence.OnConditionDelegate conditionDelegate,string alternative) `

### GetOutputToken
`public DialogFlow GetOutputToken(out string oState) `

### GoBackToDialogState
`public DialogFlow GoBackToDialogState(string iState) `

### CloseDialog
`public DialogFlow CloseDialog() `

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id,string inputToken,string outputToken,string text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnConsequenceDelegate consequenceDelegate,object relatedObject,int priority = 100,ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null,ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDel`

### AddDialogLine
`public ConversationSentence AddDialogLine(string id,string inputToken,string outputToken,string text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnConsequenceDelegate consequenceDelegate,object relatedObject,int priority = 100,ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null,ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
