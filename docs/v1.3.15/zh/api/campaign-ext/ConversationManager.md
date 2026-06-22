<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs`

## 概述

`ConversationManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

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

## 使用示例

```csharp
// ConversationManager (Manager) 的典型用法
ConversationManager.Current;
```

## 参见

- [完整类目录](../catalog)