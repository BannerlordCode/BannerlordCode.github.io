---
title: "DialogFlow"
description: "DialogFlow: a public class in TaleWorlds.CampaignSystem; 33 exposed members (33 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/DialogFlow.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DialogFlow

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DialogFlow`
**File:** `TaleWorlds.CampaignSystem/DialogFlow.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

DialogFlow lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/DialogFlow.cs. It is a public class; the inheritance chain is DialogFlow. It exposes 33 public/protected members: 33 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DialogFlow lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain DialogFlow. The surface is method-led (methods 33/33, properties 0/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/DialogFlow.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Variation` | `public DialogFlow Variation(string text, params object[]propertiesAndWeights)` | method |
| `Variation` | `public DialogFlow Variation(TextObject text, params object[]propertiesAndWeights)` | method |
| `NpcLine` | `public DialogFlow NpcLine(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `NpcLine` | `public DialogFlow NpcLine(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `NpcLineWithVariation` | `public DialogFlow NpcLineWithVariation(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `NpcLineWithVariation` | `public DialogFlow NpcLineWithVariation(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `PlayerLine` | `public DialogFlow PlayerLine(string playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `PlayerLine` | `public DialogFlow PlayerLine(TextObject playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `BeginPlayerOptions` | `public DialogFlow BeginPlayerOptions(string inputToken = null, bool optionUsedOnce = false)` | method |
| `BeginNpcOptions` | `public DialogFlow BeginNpcOptions(string inputToken = null, bool optionUsedOnce = false)` | method |
| `PlayerOption` | `public DialogFlow PlayerOption(string text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `PlayerOption` | `public DialogFlow PlayerOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `PlayerSpecialOption` | `public DialogFlow PlayerSpecialOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `PlayerRepeatableOption` | `public DialogFlow PlayerRepeatableOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `NpcOption` | `public DialogFlow NpcOption(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `NpcOption` | `public DialogFlow NpcOption(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `NpcOptionWithVariation` | `public DialogFlow NpcOptionWithVariation(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `NpcOptionWithVariation` | `public DialogFlow NpcOptionWithVariation(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)` | method |
| `EndPlayerOptions` | `public DialogFlow EndPlayerOptions()` | method |
| `EndNpcOptions` | `public DialogFlow EndNpcOptions()` | method |
| `Condition` | `public DialogFlow Condition(ConversationSentence.OnConditionDelegate conditionDelegate)` | method |
| `ClickableCondition` | `public DialogFlow ClickableCondition(ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate)` | method |
| `Consequence` | `public DialogFlow Consequence(ConversationSentence.OnConsequenceDelegate consequenceDelegate)` | method |
| `CreateDialogFlow` | `public static DialogFlow CreateDialogFlow(string inputToken = null, int priority = 100)` | method |
| `NpcDefaultOption` | `public DialogFlow NpcDefaultOption(string text)` | method |
| `GenerateToken` | `public DialogFlow GenerateToken(out string token)` | method |
| `GotoDialogState` | `public DialogFlow GotoDialogState(string input)` | method |
| `GotoDialogStateBranched` | `public DialogFlow GotoDialogStateBranched(string input, ConversationSentence.OnConditionDelegate conditionDelegate, string alternative)` | method |
| `GetOutputToken` | `public DialogFlow GetOutputToken(out string oState)` | method |
| `GoBackToDialogState` | `public DialogFlow GoBackToDialogState(string iState)` | method |
| `CloseDialog` | `public DialogFlow CloseDialog()` | method |
| `AddPlayerLine` | `public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)` | method |
| `AddDialogLine` | `public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
