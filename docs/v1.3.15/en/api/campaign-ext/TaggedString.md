<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TaggedString`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TaggedString

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TaggedString` is a class in the `TaleWorlds.CampaignSystem.Conversation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)