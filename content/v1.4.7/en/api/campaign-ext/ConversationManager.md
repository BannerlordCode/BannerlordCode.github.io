---
title: "ConversationManager"
description: "ConversationManager — class in TaleWorlds.CampaignSystem.Conversation. 74 public members (10 static)."
---

<!-- v147-skeleton -->
# ConversationManager

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ConversationManager`  
**Source:** `TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs`

## Overview

`ConversationManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ConversationManager`.
- **Static entry points** (10): `StartPersuasion`, `EndPersuasion`, `PersuasionCommitProgress`, `Clear`, `GetPersuasionIsActive`, `GetPersuasionProgressSatisfied`, ….
- **Instance members** (50): `CreateConversationSentenceIndex`, `CurrentSentenceText`, `IsConversationFlowActive`, `CurOptions`, `StartNew`, `ProcessSentence`, ….
- **Data and constants** (13): `ConsequenceRunned`, `ConditionRunned`, `ClickableConditionRunned`, `ConversationSetup`, `ConversationBegin`, `ConversationEnd`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Clear` | method (static) | Static entry point. Takes no arguments. |
| `EndPersuasion` | method (static) | Static entry point. Takes no arguments. |
| `GetPersuasionChosenOptions` | method (static) | Static entry point. Takes no arguments. Returns `IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>>`. Read path: prefer it over reaching for the backing store. |
| `GetPersuasionGoalValue` | method (static) | Static entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetPersuasionIsActive` | method (static) | Static entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetPersuasionIsFailure` | method (static) | Static entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetPersuasionProgress` | method (static) | Static entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetPersuasionProgressSatisfied` | method (static) | Static entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `PersuasionCommitProgress` | method (static) | Static entry point. Takes 1 argument: `PersuasionOptionArgs persuasionOptionArgs`. |
| `StartPersuasion` | method (static) | Static entry point. Takes 7 arguments: `float goalValue`, `float successValue`, `float failValue`, `float criticalSuccessValue`, …. |
| `AddConversationAgents` | method | Instance entry point. Takes 2 arguments: `IEnumerable<IAgent> agents`, `bool setActionsInstantly`. Adds to the collection or relation this type owns. |
| `AddDialogFlow` | method | Instance entry point. Takes 2 arguments: `DialogFlow dialogFlow`, `object relatedObject`. Adds to the collection or relation this type owns. |
| `AddDialogLineMultiAgent` | method | Instance entry point. Takes 10 arguments: `string id`, `string inputToken`, `string outputToken`, `TextObject text`, …. Returns `ConversationSentence`. Adds to the collection or relation this type owns. |
| `AddToCurrentOptions` | method | Instance entry point. Takes 4 arguments: `TextObject text`, `string id`, `bool isClickable`, `TextObject hintText`. Adds to the collection or relation this type owns. |
| `BeginConversation` | method | Instance entry point. Takes no arguments. |
| `ClearCurrentOptions` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ContinueConversation` | method | Instance entry point. Takes no arguments. |
| `ConversationAgents` | property | Instance entry point `IReadOnlyList<IAgent>` property. Read it for current state; a declared setter writes that state in place. |
| `ConversationCharacters` | property | Instance entry point `IEnumerable<CharacterObject>` property. Read it for current state; a declared setter writes that state in place. |
| `ConversationParty` | property | Instance entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `CreateConversationSentenceIndex` | method | Instance entry point. Takes no arguments. Returns `int`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CurOptions` | property | Instance entry point `List<ConversationSentenceOption>` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentSentenceText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `DisableSentenceSort` | method | Instance entry point. Takes no arguments. |

- Constructed as `public ConversationManager()`.

50 further public members follow the same patterns.
## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var conversationManager = ConversationManager.GetPersuasionIsActive();
ConversationManager.StartPersuasion(goalValue, successValue, failValue, criticalSuccessValue, criticalFailValue, initialProgress, difficulty);
ConversationManager.EndPersuasion();
// Read the live state through conversationManager.CurrentSentenceText.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Persuasion](../Persuasion/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [ConversationAnimationManager](../ConversationAnimationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [GameTextManager](../../core-extra/GameTextManager/) — `TaleWorlds.Core`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [ConversationHelper](../ConversationHelper/) — `TaleWorlds.CampaignSystem.Conversation`.
- [ConversationCharacterData](../ConversationCharacterData/) — `TaleWorlds.CampaignSystem.Conversation`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [PersuasionDifficulty](../PersuasionDifficulty/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [PersuasionOptionArgs](../PersuasionOptionArgs/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
