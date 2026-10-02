---
title: "DialogFlow"
description: "DialogFlow：TaleWorlds.CampaignSystem 的 public 类；公开成员 33 个（方法 33、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/DialogFlow.cs。"
---
# DialogFlow

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DialogFlow`
**File:** `TaleWorlds.CampaignSystem/DialogFlow.cs`

## 概述

DialogFlow 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/DialogFlow.cs。它是一个 public 类，继承链为 DialogFlow。public/protected 成员共 33 个：33 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DialogFlow 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 DialogFlow。成员构成以方法为主（方法 33/33，属性 0/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/DialogFlow.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Variation` | `public DialogFlow Variation(string text, params object[]propertiesAndWeights)` | 方法 |
| `Variation` | `public DialogFlow Variation(TextObject text, params object[]propertiesAndWeights)` | 方法 |
| `NpcLine` | `public DialogFlow NpcLine(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `NpcLine` | `public DialogFlow NpcLine(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `NpcLineWithVariation` | `public DialogFlow NpcLineWithVariation(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `NpcLineWithVariation` | `public DialogFlow NpcLineWithVariation(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `PlayerLine` | `public DialogFlow PlayerLine(string playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `PlayerLine` | `public DialogFlow PlayerLine(TextObject playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `BeginPlayerOptions` | `public DialogFlow BeginPlayerOptions(string inputToken = null, bool optionUsedOnce = false)` | 方法 |
| `BeginNpcOptions` | `public DialogFlow BeginNpcOptions(string inputToken = null, bool optionUsedOnce = false)` | 方法 |
| `PlayerOption` | `public DialogFlow PlayerOption(string text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `PlayerOption` | `public DialogFlow PlayerOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `PlayerSpecialOption` | `public DialogFlow PlayerSpecialOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `PlayerRepeatableOption` | `public DialogFlow PlayerRepeatableOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `NpcOption` | `public DialogFlow NpcOption(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `NpcOption` | `public DialogFlow NpcOption(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `NpcOptionWithVariation` | `public DialogFlow NpcOptionWithVariation(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `NpcOptionWithVariation` | `public DialogFlow NpcOptionWithVariation(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | 方法 |
| `EndPlayerOptions` | `public DialogFlow EndPlayerOptions()` | 方法 |
| `EndNpcOptions` | `public DialogFlow EndNpcOptions()` | 方法 |
| `Condition` | `public DialogFlow Condition(ConversationSentence.OnConditionDelegate conditionDelegate)` | 方法 |
| `ClickableCondition` | `public DialogFlow ClickableCondition(ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate)` | 方法 |
| `Consequence` | `public DialogFlow Consequence(ConversationSentence.OnConsequenceDelegate consequenceDelegate)` | 方法 |
| `CreateDialogFlow` | `public static DialogFlow CreateDialogFlow(string inputToken = null, int priority = 100)` | 方法 |
| `NpcDefaultOption` | `public DialogFlow NpcDefaultOption(string text)` | 方法 |
| `GenerateToken` | `public DialogFlow GenerateToken(out string token)` | 方法 |
| `GotoDialogState` | `public DialogFlow GotoDialogState(string input)` | 方法 |
| `GotoDialogStateBranched` | `public DialogFlow GotoDialogStateBranched(string input, ConversationSentence.OnConditionDelegate conditionDelegate, string alternative)` | 方法 |
| `GetOutputToken` | `public DialogFlow GetOutputToken(out string oState)` | 方法 |
| `GoBackToDialogState` | `public DialogFlow GoBackToDialogState(string iState)` | 方法 |
| `CloseDialog` | `public DialogFlow CloseDialog()` | 方法 |
| `AddPlayerLine` | `public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)` | 方法 |
| `AddDialogLine` | `public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
