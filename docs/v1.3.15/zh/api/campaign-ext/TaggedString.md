<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TaggedString`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TaggedString

**命名空间:** TaleWorlds.CampaignSystem.Conversation
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TaggedString` 是 `TaleWorlds.CampaignSystem.Conversation` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)