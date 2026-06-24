<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs`

## 概述

`ConversationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ConversationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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

### ContinueConversation
`public void ContinueConversation()`

**用途 / Purpose:** 处理 `continue conversation` 相关逻辑。

### SetupAndStartMissionConversation
`public void SetupAndStartMissionConversation(IAgent agent, IAgent mainAgent, bool setActionsInstantly)`

**用途 / Purpose:** 设置 `up and start mission conversation` 的值或状态。

### SetupAndStartMissionConversationWithMultipleAgents
`public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent> agents, IAgent mainAgent)`

**用途 / Purpose:** 设置 `up and start mission conversation with multiple agents` 的值或状态。

### SetupAndStartMapConversation
`public void SetupAndStartMapConversation(MobileParty party, IAgent agent, IAgent mainAgent)`

**用途 / Purpose:** 设置 `up and start map conversation` 的值或状态。

### AddConversationAgents
`public void AddConversationAgents(IEnumerable<IAgent> agents, bool setActionsInstantly)`

**用途 / Purpose:** 向当前集合/状态中添加 `conversation agents`。

### RemoveConversationAgent
`public void RemoveConversationAgent(IAgent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `conversation agent`。

### IsConversationAgent
`public bool IsConversationAgent(IAgent agent)`

**用途 / Purpose:** 处理 `is conversation agent` 相关逻辑。

### RemoveRelatedLines
`public void RemoveRelatedLines(object o)`

**用途 / Purpose:** 从当前集合/状态中移除 `related lines`。

### OnConversationDeactivate
`public void OnConversationDeactivate()`

**用途 / Purpose:** 当 `conversation deactivate` 事件触发时调用此方法。

### OnConversationActivate
`public void OnConversationActivate()`

**用途 / Purpose:** 当 `conversation activate` 事件触发时调用此方法。

### FindMatchingTextOrNull
`public TextObject FindMatchingTextOrNull(string id, CharacterObject character)`

**用途 / Purpose:** 处理 `find matching text or null` 相关逻辑。

### GetApplicableTagNames
`public IEnumerable<string> GetApplicableTagNames(CharacterObject character)`

**用途 / Purpose:** 获取 `applicable tag names` 的当前值。

### IsTagApplicable
`public bool IsTagApplicable(string tagId, CharacterObject character)`

**用途 / Purpose:** 处理 `is tag applicable` 相关逻辑。

### OpenMapConversation
`public void OpenMapConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**用途 / Purpose:** 处理 `open map conversation` 相关逻辑。

### StartPersuasion
`public static void StartPersuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress = -1f, PersuasionDifficulty difficulty = PersuasionDifficulty.Medium)`

**用途 / Purpose:** 处理 `start persuasion` 相关逻辑。

### EndPersuasion
`public static void EndPersuasion()`

**用途 / Purpose:** 处理 `end persuasion` 相关逻辑。

### PersuasionCommitProgress
`public static void PersuasionCommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

**用途 / Purpose:** 处理 `persuasion commit progress` 相关逻辑。

### Clear
`public static void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### GetPersuasionChanceValues
`public void GetPersuasionChanceValues(out float successValue, out float critSuccessValue, out float critFailValue)`

**用途 / Purpose:** 获取 `persuasion chance values` 的当前值。

### GetPersuasionIsActive
`public static bool GetPersuasionIsActive()`

**用途 / Purpose:** 获取 `persuasion is active` 的当前值。

### GetPersuasionProgressSatisfied
`public static bool GetPersuasionProgressSatisfied()`

**用途 / Purpose:** 获取 `persuasion progress satisfied` 的当前值。

### GetPersuasionIsFailure
`public static bool GetPersuasionIsFailure()`

**用途 / Purpose:** 获取 `persuasion is failure` 的当前值。

### GetPersuasionProgress
`public static float GetPersuasionProgress()`

**用途 / Purpose:** 获取 `persuasion progress` 的当前值。

### GetPersuasionGoalValue
`public static float GetPersuasionGoalValue()`

**用途 / Purpose:** 获取 `persuasion goal value` 的当前值。

### GetPersuasionChosenOptions
`public static IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> GetPersuasionChosenOptions()`

**用途 / Purpose:** 获取 `persuasion chosen options` 的当前值。

### GetPersuasionChances
`public void GetPersuasionChances(ConversationSentenceOption conversationSentenceOption, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance)`

**用途 / Purpose:** 获取 `persuasion chances` 的当前值。

## 使用示例

```csharp
var manager = ConversationManager.Current;
```

## 参见

- [完整类目录](../catalog)