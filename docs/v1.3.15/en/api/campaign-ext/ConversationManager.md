<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs`

## Overview

`ConversationManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

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
```csharp
public int CreateConversationSentenceIndex()
```

### StartNew
```csharp
public void StartNew(int startingToken, bool setActionsInstantly)
```

### ProcessSentence
```csharp
public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)
```

### UpdateCurrentSentenceText
```csharp
public void UpdateCurrentSentenceText()
```

### IsConversationEnded
```csharp
public bool IsConversationEnded()
```

### ClearCurrentOptions
```csharp
public void ClearCurrentOptions()
```

### AddToCurrentOptions
```csharp
public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)
```

### GetPlayerSentenceOptions
```csharp
public void GetPlayerSentenceOptions()
```

### GetStateIndex
```csharp
public int GetStateIndex(string str)
```

### DisableSentenceSort
```csharp
public void DisableSentenceSort()
```

### EnableSentenceSort
```csharp
public void EnableSentenceSort()
```

### AddDialogFlow
```csharp
public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)
```

### AddDialogLineMultiAgent
```csharp
public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)
```

### IsAgentInConversation
```csharp
public bool IsAgentInConversation(IAgent agent)
```

### BeginConversation
```csharp
public void BeginConversation()
```

### EndConversation
```csharp
public void EndConversation()
```

### DoOption
```csharp
public void DoOption(int optionIndex)
```

### DoOption
```csharp
public void DoOption(string optionID)
```

### DoConversationContinuedCallback
```csharp
public void DoConversationContinuedCallback()
```

### DoOptionContinue
```csharp
public void DoOptionContinue()
```

### ContinueConversation
```csharp
public void ContinueConversation()
```

### SetupAndStartMissionConversation
```csharp
public void SetupAndStartMissionConversation(IAgent agent, IAgent mainAgent, bool setActionsInstantly)
```

### SetupAndStartMissionConversationWithMultipleAgents
```csharp
public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent> agents, IAgent mainAgent)
```

### SetupAndStartMapConversation
```csharp
public void SetupAndStartMapConversation(MobileParty party, IAgent agent, IAgent mainAgent)
```

### AddConversationAgents
```csharp
public void AddConversationAgents(IEnumerable<IAgent> agents, bool setActionsInstantly)
```

### RemoveConversationAgent
```csharp
public void RemoveConversationAgent(IAgent agent)
```

### IsConversationAgent
```csharp
public bool IsConversationAgent(IAgent agent)
```

### RemoveRelatedLines
```csharp
public void RemoveRelatedLines(object o)
```

### OnConversationDeactivate
```csharp
public void OnConversationDeactivate()
```

### OnConversationActivate
```csharp
public void OnConversationActivate()
```

## Usage Example

```csharp
// Typical usage of ConversationManager (Manager)
ConversationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)