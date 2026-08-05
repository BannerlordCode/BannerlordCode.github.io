---
title: "EncounterGameMenuModel — encounter menu decision model"
description: "Source-backed v1.4.5 guide to EncounterGameMenuModel acquisition, default menu-id logic, startBattle/joinBattle decisions, PlayerEncounter and siege/town menu call sites, and the boundary between Model calculations and Actions."
---
# EncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`  
**Base:** `MBGameModel<EncounterGameMenuModel>`  
**Source path:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EncounterGameMenuModel.cs`

## One-line responsibility

Choose which campaign game menu id should appear for the player's current encounter, and tell the encounter flow whether battle should be started or joined before that menu opens.

## Mental model

This is a campaign [Model](../GameModels), not an Action. It calculates menu results from current party, settlement, siege, raid, and encounter state. The active implementation is acquired through `Campaign.Current.Models.EncounterGameMenuModel`, which is filled by `GameModels.GetSpecificGameBehaviors()` after models are registered; the sandbox default is [DefaultEncounterGameMenuModel](../DefaultEncounterGameMenuModel), installed by `SandBoxManager` with `gameStarter.AddModel(new DefaultEncounterGameMenuModel())`.

The most important call site is `PlayerEncounter.Init`: it calls `GetEncounterMenu(attackerParty, defenderParty, out startBattle, out joinBattle)`. If `startBattle` is true, `PlayerEncounter.StartBattle()` mutates battle state. If `joinBattle` is true, `PlayerEncounter.JoinBattle(BattleSideEnum.Attacker)` or `PlayerEncounter.JoinBattle(BattleSideEnum.Defender)` attaches the player side. Finally `GameMenu.ActivateGameMenu(encounterMenu)` opens the menu id returned by the model. The model computes the decision; `PlayerEncounter` performs the state change.

## When to use it / when not to

Use this model when your mod changes which menu opens for village raids, town/castle outside menus, siege strategy menus, joining an existing encounter, new party join interruptions, or generic state interruptions.

Do not use it to create or finalize [MapEvent](../MapEvent), move party sides, end sieges, or declare peace. Use [StartBattleAction](../../campaign-ext/StartBattleAction), PlayerEncounter methods, siege systems, or reason-specific campaign [Actions](../../campaign-ext/MakePeaceAction) for mutations. Also do not call it before `Campaign.Current` and `Campaign.Current.Models` exist.

## Dependencies and call chain

| Edge | Source-backed meaning |
|------|-----------------------|
| Acquisition | `Campaign.Current.Models.EncounterGameMenuModel` from [GameModels](../GameModels). |
| Default implementation | [DefaultEncounterGameMenuModel](../DefaultEncounterGameMenuModel) returns real ids such as `camp`, `encounter`, `join_encounter`, `menu_siege_strategies`, `town_outside`, `castle_outside`, `raiding_village`, and `village_loot_complete`. |
| Main consumer | [PlayerEncounter](../PlayerEncounter).`Init` reads menu id and `out` booleans, then starts or joins battle before opening [GameMenu](../GameMenu). |
| Generic-menu consumers | [EncounterGameMenuBehavior](../EncounterGameMenuBehavior), `PlayerTownVisitCampaignBehavior`, `PlayerArmyWaitBehavior`, [Campaign](../Campaign), and [SiegeEventManager](../SiegeEventManager)-adjacent siege behavior use `GetGenericStateMenu()`. |
| UI consumer | `GameMenuVM` calls `IsPlunderMenu(MenuContext.GameMenu.StringId)` for plunder UI state. |
| Save boundary | [CampaignBehaviorBase](../CampaignBehaviorBase).`SyncData` saves behavior state; this Model is recomputed/installed at startup and should not store campaign progress. |

## Crash, lifecycle, thread, and null-reference risks

- `Campaign.Current.Models.EncounterGameMenuModel` can be null if no model was registered before [GameModels](../GameModels) was built. Vanilla sandbox registers the default; total conversion starts must still install one.
- `GetEncounterMenu` can return null or an empty string. `PlayerEncounter.Init` opens a menu only when the result is not null or empty.
- The `out` values have side effects only because `PlayerEncounter` consumes them. Returning `startBattle = true` for a context where no battle can be started can lead to asserts or broken encounter flow.
- `GetGenericStateMenu()` is called from menu ticks and interruption checks. Returning a wrong menu id can bounce the player out of town/siege/wait menus.
- `IsPlunderMenu` receives a menu id string from UI. Treat menu ids as exact engine ids; invented ids will not match game menu registrations.

## Key public members

| Member | Use, side effect, timing |
|--------|--------------------------|
| `GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)` | Main encounter decision. Computes menu id and two decisions. No direct mutation in the model; `PlayerEncounter.Init` mutates if booleans are true. |
| `GetRaidCompleteMenu()` | Menu id after a raid completes. Default returns `village_loot_complete`. |
| `GetNewPartyJoinMenu(MobileParty newParty)` | Optional interruption menu when a new party joins an active encounter. Default returns `encounter` or `join_encounter` for raid cases, otherwise null. |
| `GetGenericStateMenu()` | Recomputes the menu appropriate to the current player state: encounter, siege strategy, army wait, town outside, village wait, and similar interruption states. |
| `IsPlunderMenu(string menuId)` | UI/classification helper. Default returns true only for `raiding_village`. |

## Real C# examples

### Read the active model exactly like call sites do

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public sealed class EncounterMenuProbe
{
    public string GetMainPartyEncounterMenu(PartyBase defenderParty, out bool startBattle, out bool joinBattle)
    {
        EncounterGameMenuModel model = Campaign.Current.Models.EncounterGameMenuModel;
        return model.GetEncounterMenu(PartyBase.MainParty, defenderParty, out startBattle, out joinBattle);
    }
}
```

Only the caller should react to `startBattle` and `joinBattle`. The model method itself only returns a decision.

### Install a replacement while preserving default ids

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;

public sealed class RaidMenuModel : DefaultEncounterGameMenuModel
{
    public override bool IsPlunderMenu(string menuId)
    {
        return menuId == "raiding_village";
    }
}

public sealed class RaidMenuSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        if (gameStarterObject is CampaignGameStarter campaignGameStarter)
        {
            campaignGameStarter.AddModel(new RaidMenuModel());
        }
    }
}
```

The example keeps a vanilla menu id. If you return a custom id, register the matching game menu before any call site tries to open it.

## Navigation

**Parent**

- [Campaign API index](../)
- [Campaign](../Campaign)

**Sibling**

- [DefaultEncounterGameMenuModel](../DefaultEncounterGameMenuModel)
- [EncounterGameMenuBehavior](../EncounterGameMenuBehavior)
- [PlayerEncounter](../PlayerEncounter)
- [GameMenu](../GameMenu)
- [GameModels](../GameModels)

**Related / children**

- [MapEvent](../MapEvent)
- [SiegeEventManager](../SiegeEventManager)
- [StartBattleAction](../../campaign-ext/StartBattleAction)
- [MakePeaceAction](../../campaign-ext/MakePeaceAction)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
