---
title: "CampaignStoryMode"
description: "CampaignStoryMode — class in StoryMode. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# CampaignStoryMode

**Namespace:** `StoryMode`  
**Module:** `StoryMode`  
**Type:** `public class CampaignStoryMode : Campaign`  
**Base:** `Campaign`  
**Source:** `StoryMode/CampaignStoryMode.cs`

## Overview

`CampaignStoryMode` is a named type in the StoryMode namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Campaign, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CampaignStoryMode`.
- **Instance members** (2): `BeforeRegisterTypes`, `DoLoadingForGameType`.
- **Extension points** (2): `BeforeRegisterTypes`, `DoLoadingForGameType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BeforeRegisterTypes` | method (override) | Overrides the base member. Takes 1 argument: `MBObjectManager objectManager`. |
| `DoLoadingForGameType` | method (override) | Overrides the base member. Takes 2 arguments: `GameTypeLoadingStates gameTypeLoadingState`, `out GameTypeLoadingStates nextState`. |
| `CampaignStoryMode` | ctor | Instance entry point. Takes 1 argument: `CampaignGameMode gameMode`. Returns ``. |

- Constructed as `public CampaignStoryMode(CampaignGameMode gameMode)`.

## Usage Example

```csharp
var campaignStoryMode = new CampaignStoryMode(gameMode);
campaignStoryMode.BeforeRegisterTypes(objectManager);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/CampaignStoryMode.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IMapScene](../../campaign/IMapScene/) — `TaleWorlds.CampaignSystem.Map`.

Section: [api/storymode/](../) — the other types in this bucket.
