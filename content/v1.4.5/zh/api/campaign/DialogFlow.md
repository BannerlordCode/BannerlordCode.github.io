---
title: "DialogFlow"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DialogFlow`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DialogFlow

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DialogFlow`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/DialogFlow.cs`

## 概述

`DialogFlow` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Variation
`public DialogFlow Variation(string text, params object propertiesAndWeights)`

**用途 / Purpose:** 处理 `variation` 相关逻辑。

### Variation
`public DialogFlow Variation(TextObject text, params object propertiesAndWeights)`

**用途 / Purpose:** 处理 `variation` 相关逻辑。

### NpcLine
`public DialogFlow NpcLine(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `npc line` 相关逻辑。

### NpcLine
`public DialogFlow NpcLine(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `npc line` 相关逻辑。

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `npc line with variation` 相关逻辑。

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `npc line with variation` 相关逻辑。

### PlayerLine
`public DialogFlow PlayerLine(string playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `player line` 相关逻辑。

### PlayerLine
`public DialogFlow PlayerLine(TextObject playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `player line` 相关逻辑。

### BeginPlayerOptions
`public DialogFlow BeginPlayerOptions(string inputToken = null, bool optionUsedOnce = false)`

**用途 / Purpose:** 处理 `begin player options` 相关逻辑。

### BeginNpcOptions
`public DialogFlow BeginNpcOptions(string inputToken = null, bool optionUsedOnce = false)`

**用途 / Purpose:** 处理 `begin npc options` 相关逻辑。

### PlayerOption
`public DialogFlow PlayerOption(string text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `player option` 相关逻辑。

### PlayerOption
`public DialogFlow PlayerOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `player option` 相关逻辑。

### PlayerSpecialOption
`public DialogFlow PlayerSpecialOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `player special option` 相关逻辑。

### PlayerRepeatableOption
`public DialogFlow PlayerRepeatableOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `player repeatable option` 相关逻辑。

### NpcOption
`public DialogFlow NpcOption(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `npc option` 相关逻辑。

### NpcOption
`public DialogFlow NpcOption(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `npc option` 相关逻辑。

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `npc option with variation` 相关逻辑。

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** 处理 `npc option with variation` 相关逻辑。

### EndPlayerOptions
`public DialogFlow EndPlayerOptions()`

**用途 / Purpose:** 处理 `end player options` 相关逻辑。

### EndNpcOptions
`public DialogFlow EndNpcOptions()`

**用途 / Purpose:** 处理 `end npc options` 相关逻辑。

### Condition
`public DialogFlow Condition(ConversationSentence.OnConditionDelegate conditionDelegate)`

**用途 / Purpose:** 处理 `condition` 相关逻辑。

### ClickableCondition
`public DialogFlow ClickableCondition(ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate)`

**用途 / Purpose:** 处理 `clickable condition` 相关逻辑。

### Consequence
`public DialogFlow Consequence(ConversationSentence.OnConsequenceDelegate consequenceDelegate)`

**用途 / Purpose:** 处理 `consequence` 相关逻辑。

### CreateDialogFlow
`public static DialogFlow CreateDialogFlow(string inputToken = null, int priority = 100)`

**用途 / Purpose:** 创建一个 `dialog flow` 实例或对象。

### NpcDefaultOption
`public DialogFlow NpcDefaultOption(string text)`

**用途 / Purpose:** 处理 `npc default option` 相关逻辑。

### GenerateToken
`public DialogFlow GenerateToken(out string token)`

**用途 / Purpose:** 处理 `generate token` 相关逻辑。

### GotoDialogState
`public DialogFlow GotoDialogState(string input)`

**用途 / Purpose:** 处理 `goto dialog state` 相关逻辑。

### GotoDialogStateBranched
`public DialogFlow GotoDialogStateBranched(string input, ConversationSentence.OnConditionDelegate conditionDelegate, string alternative)`

**用途 / Purpose:** 处理 `goto dialog state branched` 相关逻辑。

### GetOutputToken
`public DialogFlow GetOutputToken(out string oState)`

**用途 / Purpose:** 获取 `output token` 的当前值。

### GoBackToDialogState
`public DialogFlow GoBackToDialogState(string iState)`

**用途 / Purpose:** 处理 `go back to dialog state` 相关逻辑。

### CloseDialog
`public DialogFlow CloseDialog()`

**用途 / Purpose:** 处理 `close dialog` 相关逻辑。

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `player line`。

### AddDialogLine
`public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `dialog line`。

## 使用示例

```csharp
var value = new DialogFlow();
value.Variation("example", propertiesAndWeights);
```

## 参见

- [完整类目录](../catalog)