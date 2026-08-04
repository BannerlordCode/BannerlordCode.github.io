---
title: "CraftingHelper"
description: "CraftingHelper is the static crafting-state bridge that finds available heroes, creates a Crafting context, and pushes or replaces a CraftingState."
---
# CraftingHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class CraftingHelper`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/CraftingHelper.cs`

## One-sentence responsibility

It connects the current main party and a selected `CraftingTemplate` to the game-state manager by creating and indexing `Crafting`, then pushing a new `CraftingState` or replacing the logic of an existing one.

## Mental Model

`CraftingHelper` is not the crafting rule model and does not own recipes or materials. `GetAvailableHeroesForCrafting` reads heroes from `PartyBase.MainParty.MemberRoster`. `OpenCrafting` reads the current settlement culture, creates `Crafting`, calls `Init` and `ReIndex`, and then uses `Game.Current.GameStateManager` to create or push a `CraftingState`. With an old state, it calls that state's `InitializeLogic` to replace the current weapon class.

Calling it changes the UI/game-state stack, so it is a command boundary for entering the crafting screen. Crafting rules, stamina, materials, and produced items belong to the crafting system and campaign behavior; this helper is not a shortcut around those rules.

## When to use and when not to use

- Call `OpenCrafting` after a campaign conversation or menu has decided that the crafting screen should open.
- Read `GetAvailableHeroesForCrafting` when the crafting UI needs the heroes currently present in the main party roster.
- Call `ChangeCurrentCraftingTemplate` when changing the template inside an existing `CraftingState` so the helper can preserve the active state boundary.
- Do not call it without an active `Game`, a registered template, or the expected UI/game-state lifecycle. Do not use it for crafting rules, stamina, or save data.

## Dependencies

```text
PartyBase.MainParty.MemberRoster
  -> GetAvailableHeroesForCrafting
CraftingTemplate + Settlement.CurrentSettlement
  -> Crafting.Init / ReIndex
  -> Game.Current.GameStateManager -> CraftingState
```

- State entry: [CraftingState](../../campaign/CraftingState) and [CraftingTemplate](../../core-extra/CraftingTemplate).
- Game state owner: [Game](../../core-extra/Game); it owns `GameStateManager`, not a persistent `Campaign` field.
- Campaign entities: [PartyBase](../../campaign/PartyBase), [Hero](../../campaign/Hero), and [Settlement](../../campaign/Settlement).

## Public members

| Member | Purpose and side effect |
|---|---|
| `GetAvailableHeroesForCrafting` | Filters the main-party roster to heroes and returns the current selectable sequence; the result changes with the roster. |
| `ChangeCurrentCraftingTemplate` | Reads the active `CraftingState` from `GameStateManager.ActiveState`, then calls `OpenCrafting` to replace its crafting logic. |
| `OpenCrafting` | Creates and initializes `Crafting` with the template and current settlement culture; pushes a new state when no old state is supplied, otherwise calls `InitializeLogic` with `isReplacingWeaponClass: true`. |

## Real example

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

if (Game.Current != null && CraftingTemplate.All.Count > 0)
{
    CraftingTemplate template = CraftingTemplate.All.First();
    CraftingHelper.OpenCrafting(template);
}
```

The v1.4.5 `CraftingCampaignBehavior` also uses the registered template collection as its entry point. A mod should require a template and a valid game state before opening the screen, then let the crafting system initialize its own indexes and rules.

## Risks and save boundaries

- `OpenCrafting` pushes or resets `CraftingState`; calling it repeatedly from one event can stack UI states or discard the previous logic.
- Do not index `CraftingTemplate.All` when it is empty. Templates must already be registered in the Core object collection.
- When no settlement is current, the source creates a new `CultureObject`, but that does not guarantee that every crafting UI path is valid outside its intended menu phase.
- `GetAvailableHeroesForCrafting` is a current roster query, not a save field. Hero, roster, and crafting persistence belong to their own systems.

## Version note

In v1.4.5, `OpenCrafting` explicitly calls `Init` and `ReIndex` after creating `Crafting`, and uses `isReplacingWeaponClass: true` for an existing `CraftingState`. Do not copy a different version's state-switch assumptions.

## Navigation

- [↑ API system index](../)
- [↔ DialogHelper](../DialogHelper)
- [Related: CraftingState](../../campaign/CraftingState)
- [Related: CraftingTemplate](../../core-extra/CraftingTemplate)
