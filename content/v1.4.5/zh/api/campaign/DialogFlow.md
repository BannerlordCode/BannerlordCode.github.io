---
title: "DialogFlow"
description: "DialogFlow 的自动生成类参考。"
---
# DialogFlow

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DialogFlow`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/DialogFlow.cs`

## 概述

`DialogFlow` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Variation
`public DialogFlow Variation(string text, params object propertiesAndWeights)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Variation 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.Variation("example", propertiesAndWeights);
```

### Variation
`public DialogFlow Variation(TextObject text, params object propertiesAndWeights)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Variation 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.Variation(text, propertiesAndWeights);
```

### NpcLine
`public DialogFlow NpcLine(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcLine 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcLine("example", null, null, "example", "example");
```

### NpcLine
`public DialogFlow NpcLine(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcLine 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcLine(npcText, null, null, "example", "example");
```

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcLineWithVariation 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcLineWithVariation("example", null, null, "example", "example");
```

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcLineWithVariation 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcLineWithVariation(npcText, null, null, "example", "example");
```

### PlayerLine
`public DialogFlow PlayerLine(string playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerLine 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerLine("example", null, "example", "example");
```

### PlayerLine
`public DialogFlow PlayerLine(TextObject playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerLine 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerLine(playerText, null, "example", "example");
```

### BeginPlayerOptions
`public DialogFlow BeginPlayerOptions(string inputToken = null, bool optionUsedOnce = false)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeginPlayerOptions 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.BeginPlayerOptions("example", false);
```

### BeginNpcOptions
`public DialogFlow BeginNpcOptions(string inputToken = null, bool optionUsedOnce = false)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeginNpcOptions 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.BeginNpcOptions("example", false);
```

### PlayerOption
`public DialogFlow PlayerOption(string text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerOption("example", null, "example", "example");
```

### PlayerOption
`public DialogFlow PlayerOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerOption(text, null, "example", "example");
```

### PlayerSpecialOption
`public DialogFlow PlayerSpecialOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerSpecialOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerSpecialOption(text, null, "example", "example");
```

### PlayerRepeatableOption
`public DialogFlow PlayerRepeatableOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerRepeatableOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerRepeatableOption(text, null, "example", "example");
```

### NpcOption
`public DialogFlow NpcOption(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcOption("example", conditionDelegate, null, null, "example", "example");
```

### NpcOption
`public DialogFlow NpcOption(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcOption(text, conditionDelegate, null, null, "example", "example");
```

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcOptionWithVariation 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcOptionWithVariation("example", conditionDelegate, null, null, "example", "example");
```

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcOptionWithVariation 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcOptionWithVariation(text, conditionDelegate, null, null, "example", "example");
```

### EndPlayerOptions
`public DialogFlow EndPlayerOptions()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EndPlayerOptions 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.EndPlayerOptions();
```

### EndNpcOptions
`public DialogFlow EndNpcOptions()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EndNpcOptions 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.EndNpcOptions();
```

### Condition
`public DialogFlow Condition(ConversationSentence.OnConditionDelegate conditionDelegate)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.Condition(conditionDelegate);
```

### ClickableCondition
`public DialogFlow ClickableCondition(ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ClickableCondition 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.ClickableCondition(clickableConditionDelegate);
```

### Consequence
`public DialogFlow Consequence(ConversationSentence.OnConsequenceDelegate consequenceDelegate)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Consequence 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.Consequence(consequenceDelegate);
```

### CreateDialogFlow
`public static DialogFlow CreateDialogFlow(string inputToken = null, int priority = 100)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 dialog flow 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
DialogFlow.CreateDialogFlow("example", 0);
```

### NpcDefaultOption
`public DialogFlow NpcDefaultOption(string text)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NpcDefaultOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcDefaultOption("example");
```

### GenerateToken
`public DialogFlow GenerateToken(out string token)`

**用途 / Purpose:** **用途 / Purpose:** 生成token的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.GenerateToken(token);
```

### GotoDialogState
`public DialogFlow GotoDialogState(string input)`

**用途 / Purpose:** **用途 / Purpose:** 调用 GotoDialogState 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.GotoDialogState("example");
```

### GotoDialogStateBranched
`public DialogFlow GotoDialogStateBranched(string input, ConversationSentence.OnConditionDelegate conditionDelegate, string alternative)`

**用途 / Purpose:** **用途 / Purpose:** 调用 GotoDialogStateBranched 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.GotoDialogStateBranched("example", conditionDelegate, "example");
```

### GetOutputToken
`public DialogFlow GetOutputToken(out string oState)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 output token 的结果。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.GetOutputToken(oState);
```

### GoBackToDialogState
`public DialogFlow GoBackToDialogState(string iState)`

**用途 / Purpose:** **用途 / Purpose:** 调用 GoBackToDialogState 对应的操作。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.GoBackToDialogState("example");
```

### CloseDialog
`public DialogFlow CloseDialog()`

**用途 / Purpose:** **用途 / Purpose:** 关闭dialog对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.CloseDialog();
```

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

**用途 / Purpose:** **用途 / Purpose:** 将 player line 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.AddPlayerLine("example", "example", "example", "example", conditionDelegate, consequenceDelegate, relatedObject, 0, null, null, null, null);
```

### AddDialogLine
`public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

**用途 / Purpose:** **用途 / Purpose:** 将 dialog line 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DialogFlow 实例
DialogFlow dialogFlow = ...;
var result = dialogFlow.AddDialogLine("example", "example", "example", "example", conditionDelegate, consequenceDelegate, relatedObject, 0, null, null, null);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DialogFlow dialogFlow = ...;
dialogFlow.Variation("example", propertiesAndWeights);
```

## 参见

- [本区域目录](../)