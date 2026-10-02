---
title: "ConversationManager"
description: "ConversationManager：TaleWorlds.CampaignSystem.Conversation 的 public 类；公开成员 72 个（方法 46、属性 15、字段 1）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationManager

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ConversationManager`
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Conversation)

## 概述

ConversationManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs。它是一个 public 类，继承链为 ConversationManager。public/protected 成员共 72 个：46 方法、15 属性、1 字段、8 事件、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConversationManager 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.Conversation`），命名空间 `TaleWorlds.CampaignSystem.Conversation`，继承链 ConversationManager。成员构成以方法为主（方法 46/72，属性 15/72），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateConversationSentenceIndex` | `public int CreateConversationSentenceIndex()` | 方法 |
| `CurrentSentenceText` | `public string CurrentSentenceText` | 属性 |
| `IsConversationFlowActive` | `public bool IsConversationFlowActive` | 属性 |
| `ConversationManager` | `public ConversationManager()` | 构造函数 |
| `List` | `public List<ConversationSentenceOption>CurOptions` | 属性 |
| `StartNew` | `public void StartNew(int startingToken, bool setActionsInstantly)` | 方法 |
| `ProcessSentence` | `public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)` | 方法 |
| `UpdateCurrentSentenceText` | `public void UpdateCurrentSentenceText()` | 方法 |
| `IsConversationEnded` | `public bool IsConversationEnded()` | 方法 |
| `ClearCurrentOptions` | `public void ClearCurrentOptions()` | 方法 |
| `AddToCurrentOptions` | `public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)` | 方法 |
| `GetPlayerSentenceOptions` | `public void GetPlayerSentenceOptions()` | 方法 |
| `GetStateIndex` | `public int GetStateIndex(string str)` | 方法 |
| `DisableSentenceSort` | `public void DisableSentenceSort()` | 方法 |
| `EnableSentenceSort` | `public void EnableSentenceSort()` | 方法 |
| `AddDialogFlow` | `public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)` | 方法 |
| `AddDialogLineMultiAgent` | `public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)` | 方法 |
| `Action` | `public event Action<ConversationSentence>ConsequenceRunned;` | 事件 |
| `Action` | `public event Action<ConversationSentence>ConditionRunned;` | 事件 |
| `Action` | `public event Action<ConversationSentence>ClickableConditionRunned;` | 事件 |
| `IReadOnlyList` | `public IReadOnlyList<IAgent>ConversationAgents` | 属性 |
| `OneToOneConversationAgent` | `public IAgent OneToOneConversationAgent` | 属性 |
| `SpeakerAgent` | `public IAgent SpeakerAgent` | 属性 |
| `ListenerAgent` | `public IAgent ListenerAgent` | 属性 |
| `IsConversationInProgress` | `public bool IsConversationInProgress` | 属性 |
| `OneToOneConversationHero` | `public Hero OneToOneConversationHero` | 属性 |
| `OneToOneConversationCharacter` | `public CharacterObject OneToOneConversationCharacter` | 属性 |
| `IEnumerable` | `public IEnumerable<CharacterObject>ConversationCharacters` | 属性 |
| `IsAgentInConversation` | `public bool IsAgentInConversation(IAgent agent)` | 方法 |
| `ConversationParty` | `public MobileParty ConversationParty` | 属性 |
| `NeedsToActivateForMapConversation` | `public bool NeedsToActivateForMapConversation` | 属性 |
| `ConversationSetup;` | `public event Action ConversationSetup;` | 事件 |
| `ConversationBegin;` | `public event Action ConversationBegin;` | 事件 |
| `ConversationEnd;` | `public event Action ConversationEnd;` | 事件 |
| `ConversationEndOneShot;` | `public event Action ConversationEndOneShot;` | 事件 |
| `ConversationContinued;` | `public event Action ConversationContinued;` | 事件 |
| `BeginConversation` | `public void BeginConversation()` | 方法 |
| `EndConversation` | `public void EndConversation()` | 方法 |
| `DoOption` | `public void DoOption(int optionIndex)` | 方法 |
| `DoOption` | `public void DoOption(string optionID)` | 方法 |
| `DoConversationContinuedCallback` | `public void DoConversationContinuedCallback()` | 方法 |
| `DoOptionContinue` | `public void DoOptionContinue()` | 方法 |
| `ContinueConversation` | `public void ContinueConversation()` | 方法 |
| `SetupAndStartMissionConversation` | `public void SetupAndStartMissionConversation(IAgent agent, IAgent mainAgent, bool setActionsInstantly)` | 方法 |
| `SetupAndStartMissionConversationWithMultipleAgents` | `public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent>agents, IAgent mainAgent)` | 方法 |
| `SetupAndStartMapConversation` | `public void SetupAndStartMapConversation(MobileParty party, IAgent agent, IAgent mainAgent)` | 方法 |
| `AddConversationAgents` | `public void AddConversationAgents(IEnumerable<IAgent>agents, bool setActionsInstantly)` | 方法 |
| `RemoveConversationAgent` | `public void RemoveConversationAgent(IAgent agent)` | 方法 |
| `IsConversationAgent` | `public bool IsConversationAgent(IAgent agent)` | 方法 |
| `RemoveRelatedLines` | `public void RemoveRelatedLines(object o)` | 方法 |
| `Handler` | `public IConversationStateHandler Handler` | 属性 |
| `OnConversationDeactivate` | `public void OnConversationDeactivate()` | 方法 |
| `OnConversationActivate` | `public void OnConversationActivate()` | 方法 |
| `FindMatchingTextOrNull` | `public TextObject FindMatchingTextOrNull(string id, CharacterObject character)` | 方法 |
| `IEnumerable` | `public IEnumerable<string>GetApplicableTagNames(CharacterObject character)` | 方法 |
| `IsTagApplicable` | `public bool IsTagApplicable(string tagId, CharacterObject character)` | 方法 |
| `OpenMapConversation` | `public void OpenMapConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)` | 方法 |
| `StartPersuasion` | `public static void StartPersuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress = -1f, PersuasionDifficulty difficulty = PersuasionDifficulty.Medium)` | 方法 |
| `EndPersuasion` | `public static void EndPersuasion()` | 方法 |
| `PersuasionCommitProgress` | `public static void PersuasionCommitProgress(PersuasionOptionArgs persuasionOptionArgs)` | 方法 |
| `Clear` | `public static void Clear()` | 方法 |
| `GetPersuasionChanceValues` | `public void GetPersuasionChanceValues(out float successValue, out float critSuccessValue, out float critFailValue)` | 方法 |
| `GetPersuasionIsActive` | `public static bool GetPersuasionIsActive()` | 方法 |
| `GetPersuasionProgressSatisfied` | `public static bool GetPersuasionProgressSatisfied()` | 方法 |
| `GetPersuasionIsFailure` | `public static bool GetPersuasionIsFailure()` | 方法 |
| `GetPersuasionProgress` | `public static float GetPersuasionProgress()` | 方法 |
| `GetPersuasionGoalValue` | `public static float GetPersuasionGoalValue()` | 方法 |
| `PersuasionOptionResult>>GetPersuasionChosenOptions` | `public static IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>>GetPersuasionChosenOptions()` | 方法 |
| `GetPersuasionChances` | `public void GetPersuasionChances(ConversationSentenceOption conversationSentenceOption, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance)` | 方法 |
| `CharacterObject>>DetailedDebugLog` | `public List<Tuple<string, CharacterObject>>DetailedDebugLog` | 字段 |
| `TaggedString` | `public class TaggedString` | 属性 |
| `TaggedString` | `public class TaggedString` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CampaignMapConversation](../CampaignMapConversation/)
- [同命名空间 ConversationAnimationManager](../ConversationAnimationManager/)
- [同命名空间 ConversationAnimData](../ConversationAnimData/)
- [同命名空间 ConversationCharacterData](../ConversationCharacterData/)
