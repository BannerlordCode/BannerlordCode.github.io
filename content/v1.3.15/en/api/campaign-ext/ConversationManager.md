---
title: "ConversationManager"
description: "Auto-generated class reference for ConversationManager."
---
# ConversationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs`

## Overview

`ConversationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ConversationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentSentenceText` | `public string CurrentSentenceText { get; }` |
| `IsConversationFlowActive` | `public bool IsConversationFlowActive { get; }` |
| `CurOptions` | `public List<ConversationSentenceOption> CurOptions { get; set; }` |
| `ConversationAgents` | `public IReadOnlyList<IAgent> ConversationAgents { get; }` |
| `OneToOneConversationAgent` | `public IAgent OneToOneConversationAgent { get; }` |
| `SpeakerAgent` | `public IAgent SpeakerAgent { get; }` |
| `ListenerAgent` | `public IAgent ListenerAgent { get; }` |
| `IsConversationInProgress` | `public bool IsConversationInProgress { get; }` |
| `OneToOneConversationHero` | `public Hero OneToOneConversationHero { get; }` |
| `OneToOneConversationCharacter` | `public CharacterObject OneToOneConversationCharacter { get; }` |
| `ConversationCharacters` | `public IEnumerable<CharacterObject> ConversationCharacters { get; }` |
| `ConversationParty` | `public MobileParty ConversationParty { get; }` |
| `NeedsToActivateForMapConversation` | `public bool NeedsToActivateForMapConversation { get; }` |
| `Handler` | `public IConversationStateHandler Handler { get; set; }` |

## Key Methods

### CreateConversationSentenceIndex
`public int CreateConversationSentenceIndex()`

**Purpose:** **Purpose:** Constructs a new conversation sentence index entity and returns it to the caller.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.CreateConversationSentenceIndex();
```

### StartNew
`public void StartNew(int startingToken, bool setActionsInstantly)`

**Purpose:** **Purpose:** Starts the new flow or state machine.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.StartNew(0, false);
```

### ProcessSentence
`public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)`

**Purpose:** **Purpose:** Executes the ProcessSentence logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.ProcessSentence(conversationSentenceOption);
```

### UpdateCurrentSentenceText
`public void UpdateCurrentSentenceText()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of current sentence text.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.UpdateCurrentSentenceText();
```

### IsConversationEnded
`public bool IsConversationEnded()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conversation ended state or condition.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.IsConversationEnded();
```

### ClearCurrentOptions
`public void ClearCurrentOptions()`

**Purpose:** **Purpose:** Removes all current options from the this instance.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.ClearCurrentOptions();
```

### AddToCurrentOptions
`public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)`

**Purpose:** **Purpose:** Adds to current options to the current collection or state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.AddToCurrentOptions(text, "example", false, hintText);
```

### GetPlayerSentenceOptions
`public void GetPlayerSentenceOptions()`

**Purpose:** **Purpose:** Reads and returns the player sentence options value held by the this instance.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.GetPlayerSentenceOptions();
```

### GetStateIndex
`public int GetStateIndex(string str)`

**Purpose:** **Purpose:** Reads and returns the state index value held by the this instance.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.GetStateIndex("example");
```

### DisableSentenceSort
`public void DisableSentenceSort()`

**Purpose:** **Purpose:** Executes the DisableSentenceSort logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.DisableSentenceSort();
```

### EnableSentenceSort
`public void EnableSentenceSort()`

**Purpose:** **Purpose:** Executes the EnableSentenceSort logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.EnableSentenceSort();
```

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**Purpose:** **Purpose:** Adds dialog flow to the current collection or state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.AddDialogFlow(dialogFlow, null);
```

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** **Purpose:** Adds dialog line multi agent to the current collection or state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.AddDialogLineMultiAgent("example", "example", "example", text, conditionDelegate, consequenceDelegate, 0, 0, 0, null);
```

### IsAgentInConversation
`public bool IsAgentInConversation(IAgent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent in conversation state or condition.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.IsAgentInConversation(agent);
```

### BeginConversation
`public void BeginConversation()`

**Purpose:** **Purpose:** Executes the BeginConversation logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.BeginConversation();
```

### EndConversation
`public void EndConversation()`

**Purpose:** **Purpose:** Executes the EndConversation logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.EndConversation();
```

### DoOption
`public void DoOption(int optionIndex)`

**Purpose:** **Purpose:** Executes the DoOption logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.DoOption(0);
```

### DoOption
`public void DoOption(string optionID)`

**Purpose:** **Purpose:** Executes the DoOption logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.DoOption("example");
```

### DoConversationContinuedCallback
`public void DoConversationContinuedCallback()`

**Purpose:** **Purpose:** Executes the DoConversationContinuedCallback logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.DoConversationContinuedCallback();
```

### DoOptionContinue
`public void DoOptionContinue()`

**Purpose:** **Purpose:** Executes the DoOptionContinue logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.DoOptionContinue();
```

### ContinueConversation
`public void ContinueConversation()`

**Purpose:** **Purpose:** Executes the ContinueConversation logic.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.ContinueConversation();
```

### SetupAndStartMissionConversation
`public void SetupAndStartMissionConversation(IAgent agent, IAgent mainAgent, bool setActionsInstantly)`

**Purpose:** **Purpose:** Assigns a new value to up and start mission conversation and updates the object's internal state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.SetupAndStartMissionConversation(agent, mainAgent, false);
```

### SetupAndStartMissionConversationWithMultipleAgents
`public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent> agents, IAgent mainAgent)`

**Purpose:** **Purpose:** Assigns a new value to up and start mission conversation with multiple agents and updates the object's internal state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.SetupAndStartMissionConversationWithMultipleAgents(agents, mainAgent);
```

### SetupAndStartMapConversation
`public void SetupAndStartMapConversation(MobileParty party, IAgent agent, IAgent mainAgent)`

**Purpose:** **Purpose:** Assigns a new value to up and start map conversation and updates the object's internal state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.SetupAndStartMapConversation(party, agent, mainAgent);
```

### AddConversationAgents
`public void AddConversationAgents(IEnumerable<IAgent> agents, bool setActionsInstantly)`

**Purpose:** **Purpose:** Adds conversation agents to the current collection or state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.AddConversationAgents(agents, false);
```

### RemoveConversationAgent
`public void RemoveConversationAgent(IAgent agent)`

**Purpose:** **Purpose:** Removes conversation agent from the current collection or state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.RemoveConversationAgent(agent);
```

### IsConversationAgent
`public bool IsConversationAgent(IAgent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the conversation agent state or condition.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.IsConversationAgent(agent);
```

### RemoveRelatedLines
`public void RemoveRelatedLines(object o)`

**Purpose:** **Purpose:** Removes related lines from the current collection or state.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.RemoveRelatedLines(o);
```

### OnConversationDeactivate
`public void OnConversationDeactivate()`

**Purpose:** **Purpose:** Invoked when the conversation deactivate event is raised.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.OnConversationDeactivate();
```

### OnConversationActivate
`public void OnConversationActivate()`

**Purpose:** **Purpose:** Invoked when the conversation activate event is raised.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.OnConversationActivate();
```

### FindMatchingTextOrNull
`public TextObject FindMatchingTextOrNull(string id, CharacterObject character)`

**Purpose:** **Purpose:** Looks up the matching matching text or null in the current collection or scope.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.FindMatchingTextOrNull("example", character);
```

### GetApplicableTagNames
`public IEnumerable<string> GetApplicableTagNames(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the applicable tag names value held by the this instance.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.GetApplicableTagNames(character);
```

### IsTagApplicable
`public bool IsTagApplicable(string tagId, CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the tag applicable state or condition.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
var result = conversationManager.IsTagApplicable("example", character);
```

### OpenMapConversation
`public void OpenMapConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**Purpose:** **Purpose:** Opens the resource or UI associated with map conversation.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.OpenMapConversation(playerCharacterData, conversationPartnerData);
```

### StartPersuasion
`public static void StartPersuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress = -1f, PersuasionDifficulty difficulty = PersuasionDifficulty.Medium)`

**Purpose:** **Purpose:** Starts the persuasion flow or state machine.

```csharp
// Static call; no instance required
ConversationManager.StartPersuasion(0, 0, 0, 0, 0, 0, persuasionDifficulty.Medium);
```

### EndPersuasion
`public static void EndPersuasion()`

**Purpose:** **Purpose:** Executes the EndPersuasion logic.

```csharp
// Static call; no instance required
ConversationManager.EndPersuasion();
```

### PersuasionCommitProgress
`public static void PersuasionCommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

**Purpose:** **Purpose:** Executes the PersuasionCommitProgress logic.

```csharp
// Static call; no instance required
ConversationManager.PersuasionCommitProgress(persuasionOptionArgs);
```

### Clear
`public static void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Static call; no instance required
ConversationManager.Clear();
```

### GetPersuasionChanceValues
`public void GetPersuasionChanceValues(out float successValue, out float critSuccessValue, out float critFailValue)`

**Purpose:** **Purpose:** Reads and returns the persuasion chance values value held by the this instance.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.GetPersuasionChanceValues(successValue, critSuccessValue, critFailValue);
```

### GetPersuasionIsActive
`public static bool GetPersuasionIsActive()`

**Purpose:** **Purpose:** Reads and returns the persuasion is active value held by the this instance.

```csharp
// Static call; no instance required
ConversationManager.GetPersuasionIsActive();
```

### GetPersuasionProgressSatisfied
`public static bool GetPersuasionProgressSatisfied()`

**Purpose:** **Purpose:** Reads and returns the persuasion progress satisfied value held by the this instance.

```csharp
// Static call; no instance required
ConversationManager.GetPersuasionProgressSatisfied();
```

### GetPersuasionIsFailure
`public static bool GetPersuasionIsFailure()`

**Purpose:** **Purpose:** Reads and returns the persuasion is failure value held by the this instance.

```csharp
// Static call; no instance required
ConversationManager.GetPersuasionIsFailure();
```

### GetPersuasionProgress
`public static float GetPersuasionProgress()`

**Purpose:** **Purpose:** Reads and returns the persuasion progress value held by the this instance.

```csharp
// Static call; no instance required
ConversationManager.GetPersuasionProgress();
```

### GetPersuasionGoalValue
`public static float GetPersuasionGoalValue()`

**Purpose:** **Purpose:** Reads and returns the persuasion goal value value held by the this instance.

```csharp
// Static call; no instance required
ConversationManager.GetPersuasionGoalValue();
```

### GetPersuasionChosenOptions
`public static IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> GetPersuasionChosenOptions()`

**Purpose:** **Purpose:** Reads and returns the persuasion chosen options value held by the this instance.

```csharp
// Static call; no instance required
ConversationManager.GetPersuasionChosenOptions();
```

### GetPersuasionChances
`public void GetPersuasionChances(ConversationSentenceOption conversationSentenceOption, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance)`

**Purpose:** **Purpose:** Reads and returns the persuasion chances value held by the this instance.

```csharp
// Obtain an instance of ConversationManager from the subsystem API first
ConversationManager conversationManager = ...;
conversationManager.GetPersuasionChances(conversationSentenceOption, successChance, critSuccessChance, critFailChance, failChance);
```

## Usage Example

```csharp
var manager = ConversationManager.Current;
```

## See Also

- [Area Index](../)