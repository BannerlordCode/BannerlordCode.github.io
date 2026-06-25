---
title: "TaggedString"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TaggedString`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TaggedString

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TaggedString`
**Area:** campaign-ext

## Overview

`TaggedString` lives in `TaleWorlds.CampaignSystem.Conversation`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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

**Purpose:** Creates a new `conversation sentence index` instance or object.

### StartNew
`public void StartNew(int startingToken, bool setActionsInstantly)`

**Purpose:** Handles logic related to `start new`.

### ProcessSentence
`public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)`

**Purpose:** Handles logic related to `process sentence`.

### UpdateCurrentSentenceText
`public void UpdateCurrentSentenceText()`

**Purpose:** Updates the state or data of `current sentence text`.

### IsConversationEnded
`public bool IsConversationEnded()`

**Purpose:** Handles logic related to `is conversation ended`.

### ClearCurrentOptions
`public void ClearCurrentOptions()`

**Purpose:** Handles logic related to `clear current options`.

### AddToCurrentOptions
`public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)`

**Purpose:** Adds `to current options` to the current collection or state.

### GetPlayerSentenceOptions
`public void GetPlayerSentenceOptions()`

**Purpose:** Gets the current value of `player sentence options`.

### GetStateIndex
`public int GetStateIndex(string str)`

**Purpose:** Gets the current value of `state index`.

### DisableSentenceSort
`public void DisableSentenceSort()`

**Purpose:** Handles logic related to `disable sentence sort`.

### EnableSentenceSort
`public void EnableSentenceSort()`

**Purpose:** Handles logic related to `enable sentence sort`.

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**Purpose:** Adds `dialog flow` to the current collection or state.

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `dialog line multi agent` to the current collection or state.

### IsAgentInConversation
`public bool IsAgentInConversation(IAgent agent)`

**Purpose:** Handles logic related to `is agent in conversation`.

### BeginConversation
`public void BeginConversation()`

**Purpose:** Handles logic related to `begin conversation`.

### EndConversation
`public void EndConversation()`

**Purpose:** Handles logic related to `end conversation`.

### DoOption
`public void DoOption(int optionIndex)`

**Purpose:** Handles logic related to `do option`.

### DoOption
`public void DoOption(string optionID)`

**Purpose:** Handles logic related to `do option`.

### DoConversationContinuedCallback
`public void DoConversationContinuedCallback()`

**Purpose:** Handles logic related to `do conversation continued callback`.

### DoOptionContinue
`public void DoOptionContinue()`

**Purpose:** Handles logic related to `do option continue`.

## Usage Example

```csharp
// First obtain a TaggedString instance from game state, then call one of its public methods
var value = new TaggedString();
value.CreateConversationSentenceIndex();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
