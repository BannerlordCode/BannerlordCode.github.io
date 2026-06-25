---
title: "DialogFlow"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DialogFlow`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DialogFlow

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DialogFlow`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/DialogFlow.cs`

## Overview

`DialogFlow` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Variation
`public DialogFlow Variation(string text, params object propertiesAndWeights)`

**Purpose:** Handles logic related to `variation`.

### Variation
`public DialogFlow Variation(TextObject text, params object propertiesAndWeights)`

**Purpose:** Handles logic related to `variation`.

### NpcLine
`public DialogFlow NpcLine(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `npc line`.

### NpcLine
`public DialogFlow NpcLine(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `npc line`.

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `npc line with variation`.

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `npc line with variation`.

### PlayerLine
`public DialogFlow PlayerLine(string playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `player line`.

### PlayerLine
`public DialogFlow PlayerLine(TextObject playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `player line`.

### BeginPlayerOptions
`public DialogFlow BeginPlayerOptions(string inputToken = null, bool optionUsedOnce = false)`

**Purpose:** Handles logic related to `begin player options`.

### BeginNpcOptions
`public DialogFlow BeginNpcOptions(string inputToken = null, bool optionUsedOnce = false)`

**Purpose:** Handles logic related to `begin npc options`.

### PlayerOption
`public DialogFlow PlayerOption(string text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `player option`.

### PlayerOption
`public DialogFlow PlayerOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `player option`.

### PlayerSpecialOption
`public DialogFlow PlayerSpecialOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `player special option`.

### PlayerRepeatableOption
`public DialogFlow PlayerRepeatableOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `player repeatable option`.

### NpcOption
`public DialogFlow NpcOption(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `npc option`.

### NpcOption
`public DialogFlow NpcOption(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `npc option`.

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `npc option with variation`.

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Handles logic related to `npc option with variation`.

### EndPlayerOptions
`public DialogFlow EndPlayerOptions()`

**Purpose:** Handles logic related to `end player options`.

### EndNpcOptions
`public DialogFlow EndNpcOptions()`

**Purpose:** Handles logic related to `end npc options`.

### Condition
`public DialogFlow Condition(ConversationSentence.OnConditionDelegate conditionDelegate)`

**Purpose:** Handles logic related to `condition`.

### ClickableCondition
`public DialogFlow ClickableCondition(ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate)`

**Purpose:** Handles logic related to `clickable condition`.

### Consequence
`public DialogFlow Consequence(ConversationSentence.OnConsequenceDelegate consequenceDelegate)`

**Purpose:** Handles logic related to `consequence`.

### CreateDialogFlow
`public static DialogFlow CreateDialogFlow(string inputToken = null, int priority = 100)`

**Purpose:** Creates a new `dialog flow` instance or object.

### NpcDefaultOption
`public DialogFlow NpcDefaultOption(string text)`

**Purpose:** Handles logic related to `npc default option`.

### GenerateToken
`public DialogFlow GenerateToken(out string token)`

**Purpose:** Handles logic related to `generate token`.

### GotoDialogState
`public DialogFlow GotoDialogState(string input)`

**Purpose:** Handles logic related to `goto dialog state`.

### GotoDialogStateBranched
`public DialogFlow GotoDialogStateBranched(string input, ConversationSentence.OnConditionDelegate conditionDelegate, string alternative)`

**Purpose:** Handles logic related to `goto dialog state branched`.

### GetOutputToken
`public DialogFlow GetOutputToken(out string oState)`

**Purpose:** Gets the current value of `output token`.

### GoBackToDialogState
`public DialogFlow GoBackToDialogState(string iState)`

**Purpose:** Handles logic related to `go back to dialog state`.

### CloseDialog
`public DialogFlow CloseDialog()`

**Purpose:** Handles logic related to `close dialog`.

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

**Purpose:** Adds `player line` to the current collection or state.

### AddDialogLine
`public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

**Purpose:** Adds `dialog line` to the current collection or state.

## Usage Example

```csharp
var value = new DialogFlow();
value.Variation("example", propertiesAndWeights);
```

## See Also

- [Complete Class Catalog](../catalog)