---
title: "CharacterCreationManager"
description: "CharacterCreationManager — class in TaleWorlds.CampaignSystem.CharacterCreationContent. 28 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CharacterCreationManager`  
**Source:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs`

## Overview

`CharacterCreationManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationManager`.
- **Instance members** (26): `NarrativeMenus`, `CharacterCreationContent`, `CurrentMenu`, `CharacterCreationMenuCount`, `CurrentStage`, `RegisterCharacterCreationContentHandler`, ….
- **Data and constants** (1): `FaceGenHistory`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddNewMenu` | method | Instance entry point. Takes 1 argument: `NarrativeMenu menu`. Adds to the collection or relation this type owns. |
| `AddStage` | method | Instance entry point. Takes 1 argument: `CharacterCreationStageBase stage`. Adds to the collection or relation this type owns. |
| `ApplyFinalEffects` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CharacterCreationContent` | property | Instance entry point `CharacterCreationContent` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterCreationMenuCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentMenu` | property | Instance entry point `NarrativeMenu` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentStage` | property | Instance entry point `CharacterCreationStageBase` property. Read it for current state; a declared setter writes that state in place. |
| `DeleteNarrativeMenuWithId` | method | Instance entry point. Takes 1 argument: `string stringId`. Removes from or clears the collection this type owns. |
| `GetCurrentMenu` | method | Instance entry point. Takes 1 argument: `int index`. Returns `NarrativeMenu`. Read path: prefer it over reaching for the backing store. |
| `GetCurrentMenuOptions` | method | Instance entry point. Takes 1 argument: `int index`. Returns `IEnumerable<NarrativeMenuOption>`. Read path: prefer it over reaching for the backing store. |
| `GetFurthestIndex` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetIndexOfCurrentStage` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNarrativeMenuWithId` | method | Instance entry point. Takes 1 argument: `string stringId`. Returns `NarrativeMenu`. Read path: prefer it over reaching for the backing store. |
| `GetSuitableNarrativeMenuOptions` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<NarrativeMenuOption>`. Read path: prefer it over reaching for the backing store. |
| `GetTotalStagesCount` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GoToStage` | method | Instance entry point. Takes 1 argument: `int stageIndex`. |
| `NarrativeMenus` | property | Instance entry point `MBReadOnlyList<NarrativeMenu>` property. Read it for current state; a declared setter writes that state in place. |
| `NextStage` | method | Instance entry point. Takes no arguments. |
| `OnNarrativeMenuOptionSelected` | method | Instance entry point. Takes 1 argument: `NarrativeMenuOption option`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PreviousStage` | method | Instance entry point. Takes no arguments. |
| `RegisterCharacterCreationContentHandler` | method | Instance entry point. Takes 2 arguments: `ICharacterCreationContentHandler characterCreationContentHandler`, `int priority`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ResetMenuOptions` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ResetNarrativeMenus` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `StartNarrativeStage` | method | Instance entry point. Takes no arguments. |

- Constructed as `public CharacterCreationManager(CharacterCreationState state)`.

4 further public members follow the same patterns.
## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var characterCreationManager = new CharacterCreationManager(state);
// Read the live state through characterCreationManager.NarrativeMenus.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationContent](../CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/campaign/](../) — the other types in this bucket.
