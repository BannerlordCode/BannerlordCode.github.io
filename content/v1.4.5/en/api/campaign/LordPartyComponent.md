---
title: "LordPartyComponent"
description: "LordPartyComponent is the war-party component for hero-led MobileParty instances, including owner, leader, wage limit, and spawn initialization."
---
# LordPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class LordPartyComponent : WarPartyComponent`  
**Base:** [WarPartyComponent](../WarPartyComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/LordPartyComponent.cs`

## One-sentence responsibility

It makes a `MobileParty` a hero-led war party and coordinates the owner's identity, leader, wage limit, spawn roster, clan, and home settlement.

## Mental Model

`LordPartyComponent` is the component behind a clan lord's map party, not the `Hero` itself and not the party roster. The saved `Owner` and `_leader` fields determine the party identity, while `MobileParty` owns the roster, map position, and battle state. `PartyOwner`, `HomeSettlement`, `Name`, and `WagePaymentLimit` are derived or cached views over that relationship.

The creation callback initializes the party differently for the player clan and other clans. It adds the owner to the roster, places the player-clan party at an exact position, otherwise uses the owner's clan template around the position, adds grain, and optionally orders the party toward a spawn settlement. `ChangePartyLeader` comes from [PartyComponent](../PartyComponent): it first requires the new Hero to be in the member roster, then this class updates `_leader`; a non-null new leader also becomes the owner.

## When to use and when not to use

- Read `MobileParty.LordPartyComponent` for the owner, leader, wage limit, and lord-party-specific home settlement.
- Use `CreateLordParty` for a new hero party and `ConvertPartyToLordParty` only when a controlled campaign flow reclassifies an existing party.
- Use the inherited `ChangePartyLeader` after adding the new Hero to `MemberRoster`; do not assign a leader field or owner field directly.
- Use `ChangePartyOwner` only from the campaign action that changes the main character or another authorized owner transition; it is internal.
- Do not treat `Name` as a stable identifier. It is localized and cached from the owner, and changing owner/leader invalidates it.

## Dependencies

```text
Hero owner + Clan + optional spawn Settlement
  -> LordPartyComponent.CreateLordParty
  -> MobileParty.CreateParty / creation callback
  -> owner roster, clan, grain, position and movement setup
  -> Lord party events, map AI and save reconstruction
```

- Host: [MobileParty](../MobileParty) owns the component and its roster.
- Identity: [Hero](../Hero), [Clan](../Clan), and [Settlement](../Settlement) supply owner, clan template, home, and spawn destination.
- Shared contract: [PartyComponent](../PartyComponent) validates leader changes and dispatches `OnPartyLeaderChanged`.
- Persistence: `Owner`, leader, and wage limit are saveable fields; cached name and initialization arguments are runtime data.
- Mutation examples: [ChangePlayerCharacterAction](../../campaign-ext/ChangePlayerCharacterAction) and campaign startup convert the main party through `ConvertPartyToLordParty`.

## State and operations

| Member | Meaning and timing |
|---|---|
| `Owner` | Saveable Hero owner and party identity. It is also the source of `PartyOwner` and `HomeSettlement`. |
| `Leader` | Current lord-party leader. The inherited leader-change boundary can also change `Owner` when the new leader is non-null. |
| `WagePaymentLimit` | Saveable per-party limit, initially copied from `PartyWageModel.MaxWagePaymentLimit`. |
| `CanHaveNavalNavigationCapability` | Always `true`; actual movement still depends on the bound party and its current navigation state. |
| `Name` | Lazily builds the localized lord-party name from the owner and caches it. |
| `CreateLordParty` | Creates a party with a source-derived ID and deferred initialization arguments. It appends `_party_1` to the supplied string ID. |
| `ConvertPartyToLordParty` | Replaces the component on an existing party with the supplied owner and leader. |
| `SetWagePaymentLimit` | Updates the component's saved wage limit. |
| `ClearCachedName` | Invalidates the cached localized name after identity changes. |

## Real example

The existing main party is the safest acquisition path when a behavior needs to inspect a lord component:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;

MobileParty party = MobileParty.MainParty;
LordPartyComponent lord = party?.LordPartyComponent;

if (lord != null)
{
    Hero owner = lord.Owner;
    Hero leader = lord.Leader;
    Settlement home = lord.HomeSettlement;
    int wageLimit = lord.WagePaymentLimit;
}
```

Campaign startup uses `LordPartyComponent.ConvertPartyToLordParty(MainParty, Hero.MainHero, Hero.MainHero)` to establish the main party's component. A new lord party is created through `CreateLordParty`, not by constructing the protected component.

## Risks and save boundaries

- The initial wage field reads `Campaign.Current.Models.PartyWageModel`; constructing a lord component before campaign models exist is invalid.
- `ChangePartyLeader` rejects a Hero absent from `MemberRoster` and leaves the old leader unchanged. A successful non-null leader change also changes owner in this implementation.
- Owner and leader are separate saved values, but the leader hook can synchronize them. Do not update one through reflection or raw fields.
- Creation adds the owner and grain, changes `ActualClan`, aggressiveness, position, and optional movement. Treat the factory as a campaign mutation.
- After a party is finalized or its Hero dies, the component can remain in save reconstruction paths while the `MobileParty` is inactive. Check party activity before map operations.

## Version note

This page follows v1.4.5 `LordPartyComponent`, `PartyComponent.ChangePartyLeader`, `Campaign` main-party setup, and `ChangePlayerCharacterAction`. Owner/leader synchronization and spawn rules are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [PartyComponent](../PartyComponent) · [CaravanPartyComponent](../CaravanPartyComponent) · [BanditPartyComponent](../BanditPartyComponent) · [CustomPartyComponent](../CustomPartyComponent)
- Related: [MobileParty](../MobileParty) · [Hero](../Hero) · [Clan](../Clan) · [Settlement](../Settlement)
