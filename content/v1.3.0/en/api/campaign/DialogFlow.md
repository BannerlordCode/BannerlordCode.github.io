---
title: "DialogFlow"
description: "Auto-generated class reference for DialogFlow."
---
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

**Purpose:** Executes the Variation logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.Variation("example", propertiesAndWeights);
```

### Variation
`public DialogFlow Variation(TextObject text, params object propertiesAndWeights)`

**Purpose:** Executes the Variation logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.Variation(text, propertiesAndWeights);
```

### NpcLine
`public DialogFlow NpcLine(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the NpcLine logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcLine("example", null, null, "example", "example");
```

### NpcLine
`public DialogFlow NpcLine(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the NpcLine logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcLine(npcText, null, null, "example", "example");
```

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(string npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the NpcLineWithVariation logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcLineWithVariation("example", null, null, "example", "example");
```

### NpcLineWithVariation
`public DialogFlow NpcLineWithVariation(TextObject npcText, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the NpcLineWithVariation logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcLineWithVariation(npcText, null, null, "example", "example");
```

### PlayerLine
`public DialogFlow PlayerLine(string playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the PlayerLine logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerLine("example", null, "example", "example");
```

### PlayerLine
`public DialogFlow PlayerLine(TextObject playerText, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the PlayerLine logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerLine(playerText, null, "example", "example");
```

### BeginPlayerOptions
`public DialogFlow BeginPlayerOptions(string inputToken = null, bool optionUsedOnce = false)`

**Purpose:** Executes the BeginPlayerOptions logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.BeginPlayerOptions("example", false);
```

### BeginNpcOptions
`public DialogFlow BeginNpcOptions(string inputToken = null, bool optionUsedOnce = false)`

**Purpose:** Executes the BeginNpcOptions logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.BeginNpcOptions("example", false);
```

### PlayerOption
`public DialogFlow PlayerOption(string text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the PlayerOption logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerOption("example", null, "example", "example");
```

### PlayerOption
`public DialogFlow PlayerOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the PlayerOption logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerOption(text, null, "example", "example");
```

### PlayerSpecialOption
`public DialogFlow PlayerSpecialOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the PlayerSpecialOption logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerSpecialOption(text, null, "example", "example");
```

### PlayerRepeatableOption
`public DialogFlow PlayerRepeatableOption(TextObject text, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the PlayerRepeatableOption logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.PlayerRepeatableOption(text, null, "example", "example");
```

### NpcOption
`public DialogFlow NpcOption(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the NpcOption logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcOption("example", conditionDelegate, null, null, "example", "example");
```

### NpcOption
`public DialogFlow NpcOption(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the NpcOption logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcOption(text, conditionDelegate, null, null, "example", "example");
```

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the NpcOptionWithVariation logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcOptionWithVariation("example", conditionDelegate, null, null, "example", "example");
```

### NpcOptionWithVariation
`public DialogFlow NpcOptionWithVariation(TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null, string inputToken = null, string outputToken = null)`

**Purpose:** Executes the NpcOptionWithVariation logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcOptionWithVariation(text, conditionDelegate, null, null, "example", "example");
```

### EndPlayerOptions
`public DialogFlow EndPlayerOptions()`

**Purpose:** Executes the EndPlayerOptions logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.EndPlayerOptions();
```

### EndNpcOptions
`public DialogFlow EndNpcOptions()`

**Purpose:** Executes the EndNpcOptions logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.EndNpcOptions();
```

### Condition
`public DialogFlow Condition(ConversationSentence.OnConditionDelegate conditionDelegate)`

**Purpose:** Executes the Condition logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.Condition(conditionDelegate);
```

### ClickableCondition
`public DialogFlow ClickableCondition(ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate)`

**Purpose:** Executes the ClickableCondition logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.ClickableCondition(clickableConditionDelegate);
```

### Consequence
`public DialogFlow Consequence(ConversationSentence.OnConsequenceDelegate consequenceDelegate)`

**Purpose:** Executes the Consequence logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.Consequence(consequenceDelegate);
```

### CreateDialogFlow
`public static DialogFlow CreateDialogFlow(string inputToken = null, int priority = 100)`

**Purpose:** Constructs a new dialog flow entity and returns it to the caller.

```csharp
// Static call; no instance required
DialogFlow.CreateDialogFlow("example", 0);
```

### NpcDefaultOption
`public DialogFlow NpcDefaultOption(string text)`

**Purpose:** Executes the NpcDefaultOption logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.NpcDefaultOption("example");
```

### GenerateToken
`public DialogFlow GenerateToken(out string token)`

**Purpose:** Generates an instance, data, or representation of token.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.GenerateToken(token);
```

### GotoDialogState
`public DialogFlow GotoDialogState(string input)`

**Purpose:** Executes the GotoDialogState logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.GotoDialogState("example");
```

### GotoDialogStateBranched
`public DialogFlow GotoDialogStateBranched(string input, ConversationSentence.OnConditionDelegate conditionDelegate, string alternative)`

**Purpose:** Executes the GotoDialogStateBranched logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.GotoDialogStateBranched("example", conditionDelegate, "example");
```

### GetOutputToken
`public DialogFlow GetOutputToken(out string oState)`

**Purpose:** Reads and returns the output token value held by the this instance.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.GetOutputToken(oState);
```

### GoBackToDialogState
`public DialogFlow GoBackToDialogState(string iState)`

**Purpose:** Executes the GoBackToDialogState logic.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.GoBackToDialogState("example");
```

### CloseDialog
`public DialogFlow CloseDialog()`

**Purpose:** Closes the resource or UI associated with dialog.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.CloseDialog();
```

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

**Purpose:** Adds player line to the current collection or state.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.AddPlayerLine("example", "example", "example", "example", conditionDelegate, consequenceDelegate, relatedObject, 0, null, null, null, null);
```

### AddDialogLine
`public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, object relatedObject, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate speakerDelegate = null, ConversationSentence.OnMultipleConversationConsequenceDelegate listenerDelegate = null)`

**Purpose:** Adds dialog line to the current collection or state.

```csharp
// Obtain an instance of DialogFlow from the subsystem API first
DialogFlow dialogFlow = ...;
var result = dialogFlow.AddDialogLine("example", "example", "example", "example", conditionDelegate, consequenceDelegate, relatedObject, 0, null, null, null);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DialogFlow dialogFlow = ...;
dialogFlow.Variation("example", propertiesAndWeights);
```

## See Also

- [Area Index](../)