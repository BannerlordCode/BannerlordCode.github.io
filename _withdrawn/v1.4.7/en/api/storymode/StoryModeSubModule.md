---
title: "StoryModeSubModule"
description: "StoryModeSubModule — class in StoryMode. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# StoryModeSubModule

**Namespace:** `StoryMode`  
**Module:** `StoryMode`  
**Type:** `public class StoryModeSubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `StoryMode/StoryModeSubModule.cs`

## Overview

`StoryModeSubModule` is a named type in the StoryMode namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `InitializeGameStarter`, `OnGameEnd`.
- **Extension points** (2): `InitializeGameStarter`, `OnGameEnd`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnGameEnd` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitializeGameStarter` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `IGameStarter gameStarterObject`. |

## Usage Example

```csharp
// StoryModeSubModule exposes no public members in StoryMode.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/StoryModeSubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SecondPhase](../SecondPhase/) — `StoryMode.StoryModePhases`.
- [ThirdPhase](../ThirdPhase/) — `StoryMode.StoryModePhases`.
- [IGameStarter](../../core-extra/IGameStarter/) — `TaleWorlds.Core`.
- [CampaignStoryMode](../CampaignStoryMode/) — `StoryMode`.
- [GameType](../../mission-ext/GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior/) — `StoryMode.GameComponents.CampaignBehaviors`.
- [MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior/) — `StoryMode.GameComponents.CampaignBehaviors`.
- [TutorialPhase](../TutorialPhase/) — `StoryMode.StoryModePhases`.
- [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior/) — `StoryMode.GameComponents.CampaignBehaviors`.

Section: [api/storymode/](../) — the other types in this bucket.
