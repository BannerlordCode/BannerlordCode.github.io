---
title: "ConversationManager"
description: "ConversationManager: a public class in TaleWorlds.CampaignSystem.Conversation; 72 exposed members (46 methods, 15 properties, 1 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationManager

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ConversationManager`
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Conversation)

## Overview

ConversationManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs. It is a public class; the inheritance chain is ConversationManager. It exposes 72 public/protected members: 46 methods, 15 properties, 1 fields, 8 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationManager lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Conversation`), namespace `TaleWorlds.CampaignSystem.Conversation`, inheritance chain ConversationManager. The surface is method-led (methods 46/72, properties 15/72), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateConversationSentenceIndex` | `public int CreateConversationSentenceIndex()` | method |
| `CurrentSentenceText` | `public string CurrentSentenceText` | property |
| `IsConversationFlowActive` | `public bool IsConversationFlowActive` | property |
| `ConversationManager` | `public ConversationManager()` | constructor |
| `List` | `public List<ConversationSentenceOption>CurOptions` | property |
| `StartNew` | `public void StartNew(int startingToken, bool setActionsInstantly)` | method |
| `ProcessSentence` | `public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)` | method |
| `UpdateCurrentSentenceText` | `public void UpdateCurrentSentenceText()` | method |
| `IsConversationEnded` | `public bool IsConversationEnded()` | method |
| `ClearCurrentOptions` | `public void ClearCurrentOptions()` | method |
| `AddToCurrentOptions` | `public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)` | method |
| `GetPlayerSentenceOptions` | `public void GetPlayerSentenceOptions()` | method |
| `GetStateIndex` | `public int GetStateIndex(string str)` | method |
| `DisableSentenceSort` | `public void DisableSentenceSort()` | method |
| `EnableSentenceSort` | `public void EnableSentenceSort()` | method |
| `AddDialogFlow` | `public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)` | method |
| `AddDialogLineMultiAgent` | `public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)` | method |
| `Action` | `public event Action<ConversationSentence>ConsequenceRunned;` | event |
| `Action` | `public event Action<ConversationSentence>ConditionRunned;` | event |
| `Action` | `public event Action<ConversationSentence>ClickableConditionRunned;` | event |
| `IReadOnlyList` | `public IReadOnlyList<IAgent>ConversationAgents` | property |
| `OneToOneConversationAgent` | `public IAgent OneToOneConversationAgent` | property |
| `SpeakerAgent` | `public IAgent SpeakerAgent` | property |
| `ListenerAgent` | `public IAgent ListenerAgent` | property |
| `IsConversationInProgress` | `public bool IsConversationInProgress` | property |
| `OneToOneConversationHero` | `public Hero OneToOneConversationHero` | property |
| `OneToOneConversationCharacter` | `public CharacterObject OneToOneConversationCharacter` | property |
| `IEnumerable` | `public IEnumerable<CharacterObject>ConversationCharacters` | property |
| `IsAgentInConversation` | `public bool IsAgentInConversation(IAgent agent)` | method |
| `ConversationParty` | `public MobileParty ConversationParty` | property |
| `NeedsToActivateForMapConversation` | `public bool NeedsToActivateForMapConversation` | property |
| `ConversationSetup;` | `public event Action ConversationSetup;` | event |
| `ConversationBegin;` | `public event Action ConversationBegin;` | event |
| `ConversationEnd;` | `public event Action ConversationEnd;` | event |
| `ConversationEndOneShot;` | `public event Action ConversationEndOneShot;` | event |
| `ConversationContinued;` | `public event Action ConversationContinued;` | event |
| `BeginConversation` | `public void BeginConversation()` | method |
| `EndConversation` | `public void EndConversation()` | method |
| `DoOption` | `public void DoOption(int optionIndex)` | method |
| `DoOption` | `public void DoOption(string optionID)` | method |
| `DoConversationContinuedCallback` | `public void DoConversationContinuedCallback()` | method |
| `DoOptionContinue` | `public void DoOptionContinue()` | method |
| `ContinueConversation` | `public void ContinueConversation()` | method |
| `SetupAndStartMissionConversation` | `public void SetupAndStartMissionConversation(IAgent agent, IAgent mainAgent, bool setActionsInstantly)` | method |
| `SetupAndStartMissionConversationWithMultipleAgents` | `public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent>agents, IAgent mainAgent)` | method |
| `SetupAndStartMapConversation` | `public void SetupAndStartMapConversation(MobileParty party, IAgent agent, IAgent mainAgent)` | method |
| `AddConversationAgents` | `public void AddConversationAgents(IEnumerable<IAgent>agents, bool setActionsInstantly)` | method |
| `RemoveConversationAgent` | `public void RemoveConversationAgent(IAgent agent)` | method |
| `IsConversationAgent` | `public bool IsConversationAgent(IAgent agent)` | method |
| `RemoveRelatedLines` | `public void RemoveRelatedLines(object o)` | method |
| `Handler` | `public IConversationStateHandler Handler` | property |
| `OnConversationDeactivate` | `public void OnConversationDeactivate()` | method |
| `OnConversationActivate` | `public void OnConversationActivate()` | method |
| `FindMatchingTextOrNull` | `public TextObject FindMatchingTextOrNull(string id, CharacterObject character)` | method |
| `IEnumerable` | `public IEnumerable<string>GetApplicableTagNames(CharacterObject character)` | method |
| `IsTagApplicable` | `public bool IsTagApplicable(string tagId, CharacterObject character)` | method |
| `OpenMapConversation` | `public void OpenMapConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)` | method |
| `StartPersuasion` | `public static void StartPersuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress = -1f, PersuasionDifficulty difficulty = PersuasionDifficulty.Medium)` | method |
| `EndPersuasion` | `public static void EndPersuasion()` | method |
| `PersuasionCommitProgress` | `public static void PersuasionCommitProgress(PersuasionOptionArgs persuasionOptionArgs)` | method |
| `Clear` | `public static void Clear()` | method |
| `GetPersuasionChanceValues` | `public void GetPersuasionChanceValues(out float successValue, out float critSuccessValue, out float critFailValue)` | method |
| `GetPersuasionIsActive` | `public static bool GetPersuasionIsActive()` | method |
| `GetPersuasionProgressSatisfied` | `public static bool GetPersuasionProgressSatisfied()` | method |
| `GetPersuasionIsFailure` | `public static bool GetPersuasionIsFailure()` | method |
| `GetPersuasionProgress` | `public static float GetPersuasionProgress()` | method |
| `GetPersuasionGoalValue` | `public static float GetPersuasionGoalValue()` | method |
| `PersuasionOptionResult>>GetPersuasionChosenOptions` | `public static IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>>GetPersuasionChosenOptions()` | method |
| `GetPersuasionChances` | `public void GetPersuasionChances(ConversationSentenceOption conversationSentenceOption, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance)` | method |
| `CharacterObject>>DetailedDebugLog` | `public List<Tuple<string, CharacterObject>>DetailedDebugLog` | field |
| `TaggedString` | `public class TaggedString` | property |
| `TaggedString` | `public class TaggedString` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CampaignMapConversation](../CampaignMapConversation/)
- [same namespace ConversationAnimationManager](../ConversationAnimationManager/)
- [same namespace ConversationAnimData](../ConversationAnimData/)
- [same namespace ConversationCharacterData](../ConversationCharacterData/)
