---
title: "BanditPartyComponent"
description: "BanditPartyComponent is the war-party component used for hideout bandits and settlement-related looter parties, including their hideout, boss flag, and spawn initialization."
---
# BanditPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BanditPartyComponent : WarPartyComponent`  
**Base:** [WarPartyComponent](../WarPartyComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/BanditPartyComponent.cs`

## One-sentence responsibility

It gives a bandit or looter `MobileParty` its hideout or related-settlement identity, boss status, clan ownership, and creation-time troop initialization.

## Mental Model

The same component represents two closely related party categories. `CreateBanditParty` stores a [Hideout](../Hideout) and resolves `HomeSettlement` from that hideout; `CreateLooterParty` stores a related [Settlement](../Settlement) instead. The mutually exclusive constructor paths are why `HomeSettlement` must be read through the component rather than inferred from `MobileParty.StringId`.

Creation is a two-stage operation. The static factory creates a `MobileParty` with a component and an internal `InitializationArgs`; the `PartyComponent` lifecycle then binds the party, sets `ActualClan`, and initializes either a supplied [PartyTemplateObject](../PartyTemplateObject) or empty troop/prisoner rosters at the requested position. Conversion methods replace the component on an existing party and therefore cross the party classification boundary.

## When to use and when not to use

- Read `mobileParty.BanditPartyComponent` when a behavior needs the hideout, related settlement, boss flag, or bandit-specific home location.
- Use `CreateBanditParty` for a hideout party and `CreateLooterParty` for a settlement-related looter; let the factory own `MobileParty.CreateParty` and creation initialization.
- Use `SetHomeHideout` when a hideout changes. It publishes `OnHomeHideoutChanged` when the reference actually changes.
- Do not construct the component directly; its constructors are protected and its initialization assumes a campaign party lifecycle.
- Do not use `CreateBanditParty` for a temporary quest group merely because it has bandit troops. `CustomPartyComponent` is the source-backed type for quest-specific parties without hideout identity.

## Dependencies

```text
Hideout or related Settlement + Clan + PartyTemplateObject
  -> BanditPartyComponent factory
  -> MobileParty.CreateParty / PartyComponent creation callback
  -> ActualClan + roster initialization
  -> MobileParty bandit/looter classification and party behavior
```

- Host: [MobileParty](../MobileParty) binds and exposes the component.
- Identity: [Hideout](../Hideout), [Settlement](../Settlement), [Clan](../Clan), and [PartyTemplateObject](../PartyTemplateObject) supply home, faction, and troops.
- Classification: `ConvertPartyToBanditParty` and `ConvertPartyToLooterParty` call `MobileParty.SetPartyComponent`; this is a party-type change, not a field assignment.
- Observation: [CampaignEvents](../CampaignEvents) receives the home-hideout change event.
- Alternative: [CustomPartyComponent](../CustomPartyComponent) describes quest-created custom groups that should not become hideout parties.

## State and operations

| Member | Meaning and timing |
|---|---|
| `Hideout` | The saved hideout identity for a bandit party. It is null on a looter instance that uses the related-settlement path. |
| `IsBossParty` | Saved boss-party flag selected by the factory; it does not itself add a boss troop or start a hideout encounter. |
| `HomeSettlement` | Returns `Hideout.Settlement` when `Hideout` exists, otherwise the saved related settlement. |
| `PartyOwner` | Reads `MobileParty.ActualClan?.Leader`; it is meaningful only after the party has been bound and its clan assigned. |
| `CreateBanditParty` / `CreateLooterParty` | Create and initialize a new party at a position. A non-null template fills the party; a null template creates empty troop and prisoner rosters. |
| `ConvertPartyToBanditParty` / `ConvertPartyToLooterParty` | Replace the component on an existing party. Use only when the owning campaign flow intends to reclassify that party. |
| `SetHomeHideout` | Changes the hideout and dispatches `OnHomeHideoutChanged` only when the old and new references differ. |
| `ClearCachedName` | Invalidates the cached map name after a faction or identity change. |

## Real example

The SandBox bandit-spawn path supplies a real clan, hideout, template, and gate position. A mod behavior can follow the same acquisition path after confirming the settlement actually has a hideout:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
Hideout hideout = settlement?.Hideout;
Clan clan = Clan.BanditFactions.First(
    faction => faction.Culture == settlement.Culture);

if (hideout != null)
{
    MobileParty party = BanditPartyComponent.CreateBanditParty(
        "mod_bandit_party_1",
        clan,
        hideout,
        isBossParty: false,
        clan.DefaultPartyTemplate,
        settlement.GatePosition);
}
```

For a deserter-style looter, the source instead calls `CreateLooterParty` with a related settlement and no hideout. Do not use both home representations for one component instance.

## Risks and save boundaries

- The factory reads campaign models and initializes rosters through `MobileParty`; calling it before campaign object and party systems are ready can leave an invalid party or fail during creation.
- `Hideout` and the private related settlement represent different construction paths. Moving a looter into a hideout requires the explicit conversion path and its campaign side effects, not just assigning a property.
- `SetHomeHideout` dispatches a campaign event. Call it on the game thread and do not retain a stale hideout reference after settlement destruction.
- `IsBossParty` is saved metadata, not proof that the party has a boss troop. Spawn code must still choose the correct template and encounter flow.
- Replacing a component bypasses neither party cleanup nor campaign classification. Use the corresponding conversion method and the owning behavior's cleanup path.

## Version note

This page follows v1.4.5 `BanditPartyComponent`, `BanditSpawnCampaignBehavior`, `DesertersCampaignBehavior`, and hideout settlement call sites. Factory identifiers, boss semantics, and party initialization may change across versions.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [PartyComponent](../PartyComponent) · [CaravanPartyComponent](../CaravanPartyComponent) · [LordPartyComponent](../LordPartyComponent) · [CustomPartyComponent](../CustomPartyComponent)
- Related: [MobileParty](../MobileParty) · [Hideout](../Hideout) · [Settlement](../Settlement) · [CampaignEvents](../CampaignEvents)
