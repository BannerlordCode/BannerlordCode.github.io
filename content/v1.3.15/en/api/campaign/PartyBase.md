---
title: "PartyBase"
description: "Shared campaign party identity and rosters: MobileParty and settlement garrisons share Member/Prison/Item Roster. Not a Mission Team."
---

# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`  
**Base:** `IBattleCombatant` (plus `IRandomOwner`, `IInteractablePoint`)  
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`

## Overview

`PartyBase` is the campaign layer's **sealed data core for one party identity**: troop rosters, prisoners, inventory, map-event side, food, and strength estimates all hang here.

It has exactly two host shapes (chosen at construction):

| Shape | Construction | Flag | Position / name source |
|-------|--------------|------|------------------------|
| Mobile party | `new PartyBase(MobileParty)` | `IsMobile` | `MobileParty.Position` / `Name` |
| Settlement garrison, etc. | `new PartyBase(Settlement)` | `IsSettlement` | `Settlement.Position` / `Name` |

**`MobileParty` is not a subclass of `PartyBase`.** In source, `MobileParty` holds a `Party` property: `Party = new PartyBase(this)`. `Settlement` likewise holds its own `Party`. When APIs say "party" they often mean `PartyBase`, the shared handle for "a map-side combatant blob of people".

## Mental Model

```
Hero ──PartyBelongedTo──► MobileParty ──.Party──► PartyBase (IsMobile)
                                              │
Settlement ──────────────────────────.Party──► PartyBase (IsSettlement)
                                              │
                                    MemberRoster / PrisonRoster / ItemRoster
                                    MapEventSide / EstimatedStrength / Owner
```

| Dimension | Meaning |
|-----------|---------|
| Lifetime | Created with `MobileParty` / `Settlement`; saveable (many `[SaveableProperty]` / `[SaveableField]`) |
| Who creates | Host ctor does `new PartyBase(this)`; `Index` from `Campaign.Current.GeneratePartyId` |
| Layer | Campaign (map), **not** Mission `Team` |
| Player entry | `PartyBase.MainParty` → `Campaign.Current.MainParty.Party` |

### When to use

- Change troops / prisoners / goods: `MemberRoster`, `PrisonRoster`, `ItemRoster`, or `AddMember` / `AddPrisoner`
- Uniform handling of "mobile party + garrison": take `PartyBase`, then branch on `IsMobile` / `IsSettlement`
- Read strength, size limits, starvation, map-event side: `EstimatedStrength`, `PartySizeLimit`, `MapEvent`
- From a `Hero` to rosters: `hero.PartyBelongedTo.Party` or `PartyBase.MainParty`

### When not to use

| Don't | Do instead |
|-------|------------|
| Treat `PartyBase` as a Mission `Team` | In battle use [Team](../../mission/Team) / [Agent](../../mission/Agent) |
| Assume `MobileParty : PartyBase` | Use `mobileParty.Party` for the `PartyBase` |
| Touch `MainParty` with no campaign context | Guard `Campaign.Current != null` first |
| Hard-edit rosters when full side effects matter, bypassing official Actions | Capture / free / kill heroes via `TakePrisonerAction` and related Actions |
| Bulk-edit many Parties inside Mission callbacks and expect instant consistency | Change during battle settlement write-back; see [crash boundaries](../../../architecture/crash-boundaries) |
| Free-standing `new PartyBase` | Must hang on a real `MobileParty` / `Settlement` |

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Upstream host | [MobileParty](../MobileParty) | `MobileParty` property; `IsMobile` |
| Upstream host | [Settlement](../Settlement) | `Settlement` property; `IsSettlement` |
| Characters | [Hero](../Hero) | `Owner`, `LeaderHero`; `Hero.PartyBelongedTo.Party` |
| Rosters | TroopRoster / ItemRoster | Members, prisoners, items (same-module Roster types) |
| Map events | MapEvent / MapEventSide | `MapEvent`, `MapEventSide`, `Side` |
| Models | PartySizeLimitModel, PartyHealingModel, MilitaryPowerModel | Size caps, healing, strength |
| Events | `CampaignEventDispatcher.OnPartyVisibilityChanged` | Visibility changes |
| Contrast | [Team](../../mission/Team) | Mission-only combat side; not saved |

## Risks and crash boundaries

1. **`MainParty` can be null:** when `Campaign.Current == null` (main menu / loading) it returns `null`.
2. **`LeaderHero`:** implemented as `MobileParty?.LeaderHero`. **Settlement parties are often null**; garrison logic must not assume a leader hero.
3. **`MapEventSide` setter:** removes from old side, joins new side, and syncs `AttachedParties`. Careless sets can trip "Double MapEvent" asserts.
4. **Save fields:** Rosters, food, ships, custom owner, etc. are serializable. Changing SaveIds or hand-tearing Roster structure risks bad saves. See [crash boundaries §1](../../../architecture/crash-boundaries).
5. **Cached fields:** `PartySizeLimit`, `EstimatedStrength`, and similar depend on `VersionNo`. Reading after roster edits refreshes; custom caches must invalidate themselves.
6. **Hero prisoner consistency:** source `AfterLoad` has heavy fixups for "PrisonRoster vs `PartyBelongedToAsPrisoner` mismatch". Hard-editing prisoners easily corrupts saves; prefer Actions.
7. **Do not mix with `Team` storage:** `PartyBase` spans saves; `Team`/`Agent` live for one Mission only.

## How to acquire

```csharp
// Player
PartyBase main = PartyBase.MainParty;
// Equivalent:
// PartyBase main = Campaign.Current?.MainParty?.Party;

// From a mobile party
MobileParty party = MobileParty.MainParty;
PartyBase pb = party.Party;

// From a hero
Hero hero = Hero.MainHero;
PartyBase heroParty = hero.PartyBelongedTo?.Party;

// From settlement garrison
Settlement town = Settlement.CurrentSettlement;
PartyBase garrison = town?.Party;

// Uniform handling
void Inspect(PartyBase p)
{
    if (p == null || !p.IsValid)
    {
        return;
    }

    if (p.IsMobile)
    {
        MobileParty mp = p.MobileParty;
        InformationManager.DisplayMessage(new InformationMessage($"Mobile: {mp.Name}"));
    }
    else if (p.IsSettlement)
    {
        Settlement s = p.Settlement;
        InformationManager.DisplayMessage(new InformationMessage($"Settlement: {s.Name}"));
    }
}
```

## Key members

### Identity and host

| Member | Purpose and timing |
|--------|--------------------|
| `IsMobile` / `IsSettlement` | Host shape; mutually exclusive (one side null at construction) |
| `MobileParty` / `Settlement` | Host references |
| `Id` | `MobileParty.StringId` or `Settlement.StringId` |
| `Index` / `IsValid` | In-campaign party number; valid when `Index >= 0` |
| `Name` | Forwards host name |
| `MainParty` | Static; player `PartyBase` |
| `MapFaction` / `Culture` / `Banner` | Faction look and culture (null-safe where needed) |
| `Owner` | `_customOwner` first, else `MobileParty.Owner` or `Settlement.Owner` |
| `LeaderHero` | Mobile parties only |
| `SetCustomOwner` / `SetCustomName` / `SetCustomBanner` | Override display and owner (caravans, etc.) |

### Rosters and counts

| Member | Purpose and timing |
|--------|--------------------|
| `MemberRoster` | Soldiers and accompanying heroes |
| `PrisonRoster` | Prisoners |
| `ItemRoster` | Goods, horses, food items, etc. |
| `AddMember` / `AddMembers` | Add troops; underlying `TroopRoster.AddToCounts` |
| `AddPrisoner` / `AddPrisoners` | Add prisoners |
| `WoundMemberRosterElements` | Raise wounded counts |
| `NumberOfHealthyMembers` / `NumberOfAllMembers` / `NumberOfPrisoners` | Fast stats |
| `PartySizeLimit` / `PrisonerSizeLimit` | Cached via `PartySizeLimitModel` |
| `NumberOfMenWithHorse` | Mounted count, recomputed on roster version |
| `GetNumberOfHealthyMenOfTier` | Healthy men by troop tier |

### Map, events, and strength

| Member | Purpose and timing |
|--------|--------------------|
| `Position` / `IsVisible` / `IsActive` | Forward host |
| `MapEvent` / `MapEventSide` / `Side` / `OpponentSide` | Current map battle affiliation |
| `SiegeEvent` | Siege event forward |
| `EstimatedStrength` / `CalculateCurrentStrength` / `GetCustomStrength` | Military power (Models) |
| `IsStarving` / `RemainingFoodPercentage` / `DaysStarving` | Food state |
| `HealingRateForMemberRegulars` / `...Heroes` | Healing models |
| `IsPartyUnderPlayerCommand` | Via `EncounterModel`, whether player commands |
| `UpdateVisibilityAndInspected` | Fog of war / inspected state |
| `SetVisualAsDirty` / `IsVisualDirty` | Map icon refresh |

## Real examples

### Example 1: Add recruits to the player party

```csharp
if (Campaign.Current == null)
{
    return;
}

PartyBase main = PartyBase.MainParty;
if (main == null)
{
    return;
}

CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>("imperial_recruit");
if (recruit == null)
{
    return;
}

int before = main.NumberOfAllMembers;
main.AddMember(recruit, 5);
int after = main.NumberOfAllMembers;

InformationManager.DisplayMessage(
    new InformationMessage($"Troops {before} → {after} (cap {main.PartySizeLimit})"));
```

### Example 2: From Hero to PartyBase, leader and strength

```csharp
Hero lord = Hero.FindFirst(h => h.IsLord && h.IsAlive && h.PartyBelongedTo != null);
if (lord == null)
{
    return;
}

PartyBase party = lord.PartyBelongedTo.Party;
Hero leader = party.LeaderHero; // usually the party leader
float strength = party.EstimatedStrength;

InformationManager.DisplayMessage(
    new InformationMessage($"{party.Name}: leader {leader?.Name}, estimated strength {strength:0}"));
```

### Example 3: Walk parties the player can command

```csharp
if (Campaign.Current == null)
{
    return;
}

foreach (MobileParty mp in MobileParty.All)
{
    if (!mp.IsActive)
    {
        continue;
    }

    PartyBase pb = mp.Party;
    if (PartyBase.IsPartyUnderPlayerCommand(pb))
    {
        int men = pb.NumberOfHealthyMembers;
        // supply logic against pb.ItemRoster / MemberRoster here
        _ = men;
    }
}
```

### Example 4: Settlement party (garrison) vs mobile party

```csharp
void LogPartyHost(PartyBase party)
{
    if (party.IsMobile)
    {
        InformationManager.DisplayMessage(
            new InformationMessage($"Mobile {party.MobileParty.StringId}, members {party.NumberOfAllMembers}"));
    }
    else if (party.IsSettlement)
    {
        InformationManager.DisplayMessage(
            new InformationMessage($"Settlement {party.Settlement.Name}, garrison roster {party.NumberOfAllMembers}"));
    }
}
```

## Cross-version notes

- `PartyBase` as the shared Mobile/Settlement core is stable across 1.3.x–1.4.5.
- 1.4.x adds/strengthens navy: `Ships`, `FlagShip`, `GetShipsVersion`; old saves get empty ship lists on `OnLoad`.
- `AfterLoad` includes multi-version prisoner and caravan-owner fixups. Prefer official paths when upgrading saves; do not parallel a hand-rolled prisoner state machine.

## ↑ Parent Navigation

- [Campaign API index](./)
- [API root](../)
- [Crash and save boundaries](../../../architecture/crash-boundaries)

## 🔀 Sibling Navigation

| Page | Relationship |
|------|--------------|
| [MobileParty](../MobileParty) | Mobile host; `.Party` → this type |
| [Settlement](../Settlement) | Settlement host; garrison Party |
| [Hero](../Hero) | `PartyBelongedTo` / Owner / Leader |
| [Clan](../Clan) | Clan and party affiliation (campaign) |
| [Campaign](../Campaign) | `MainParty`, GeneratePartyId |

## See also

- [Team](../../mission/Team) — Mission combat side (do not confuse)
- [Save system](../../../architecture/save-system) — Saveable field discipline
- [Campaign guide](../../../guide/campaign-system)
- [SDK overview](../../../architecture/sdk-overview)
