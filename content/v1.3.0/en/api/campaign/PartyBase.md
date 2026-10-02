---
title: "PartyBase"
description: "Shared campaign party core for MobileParty and Settlement garrisons: rosters, prisoners, goods, strength, food, size limits and map-event side."
---

# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**Base:** `IBattleCombatant` (plus `IRandomOwner`, `IInteractablePoint`)
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`

## Overview

`PartyBase` is the campaign layer's shared data core for "a blob of people on the map". It has exactly two possible hosts, fixed at construction:

| Host | Constructor | Discriminator | Position source |
|------|-------------|---------------|-----------------|
| [MobileParty](../MobileParty) | `new PartyBase(MobileParty)` | `IsMobile == true` | `MobileParty.Position` |
| [Settlement](../Settlement) garrison | `new PartyBase(Settlement)` | `IsSettlement == true` | `Settlement.Position` |

**`MobileParty` is not a subclass of `PartyBase`.** It *has* one: `Party = new PartyBase(this)`. Same for `Settlement.Party`. So any API that says "party" and accepts a `PartyBase` handles mobile parties and garrisons uniformly — which is exactly why battle resolution, loot and reinforcement logic can be written once.

What lives here:

- **Rosters.** `MemberRoster`, `PrisonRoster`, `ItemRoster` plus the `Add*` wrappers that respect size limits.
- **Counts and limits.** `NumberOfHealthyMembers`, `NumberOfAllMembers`, `NumberOfPrisoners`, `PartySizeLimit`, `PrisonerSizeLimit`.
- **Strength.** `EstimatedStrength`, `CalculateCurrentStrength()`, `GetCustomStrength(side, context)`.
- **Supply.** `Food`, `IsStarving`, `RemainingFoodPercentage`, `DaysStarving`.
- **Battle affiliation.** `MapEvent`, `MapEventSide`, `Side`, `OpponentSide`.
- **Identity.** `Name`, `Id`, `Index`, `IsValid`, `Owner`, `MapFaction`, `Culture`, `Banner`.

## Mental Model

```
MobileParty ──.Party──► PartyBase (IsMobile)   ─┐
                          │                     ├── MemberRoster
Settlement ──.Party──────► PartyBase (IsSettlement) ┤   PrisonRoster
                                                │   ItemRoster
Hero ──PartyBelongedTo.Party / PartyBelongedToAsPrisoner ─┘
                          │
                          ├── MapEvent / MapEventSide / Side
                          ├── EstimatedStrength / PartySizeLimit
                          └── Position / Name / Owner / Banner   (forwarded to host)
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    PartyBase.MainParty is live (Campaign.Current.MainParty.Party)
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.HourlyTickPartyEvent / DailyTickPartyEvent
DailyTick
    party.EstimatedStrength, party.Food, roster counts read
    party.AddMember(...) / AddPrisoner(...) mutate inside the size limits
    after battle write-back, the mission side flushes survivors back into MemberRoster
```

Traps that bite in practice:

- **`LeaderHero` is mobile-only.** It forwards to `MobileParty?.LeaderHero`, so it is null for every settlement garrison. Garrison logic must never dereference it.
- **`MainParty` is null without a campaign.** It resolves through `Campaign.Current`, which is null on the main menu and during loading.
- **The `MapEventSide` setter is not a field assignment.** It removes the party from its old side, joins the new one, and resyncs `AttachedParties`. Careless sets trip the "Double MapEvent" assertion.
- **Size limits are enforced in the `Add*` methods, not the roster.** Writing `MemberRoster.AddToCounts` directly bypasses `PartySizeLimit` and produces parties larger than the model allows.
- **`EstimatedStrength` is a cached estimate.** It depends on roster `VersionNo`. If you cache it yourself, invalidate on roster changes.
- **`PartyBase` is not a Mission `Team`.** `PartyBase` spans saves; `Team` and `Agent` live for exactly one mission.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Hosts | [MobileParty](../MobileParty), [Settlement](../Settlement) | Exactly one is non-null, fixed at construction |
| People | [Hero](../Hero) | `Owner`, `LeaderHero`, `PartyBelongedTo`, `PartyBelongedToAsPrisoner` |
| Rosters | `TroopRoster`, `ItemRoster` | Members, prisoners, goods |
| Battle | `MapEvent`, `MapEventSide`, `MapEventManager` | `MapEvent`, `MapEventSide`, `Side`, `OpponentSide` |
| Models | `PartySizeLimitModel`, `PartyHealingModel`, `MilitaryPowerModel`, `PartyFoodBuyingModel` | Limits, healing, strength, supply |
| Map scene | [MobilePartyVisual](../../campaign-ext/MobilePartyVisual), [SettlementVisual](../../campaign-ext/SettlementVisual) | Visual counterparts |
| Interface | `IBattleCombatant`, `IRandomOwner`, `IInteractablePoint` | Battle, ownership and interaction contracts |

## Key members

### Host discrimination

#### `public bool IsMobile` / `public bool IsSettlement`

Mutually exclusive, fixed at construction. Branch on these, never on a null check of the host.

#### `public MobileParty MobileParty { get; private set; }` / `public Settlement Settlement { get; private set; }`

The host references. Exactly one is non-null.

#### `public CampaignVec2 Position` / `public bool IsVisible` / `public bool IsActive`

Forwarded to the host. `IsActive` on a `PartyBase` reads the host's activity flag, not a party-specific one.

### Identity

#### `public string Id`

`MobileParty.StringId` or `Settlement.StringId`. Stable across saves; the right key for mod-side dictionaries.

#### `public int Index` / `public bool IsValid`

The in-campaign index. `IsValid` is `Index >= 0`; a party from a previous campaign that was cached across a load will be invalid.

#### `public TextObject Name`

Forwards the host name, or `CustomName` when one has been set.

#### `public void SetCustomName(TextObject name)` / `SetCustomBanner(Banner banner)` / `SetCustomOwner(Hero customOwner)`

Display and ownership overrides. `SetCustomOwner` makes a caravan or bandit party appear to belong to someone else without touching the host.

#### `public Hero Owner` / `public Hero LeaderHero`

`Owner` prefers `_customOwner` and falls back to the host's owner. `LeaderHero` is mobile-only.

#### `public static PartyBase MainParty` / `public static bool IsPartyUnderPlayerCommand(PartyBase party)`

Player-party access and the command check. Both resolve through `Campaign.Current`.

### Rosters

#### `public TroopRoster MemberRoster { get; private set; }` / `public TroopRoster PrisonRoster { get; private set; }` / `public ItemRoster ItemRoster { get; private set; }`

The three rosters. `{ get; private set; }` means you can never swap them; mutate them in place.

#### `public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)`

Adds troops, clamped by `PartySizeLimit`. Returns the number actually added. This is the method to use instead of writing the roster directly.

#### `public int AddPrisoner(CharacterObject element, int numberToAdd)` / `public void AddPrisoners(TroopRoster roster)` / `public void AddMembers(TroopRoster roster)`

Prisoner and bulk-roster equivalents, all size-limit aware.

#### `public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)` / `WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)`

Moves units from healthy to wounded. Used by the post-battle write-back.

#### `public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)`

Index-targeted add, for code that has already located a roster element.

### Counts and limits

#### `public int NumberOfHealthyMembers` / `NumberOfRegularMembers` / `NumberOfWoundedTotalMembers` / `NumberOfAllMembers` / `NumberOfPrisoners`

Fast counts. `NumberOfAllMembers` is the one the size limit applies to.

#### `public int PartySizeLimit` / `public int PrisonerSizeLimit` / `public ExplainedNumber PartySizeLimitExplainer` / `ExplainedNumber PrisonerSizeLimitExplainer`

Limits from `PartySizeLimitModel`, plus the explanation the party screen shows.

#### `public int GetNumberOfHealthyMenOfTier(int tier)` / `public int GetNumberOfMenWith(TraitObject trait)`

Filtered counts used by AI and by perks.

#### `public int NumberOfMenWithHorse` / `NumberOfMenWithoutHorse` / `NumberOfMounts` / `NumberOfPackAnimals`

Mount-related counts. Cached and recomputed on roster version change.

### Strength

#### `public float EstimatedStrength`

The cached military-power estimate. Depends on roster `VersionNo`; refresh by reading after a roster change rather than caching it yourself.

#### `public float CalculateCurrentStrength()`

The uncached calculation. Use when you need a value that reflects edits made in the same tick.

#### `public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

Per-side strength inside a map event, where the same party can contribute differently to attacker and defender.

### Supply and healing

#### `public float IsStarving` / `public int RemainingFoodPercentage` / `public float DaysStarving`

Food state, driven by the party food model.

#### `public float HealingRateForMemberRegulars` / `HealingRateForMemberHeroes` and their `ExplainedNumber` counterparts

Healing from `PartyHealingModel`. Heroes and regulars heal at different rates.

### Battle

#### `public MapEvent MapEvent` / `public MapEventSide MapEventSide` / `public BattleSideEnum Side` / `OpponentSide`

Current map-battle affiliation. The `MapEventSide` setter performs removal, joining and `AttachedParties` resynchronisation — treat it as a transaction.

#### `public SiegeEvent SiegeEvent`

Siege affiliation, forwarded from the host.

### Visibility and visuals

#### `public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)`

Recomputes `IsVisible` and `IsInspected` against the player's sight range.

#### `public void SetVisualAsDirty()` / `public bool IsVisualDirty { get; private set; }` / `public void OnVisualsUpdated()`

Visual refresh handshake with the map scene. Call `SetVisualAsDirty()` after changing anything the map icon shows.

#### `public void SetAsCameraFollowParty()`

Makes this party the camera target on the map screen.

### Naval

#### `public MBReadOnlyList<Ship> Ships` / `public Ship FlagShip` / `public int GetShipsVersion()`

Ships attached to the party. Empty for land parties.

## Real examples

### Example 1: one function that handles both host shapes

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static string DescribeParty(PartyBase party)
{
    if (party == null || !party.IsValid)
    {
        return "invalid";
    }

    if (party.IsMobile)
    {
        // LeaderHero is mobile-only; safe to read here.
        return $"{party.MobileParty.StringId}: leader {party.LeaderHero?.Name.Name ?? "none"}, " +
               $"{party.NumberOfHealthyMembers}/{party.PartySizeLimit}";
    }

    // Settlement party: LeaderHero is null by design, do not dereference it.
    return $"{party.Settlement.Name}: garrison {party.NumberOfAllMembers}, " +
           $"prisoners {party.NumberOfPrisoners}";
}
```

### Example 2: recruit within the size limit

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem.Party;

public static int Recruit(PartyBase party, string characterId, int count)
{
    if (party == null || !party.IsValid)
    {
        return 0;
    }

    CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>(characterId);
    if (recruit == null)
    {
        return 0;
    }

    // AddMember clamps against PartySizeLimit; writing the roster directly does not.
    return party.AddMember(recruit, count);
}
```

### Example 3: strength that reflects edits made this tick

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static float FreshStrength()
{
    PartyBase main = PartyBase.MainParty;
    if (main == null)
    {
        return 0f;
    }

    // Cached estimate, then the fresh computation for comparison.
    float cached = main.EstimatedStrength;
    float fresh = main.CalculateCurrentStrength();
    _ = cached;
    return fresh;
}
```

### Example 4: react to a party entering a battle

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

public sealed class BattleWatcherBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // IMbEvent<MapEvent, PartyBase, PartyBase>
        CampaignEvents.MapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnMapEventStarted(MapEvent mapEvent, PartyBase side1, PartyBase side2)
    {
        if (mapEvent == null || side1 == null || side2 == null)
        {
            return;
        }

        InformationManager.DisplayMessage(new InformationMessage(
            $"Map event: {side1.Name} ({side1.EstimatedStrength:0}) vs " +
            $"{side2.Name} ({side2.EstimatedStrength:0})"));
    }
}
```

## Risks and crash boundaries

1. **`MainParty` is null outside a campaign.** It resolves through `Campaign.Current`; guard before use, especially from static or module-load code.
2. **`LeaderHero` is null for garrisons.** It forwards to `MobileParty?.LeaderHero`. Unguarded use in garrison logic throws on every settlement party.
3. **`MapEventSide` assignment is a transaction.** It removes from the old side, joins the new one, and resyncs `AttachedParties`. A partial failure trips the "Double MapEvent" assertion; assign only when no map event is running, or drive the transition through `MapEventManager`.
4. **Size limits live in the `Add*` methods.** `MemberRoster.AddToCounts` bypasses `PartySizeLimit` and yields oversized parties that the AI and UI then mis-handle.
5. **Save coupling.** All three rosters, food, ships and the custom owner/name/banner overrides are serialized. Renumbering or restructuring breaks existing saves — see [save-system](../../../architecture/save-system).
6. **Cached strength.** `EstimatedStrength` and the mount counts depend on roster `VersionNo`. If you cache them, invalidate on every roster edit or your numbers silently drift.
7. **Prisoner consistency.** `AfterLoad` repairs mismatches between `PrisonRoster` and `Hero.PartyBelongedToAsPrisoner`. Hard-editing prisoners produces a save that only breaks after a reload; use the capture / release actions.
8. **`PartyBase` is not `Team`.** Never read campaign party data from mission code expecting it to survive the battle, and never write mission state into it. Battle write-back happens once, at settlement.
9. **Per-tick scans.** `PartyBase.MainParty` and host lookups are cheap, but enumerating every party's roster per tick is not. Subscribe to `CampaignEvents.DailyTickPartyEvent` instead.

## Cross-version notes

- The dual-host construction, the three rosters and the `Add*` family are identical in 1.3.x and 1.4.x.
- Naval members (`Ships`, `FlagShip`, `GetShipsVersion`) exist in 1.3.0 and expand later; old saves get empty ship lists on `OnLoad`. Guard for empty rather than null.

## See Also

- [MobileParty](../MobileParty) — the mobile host
- [Settlement](../Settlement) — the garrison host
- [Hero](../Hero) — owner, leader and prisoners
- [Clan](../Clan) — the party owner's faction
- [Campaign](../Campaign) — where `MainParty` comes from
- [MobilePartyVisual](../../campaign-ext/MobilePartyVisual) — map-scene counterpart
- [SettlementVisual](../../campaign-ext/SettlementVisual) — map-scene counterpart
- [Save system](../../../architecture/save-system) — saveable property discipline
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough