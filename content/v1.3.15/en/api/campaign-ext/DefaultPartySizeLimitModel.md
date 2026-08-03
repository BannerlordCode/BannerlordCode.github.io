---
title: "DefaultPartySizeLimitModel"
description: "The default campaign implementation for party, prisoner, garrison, and initial-composition limits."
---
# DefaultPartySizeLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`  
**Base:** [`PartySizeLimitModel`](../PartySizeLimitModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs` (v1.3.15; the v1.4.5 counterpart is under `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`)

## One-line job

`DefaultPartySizeLimitModel` calculates member, prisoner, and garrison capacity, supplies the minimum villager-party size, and creates initial troop rosters and ships from a `PartyTemplateObject`. It returns policy results; it does not add troops to an existing party.

## Mental model

```text
PartyBase / MobileParty / Settlement / Village / PartyTemplateObject
                         -> Campaign.Current.Models.PartySizeLimitModel
                         -> ExplainedNumber, int, TroopRoster, List<Ship>
                         -> PartyBase cache, transfer UI, garrison/villager behavior, party creation
```

Capacity is not one number. Member capacity covers living troops and heroes, prisoner capacity is separate, garrison capacity belongs to a settlement, and initial rosters/ships are selected from a template during party creation. Mixing these results makes PartyScreen, recruitment, garrison management, and party creation disagree.

### Use it when

- You need to know how many members or prisoners a party can accept: read `Campaign.Current.Models.PartySizeLimitModel` and choose the member or prisoner contract explicitly.
- You need to change party, garrison, or initial-composition rules: register a `DefaultPartySizeLimitModel` subclass during `CampaignGameStarter` setup and preserve `ExplainedNumber` descriptions and cache behavior.
- You are changing creation-time composition: return the roster/ship selections from the model and let the official creation path perform `AddToCounts`, ship attachment, and persistence.

### Do not use it when

Do not treat a new limit as permission to force more entries into an existing roster. Do not recruit, transfer prisoners, change Clan Tier, or repeatedly create `Ship` objects from a model method. Capacity is cached by [`PartyBase`](../../campaign/PartyBase); world-state mutations belong to the relevant roster API, Action, or Behavior.

## Dependencies

### Upstream inputs

| Type | Role |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) / [`MobileParty`](../../campaign/MobileParty) | Supply party kind, leader, rosters, healthy-member count, sea state, ships, and cache context. |
| [`Settlement`](../../campaign/Settlement) / [`Village`](../../campaign/Village) | Supply wall level, buildings, garrison context, hearth, and production. |
| [`Clan`](../../campaign/Clan) / [`Hero`](../../campaign/Hero) | Supply clan tier, clan leader, skills, perks, policies, and faction identity. |
| [`PartyTemplateObject`](../PartyTemplateObject) | Supplies minimum/maximum ranges for troop stacks and ship-hull stacks. |
| `BuildingEffectEnum` / `CharacterDevelopmentModel` | Supply garrison/prison building effects and the Epic Perk skill threshold. |

### Downstream consumers

| Type or flow | What it reads |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) | Caches `PartySizeLimit` and `PrisonerSizeLimit`; explainer properties request described results. |
| `GarrisonRecruitmentCampaignBehavior` / `GarrisonTroopsCampaignBehavior` | Use garrison capacity to decide how many troops to add. |
| `PatrolPartiesCampaignBehavior` / `VillagerCampaignBehavior` | Use patrol capacity, villager minimum/ideal size, and template rosters. |
| [`MobileParty`](../../campaign/MobileParty) | Receives the initial roster and ships during party creation, then performs the actual assembly. |
| `PartyScreenHelper` | Uses member and prisoner limits for transfer validation and explanation. |
| [`DefaultClanTierModel`](../DefaultClanTierModel) | Queries the next clan-tier capacity increment. |

## Public contract

| Member | Default behavior | Important boundary |
| --- | --- | --- |
| `MinimumNumberOfVillagersAtVillagerParty` | Returns `12`. | A villager-party floor, not the member limit for every party. |
| `GetPartyMemberSizeLimit` | Branches among ordinary mobile parties, garrisons, and patrols and returns explained member capacity; non-mobile `PartyBase` returns 0. | Garrison and patrol parties do not use the ordinary-party formula. |
| `GetPartyPrisonerSizeLimit` | Uses the settlement formula for settlements and the mobile-party formula elsewhere. | Prisoner capacity is independent from member capacity. |
| `CalculateGarrisonPartySizeLimit` | Starts at `200`, adds `200` for towns, then applies leader, perk, and building effects. | Requires settlement owner-clan and town context. |
| `GetClanTierPartySizeEffectForHero` / `GetNextClanTierPartySizeEffectChangeForHero` | Adds `15` per tier for an ordinary clan member and `25` per tier for a clan leader; tier 0 contributes nothing. | The latter returns the next-tier delta, not the current total. |
| `GetIdealVillagerPartySize` | Uses village production and hearth to calculate a minimum plus an ideal target. | A decision aid; it does not create a party. |
| `FindAppropriateInitialRosterForMobileParty` | Returns a dummy `TroopRoster` selected from template ranges and a random ratio. | The returned roster has not been written to `MobileParty.MemberRoster`. |
| `FindAppropriateInitialShipsForMobileParty` | Returns `List<Ship>` selected from template hull ranges and the corresponding random ratio. | The creation flow must consume it; do not call it every map tick. |

## Capacity calculation

### `GetPartyMemberSizeLimit`

The entry point first checks `party.IsMobile`. A non-mobile `PartyBase` returns 0. A mobile party then follows this order:

1. `IsGarrison`: delegate to `CalculateGarrisonPartySizeLimit(party.MobileParty.GarrisonPartyComponent.Settlement, ...)`.
2. `IsPatrolParty`: inspect the home settlement's `SettlementGuardHouse`; the limit is `10 + 5 * guardhouseLevel`. If no guardhouse is found, the default implementation returns 0.
3. Any other mobile party: use the ordinary member calculation, whose base is `20`.

Ordinary parties receive leadership, perk, policy, clan-tier, and Steward party-size effects when they have a clan leader and are not caravans. Villager parties add `40`. The player's caravan uses `30/10` for elite/ordinary parties, or `46/33` when it has naval navigation capability. A non-player caravan adds `10/20/30` according to a notable owner's Power band. A party at sea also applies each ship's `CrewCapacityBonusFactor`; this is a factor, not a direct single-slot addition.

The real read path is:

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

MobileParty party = MobileParty.MainParty;
PartySizeLimitModel model = Campaign.Current.Models.PartySizeLimitModel;
ExplainedNumber limit = model.GetPartyMemberSizeLimit(
    party.Party, includeDescriptions: true);
int freeSlots = Math.Max(0,
    (int)limit.ResultNumber - party.Party.NumberOfAllMembers);
```

`party.Party.PartySizeLimit` and `PartySizeLimitExplainer` use this model entry point. Changing the calculated result does not automatically make room in an existing roster; real roster mutations must use the supported party APIs so the cache version is invalidated correctly.

### `GetPartyPrisonerSizeLimit`

#### Settlement prisoners

A settlement starts with prisoner capacity `60`. Each wall level above zero adds `40`; a fortification then receives `PrisonCapacity` building effects.

#### Mobile-party prisoners

A mobile party starts at `10`, adds half its current healthy-member count using integer division, and then applies leader perks: `TwoHanded.Terror`, `Athletics.Stamina` on land, `Roguery.Manhunter`, and `Scouting.VantagePoint`. Do not substitute member capacity for prisoner capacity; their UI, transfer, and cache paths are separate.

### `CalculateGarrisonPartySizeLimit`

Garrison capacity starts at `200` and applies the settlement owner clan leader's `LeadershipGarrisonSizeBonus`. A town adds another `200`. A fortification can then add `CorpsACorps`, `VeteransRespect`, and `GarrisonCapacity` building effects. The result is an `ExplainedNumber`, allowing garrison recruitment to expose leader and building effects instead of producing an unexplained integer.

### Clan tier, lord estimates, and ideal villager size

`GetClanTierPartySizeEffectForHero` uses this rule: tier below 1 contributes 0; an ordinary clan member contributes `15` per tier; a clan leader contributes `25` per tier. `GetNextClanTierPartySizeEffectChangeForHero` subtracts the current total from the next-tier total, which is suitable for displaying the upgrade delta. `GetAssumedPartySizeForLordParty` starts at `20`, applies leader, faction, and actual-clan effects, then adds Steward skill based on the leader's current skill. It estimates a lord party; it does not force an existing roster to that size.

`GetIdealVillagerPartySize` sums daily production across `VillageType.Productions`. At production up to 10 the hearth denominator is 40; above 10 it decreases according to the source formula. The returned shape is:

```text
12 + (int)(village.Hearth / productionBasedDenominator)
```

Villager behavior uses this as a replenishment target. It does not replace `FindAppropriateInitialRosterForMobileParty`.

## Creation-time rosters and ships

`FindAppropriateInitialRosterForMobileParty` creates a dummy `TroopRoster`. It chooses an initial ratio first: a bandit uses player progress or a random low/high sea-template branch, the player's own caravan and patrol use `1.0`, and other parties use `party.RandomFloat()`. Each `PartyTemplateStack` is randomly rounded between `MinValue` and `MaxValue`; a villager governor with `Scouting.VillageNetwork` can scale its stack; only positive counts are added to the returned roster.

```csharp
public TroopRoster GetInitialRoster(
    MobileParty party, PartyTemplateObject template)
{
    return Campaign.Current.Models.PartySizeLimitModel
        .FindAppropriateInitialRosterForMobileParty(party, template);
}
```

This method does **not** write to the party. The official `MobileParty` creation path later walks the returned roster, calls its own `MemberRoster.AddToCounts`, and reads ships as well. Do not rebuild a roster outside creation on every tick: that duplicates troops and destabilizes random and save state.

`FindAppropriateInitialShipsForMobileParty` applies the same ratio logic to each `ShipTemplateStack`, creates `new Ship(shipHull.ShipHull)` for every selected hull, and returns a `List<Ship>`. It returns an empty list when the template has no hulls. In v1.4.5, a naval party creation path must not discard this result.

## Replacing the default model

Register a subclass from `SubModule.InitializeGameStarter`. If you only need one member-capacity adjustment, inherit the default implementation and let `base` retain all clan, perk, sea, and cache-related behavior:

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public sealed class MyPartySizeLimitModel : DefaultPartySizeLimitModel
{
    public override ExplainedNumber GetPartyMemberSizeLimit(
        PartyBase party, bool includeDescriptions = false)
    {
        ExplainedNumber result = base.GetPartyMemberSizeLimit(
            party, includeDescriptions);
        result.Add(5f, new TextObject("{=my_party_bonus}My party bonus"));
        return result;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartySizeLimitModel());
}
```

If you need to wrap an already registered `PartySizeLimitModel`, use `CampaignGameStarter.AddModel<T>(MBGameModel<T>)` so the framework injects `BaseModel`. Do not read the replaced `Campaign.Current.Models.PartySizeLimitModel` from inside the replacement. Register the model during starter setup; adding one during the campaign is too late.

## Risks and crash boundaries

1. **Member/prisoner confusion:** check `PartySizeLimit` and `PrisonerSizeLimit` separately before recruitment or transfer; increasing one does not increase the other.
2. **Stale cache:** `PartyBase` caches limits. After changing roster, clan tier, or ships, use supported state APIs that invalidate the cache instead of recalculating once and assuming the party changed.
3. **Wrong creation timing:** initial roster/ships are creation-time results, not a recurring adjustment tool. Invalid template ratios can also reach the source assertion.
4. **Missing context:** the title screen and module-loading phase may have no `Campaign.Current`, settlement owner, or active model. Read from a post-start behavior or flow and guard version-specific contexts.
5. **Sea branch omitted:** ship crew factors, caravan sea capacity, and initial ships are required v1.4.5 paths; a land-only override is incomplete.
6. **Direct field writes:** an `ExplainedNumber` does not change the world. Party, prisoner, ship, and clan-progression mutations must return to their roster, Action, or Behavior entry points.

## Version note

The v1.3.15 and v1.4.5 default implementations retain the same base constants, clan-tier formula, garrison/prisoner branches, template-randomization algorithm, and sea-party ship-capacity/initial-ship paths. When targeting a specific version, still check its `PartySizeLimitModel` interface and `MobileParty` creation flow rather than implementing only the land branches.

## See also

- [Campaign-ext Models family](../models/)
- [`PartySizeLimitModel`](../PartySizeLimitModel)
- [`PartyBase`](../../campaign/PartyBase)
- [`MobileParty`](../../campaign/MobileParty)
- [`Settlement`](../../campaign/Settlement)
- [`Village`](../../campaign/Village)
- [`PartyTemplateObject`](../PartyTemplateObject)
- [`TroopRoster`](../TroopRoster)
- [`DefaultClanTierModel`](../DefaultClanTierModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
- [`GameModels`](../GameModels)
- [`SandBoxManager`](../SandBoxManager)
