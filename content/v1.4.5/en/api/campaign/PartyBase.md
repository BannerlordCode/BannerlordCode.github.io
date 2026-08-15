---
title: "PartyBase"
description: "The unified handle for a 'party' in the campaign world: it wraps both a moving MobileParty and a settlement garrison, exposing rosters, size limits, position, faction and combat strength through one interface."
---
# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**Base:** 无（直接继承 `System.Object`）；实现 `IBattleCombatant`、`IRandomOwner`、`IInteractablePoint`
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`

## Overview

`PartyBase` is the unified abstraction handle for **"one party"** on the campaign map: it either wraps a moving `MobileParty` or a `Settlement`'s garrison, and exposes the same interface to both — member / prisoner rosters, item inventory, size limit, map position, faction, leader and combat strength — so that the encounter, battle, visibility and supply systems do not have to distinguish "is this the moving or the stationed one".

> Note: in source `PartyBase` is a `sealed` **concrete class**, not an abstract base class. It uses the two booleans `IsMobile` / `IsSettlement` to decide which face it currently wears, rather than subclassing. Your mod should not inherit it, nor `new` it yourself.

## Mental Model

Think of `PartyBase` as **"the same ID card attached to a MobileParty or a Settlement"**:

- **Two forms, always exactly one.** At construction you pick one: `new PartyBase(MobileParty)` or `new PartyBase(Settlement)` (see `PartyBase.cs:899` and `:904`). Hence `IsMobile` and `IsSettlement` are mutually exclusive, and exactly one of the `MobileParty` and `Settlement` properties is `null`.
- **Who creates it, who owns it.** The engine `new`s the matching `PartyBase` inside the construction flows of `MobileParty` and `Settlement`, and hangs it on `MobileParty.Party` / `Settlement.Party` respectively. The `PartyBase` you get always comes from those two properties, never from your own construction — the private constructor calls `Campaign.Current.GeneratePartyId(this)` to allocate the `Index`, and cannot be created correctly outside the campaign context.
- **Which layer.** It is a purely **Campaign (campaign-world)** object, tracked by the `SaveSystem`. It has nothing to do with the battle scene (Mission); only after entering a battle are its `MapEvent` / `MapEventSide` temporarily assigned.
- **It is "the object that gets passed around."** Encounter checks, strength calculations, visibility refreshes and garrison / caravan logic all take a `PartyBase` parameter, not a concrete `MobileParty` or `Settlement`.

## When to Use / When Not to

**Use `PartyBase` when:**

- You have a `MobileParty` or `Settlement` but need the "party-level" general capability: read the roster, read the size limit, read position / faction / leader, compute combat strength.
- You are writing a Behavior / Action / Model that receives a `PartyBase` parameter (e.g. a custom encounter, a custom strength model, iterating all parties).

**Do not:**

- **Do not `new PartyBase(...)`.** Read `mobileParty.Party` or `settlement.Party` directly. A self-`new`ed instance has no legal `Index` and is not tracked by the campaign.
- **Do not inherit it.** It is `sealed`.
- **Do not rename the roster directly for a hero.** To add a hero to a party use `AddHeroToPartyAction` / `TakePrisonerAction`, not `AddMember` / `AddPrisoner` (see the Risk section).
- **Do not rename the roster or read `MapEvent` inside a Mission (battle scene).** These are campaign-state data; changing them in the scene conflicts with the per-frame sync and may corrupt the save.
- **Do not treat `MapEvent` / `MapEventSide` as long-term state.** They are valid only "while a map event is in progress"; after the event they become `null` or are reassigned.

## Dependencies

```text
                    Campaign.Current (GeneratePartyId / Models / CameraFollowParty)
                                  │
              ┌───────────────────┴───────────────────┐
         MobileParty (IsMobile)                  Settlement (IsSettlement)
              │  .PartyComponent                       │  .PartyComponent (SettlementPartyComponent)
              └───────────────────┬───────────────────┘
                              PartyBase  ◄── you normally get it through .Party
                 │   │   │   │   │
        ┌────────┘   │   │   └────────┐
   TroopRoster   ItemRoster      MapEvent / MapEventSide      Hero (Owner / LeaderHero)
   (MemberRoster,                (only during events)
    PrisonRoster)
```

**Upstream (what it depends on)**

- [MobileParty](../MobileParty/) — the body in the `IsMobile` form, returned by `MobileParty.Party`.
- [Settlement](../Settlement/) — the body in the `IsSettlement` form (garrison), returned by `Settlement.Party`.
- [PartyComponent](../PartyComponent) — the component base held by `MobileParty` (garrisons use `SettlementPartyComponent`); it decides the party's "type" and behavior.
- [TroopRoster](../../campaign-ext/TroopRoster/) / [ItemRoster](../../campaign-ext/ItemRoster/) — the actual data containers holding members, prisoners and items.
- [Campaign](../Campaign/) — `Campaign.Current` provides `Models`, `GeneratePartyId`, `CameraFollowParty`.

**Downstream / consumers**

- [MapEvent](../MapEvent) — the battle event collects the two combatants into a `MapEventSide` and back-references it onto `PartyBase.MapEventSide`.
- The encounter / visibility / strength systems (see the related Models below).

**Related Models (click for the real page)**

- [PartySizeLimitModel](../PartySizeLimitModel) — source of `PartySizeLimit` / `PrisonerSizeLimit`.
- [PartyWageModel](../PartyWageModel) — party wage (aggregated by `MobileParty`, reference when planning manpower cost).
- [PartyHealingModel](../GameModels) — source of `HealingRateForMember*`.
- [MilitaryPowerModel](../MilitaryPowerModel) — computation source for `EstimatedStrength` / `CalculateCurrentStrength` / `GetCustomStrength`.
- [EncounterModel](../EncounterModel) — `IsPartyUnderPlayerCommand` and encounter-distance checks.
- [MapVisibilityModel](../MapVisibilityModel) — visibility computation inside `UpdateVisibilityAndInspected`.

**Related Actions (the correct entry to rename roster / hero)**

- [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction/) — add a hero to a party (triggers hero state).
- [TakePrisonerAction](../../campaign-ext/TakePrisonerAction/) — take a hero as prisoner.
- [TransferPrisonerAction](../../campaign-ext/TransferPrisonerAction/) — transfer a prisoner.

## Risk Section (Crashes / Save Corruption)

> The following usages **may cause NullReferenceException or save corruption**; avoid them.

1. **Form check and null references.** `PartyBase` is `sealed`, with no subclass to cast to. Check the form with `IsMobile` / `IsSettlement` before accessing: reading `party.MobileParty` on a garrison returns `null` (and vice versa). For example `party.MobileParty.Position` on a settlement garrison throws an NRE directly.

2. **Renaming the roster without going through an Action (hero).** `AddMember` / `AddPrisoner` are thin wrappers over `TroopRoster.AddToCounts` (see `PartyBase.cs:966` / `:971`); they do **not** trigger `Hero.OnAddedToPartyAsPrisoner`, `PartyBase.OnHeroAdded`, nor update the hero's `PartyBelongedTo` / `PartyBelongedToAsPrisoner`. To add a hero to a party you must use `AddHeroToPartyAction.Apply` / `TakePrisonerAction.Apply`; only **ordinary troops** use `AddMember`.

3. **Roster change timing.** These methods mutate campaign state directly and should be called inside a Campaign tick / Behavior / Action. Changing `MemberRoster` / `PrisonRoster` inside a Mission (battle scene) conflicts with the per-frame sync logic, causing visual inconsistency or even save corruption.

4. **Properties that need `Campaign.Current`.** `PartySizeLimit`, `PartySizeLimitExplainer`, `Culture` (= `MapFaction.Culture`), `HealingRateForMember*`, `EstimatedStrength`, `CalculateCurrentStrength` all internally access `Campaign.Current.Models.*`. Calling them when `Campaign.Current == null` (main menu, outside a campaign) or `MapFaction == null` throws a **NullReferenceException**. `Culture` is especially dangerous for transient factions with no faction — confirm `MapFaction != null` first.

5. **Holding references across saves / transient fields.** `PartyBase` is a `SaveSystem`-tracked object, stable within a session; but `MapEvent` / `MapEventSide` are **transient**, becoming `null` or reused after the event ends, so do not cache them as long-term state. Also `RandomValue`, if read as 0 during an old-save upgrade load, is re-randomized (`AfterLoad`) — **do not rely on its determinism across saves**.

6. **Cast trap.** There is no "PartyBase abstract base class" collection you can down-cast to — it is already a concrete instance, its form decided by `IsMobile` / `IsSettlement`; do not try to force a cast between the two or treat them as one base-class family.

## Members (by topic)

### Size and limits

| Member | Meaning / side effects / when to call |
|------|--------------------------|
| `PartySizeLimit` (`int`) | Upper limit on members the party can hold. **Cached value**: versioned by `MemberRoster.VersionNo`, recomputed only when the roster changes; recompute goes through `PartySizeLimitModel.GetPartyMemberSizeLimit`. Must be called inside a campaign (depends on `Campaign.Current`). Read it for UI capacity display and recruitment checks. |
| `PrisonerSizeLimit` (`int`) | Prisoner limit; same logic as above but based on `PrisonRoster`. |
| `PartySizeLimitExplainer` / `PrisonerSizeLimitExplainer` (`ExplainedNumber`) | Upper-limit origins with per-item breakdown (handy for tooltips showing "why this number"). Also depends on `Campaign.Current`. |
| `NumberOfHealthyMembers` / `NumberOfRegularMembers` / `NumberOfWoundedTotalMembers` / `NumberOfAllMembers` | All derived from `MemberRoster` (`TotalManCount - TotalWounded`, etc.). Read-only, queryable anytime. |
| `NumberOfPrisoners` | From `PrisonRoster.TotalManCount`. |
| `NumberOfMounts` / `NumberOfPackAnimals` | From `ItemRoster`. |
| `NumberOfMenWithHorse` / `NumberOfMenWithoutHorse` | Counted by `CharacterObject.IsMounted`; version-cached, recomputed only when the roster changes. |
| `EstimatedStrength` (`float`) | Estimated combat strength (for AI / display), via `MilitaryPowerModel.GetPowerOfParty(... Estimated)`. Only has a value for moving parties; garrison returns 0. Depends on `Campaign.Current`. |
| `CalculateCurrentStrength()` | Computes strength live based on the current `MapEvent` / position; returns 0 for non-moving parties. |
| `GetCustomStrength(BattleSideEnum, MapEvent.PowerCalculationContext)` | Computes strength using a faction and context you specify; commonly used for custom strength evaluation. |
| `HealingRateForMemberRegulars` / `HealingRateForMemberHeroes` (`float`) and their `*Explained` (`ExplainedNumber`) | Daily healing amount, via `PartyHealingModel`. Depends on `Campaign.Current`. |

### Form, identity and membership

| Member | Meaning / side effects / when to call |
|------|--------------------------|
| `IsMobile` / `IsSettlement` (`bool`) | **Preferred form discriminator**. Mutually exclusive, exactly one is `true`. |
| `MobileParty` (`MobileParty`) | The body when `IsMobile`, otherwise `null`. |
| `Settlement` (`Settlement`) | The body when `IsSettlement` (garrison), otherwise `null`. |
| `Owner` (`Hero`) | Returns the custom owner `_customOwner` first, otherwise falls back to `MobileParty.Owner` / `Settlement.Owner`. |
| `LeaderHero` (`Hero`) | Only for moving parties (`MobileParty.LeaderHero`); `null` for garrisons. |
| `MapFaction` (`IFaction`) | Takes `MobileParty.MapFaction` or `Settlement.MapFaction`; `null` if neither (see Risk 4). |
| `Culture` (`CultureObject`) | = `MapFaction.Culture`. Throws NRE when `MapFaction` is `null`. |
| `Id` (`string`) | = `MobileParty?.StringId ?? Settlement.StringId`, unique across the campaign. |
| `Index` (`int`) | Party sequence number allocated by the engine (`Campaign.GeneratePartyId`); `IsValid => Index >= 0`. |
| `IsValid` (`bool`) | `Index >= 0`. |
| `RandomValue` (`int`) | Random seed; re-randomized on upgrade load if 0 (see Risk 5). |
| `CustomName` (`TextObject`) / `CustomBanner` (`Banner`) / `Banner` (`Banner`) | Custom name / banner; `Banner` falls back to `MobileParty.Banner` / `Settlement.Banner`. |
| `MainParty` (`static PartyBase`) | = `Campaign.Current.MainParty.Party`; returns `null` outside a campaign. |
| `General` (`BasicCharacterObject`) | The party's main commander character: when in an army returns the army leader hero's `CharacterObject`, otherwise returns `LeaderHero?.CharacterObject`. |

### Rosters (real data containers)

| Member | Meaning / side effects / when to call |
|------|--------------------------|
| `MemberRoster` (`TroopRoster`) | Member roster (heroes and ordinary troops included). **To change it directly, use the methods below or an `*Action`.** |
| `PrisonRoster` (`TroopRoster`) | Prisoner roster. |
| `ItemRoster` (`ItemRoster`) | Item / mount inventory. |
| `PrisonerHeroes` (`IEnumerable<CharacterObject>`) | Iterate the hero characters among the prisoners. |
| `AddMember(CharacterObject, int, int wounded = 0)` | Thin wrapper over `MemberRoster.AddToCounts`. Use this for **ordinary troops**; use `AddHeroToPartyAction` for heroes. |
| `AddPrisoner(CharacterObject, int)` | Same as above, acting on `PrisonRoster`. |
| `AddMembers(TroopRoster)` / `AddPrisoners(TroopRoster)` | Merge a whole roster. |
| `AddElementToMemberRoster(CharacterObject, int, bool insertAtFront = false)` | Add a member at a specified insertion position. |
| `AddToMemberRosterElementAtIndex(int, int, int wounded = 0)` | Add a person / wounded by index. |
| `WoundMemberRosterElements(CharacterObject, int)` / `WoundMemberRosterElementsWithIndex(int, int)` | Mark existing members as wounded (equivalent to `AddToCounts(..., woundedCount)`). |
| `SetCustomOwner(Hero)` / `SetCustomName(TextObject)` / `SetCustomBanner(Banner)` | Write custom ownership / name / banner, and call `SetVisualAsDirty()` to trigger a map-visual refresh. |

### Map position, encounter and state

| Member | Meaning / side effects / when to call |
|------|--------------------------|
| `Position` (`CampaignVec2`) | Falls back to `Settlement.Position` or `MobileParty.Position`. |
| `IsVisible` / `IsActive` | Fall back to the wrapped object's visibility / active state. |
| `IsStarving` / `DaysStarving` / `RemainingFoodPercentage` | Starvation state; `RemainingFoodPercentage < 0` means `IsStarving`. |
| `MapEvent` (`MapEvent`) / `MapEventSide` (`MapEventSide`) | **Valid only during an event**; becomes `null` after the event ends. Writing `MapEventSide` automatically removes from the old side, joins the new side, and cascades the sync to attached parties. |
| `Side` (`BattleSideEnum`) / `OpponentSide` | The combat side currently occupied; `None` outside an event. |
| `SiegeEvent` (`SiegeEvent`) | The siege event (if any). |
| `Ships` (`MBReadOnlyList<Ship>`) / `FlagShip` (`Ship`) | Naval: this party's ships and flagship (highest by `FlagshipScore`). |
| `UpdateVisibilityAndInspected(CampaignVec2, float mainPartySeeingRange = 0f)` | The engine recomputes visibility / inspected during the map tick; a mod rarely needs to call it manually. |
| `IsPartyUnderPlayerCommand(PartyBase)` (`static`) / `IsUnderPlayersCommand(BattleSideEnum)` | Whether under player command, via `EncounterModel.IsPartyUnderPlayerCommand`. |
| `SetAsCameraFollowParty()` | Set `Campaign.Current.CameraFollowParty = this` (map camera follow). |
| `OnConsumedFood()` | Reset `_lastEatingTime`; called by the supply logic, a mod generally does not call it directly. |
| `OnVisibilityChanged(bool)` / `SetVisualAsDirty()` / `OnVisualsUpdated()` | Visual dirty flags and event dispatch, normally triggered by the engine when state changes. |

## Minimal Real Examples

### Example 1: Get PartyBase from MobileParty / Settlement, read size and roster

```csharp
// Moving party: MobileParty.Party is its PartyBase
MobileParty party = MobileParty.MainParty;
PartyBase pb = party.Party;

int memberLimit   = pb.PartySizeLimit;       // Member upper limit (depends on Campaign.Current)
int regulars      = pb.NumberOfRegularMembers;
int wounded       = pb.NumberOfWoundedTotalMembers;
int prisoners     = pb.NumberOfPrisoners;
TroopRoster roster = pb.MemberRoster;         // Real roster container

// Settlement garrison: Settlement.Party is its PartyBase
Settlement town = Settlement.CurrentSettlement;
if (town != null && town.IsTown)
{
    PartyBase garrison = town.Party;
    if (garrison.IsSettlement)                // Always check the form first
    {
        int garrisonSize = garrison.NumberOfAllMembers;
    }
}
```

### Example 2: Use the right entry to add people — troops via AddMember, heroes via Action

```csharp
PartyBase party = MobileParty.MainParty.Party;

// Ordinary troop: just go through the roster wrapper
CharacterObject recruit = CharacterObject.All.FirstOrDefault(c => c.StringId == "looter");
if (recruit != null)
{
    party.AddMember(recruit, 5);   // Add 5, no hero logic triggered, safe
}

// Hero: must go through Action, otherwise the hero's PartyBelongedTo / prisoner state won't update
Hero someLord = Hero.FindFirst(h => h.IsLord && h.IsPrisoner);
if (someLord != null)
{
    // Wrong: party.AddPrisoner(someLord.CharacterObject, 1);  <- does not update hero state
    TakePrisonerAction.Apply(party, someLord);   // Correct: go through Action
}
```

### Example 3: Iterate all parties and read combat strength (only while the campaign is running)

```csharp
// All moving parties
foreach (MobileParty mp in MobileParty.All)
{
    PartyBase pb = mp.Party;
    float strength = pb.EstimatedStrength;   // Only has a value for moving parties
    IFaction faction = pb.MapFaction;        // Null-check before using Culture
    if (faction != null)
    {
        CultureObject culture = pb.Culture;
    }
}
```

## Cross-Version Notes

- The semantics on this page follow the **bannerlord-1.4.5** source (`PartyBase` is a `sealed` concrete class, `PartySizeLimit` etc. are version-cached).
- In v1.3.15 `PartyBase` is also a `sealed class` with the same core interface; v1.4.5 adds, in `AfterLoad`, the migration of the main hero's prisoner and fleet initialization for old saves (`< v1.3.11`). No special handling of `PartyBase` itself is needed when writing a cross-version mod.

## See Also

- ↑ Parent: [Campaign](../Campaign/) — campaign hub, `Campaign.Current` provides Models and `GeneratePartyId`
- ↑ Region index: [This region's index](../)
- ↔ Siblings (form bodies): [MobileParty](../MobileParty/) · [Settlement](../Settlement/)
- ↔ Same-layer data: [CharacterObject](../CharacterObject/) — the character template inside a roster
- Related component: [PartyComponent](../PartyComponent)
- Related rosters: [TroopRoster](../../campaign-ext/TroopRoster/) · [ItemRoster](../../campaign-ext/ItemRoster/)
- Related events: [MapEvent](../MapEvent)
- Related models: [PartySizeLimitModel](../PartySizeLimitModel) · [PartyWageModel](../PartyWageModel) · [PartyHealingModel](../GameModels) · [MilitaryPowerModel](../MilitaryPowerModel) · [EncounterModel](../EncounterModel) · [MapVisibilityModel](../MapVisibilityModel)
- Related actions: [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction/) · [TakePrisonerAction](../../campaign-ext/TakePrisonerAction/) · [TransferPrisonerAction](../../campaign-ext/TransferPrisonerAction/)
- Object management: [MBObjectManager](../../campaign-ext/MBObjectManager/)
