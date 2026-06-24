<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs`

## Overview

`ConversationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ConversationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Key Methods

### CreateConversationSentenceIndex
`public int CreateConversationSentenceIndex()`

**Purpose:** Creates a new `conversation sentence index` instance or object.

### StartNew
`public void StartNew(int startingToken, bool setActionsInstantly)`

**Purpose:** Handles logic related to `start new`.

### ProcessSentence
`public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)`

**Purpose:** Handles logic related to `process sentence`.

### UpdateCurrentSentenceText
`public void UpdateCurrentSentenceText()`

**Purpose:** Updates the state or data of `current sentence text`.

### IsConversationEnded
`public bool IsConversationEnded()`

**Purpose:** Handles logic related to `is conversation ended`.

### ClearCurrentOptions
`public void ClearCurrentOptions()`

**Purpose:** Handles logic related to `clear current options`.

### AddToCurrentOptions
`public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)`

**Purpose:** Adds `to current options` to the current collection or state.

### GetPlayerSentenceOptions
`public void GetPlayerSentenceOptions()`

**Purpose:** Gets the current value of `player sentence options`.

### GetStateIndex
`public int GetStateIndex(string str)`

**Purpose:** Gets the current value of `state index`.

### DisableSentenceSort
`public void DisableSentenceSort()`

**Purpose:** Handles logic related to `disable sentence sort`.

### EnableSentenceSort
`public void EnableSentenceSort()`

**Purpose:** Handles logic related to `enable sentence sort`.

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**Purpose:** Adds `dialog flow` to the current collection or state.

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**Purpose:** Adds `dialog line multi agent` to the current collection or state.

### IsAgentInConversation
`public bool IsAgentInConversation(IAgent agent)`

**Purpose:** Handles logic related to `is agent in conversation`.

### BeginConversation
`public void BeginConversation()`

**Purpose:** Handles logic related to `begin conversation`.

### EndConversation
`public void EndConversation()`

**Purpose:** Handles logic related to `end conversation`.

### DoOption
`public void DoOption(int optionIndex)`

**Purpose:** Handles logic related to `do option`.

### DoOption
`public void DoOption(string optionID)`

**Purpose:** Handles logic related to `do option`.

### DoConversationContinuedCallback
`public void DoConversationContinuedCallback()`

**Purpose:** Handles logic related to `do conversation continued callback`.

### DoOptionContinue
`public void DoOptionContinue()`

**Purpose:** Handles logic related to `do option continue`.

### ContinueConversation
`public void ContinueConversation()`

**Purpose:** Handles logic related to `continue conversation`.

### SetupAndStartMissionConversation
`public void SetupAndStartMissionConversation(IAgent agent, IAgent mainAgent, bool setActionsInstantly)`

**Purpose:** Sets the value or state of `up and start mission conversation`.

### SetupAndStartMissionConversationWithMultipleAgents
`public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent> agents, IAgent mainAgent)`

**Purpose:** Sets the value or state of `up and start mission conversation with multiple agents`.

### SetupAndStartMapConversation
`public void SetupAndStartMapConversation(MobileParty party, IAgent agent, IAgent mainAgent)`

**Purpose:** Sets the value or state of `up and start map conversation`.

### AddConversationAgents
`public void AddConversationAgents(IEnumerable<IAgent> agents, bool setActionsInstantly)`

**Purpose:** Adds `conversation agents` to the current collection or state.

### RemoveConversationAgent
`public void RemoveConversationAgent(IAgent agent)`

**Purpose:** Removes `conversation agent` from the current collection or state.

### IsConversationAgent
`public bool IsConversationAgent(IAgent agent)`

**Purpose:** Handles logic related to `is conversation agent`.

### RemoveRelatedLines
`public void RemoveRelatedLines(object o)`

**Purpose:** Removes `related lines` from the current collection or state.

### OnConversationDeactivate
`public void OnConversationDeactivate()`

**Purpose:** Called when the `conversation deactivate` event is raised.

### OnConversationActivate
`public void OnConversationActivate()`

**Purpose:** Called when the `conversation activate` event is raised.

### FindMatchingTextOrNull
`public TextObject FindMatchingTextOrNull(string id, CharacterObject character)`

**Purpose:** Handles logic related to `find matching text or null`.

### GetApplicableTagNames
`public IEnumerable<string> GetApplicableTagNames(CharacterObject character)`

**Purpose:** Gets the current value of `applicable tag names`.

### IsTagApplicable
`public bool IsTagApplicable(string tagId, CharacterObject character)`

**Purpose:** Handles logic related to `is tag applicable`.

### OpenMapConversation
`public void OpenMapConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**Purpose:** Handles logic related to `open map conversation`.

### StartPersuasion
`public static void StartPersuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress = -1f, PersuasionDifficulty difficulty = PersuasionDifficulty.Medium)`

**Purpose:** Handles logic related to `start persuasion`.

### EndPersuasion
`public static void EndPersuasion()`

**Purpose:** Handles logic related to `end persuasion`.

### PersuasionCommitProgress
`public static void PersuasionCommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

**Purpose:** Handles logic related to `persuasion commit progress`.

### Clear
`public static void Clear()`

**Purpose:** Handles logic related to `clear`.

### GetPersuasionChanceValues
`public void GetPersuasionChanceValues(out float successValue, out float critSuccessValue, out float critFailValue)`

**Purpose:** Gets the current value of `persuasion chance values`.

### GetPersuasionIsActive
`public static bool GetPersuasionIsActive()`

**Purpose:** Gets the current value of `persuasion is active`.

### GetPersuasionProgressSatisfied
`public static bool GetPersuasionProgressSatisfied()`

**Purpose:** Gets the current value of `persuasion progress satisfied`.

### GetPersuasionIsFailure
`public static bool GetPersuasionIsFailure()`

**Purpose:** Gets the current value of `persuasion is failure`.

### GetPersuasionProgress
`public static float GetPersuasionProgress()`

**Purpose:** Gets the current value of `persuasion progress`.

### GetPersuasionGoalValue
`public static float GetPersuasionGoalValue()`

**Purpose:** Gets the current value of `persuasion goal value`.

### GetPersuasionChosenOptions
`public static IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> GetPersuasionChosenOptions()`

**Purpose:** Gets the current value of `persuasion chosen options`.

### GetPersuasionChances
`public void GetPersuasionChances(ConversationSentenceOption conversationSentenceOption, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance)`

**Purpose:** Gets the current value of `persuasion chances`.

## Usage Example

```csharp
var manager = ConversationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)