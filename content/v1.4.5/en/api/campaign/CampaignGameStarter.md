---
title: "CampaignGameStarter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignGameStarter`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignGameStarter

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignGameStarter : IGameStarter`
**Base:** `IGameStarter`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs`

## Overview

`CampaignGameStarter` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UnregisterNonReadyObjects
`public void UnregisterNonReadyObjects()`

**Purpose:** Handles logic related to `unregister non ready objects`.

### AddBehavior
`public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

**Purpose:** Adds `behavior` to the current collection or state.

### AddModel
`public void AddModel(GameModel gameModel)`

**Purpose:** Adds `model` to the current collection or state.

### AddGameMenu
`public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None, object relatedObject = null)`

**Purpose:** Adds `game menu` to the current collection or state.

### AddWaitGameMenu
`public void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, float targetWaitHours = 0f, GameMenu.MenuFlags flags = GameMenu.MenuFlags.None, object relatedObject = null)`

**Purpose:** Adds `wait game menu` to the current collection or state.

### AddGameMenuOption
`public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`

**Purpose:** Adds `game menu option` to the current collection or state.

### GetPresumedGameMenu
`public GameMenu GetPresumedGameMenu(string stringId)`

**Purpose:** Gets the current value of `presumed game menu`.

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**Purpose:** Adds `dialog flow` to the current collection or state.

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null)`

**Purpose:** Adds `player line` to the current collection or state.

### AddRepeatablePlayerLine
`public ConversationSentence AddRepeatablePlayerLine(string id, string inputToken, string outputToken, string text, string continueListingRepeatedObjectsText, string continueListingOptionOutputToken, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `repeatable player line` to the current collection or state.

### AddDialogLineWithVariation
`public ConversationSentence AddDialogLineWithVariation(string id, string inputToken, string outputToken, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, string idleActionId = "", string idleFaceAnimId = "", string reactionId = "", string reactionFaceAnimId = "", ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `dialog line with variation` to the current collection or state.

### AddDialogLine
`public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `dialog line` to the current collection or state.

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `dialog line multi agent` to the current collection or state.

## Usage Example

```csharp
var value = new CampaignGameStarter();
value.UnregisterNonReadyObjects();
```

## See Also

- [Complete Class Catalog](../catalog)