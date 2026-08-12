---
title: "ConversationManager"
description: "Drives Bannerlord's branching campaign and mission dialog: it indexes conversation lines, evaluates their conditions and consequences, collects and orders the player's reply options, and orchestrates persuasion minigames with one or many agents."
---
# ConversationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationManager`
**Base:** none
**Source:** bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs

It drives the branching dialog system used both on the campaign map and inside missions: it owns the indexed list of `ConversationSentence` lines, evaluates each line's condition and consequence, gathers the player's available replies into an ordered option set, and starts or ends a dialogue with one or more participants. It also aggregates the persuasion subsystem and the coordination of multi-agent conversations.

## Overview

`ConversationManager` is the runtime engine behind every conversation in the game. When a dialog opens, it builds an indexed sentence graph, walks the token machine from the current `ActiveToken`, runs each candidate line's condition delegate to decide whether it is visible, runs its consequence delegate when chosen, and exposes the resulting reply options through `CurOptions`. Map conversations (started from the clan/settlement/encounter menus) and mission conversations (started from an `IAgent` in a scene) both funnel through the same manager, so modders get a single surface to start, inspect, steer, and close a dialogue. It also owns the static persuasion state machine used by `StartPersuasion` / `EndPersuasion` and the tag scoring that selects the best text variation for a given `CharacterObject`.

## Mental Model

Treat `ConversationManager` as a Manager-style extension point, not a type you instantiate. There is exactly one instance per campaign, created and held by `Campaign` and reachable only through `Campaign.Current.ConversationManager`; calling `new ConversationManager()` bypasses the campaign lifecycle and will not be wired to the game state. The manager lives in the *campaign layer* (`TaleWorlds.CampaignSystem`), but it is driven both from campaign code (map conversations) and from mission code (in-scene agent talks). You normally do not replace it — you register dialog content through `CampaignGameStarter`/`DialogFlow`, subscribe to its events to observe a conversation, and call its start/stop and option APIs to script or test a flow. Decide early whether you are a *reader* (querying `CurOptions`/`IsConversationInProgress`), a *driver* (calling `BeginConversation`/`DoOption`/`EndConversation`), or a *content author* (feeding lines via `AddDialogFlow`).

## When to use

- Start or script a conversation programmatically: `SetupAndStartMapConversation`, `OpenMapConversation`, or `SetupAndStartMissionConversation` / `SetupAndStartMissionConversationWithMultipleAgents`.
- Query live dialog state inside a behavior or UI: `CurOptions`, `CurrentSentenceText`, `SpeakerAgent` / `ListenerAgent`, `IsConversationInProgress`, `OneToOneConversationHero`.
- Drive a custom conversation flow in code or tests: `BeginConversation`, `DoOption`, `ContinueConversation`, `EndConversation`.
- Observe conversation progress: subscribe to the public events (`ConversationBegin`, `ConversationEnd`, `ConversationEndOneShot`, `ConversationContinued`, `ConsequenceRunned`, `ConditionRunned`).
- Run a persuasion check: the static `StartPersuasion` / `GetPersuasionChances` / `PersuasionCommitProgress` / `EndPersuasion` family.

## When NOT to use

- Do **not** construct your own instance with `new ConversationManager()`. Always read `Campaign.Current.ConversationManager`; a hand-made instance is not connected to `Campaign`, `CampaignMission`, or the `GameTextManager` and will throw `MBNullParameterException` ("Campaign"/"Game") the moment it tries to render a sentence.
- Do **not** hand-build `ConversationSentence` objects and call internal `AddDialogLine` to author dialog content. Register lines through a `DialogFlow` (via `AddDialogFlow`) or through `CampaignGameStarter` in a `CampaignBehaviorBase`; the fluent builder sets the flags, ids, and game-text variations for you.
- Do **not** mutate `CurOptions` directly to change what the player sees. Populate it through `AddToCurrentOptions` / `ClearCurrentOptions` / `GetPlayerSentenceOptions`, or the displayed list and its internal `SentenceNo` mapping will drift out of sync with `_sentences`.
- For one-off campaign state changes, prefer the dedicated `*Action.Apply` helpers or behavior methods over poking conversation state fields.

## Dependencies

The manager is wired into the surrounding campaign and mission systems; the following existing pages document the types it depends on or hands control to:

- [Campaign-ext bucket index](../) — the API bucket that hosts this class and its conversation siblings.
- [DialogFlow](DialogFlow.md) — the fluent builder you feed into `AddDialogFlow` to register conversation lines.
- [ConversationSentenceOption](ConversationSentenceOption.md) — the per-option record exposed through `CurOptions`.
- [ConversationSentence](ConversationSentence.md) — the underlying indexed line the manager evaluates.
- [CampaignEventDispatcher](CampaignEventDispatcher.md) — receives `OnConversationEnded` / `OnAgentJoinedConversation` callbacks.
- [Persuasion](Persuasion.md) — the persuasion state machine driven by the static `StartPersuasion` family.

## Risk

- **Null game state.** `ProcessSentence` and `UpdateCurrentSentenceText` assert that `Game.Current` and `Campaign.Current` are non-null; rendering a sentence outside an active campaign throws `MBNullParameterException`. Always operate on `Campaign.Current.ConversationManager` while a campaign is loaded.
- **Out-of-range sentence access.** `DoOption(int)` indexes `CurOptions[optionIndex]` and `ProcessSentence` indexes `_sentences[conversationSentenceOption.SentenceNo]`. Passing an invalid index or a stale `ConversationSentenceOption` after the option set was rebuilt throws `MBOutOfRangeException` / `IndexOutOfRangeException`. Prefer `DoOption(string optionID)`, which resolves the index against the *current* `CurOptions`.
- **Save corruption / orphaned agents.** `EndConversation` clears agent flags, fires `OnConversationEnded`, and clears the persuasion state. If you abandon a conversation by dropping references instead of calling `EndConversation`, agents stay flagged as conversation agents and the persuasion singleton can leak into the next dialog. Always pair a start with `EndConversation`.
- **Option/list desync.** Mutating `CurOptions` directly (rather than via the provided methods) corrupts the `SentenceNo` → `_sentences` mapping, so the wrong consequence can run when the player picks an option.
- **Map vs mission path.** `SetupAndStartMapConversation` sets `NeedsToActivateForMapConversation = true` and relies on the map state to call `OnConversationActivate`; mixing it with mission agents (`SetupAndStartMissionConversation`) on the same manager without ending the prior conversation leaves stale `_conversationAgents` and `_mainAgent`.

## Key Properties

| Name | Signature | Notes |
|------|-----------|-------|
| `CurrentSentenceText` | `public string CurrentSentenceText { get; }` | Resolved, animation-tag-stripped text of the active sentence (after tag variation lookup for the 1:1 character). |
| `IsConversationFlowActive` | `public bool IsConversationFlowActive { get; }` | Whether the flow has been activated (`OnConversationActivate`/`OnConversationDeactivate`). |
| `CurOptions` | `public List<ConversationSentenceOption> CurOptions { get; protected set; }` | The player's currently visible reply options. Populate via `AddToCurrentOptions` / `GetPlayerSentenceOptions`. |
| `ConversationAgents` | `public IReadOnlyList<IAgent> ConversationAgents { get; }` | All agents participating in the conversation. |
| `OneToOneConversationAgent` | `public IAgent OneToOneConversationAgent { get; }` | The single participant when exactly one agent is present; `null` for multi-agent talks. |
| `SpeakerAgent` | `public IAgent SpeakerAgent { get; }` | Who is currently speaking (drives the `SPEAKER` text variable). |
| `ListenerAgent` | `public IAgent ListenerAgent { get; }` | Who is currently listening (drives the `LISTENER` text variable). |
| `IsConversationInProgress` | `public bool IsConversationInProgress { get; }` | Set by `BeginConversation` / `SetupConversation`, cleared by `EndConversation`. |
| `OneToOneConversationHero` | `public Hero OneToOneConversationHero { get; }` | The `Hero` of the 1:1 character, or `null`. |
| `OneToOneConversationCharacter` | `public CharacterObject OneToOneConversationCharacter { get; }` | The `CharacterObject` of the 1:1 agent. |
| `ConversationCharacters` | `public IEnumerable<CharacterObject> ConversationCharacters { get; }` | All participant characters. |
| `ConversationParty` | `public MobileParty ConversationParty { get; }` | The party tied to a map conversation (cleared on `EndConversation`). |
| `NeedsToActivateForMapConversation` | `public bool NeedsToActivateForMapConversation { get; }` | Set by `SetupAndStartMapConversation`; the map state uses it to activate the flow. |
| `Handler` | `public IConversationStateHandler Handler { get; set; }` | Optional handler notified on install/activate/deactivate/continue/uninstall. |

## Members by Theme

### Conversation flow & lifecycle

#### StartNew
`public void StartNew(int startingToken, bool setActionsInstantly)`

Resets the used-index set and repeat system, sets `ActiveToken = startingToken` (usually `0`), fires `OnConversationStarted` on the main agent and `OnConversationStart` on each conversation agent, then processes the partner's opening sentence. Call after the agents are set up (see `SetupAndStartMissionConversation`).

#### BeginConversation
`public void BeginConversation()`

Marks `IsConversationInProgress = true`, raises `ConversationSetup` then `ConversationBegin`, and clears `NeedsToActivateForMapConversation`. Called automatically by the `SetupAndStart*` helpers; call it yourself only if you drive a flow manually after `StartNew`.

#### EndConversation
`public void EndConversation()`

The required teardown. Fires `OnConversationEnd` on each mission agent, clears `_conversationParty`, raises `ConversationEndOneShot` (once) and `ConversationEnd`, resets `IsConversationInProgress`, un-flags all agents, restores `CurrentConversationContext = Default`, dispatches `OnConversationEnded`, ends any active persuasion, clears agents/speaker/listener/main, and uninstalls the `Handler`. **Always pair a start with this call.**

#### ContinueConversation
`public void ContinueConversation()`

Advances the partner's side when there is at most one option (`CurOptions.Count <= 1`). Ends the conversation if it is finished or if the listener is the player with no further partner line; otherwise re-runs `ProcessPartnerSentence` and raises `ConversationContinued`.

#### DoOption (by index)
`public void DoOption(int optionIndex)`

Selects `CurOptions[optionIndex]`, runs its sentence via `ProcessSentence`, then either continues immediately (`DoOptionContinue`) or defers it until the flow activates (`_executeDoOptionContinue`).

#### DoOption (by id)
`public void DoOption(string optionID)`

Safer overload: scans the *current* `CurOptions` for a matching `Id` and delegates to `DoOption(int)`. Prefer this over the index overload to avoid stale-index crashes.

#### DoOptionContinue
`public void DoOptionContinue()`

If the conversation has ended on a player line, ends it; otherwise processes the partner's next sentence and raises `ConversationContinued`.

#### DoConversationContinuedCallback
`public void DoConversationContinuedCallback()`

Raises the `ConversationContinued` event. Called by the flow after advancing.

#### ProcessSentence
`public void ProcessSentence(ConversationSentenceOption conversationSentenceOption)`

Core step: resolves the underlying `ConversationSentence`, advances `ActiveToken` to its output token, recomputes speaker/listener agents, renders the text, runs the sentence's consequence, and (in a mission) triggers voice/animation playback. Asserts `Game.Current` is non-null.

#### IsConversationEnded
`public bool IsConversationEnded()`

Returns `true` when `ActiveToken == 4` (the `"close_window"` state index). Used to decide whether to close the dialog.

#### UpdateCurrentSentenceText
`public void UpdateCurrentSentenceText()`

Recomputes `_currentSentenceText` from the active sentence (or the error string when no sentence is active). Asserts `Campaign.Current` is non-null.

#### OnConversationActivate / OnConversationDeactivate
`public void OnConversationActivate()` / `public void OnConversationDeactivate()`

Flip `_isActive` and notify the `Handler`. `OnConversationActivate` also flushes any deferred `DoOptionContinue`. Called by the `SetupAndStart*` helpers once the flow is ready.

### Sentence & option management

#### CreateConversationSentenceIndex
`public int CreateConversationSentenceIndex()`

Returns and increments a monotonically growing index used to tag sentences (`_numConversationSentencesCreated`).

#### ClearCurrentOptions
`public void ClearCurrentOptions()`

Empties `CurOptions` (allocating it if needed).

#### AddToCurrentOptions
`public void AddToCurrentOptions(TextObject text, string id, bool isClickable, TextObject hintText)`

Appends a hand-built reply option to `CurOptions`. Use this only for dynamically injected options; normal dialog content comes from `DialogFlow`.

#### GetPlayerSentenceOptions
`public void GetPlayerSentenceOptions()`

Rebuilds `CurOptions` from the player's available sentences (`onlyPlayer: true`), choosing the option whose sentence declares an explicit listener, and updates speaker/listener agents.

#### GetStateIndex
`public int GetStateIndex(string str)`

Maps a token name to its integer state index, registering a new index for unknown names. Built-in tokens: `start`(0), `event_triggered`(1), `member_chat`(2), `prisoner_chat`(3), `close_window`(4).

#### DisableSentenceSort / EnableSentenceSort
`public void DisableSentenceSort()` / `public void EnableSentenceSort()`

Toggle automatic priority sorting of sentences. Disabling is useful while you are still adding lines; re-enabling re-sorts immediately.

#### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

The supported way to register conversation content. Iterates the flow's `Lines`, creates `ConversationSentence` records (with the correct flags, ids, priority, and token linkage), and registers their game-text variations. Pass `relatedObject` so you can later `RemoveRelatedLines(o)` to unregister.

#### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

Low-level line registration for multi-agent dialogs, letting you pin which agent speaks (`agentIndex`) and who speaks next (`nextAgentIndex`). Returns the created `ConversationSentence`.

#### RemoveRelatedLines
`public void RemoveRelatedLines(object o)`

Removes every sentence whose `RelatedObject == o` (the `relatedObject` you passed to `AddDialogFlow`). Use it to clean up a behavior's dialogs on unload.

### Agents & conversation start

#### SetupAndStartMissionConversation
`public void SetupAndStartMissionConversation(IAgent agent, IAgent mainAgent, bool setActionsInstantly)`

Sets up the conversation with a single `agent` and the `mainAgent` (the player), starts the flow with token `0`, activates it, and calls `BeginConversation`.

#### SetupAndStartMissionConversationWithMultipleAgents
`public void SetupAndStartMissionConversationWithMultipleAgents(IEnumerable<IAgent> agents, IAgent mainAgent)`

Same as above but for several `agents`; agent actions are set instantly.

#### SetupAndStartMapConversation
`public void SetupAndStartMapConversation(MobileParty party, IAgent agent, IAgent mainAgent)`

Binds the conversation to `party`, sets up the single `agent`, starts the flow with token `0`, and sets `NeedsToActivateForMapConversation = true` so the map state activates it.

#### OpenMapConversation
`public void OpenMapConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

Convenience entry: asks the active `MapState` to begin the map conversation, then delegates to `SetupAndStartMapConversation` using a `MapConversationAgent` for both the partner and `CharacterObject.PlayerCharacter`.

#### AddConversationAgents
`public void AddConversationAgents(IEnumerable<IAgent> agents, bool setActionsInstantly)`

Adds each active, not-yet-present agent to the conversation and fires `OnConversationStart`.

#### RemoveConversationAgent
`public void RemoveConversationAgent(IAgent agent)`

Removes a single non-last agent, firing `OnConversationEnd` and un-flagging it. Asserts (FailedAssert) if the agent is inactive, absent, or is the last remaining agent.

#### IsAgentInConversation / IsConversationAgent
`public bool IsAgentInConversation(IAgent agent)` / `public bool IsConversationAgent(IAgent agent)`

Both return whether `agent` is currently in `ConversationAgents`.

### Tags & text variation

#### FindMatchingTextOrNull
`public TextObject FindMatchingTextOrNull(string id, CharacterObject character)`

Looks up the game text `id` and returns the variation whose `ChoiceTag` set best matches `character` (highest `FindMatchingScore`); returns `null` if no variation beats the default.

#### GetApplicableTagNames
`public IEnumerable<string> GetApplicableTagNames(CharacterObject character)`

Yields the `StringId` of every registered `ConversationTag` applicable to `character`.

#### IsTagApplicable
`public bool IsTagApplicable(string tagId, CharacterObject character)`

Returns whether tag `tagId` applies to `character`. A non-existent `tagId` triggers a `FailedAssert` and returns `false`.

### Persuasion (static)

The following are static and operate on a single module-wide persuasion state held by the manager.

#### StartPersuasion
`public static void StartPersuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress = -1f, PersuasionDifficulty difficulty = PersuasionDifficulty.Medium)`

Creates the active persuasion with the given threshold values and difficulty.

#### EndPersuasion
`public static void EndPersuasion()`

Clears the persuasion state. Also called automatically by `EndConversation` when persuasion is active.

#### PersuasionCommitProgress
`public static void PersuasionCommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

Commits the chosen option's progress into the active persuasion.

#### Clear
`public static void Clear()`

Resets the persuasion state (equivalent to `EndPersuasion`).

#### GetPersuasionChanceValues
`public void GetPersuasionChanceValues(out float successValue, out float critSuccessValue, out float critFailValue)`

Returns the active persuasion's success / critical-success / critical-fail thresholds.

#### GetPersuasionChances
`public void GetPersuasionChances(ConversationSentenceOption conversationSentenceOption, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance)`

For an option carrying persuasion data, asks `PersuasionModel.GetChances` (scaled by difficulty). All chances are `0` when the option has no persuasion.

#### GetPersuasionIsActive / GetPersuasionProgressSatisfied / GetPersuasionIsFailure / GetPersuasionProgress / GetPersuasionGoalValue / GetPersuasionChosenOptions
`public static bool GetPersuasionIsActive()` / `public static bool GetPersuasionProgressSatisfied()` / `public static bool GetPersuasionIsFailure()` / `public static float GetPersuasionProgress()` / `public static float GetPersuasionGoalValue()` / `public static IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> GetPersuasionChosenOptions()`

Read-only queries over the active persuasion: whether it exists, whether `Progress >= GoalValue`, whether `Progress < 0` (failure), the raw progress/goal, and the list of options already chosen with their results.

### Public events (hooks)

`ConversationManager` exposes these `public` events you can subscribe to from a `CampaignBehaviorBase` or UI layer:

- `event Action ConversationSetup` — raised by `BeginConversation` before `ConversationBegin`.
- `event Action ConversationBegin` — raised when a conversation begins.
- `event Action ConversationEnd` — raised on `EndConversation`.
- `event Action ConversationEndOneShot` — raised once on the first `EndConversation`, then detached.
- `event Action ConversationContinued` — raised after the flow advances a sentence.
- `event Action<ConversationSentence> ConsequenceRunned` — raised after a sentence's consequence runs.
- `event Action<ConversationSentence> ConditionRunned` — raised after a sentence's condition is evaluated.
- `event Action<ConversationSentence> ClickableConditionRunned` — raised after a sentence's clickable condition is evaluated.

## Usage Example

```csharp
// The manager is a singleton owned by the campaign — never construct it yourself.
ConversationManager conversationManager = Campaign.Current.ConversationManager;

// Start a map conversation with a settlement's notable (party + agent + main agent).
MobileParty party = Settlement.CurrentSettlement.Party;
IAgent partner = new MapConversationAgent(hero.CharacterObject);
IAgent mainAgent = new MapConversationAgent(CharacterObject.PlayerCharacter);
conversationManager.SetupAndStartMapConversation(party, partner, mainAgent);

// While the dialog is live you can read the player's options:
foreach (ConversationSentenceOption option in conversationManager.CurOptions)
{
    // Pick an option by id (safe against index shifts):
    // conversationManager.DoOption(option.Id);
}

// Subscribe to lifecycle events from a behavior:
conversationManager.ConversationEnd += () =>
{
    // Clean up any per-conversation state here.
};

// Always close the conversation you opened:
conversationManager.EndConversation();
```

```csharp
// Persuasion is driven through the static API on the same manager.
ConversationManager.StartPersuasion(
    goalValue: 100f,
    successValue: 70f,
    failValue: 30f,
    criticalSuccessValue: 90f,
    criticalFailValue: 10f,
    initialProgress: -1f,
    difficulty: PersuasionDifficulty.Medium);

if (ConversationManager.GetPersuasionIsActive())
{
    float progress = ConversationManager.GetPersuasionProgress();
    // Commit a chosen option when the player selects it:
    // ConversationManager.PersuasionCommitProgress(chosenArgs);
}

ConversationManager.EndPersuasion();
```

## See Also

- [↑ Parent](../)
- [↔ DialogFlow](DialogFlow.md)
- [↔ ConversationSentenceOption](ConversationSentenceOption.md)
- [↔ ConversationSentence](ConversationSentence.md)
- [↔ CampaignEventDispatcher](CampaignEventDispatcher.md)
- [↔ Persuasion](Persuasion.md)
