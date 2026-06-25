---
title: "CampaignGameStarter"
description: "Auto-generated class reference for CampaignGameStarter."
---
# CampaignGameStarter

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignGameStarter : IGameStarter`
**Base:** `IGameStarter`
**File:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`

## Overview

`CampaignGameStarter` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CampaignBehaviors` | `public ICollection<CampaignBehaviorBase> CampaignBehaviors { get; }` |
| `Models` | `public IEnumerable<GameModel> Models { get; }` |

## Key Methods

### UnregisterNonReadyObjects
`public void UnregisterNonReadyObjects()`

**Purpose:** Unregisters `non ready objects` from the current system.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.UnregisterNonReadyObjects();
```

### AddBehavior
`public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

**Purpose:** Adds `behavior` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddBehavior(campaignBehavior);
```

### AddModel
`public void AddModel(GameModel gameModel)`

**Purpose:** Adds `model` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddModel(gameModel);
```

### AddGameMenu
`public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None, object relatedObject = null)`

**Purpose:** Adds `game menu` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddGameMenu("example", "example", initDelegate, gameMenu.MenuOverlayType.None, gameMenu.MenuFlags.None, null);
```

### AddWaitGameMenu
`public void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, float targetWaitHours = 0f, GameMenu.MenuFlags flags = GameMenu.MenuFlags.None, object relatedObject = null)`

**Purpose:** Adds `wait game menu` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddWaitGameMenu("example", "example", initDelegate, condition, consequence, tick, type, gameMenu.MenuOverlayType.None, 0, gameMenu.MenuFlags.None, null);
```

### AddGameMenuOption
`public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`

**Purpose:** Adds `game menu option` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddGameMenuOption("example", "example", "example", condition, consequence, false, 0, false, null);
```

### GetPresumedGameMenu
`public GameMenu GetPresumedGameMenu(string stringId)`

**Purpose:** Reads and returns the `presumed game menu` value held by the current object.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.GetPresumedGameMenu("example");
```

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**Purpose:** Adds `dialog flow` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddDialogFlow(dialogFlow, null);
```

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null)`

**Purpose:** Adds `player line` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddPlayerLine("example", "example", "example", "example", conditionDelegate, consequenceDelegate, 0, null, null);
```

### AddRepeatablePlayerLine
`public ConversationSentence AddRepeatablePlayerLine(string id, string inputToken, string outputToken, string text, string continueListingRepeatedObjectsText, string continueListingOptionOutputToken, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `repeatable player line` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddRepeatablePlayerLine("example", "example", "example", "example", "example", "example", conditionDelegate, consequenceDelegate, 0, null);
```

### AddDialogLineWithVariation
`public ConversationSentence AddDialogLineWithVariation(string id, string inputToken, string outputToken, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, string idleActionId = "", string idleFaceAnimId = "", string reactionId = "", string reactionFaceAnimId = "", ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `dialog line with variation` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddDialogLineWithVariation("example", "example", "example", conditionDelegate, consequenceDelegate, 0, "example", "example", "example", "example", null);
```

### AddDialogLine
`public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `dialog line` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddDialogLine("example", "example", "example", "example", conditionDelegate, consequenceDelegate, 0, null);
```

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `dialog line multi agent` to the current collection or state.

```csharp
// Obtain an instance of CampaignGameStarter from the subsystem API first
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddDialogLineMultiAgent("example", "example", "example", text, conditionDelegate, consequenceDelegate, 0, 0, 0, null);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.UnregisterNonReadyObjects();
```

## See Also

- [Area Index](../)