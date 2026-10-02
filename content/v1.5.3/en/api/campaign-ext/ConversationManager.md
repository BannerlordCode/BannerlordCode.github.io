---
title: "ConversationManager"
description: "Auto-generated class reference for ConversationManager."
---
# ConversationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationManager `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs

## Overview

Auto-generated stub for `ConversationManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateConversationSentenceIndex
`public int CreateConversationSentenceIndex()`

### StartNew
`public void StartNew(int startingToken,bool setActionsInstantly)`

### ProcessSentence
`public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)`

### UpdateCurrentSentenceText
`public void UpdateCurrentSentenceText()`

### IsConversationEnded
`public bool IsConversationEnded()`

### ClearCurrentOptions
`public void ClearCurrentOptions()`

### AddToCurrentOptions
`public void AddToCurrentOptions(TextObject text,string id,bool isClickable,TextObject hintText)`

### GetPlayerSentenceOptions
`public void GetPlayerSentenceOptions()`

### GetStateIndex
`public int GetStateIndex(string str)`

### DisableSentenceSort
`public void DisableSentenceSort()`

### EnableSentenceSort
`public void EnableSentenceSort()`

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow,object relatedObject = null)`

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id,string inputToken,string outputToken,TextObject text,ConversationSentence.OnConditionDelegate conditionDelegate,ConversationSentence.OnConsequenceDelegate consequenceDelegate,int agentIndex,int nextAgentIndex,int priority = 100,ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

### IsAgentInConversation
`public bool IsAgentInConversation(IAgent agent)`

### BeginConversation
`public void BeginConversation()`

### EndConversation
`public void EndConversation()`

### DoOption
`public void DoOption(int optionIndex)`

### DoConversationContinuedCallback
`public void DoConversationContinuedCallback()`

### DoOptionContinue
`public void DoOptionContinue()`

### ContinueConversation
`public void ContinueConversation()`

### SetupAndStartMissionConversation
`public void SetupAndStartMissionConversation(IAgent agent,IAgent mainAgent,bool setActionsInstantly)`

### SetupAndStartMissionConversationWithMultipleAgents
`public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent> agents,IAgent mainAgent)`

### SetupAndStartMapConversation
`public void SetupAndStartMapConversation(MobileParty party,IAgent agent,IAgent mainAgent)`

### AddConversationAgents
`public void AddConversationAgents(IEnumerable<IAgent> agents,bool setActionsInstantly)`

### RemoveConversationAgent
`public void RemoveConversationAgent(IAgent agent)`

### IsConversationAgent
`public bool IsConversationAgent(IAgent agent)`

### RemoveRelatedLines
`public void RemoveRelatedLines(object o)`

### OnConversationDeactivate
`public void OnConversationDeactivate()`

### OnConversationActivate
`public void OnConversationActivate()`

### FindMatchingTextOrNull
`public TextObject FindMatchingTextOrNull(string id,CharacterObject character)`

### GetApplicableTagNames
`public IEnumerable<string> GetApplicableTagNames(CharacterObject character)`

### IsTagApplicable
`public bool IsTagApplicable(string tagId,CharacterObject character)`

### OpenMapConversation
`public void OpenMapConversation(ConversationCharacterData playerCharacterData,ConversationCharacterData conversationPartnerData)`

### StartPersuasion
`public static void StartPersuasion(float goalValue,float successValue,float failValue,float criticalSuccessValue,float criticalFailValue,float initialProgress = -1f,PersuasionDifficulty difficulty = PersuasionDifficulty.Medium)`

### EndPersuasion
`public static void EndPersuasion()`

### PersuasionCommitProgress
`public static void PersuasionCommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

### Clear
`public static void Clear()`

### GetPersuasionChanceValues
`public void GetPersuasionChanceValues(out float successValue,out float critSuccessValue,out float critFailValue)`

### GetPersuasionIsActive
`public static bool GetPersuasionIsActive()`

### GetPersuasionProgressSatisfied
`public static bool GetPersuasionProgressSatisfied()`

### GetPersuasionIsFailure
`public static bool GetPersuasionIsFailure()`

### GetPersuasionProgress
`public static float GetPersuasionProgress()`

### GetPersuasionGoalValue
`public static float GetPersuasionGoalValue()`

### GetPersuasionChosenOptions
`public static IEnumerable<Tuple<PersuasionOptionArgs,PersuasionOptionResult>> GetPersuasionChosenOptions()`

### GetPersuasionChances
`public void GetPersuasionChances(ConversationSentenceOption conversationSentenceOption,out float successChance,out float critSuccessChance,out float critFailChance,out float failChance)`

## See Also

- [Section index](../)
