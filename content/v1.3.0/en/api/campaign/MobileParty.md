---
title: "MobileParty"
description: "A moving party on the campaign map: rosters, movement orders, AI state, roles, food, morale, visibility, ships and party components."
---

# MobileParty

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `CampaignObjectBase`
**File:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

## Overview

`MobileParty` is the campaign map's **moving** party: a caravan, a lord's war party, a villager party, a garrison, a militia, a patrol or a bandit band. It is not a roster — the roster lives on `MobileParty.Party`, a [PartyBase](../PartyBase). `MobileParty` adds everything that only makes sense for something that moves: an order, a path, an AI state, a position, roles, morale, food and visibility.

Its structure is three layers:

| Layer | Members | Lifetime |
|-------|---------|----------|
| Identity | `Name`, `Id`, `Index`, `PartyComponent`, `IsMainParty` | Saveable |
| Roster | via `.Party`: `MemberRoster`, `PrisonRoster`, `ItemRoster`, `AddMember` | Saveable |
| Movement | `SetMove*` orders, `Ai`, `Objective`, `Position`, `Speed`, `ShortTermBehavior` | Mostly transient, recomputed |

A `PartyComponent` classifies the party: `LordPartyComponent`, `CaravanPartyComponent`, `VillagerPartyComponent`, `GarrisonPartyComponent`, `MilitiaPartyComponent`, `PatrolPartyComponent`, `WarPartyComponent`, `BanditPartyComponent`. The `IsLordParty` / `IsCaravan` / `IsVillager` / `IsGarrison` / `IsMilitia` / `IsPatrolParty` / `IsBandit` / `IsCustomParty` flags are derived from it.

## Mental Model

```
MobileParty (CampaignObjectBase)
 ├─ .Party ──► PartyBase (IsMobile)  ──► MemberRoster / PrisonRoster / ItemRoster
 ├─ PartyComponent ──► Lord / Caravan / Villager / Garrison / Militia / Patrol / War / Bandit
 ├─ LeaderHero / Owner / ActualClan / MapFaction
 ├─ EffectiveScout / Quartermaster / Engineer / Surgeon   (role holders)
 ├─ Ai (MobilePartyAi) ──► Objective, ShortTermBehavior, TargetSettlement
 ├─ SetMove* orders ──► move mode, target, path
 └─ Position / Speed / Morale / Food / IsVisible / IsInspected
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    MobileParty.All populated; MainParty resolved
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.HourlyTickPartyEvent / DailyTickPartyEvent / AiHourlyTickEvent
HourlyTick (party subject supplied)
    party.Speed, party.Food, party.Morale read
    party.SetMoveGoToSettlement(...) / SetMoveHold() issue an order
    the AI re-plans from the order on the next AI tick
```

Traps that bite in practice:

- **`MobileParty` has no `AddMember`.** Adding troops goes through `party.Party.AddMember(...)` or `party.AddElementToMemberRoster(...)`. `AddPrisoner` exists on both. This asymmetry is the single most common party-code compile error.
- **Movement orders are goals, not paths.** `SetMoveGoToSettlement` sets an objective; the AI decides the route. Do not read `Position` immediately afterwards and assume the party moved.
- **`Position` is `CampaignVec2`, not `Vec2`.** `GetPosition2D()` returns `Vec2`. Mixing them breaks distance calculations silently.
- **Read `Party.MemberRoster`, not a cached copy.** Roster objects mutate in place; a cached `TroopRosterElement` count goes stale after the next daily tick.
- **Attached parties are not separate armies.** `AttachedTo` and `AttachedParties` form a tree. Summing `Party.EstimatedStrength` across attached parties double counts, because attached troops are already in the host's roster.
- **`SetPartyComponent` re-derives every `Is*Party` flag.** Swapping components at runtime turns a lord party into a caravan and invalidates AI decisions that were made under the old classification.
- **`CreateParty` needs a component argument.** A party created with `null` has no classification, no roster behaviour and no AI defaults.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Base | `CampaignObjectBase` → `MBObjectBase` | Saveable identity |
| Rosters | [PartyBase](../PartyBase) | `Party` holds `MemberRoster` / `PrisonRoster` / `ItemRoster` |
| People | [Hero](../Hero) | `LeaderHero`, `Owner`, role holders, `PartyBelongedTo` |
| Politics | [Clan](../Clan), [Kingdom](../Kingdom) | `ActualClan`, `MapFaction` |
| Places | [Settlement](../Settlement) | `CurrentSettlement`, `HomeSettlement`, `TargetSettlement`, `BesiegedSettlement` |
| AI | `MobilePartyAi`, `PartyThinkParams`, `AiBehavior` | `Ai`, `ShortTermBehavior`, `Objective` |
| Map scene | [MobilePartyVisual](../../campaign-ext/MobilePartyVisual) | Visual counterpart |
| Events | [CampaignEvents](../CampaignEvents) | `HourlyTickPartyEvent`, `DailyTickPartyEvent`, `MobilePartyDestroyed` |

## Key members

### Identity

#### `public static MBReadOnlyList<MobileParty> All` (and the typed partitions)

`All` plus `AllCaravanParties`, `AllPatrolParties`, `AllBanditParties`, `AllLordParties`, `AllGarrisonParties`, `AllMilitiaParties`, `AllVillagerParties`, `AllCustomParties`, `AllPartiesWithoutPartyComponent`. Live views maintained by the campaign.

#### `public static MobileParty MainParty`

The player's party. Null in editor and menu contexts.

#### `public static MobileParty CreateParty(string stringId, PartyComponent component)`

Engine factory. Returns a registered party. `new MobileParty()` produces an unregistered object that never appears in `All` and is never saved.

#### `public bool IsMainParty`

Instance view of the above; safe on any party.

#### `public PartyComponent PartyComponent` / `public void SetPartyComponent(PartyComponent partyComponent, bool firstTimePartyComponentCreation = true)` / `public void UpdatePartyComponentFlags()`

Classification. `SetPartyComponent` re-derives every `Is*Party` flag and, on first creation, initialises the component's party.

### Roster access

#### `public PartyBase Party { get; private set; }`

The roster object. All troop, prisoner and item mutation happens here.

#### `public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)` / `public int AddPrisoner(CharacterObject element, int numberToAdd)`

Direct roster mutation on the party. Returns the amount actually added (clamped by size limits). Prefer these over hand-editing the roster when you want the size-limit rules respected.

#### `public MBReadOnlyList<Ship> Ships` / `public bool HasNavalNavigationCapability` / `public bool HasLandNavigationCapability`

Naval state. Naval parties have a different speed model, a different visual and different AI.

### Movement orders

#### `public void SetMoveHold()`

Cancel all movement. The party waits where it is.

#### `public void SetMoveGoToSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingThePort)`

Go to a settlement. `navigationType` is `Default`, `Naval` or `All`; `isTargetingThePort` matters for naval parties.

#### `public void SetMoveGoToPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)`

Go to a map coordinate.

#### `public void SetMoveRaidSettlement(Settlement, MobileParty.NavigationType)` / `SetMoveBesiegeSettlement(...)` / `SetMoveDefendSettlement(Settlement, bool isTargetingPort, MobileParty.NavigationType)`

Aggressive and defensive orders. These are the orders the AI picks from, so scripted parties using them participate in raid/siege logic rather than looking like independent agents.

#### `public void SetMoveEngageParty(MobileParty party, MobileParty.NavigationType)` / `SetMoveGoAroundParty(...)` / `SetMoveEscortParty(...)` / `SetMovePatrolAroundPoint(...)` / `SetMovePatrolAroundSettlement(...)` / `SetMoveGoToInteractablePoint(IInteractablePoint, MobileParty.NavigationType)` / `SetMoveToNearestLand(Settlement)`

The remaining order vocabulary. Between them they cover every `AiSet` the campaign ships.

#### `public void SetTargetSettlement(Settlement settlement, bool isTargetingPort)`

Sets the long-term target without issuing a movement order. Use it when the order comes from elsewhere (a quest, a dialogue choice).

#### `public bool RecalculateLongTermPath()` / `public void RecalculateShortTermBehavior()`

Forces a path or short-term behaviour refresh. Expensive; call it when you teleport the party, not per tick.

#### `public void SetPositionAfterMapChange(CampaignVec2 newPosition)` / `public void MovePartyToTheClosestLand()` / `public void CheckPositionsForMapChangeAndUpdateIfNeeded()` / `public void CheckAiForMapChangeAndUpdateIfNeeded()`

Teleport helpers. `SetPositionAfterMapChange` is the one that also invalidates the path.

### People and roles

#### `public Hero LeaderHero` / `public Hero Owner`

Who commands the party and who owns it. `LeaderHero` is null for militia and villager parties.

#### `public void ChangePartyLeader(Hero newLeader)` / `public void RemovePartyLeader()`

Leadership changes. These go through the party-leader path so the previous leader's `PartyBelongedTo` is updated.

#### `public void SetHeroPartyRole(Hero hero, PartyRole partyRole)` / `GetHeroPartyRole(Hero)` / `RemoveHeroPartyRole(Hero)` / `public Hero GetRoleHolder(PartyRole)` / `GetEffectiveRoleHolder(PartyRole)`

Party roles (captain, engineer, surgeon, quartermaster, scout). `GetRoleHolder` is exact; `GetEffectiveRoleHolder` falls back to a skill-derived default when nobody holds the role.

#### `public Hero EffectiveScout` / `EffectiveQuartermaster` / `EffectiveEngineer` / `EffectiveSurgeon`

The role properties with fallback already applied. These are what speed, food and navigation read.

#### `public bool HasPerk(PerkObject perk, bool checkSecondaryRole = false)`

Perk check that also honours the quartermaster when `checkSecondaryRole` is true — the form AI weightings use.

### Composition and supply

#### `public int TotalWage` / `public ExplainedNumber TotalWageExplained`

Daily wage bill. `TotalWageExplained` carries the per-troop breakdown.

#### `public float Food` / `public int TotalFoodAtInventory` / `public float FoodChange` / `public float BaseFoodChange` / `public ExplainedNumber FoodChangeExplained`

Food stock and consumption. `FoodChangeExplained` shows which goods contribute.

#### `public float Morale` / `public ExplainedNumber MoraleExplained`

Morale and its causes.

#### `public float Speed` / `public ExplainedNumber SpeedExplained` / `public float LastCalculatedBaseSpeed`

Current speed with the explanation the party screen shows.

#### `public float TotalWeightCarried` / `public int InventoryCapacity` / `public ExplainedNumber InventoryCapacityExplainedNumber`

Load and capacity. Over capacity slows the party; the explained number says by how much and why.

#### `public bool HasLimitedWage()` / `public int GetAvailableWageBudget()` / `public bool IsWageLimitExceeded()` / `public void SetWagePaymentLimit(int newLimit)` / `public int PaymentLimit` / `public float HasUnpaidWages`

The wage settlement mechanism. Unpaid wages accumulate morale damage.

### Trade

#### `public bool IsPartyTradeActive { get; private set; }` / `public void InitializePartyTrade(int initialGold)` / `public int PartyTradeGold` / `public int PartyTradeTaxGold { get; private set; }` / `public void AddTaxGold(int amount)`

The party's own trade pool, used by caravans and the player. `InitializePartyTrade` seeds the gold; `DefaultPartyTradeInitialGold` is 5000.

### Position, visibility and lifecycle

#### `public CampaignVec2 Position` / `public Vec2 GetPosition2D()`

Map position, campaign-space and legacy.

#### `public bool IsVisible` / `public bool IsInspected` / `public void UpdateVisibilityAndInspected(...)` is on `PartyBase`

Fog-of-war state. A mod that reads a party's exact composition for an uninspected party bypasses the vision model.

#### `public MobileParty AttachedTo` / `public MBReadOnlyList<MobileParty> AttachedParties` / `public Army Army`

Attachment and army membership. Attached parties are already counted in the host roster.

#### `public void InitializeMobilePartyAtPosition(CampaignVec2 position)` and the three roster/template overloads

Placement helpers used at campaign creation. They set position, fill rosters and reset AI state in one call.

## Real examples

### Example 1: order the player party and verify the order took

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static void SendPlayerTo(Settlement settlement)
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || settlement == null)
    {
        return;
    }

    MobileParty party = campaign.MainParty;
    if (party == null)
    {
        return;
    }

    party.SetMoveGoToSettlement(settlement, MobileParty.NavigationType.Default, false);

    // The order is an objective, not a teleport: read the target, not the position.
    InformationManager.DisplayMessage(new InformationMessage(
        $"Target: {party.TargetSettlement?.Name.Name ?? "none"}, " +
        $"speed {party.Speed:0.00} ({party.SpeedExplained.GetExplanations()})"));
}
```

### Example 2: add troops through the party, not the roster

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static int RecruitToMainParty(string characterId, int count)
{
    Campaign campaign = Campaign.Current;
    if (campaign?.MainParty == null)
    {
        return 0;
    }

    CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>(characterId);
    if (recruit == null)
    {
        return 0;
    }

    // MobileParty itself has no AddMember; the roster object does.
    int added = campaign.MainParty.AddElementToMemberRoster(recruit, count);
    InformationManager.DisplayMessage(new InformationMessage(
        $"Added {added} (cap {campaign.MainParty.Party.PartySizeLimit})"));
    return added;
}
```

### Example 3: walk lord parties with a role holder

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static string DescribeLordParties()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return "no campaign";
    }

    string report = string.Empty;
    foreach (MobileParty party in campaign.LordParties)
    {
        Hero surgeon = party.EffectiveSurgeon;
        Hero leader = party.LeaderHero;
        report += $"{party.Name}: leader {leader?.Name.Name ?? "none"}, " +
                  $"surgeon {surgeon?.Name.Name ?? "none"}, strength {party.Party.EstimatedStrength:0}\n";
    }

    return report;
}
```

### Example 4: stop a party from wandering after a teleport

```csharp
using TaleWorlds.CampaignSystem.Party;

public static void TeleportAndReset(MobileParty party, CampaignVec2 destination)
{
    if (party == null)
    {
        return;
    }

    party.SetMoveHold();
    party.SetPositionAfterMapChange(destination);

    // A stale path after a teleport sends the party walking off the map edge.
    party.RecalculateLongTermPath();
    party.RecalculateShortTermBehavior();
}
```

## Risks and crash boundaries

1. **Roster API asymmetry.** `MobileParty` exposes `AddElementToMemberRoster` and `AddPrisoner` but not `AddMember`; use `party.Party.AddMember`. Mixing them produces different size-limit behaviour.
2. **Unregistered parties.** `new MobileParty()` is not in `All`, is not saved, and has no AI. Use `MobileParty.CreateParty` with a `PartyComponent`.
3. **Position type mismatch.** `Position` is `CampaignVec2`; `GetPosition2D()` is `Vec2`. Assigning one to the other is a silent logic error, not a compile error in every direction.
4. **Re-classifying a live party.** `SetPartyComponent` re-derives every `Is*Party` flag and invalidates the AI's cached decisions. Do it before the party starts moving, not mid-move.
5. **Attached-party double counting.** `AttachedParties` members are already in the host's roster. Summing `EstimatedStrength` across host and attached parties inflates strength and skews the AI.
6. **Save coupling.** `Name`, `Position`, `IsActive`, `IsPartyTradeActive`, party trade gold, ships and the component classification are serialized. Reordering save ids breaks existing saves — see [save-system](../../../architecture/save-system).
7. **Path invalidation after teleport.** `SetPositionAfterMapChange` alone leaves a stale path; follow it with `RecalculateLongTermPath()`, otherwise the party walks toward its old destination from its new location.
8. **Per-tick cost.** Scanning `MobileParty.All` (or `LordParties`) on every hourly tick across many behaviours is expensive. Subscribe to `CampaignEvents.HourlyTickPartyEvent` / `DailyTickPartyEvent`, which hand you the subject.
9. **Fog-of-war leakage.** Reading `MemberRoster` for a party the player has not inspected and surfacing it in UI or notifications bypasses the vision model.

## Cross-version notes

- The `SetMove*` vocabulary, `PartyComponent` classification and the roster-on-`PartyBase` split are identical in 1.3.x and 1.4.x.
- Naval support (`Ships`, `HasNavalNavigationCapability`, port targeting) is present in 1.3.0 and grows in later builds; older saves get empty ship lists on load. Guard `Ships` for null if you support very old saves.

## See Also

- [PartyBase](../PartyBase) — where the rosters actually live
- [Hero](../Hero) — leaders, owners and role holders
- [Clan](../Clan) — `ActualClan` and ownership
- [Settlement](../Settlement) — destinations, garrisons and home settlement
- [Kingdom](../Kingdom) — the realm a lord party serves
- [Campaign](../Campaign) — party registries and the campaign clock
- [MobilePartyVisual](../../campaign-ext/MobilePartyVisual) — the map-scene object
- [Save system](../../../architecture/save-system) — saveable property discipline
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough