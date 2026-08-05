---
title: "CustomPartyComponent"
description: "CustomPartyComponent is the quest and scripted-party component for explicit names, rosters, owners, movement speed, visual cargo, and hostile-action policy."
---
# CustomPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CustomPartyComponent : PartyComponent`  
**Base:** [PartyComponent](../PartyComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CustomPartyComponent.cs`

## One-sentence responsibility

It supplies a scripted `MobileParty` with explicit name, owner, home settlement, leader, speed, mount visuals, hostile-action policy, and either a party template or supplied rosters.

## Mental Model

`CustomPartyComponent` is the escape hatch used by quest and issue behaviors for parties that are not standard lords, caravans, garrisons, militia, or bandits. The factory records the caller's identity and presentation values, then defers position and roster initialization to the `MobileParty` creation callback. It does not provide a default banner and does not automatically register the party in an owner collection.

There are two creation sources. The party-template overload initializes around a position with a `PartyTemplateObject`; the troop-roster overload initializes from explicit member and prisoner rosters. The overload that accepts a leader calls `AddHeroToPartyAction.Apply` after creation, so it has a stronger roster side effect than the overload without a leader.

## When to use and when not to use

- Use the custom factories for a quest party whose identity and roster are controlled by the quest behavior.
- Use `CreateCustomPartyWithPartyTemplate` when the source data is a real party template; use `CreateCustomPartyWithTroopRoster` when the behavior owns explicit rosters.
- Use `SetBaseSpeed` to change speed through the component so the party version number is updated.
- Use `ConvertPartyToCustomParty` only to intentionally reclassify an existing party and preserve the custom identity inputs.
- Do not use this type as a generic replacement for a caravan, lord, or garrison. Those concrete components own additional events, collections, settlement back-references, and cleanup.
- Do not pass a leader to the leader overload unless the leader should actually be added through `AddHeroToPartyAction`.

## Dependencies

```text
Quest name/owner/home + PartyTemplateObject or TroopRoster data
  -> CustomPartyComponent factory
  -> MobileParty.CreateParty / initialization callback
  -> explicit party state and roster
  -> quest tracking, map behavior, and save reconstruction
```

- Host: [MobileParty](../MobileParty) owns the component and map party state.
- Inputs: [Settlement](../Settlement), [Clan](../Clan), [Hero](../Hero), [PartyTemplateObject](../PartyTemplateObject), and [TroopRoster](../TroopRoster) supply scripted identity and troops.
- Leader side effect: [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction) is called by the leader overload.
- Shared contract: [PartyComponent](../PartyComponent) binds the component and routes leader changes.
- Quest cleanup: the creating quest behavior remains responsible for tracking and destroying the party when its story ends.

## State and operations

| Member | Meaning and timing |
|---|---|
| `CustomPartyBaseSpeed` / `BaseSpeed` | Saved custom speed. The setter updates the bound party's version number when a party already exists. |
| `AvoidHostileActions` | Saved policy exposed through the base contract; it does not disable every form of AI or battle participation. |
| `PartyOwner` / `Leader` / `HomeSettlement` | Read the explicit owner, leader, and home values supplied to the factory; any can be null by design. |
| `Name` | Returns the explicit `TextObject`; it is not generated from the owner or settlement. |
| `CreateCustomPartyWithPartyTemplate` | Creates a party with deferred template initialization; the leader overload also applies `AddHeroToPartyAction`. |
| `CreateCustomPartyWithTroopRoster` | Creates a party with deferred explicit member and prisoner roster initialization. |
| `ConvertPartyToCustomParty` | Replaces an existing component with explicit custom identity and movement settings. |
| `SetBaseSpeed` | Changes the saved speed and calls `MobileParty.UpdateVersionNo` when bound. |
| `GetMountAndHarnessVisualIdsForPartyIcon` | Returns the caller-supplied mount and harness IDs without deriving faction visuals. |
| `GetDefaultComponentBanner` | Returns null; callers must provide another presentation fallback if a banner is required. |

## Real example

Quest issue code uses dummy rosters for a scripted party and then fills the roster according to its own objective:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

Settlement settlement = Settlement.CurrentSettlement;
TextObject name = new TextObject("{=quest_party}Quest Party");
MobileParty party = CustomPartyComponent.CreateCustomPartyWithTroopRoster(
    settlement.GatePosition,
    1f,
    settlement,
    name,
    settlement.OwnerClan,
    TroopRoster.CreateDummyTroopRoster(),
    TroopRoster.CreateDummyTroopRoster(),
    Hero.MainHero,
    customPartyBaseSpeed: 4f,
    avoidHostileActions: true);
```

The creating quest must then populate, track, hide, move, and destroy the party according to its own lifecycle. The component only establishes the party contract.

## Risks and save boundaries

- The factories use the source's fixed quest-party ID and are intended for controlled quest flows. Do not use them as an uncoordinated general-purpose party spawner.
- `SetBaseSpeed` updates the party version only when `MobileParty` is already bound. Changing the value before creation and after creation are different lifecycle cases.
- A null owner, home settlement, clan, or leader can be valid for a scripted group, but downstream campaign code must tolerate that shape. Do not assume `PartyOwner` is non-null.
- The leader overload adds the Hero through an Action. Calling it with a Hero already owned by another party can trigger the normal party membership rules and side effects.
- `GetDefaultComponentBanner` returns null and mount/harness IDs are caller data. Missing presentation values can affect map icons without being a party-state error.
- Custom party fields are saveable, but the quest still owns destruction and semantic cleanup. A saved quest party without its quest behavior can become an orphan.

## Version note

This page follows v1.4.5 `CustomPartyComponent` and quest/issue call sites such as `SnareTheWealthyIssueBehavior`, `RivalGangMovingInIssueBehavior`, and `SmugglersIssueBehavior`. Factory IDs and quest cleanup expectations are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [PartyComponent](../PartyComponent) · [CaravanPartyComponent](../CaravanPartyComponent) · [LordPartyComponent](../LordPartyComponent) · [BanditPartyComponent](../BanditPartyComponent)
- Related: [MobileParty](../MobileParty) · [Settlement](../Settlement) · [TroopRoster](../TroopRoster) · [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction)
