---
title: "TaggedString"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TaggedString`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TaggedString

**命名空间:** TaleWorlds.CampaignSystem.Conversation
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class TaggedString`
**领域:** campaign-ext

## 概述

`TaggedString` 位于 `TaleWorlds.CampaignSystem.Conversation`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public int CreateConversationSentenceIndex()`

**用途 / Purpose:** 创建一个 `conversation sentence index` 实例或对象。

### StartNew
`public void StartNew(int startingToken, bool setActionsInstantly)`

**用途 / Purpose:** 处理 `start new` 相关逻辑。

### ProcessSentence
`public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)`

**用途 / Purpose:** 处理 `process sentence` 相关逻辑。

### UpdateCurrentSentenceText
`public void UpdateCurrentSentenceText()`

**用途 / Purpose:** 更新 `current sentence text` 的状态或数据。

### IsConversationEnded
`public bool IsConversationEnded()`

**用途 / Purpose:** 处理 `is conversation ended` 相关逻辑。

### ClearCurrentOptions
`public void ClearCurrentOptions()`

**用途 / Purpose:** 处理 `clear current options` 相关逻辑。

### AddToCurrentOptions
`public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)`

**用途 / Purpose:** 向当前集合/状态中添加 `to current options`。

### GetPlayerSentenceOptions
`public void GetPlayerSentenceOptions()`

**用途 / Purpose:** 获取 `player sentence options` 的当前值。

### GetStateIndex
`public int GetStateIndex(string str)`

**用途 / Purpose:** 获取 `state index` 的当前值。

### DisableSentenceSort
`public void DisableSentenceSort()`

**用途 / Purpose:** 处理 `disable sentence sort` 相关逻辑。

### EnableSentenceSort
`public void EnableSentenceSort()`

**用途 / Purpose:** 处理 `enable sentence sort` 相关逻辑。

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `dialog flow`。

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `dialog line multi agent`。

### IsAgentInConversation
`public bool IsAgentInConversation(IAgent agent)`

**用途 / Purpose:** 处理 `is agent in conversation` 相关逻辑。

### BeginConversation
`public void BeginConversation()`

**用途 / Purpose:** 处理 `begin conversation` 相关逻辑。

### EndConversation
`public void EndConversation()`

**用途 / Purpose:** 处理 `end conversation` 相关逻辑。

### DoOption
`public void DoOption(int optionIndex)`

**用途 / Purpose:** 处理 `do option` 相关逻辑。

### DoOption
`public void DoOption(string optionID)`

**用途 / Purpose:** 处理 `do option` 相关逻辑。

### DoConversationContinuedCallback
`public void DoConversationContinuedCallback()`

**用途 / Purpose:** 处理 `do conversation continued callback` 相关逻辑。

### DoOptionContinue
`public void DoOptionContinue()`

**用途 / Purpose:** 处理 `do option continue` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 TaggedString 实例，再调用它的公开方法
var value = new TaggedString();
value.CreateConversationSentenceIndex();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
