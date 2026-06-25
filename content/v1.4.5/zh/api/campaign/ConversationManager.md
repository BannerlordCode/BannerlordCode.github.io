---
title: "ConversationManager"
description: "ConversationManager 的自动生成类参考。"
---
# ConversationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs`

## 概述

`ConversationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ConversationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSentenceText` | `public string CurrentSentenceText { get; }` |
| `CurOptions` | `public List<ConversationSentenceOption> CurOptions { get; set; }` |
| `OneToOneConversationAgent` | `public IAgent OneToOneConversationAgent { get; }` |
| `SpeakerAgent` | `public IAgent SpeakerAgent { get; }` |
| `ListenerAgent` | `public IAgent ListenerAgent { get; }` |
| `IsConversationInProgress` | `public bool IsConversationInProgress { get; }` |
| `OneToOneConversationHero` | `public Hero OneToOneConversationHero { get; }` |
| `OneToOneConversationCharacter` | `public CharacterObject OneToOneConversationCharacter { get; }` |
| `ConversationCharacters` | `public IEnumerable<CharacterObject> ConversationCharacters { get; }` |
| `NeedsToActivateForMapConversation` | `public bool NeedsToActivateForMapConversation { get; }` |
| `Handler` | `public IConversationStateHandler Handler { get; set; }` |

## 主要方法

### CreateConversationSentenceIndex
`public int CreateConversationSentenceIndex()`

**用途 / Purpose:** 构建一个新的 「conversation sentence index」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.CreateConversationSentenceIndex();
```

### StartNew
`public void StartNew(int startingToken, bool setActionsInstantly)`

**用途 / Purpose:** 启动「new」流程或状态机。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.StartNew(0, false);
```

### ProcessSentence
`public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.ProcessSentence(conversationSentenceOption);
```

### UpdateCurrentSentenceText
`public void UpdateCurrentSentenceText()`

**用途 / Purpose:** 重新计算并更新 「current sentence text」 的最新表示。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.UpdateCurrentSentenceText();
```

### IsConversationEnded
`public bool IsConversationEnded()`

**用途 / Purpose:** 判断当前对象是否处于 「conversation ended」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.IsConversationEnded();
```

### ClearCurrentOptions
`public void ClearCurrentOptions()`

**用途 / Purpose:** 清空当前对象中的「current options」。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.ClearCurrentOptions();
```

### AddToCurrentOptions
`public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)`

**用途 / Purpose:** 将 「to current options」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.AddToCurrentOptions(text, "example", false, hintText);
```

### GetPlayerSentenceOptions
`public void GetPlayerSentenceOptions()`

**用途 / Purpose:** 读取并返回当前对象中 「player sentence options」 的结果。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.GetPlayerSentenceOptions();
```

### GetStateIndex
`public int GetStateIndex(string str)`

**用途 / Purpose:** 读取并返回当前对象中 「state index」 的结果。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.GetStateIndex("example");
```

### DisableSentenceSort
`public void DisableSentenceSort()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.DisableSentenceSort();
```

### EnableSentenceSort
`public void EnableSentenceSort()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.EnableSentenceSort();
```

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**用途 / Purpose:** 将 「dialog flow」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.AddDialogFlow(dialogFlow, null);
```

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 将 「dialog line multi agent」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.AddDialogLineMultiAgent("example", "example", "example", text, conditionDelegate, consequenceDelegate, 0, 0, 0, null);
```

### IsAgentInConversation
`public bool IsAgentInConversation(IAgent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「agent in conversation」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.IsAgentInConversation(agent);
```

### BeginConversation
`public void BeginConversation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.BeginConversation();
```

### EndConversation
`public void EndConversation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.EndConversation();
```

### DoOption
`public void DoOption(int optionIndex)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.DoOption(0);
```

### DoOption
`public void DoOption(string optionID)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.DoOption("example");
```

### DoConversationContinuedCallback
`public void DoConversationContinuedCallback()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.DoConversationContinuedCallback();
```

### DoOptionContinue
`public void DoOptionContinue()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.DoOptionContinue();
```

### ContinueConversation
`public void ContinueConversation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.ContinueConversation();
```

### SetupAndStartMissionConversation
`public void SetupAndStartMissionConversation(IAgent agent, IAgent mainAgent, bool setActionsInstantly)`

**用途 / Purpose:** 为 「up and start mission conversation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.SetupAndStartMissionConversation(agent, mainAgent, false);
```

### SetupAndStartMissionConversationWithMultipleAgents
`public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent> agents, IAgent mainAgent)`

**用途 / Purpose:** 为 「up and start mission conversation with multiple agents」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.SetupAndStartMissionConversationWithMultipleAgents(agents, mainAgent);
```

### SetupAndStartMapConversation
`public void SetupAndStartMapConversation(MobileParty party, IAgent agent, IAgent mainAgent)`

**用途 / Purpose:** 为 「up and start map conversation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.SetupAndStartMapConversation(party, agent, mainAgent);
```

### AddConversationAgents
`public void AddConversationAgents(IEnumerable<IAgent> agents, bool setActionsInstantly)`

**用途 / Purpose:** 将 「conversation agents」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.AddConversationAgents(agents, false);
```

### RemoveConversationAgent
`public void RemoveConversationAgent(IAgent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 「conversation agent」。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.RemoveConversationAgent(agent);
```

### IsConversationAgent
`public bool IsConversationAgent(IAgent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「conversation agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.IsConversationAgent(agent);
```

### RemoveRelatedLines
`public void RemoveRelatedLines(object o)`

**用途 / Purpose:** 从当前容器或状态中移除 「related lines」。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.RemoveRelatedLines(o);
```

### OnConversationDeactivate
`public void OnConversationDeactivate()`

**用途 / Purpose:** 在 「conversation deactivate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.OnConversationDeactivate();
```

### OnConversationActivate
`public void OnConversationActivate()`

**用途 / Purpose:** 在 「conversation activate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.OnConversationActivate();
```

### FindMatchingTextOrNull
`public TextObject FindMatchingTextOrNull(string id, CharacterObject character)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「matching text or null」。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.FindMatchingTextOrNull("example", character);
```

### GetApplicableTagNames
`public IEnumerable<string> GetApplicableTagNames(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「applicable tag names」 的结果。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.GetApplicableTagNames(character);
```

### IsTagApplicable
`public bool IsTagApplicable(string tagId, CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「tag applicable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
var result = conversationManager.IsTagApplicable("example", character);
```

### OpenMapConversation
`public void OpenMapConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**用途 / Purpose:** 打开「map conversation」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.OpenMapConversation(playerCharacterData, conversationPartnerData);
```

### StartPersuasion
`public static void StartPersuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress = -1f, PersuasionDifficulty difficulty = PersuasionDifficulty.Medium)`

**用途 / Purpose:** 启动「persuasion」流程或状态机。

```csharp
// 静态调用，不需要实例
ConversationManager.StartPersuasion(0, 0, 0, 0, 0, 0, persuasionDifficulty.Medium);
```

### EndPersuasion
`public static void EndPersuasion()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ConversationManager.EndPersuasion();
```

### PersuasionCommitProgress
`public static void PersuasionCommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ConversationManager.PersuasionCommitProgress(persuasionOptionArgs);
```

### Clear
`public static void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 静态调用，不需要实例
ConversationManager.Clear();
```

### GetPersuasionChanceValues
`public void GetPersuasionChanceValues(out float successValue, out float critSuccessValue, out float critFailValue)`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion chance values」 的结果。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.GetPersuasionChanceValues(successValue, critSuccessValue, critFailValue);
```

### GetPersuasionIsActive
`public static bool GetPersuasionIsActive()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion is active」 的结果。

```csharp
// 静态调用，不需要实例
ConversationManager.GetPersuasionIsActive();
```

### GetPersuasionProgressSatisfied
`public static bool GetPersuasionProgressSatisfied()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion progress satisfied」 的结果。

```csharp
// 静态调用，不需要实例
ConversationManager.GetPersuasionProgressSatisfied();
```

### GetPersuasionIsFailure
`public static bool GetPersuasionIsFailure()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion is failure」 的结果。

```csharp
// 静态调用，不需要实例
ConversationManager.GetPersuasionIsFailure();
```

### GetPersuasionProgress
`public static float GetPersuasionProgress()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion progress」 的结果。

```csharp
// 静态调用，不需要实例
ConversationManager.GetPersuasionProgress();
```

### GetPersuasionGoalValue
`public static float GetPersuasionGoalValue()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion goal value」 的结果。

```csharp
// 静态调用，不需要实例
ConversationManager.GetPersuasionGoalValue();
```

### GetPersuasionChosenOptions
`public static IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> GetPersuasionChosenOptions()`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion chosen options」 的结果。

```csharp
// 静态调用，不需要实例
ConversationManager.GetPersuasionChosenOptions();
```

### GetPersuasionChances
`public void GetPersuasionChances(ConversationSentenceOption conversationSentenceOption, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance)`

**用途 / Purpose:** 读取并返回当前对象中 「persuasion chances」 的结果。

```csharp
// 先通过子系统 API 拿到 ConversationManager 实例
ConversationManager conversationManager = ...;
conversationManager.GetPersuasionChances(conversationSentenceOption, successChance, critSuccessChance, critFailChance, failChance);
```

## 使用示例

```csharp
var manager = ConversationManager.Current;
```

## 参见

- [本区域目录](../)