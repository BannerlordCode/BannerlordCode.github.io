---
title: "ConversationSentence"
description: "ConversationSentence 的自动生成类参考。"
---
# ConversationSentence

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationSentence `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs

## 概述

`ConversationSentence` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Variation
`public ConversationSentence Variation(params object[] list) `

### Deserialize
`public void Deserialize(XmlNode node,Type typeOfConversationCallbacks,ConversationManager conversationManager,int defaultPriority) `

### SetObjectsToRepeatOver
`public static void SetObjectsToRepeatOver(IReadOnlyList<object> objectsToRepeatOver,int maxRepeatedDialogsInConversation = 5) `

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
