---
title: "CaravanPartyComponent"
description: "CaravanPartyComponent is the party component for owned caravans and convoys, coordinating trade setup, settlement ownership, leader state, and visual cargo."
---
# CaravanPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CaravanPartyComponent : PartyComponent`  
**Base:** [PartyComponent](../PartyComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CaravanPartyComponent.cs`

## One-sentence responsibility

It represents an owned caravan or convoy and performs its creation-time trade, leader, item, navigation, ownership, and settlement registration work.

## Mental Model

The component is the campaign identity of a caravan; the `MobileParty` remains the moving party with rosters, trade gold, position, and map state. `Owner`, `Settlement`, `_leader`, and `IsElite` describe the caravan, while `OnInitialize` adds the component to `Owner.OwnedCaravans` and `OnFinalize` removes it.

`CreateCaravanParty` decides whether the template is naval from `ShipHulls`, creates at the settlement's port or gate, disables land navigation for naval templates, adds a supplied leader or the culture's caravan master, and fills the item roster from supplied items or the cheapest available pack animal. It also initializes trade gold, orders the caravan toward its settlement when no map event or siege blocks that move, and publishes the caravan-leader busy event.

## When to use and when not to use

- Read `mobileParty.CaravanPartyComponent` for owner, home settlement, leader, elite status, and visual mount/harness policy.
- Use `CreateCaravanParty` when a campaign behavior really creates a caravan; use `TransferCaravanOwnership` for an ownership change that must preserve party trade gold.
- Use `ChangeHomeSettlement` only for a deliberate home-settlement update; it changes the component property but does not itself re-run the creation route.
- Use `ConvertPartyToCaravanParty` only for a controlled party reclassification; it also publishes the leader busy event when a leader exists.
- Do not create a caravan with an arbitrary troop template and assume the component will repair it. Naval mode, caravan master, pack animals, trade gold, and settlement entry all depend on the supplied inputs and campaign models.

## Dependencies

```text
Hero owner + spawn Settlement + caravan PartyTemplateObject
  -> CaravanPartyComponent.CreateCaravanParty
  -> MobileParty creation callback and trade initialization
  -> Owner.OwnedCaravans registration
  -> caravan movement, settlement entry, and save state
```

- Host: [MobileParty](../MobileParty) owns the component, roster, and party trade gold.
- Identity: [Hero](../Hero), [Settlement](../Settlement), and [PartyTemplateObject](../PartyTemplateObject) supply owner, home, and troop/ship data.
- Campaign models/actions: `CaravanModel.GetInitialTradeGold` and [EnterSettlementAction](../../campaign-ext/EnterSettlementAction) participate in creation.
- Events: `CampaignEventDispatcher` marks a caravan leader busy with `BecomeCaravanLeader`.
- Shared contract: [PartyComponent](../PartyComponent) supplies leader and lifecycle callbacks.

## State and operations

| Member | Meaning and timing |
|---|---|
| `Settlement` | Saveable home settlement. It is used for spawn location and the caravan's home relationship. |
| `Owner` | Saveable Hero owner and source for party ownership and name fallback. |
| `Leader` | Optional saveable caravan leader. Creation adds it to the roster or falls back to the culture's caravan master. |
| `IsElite` | Saveable elite/armed-caravan mode used by name selection and creation behavior. |
| `Name` | Lazily caches land caravan, armed caravan, convoy, or armed convoy text based on elite and naval state. |
| `CanHaveNavalNavigationCapability` / `CanHaveLandNavigationCapability` | Reflect the bound party's actual navigation capabilities; they are not independent switches. |
| `CreateCaravanParty` | Creates the party, fills its roster/items, initializes trade gold, sets movement or hold state, and publishes leader busy state. |
| `ConvertPartyToCaravanParty` | Replaces the component on an existing party and publishes leader busy state when applicable. |
| `TransferCaravanOwnership` | Converts ownership while preserving `PartyTradeGold`. |
| `ChangeHomeSettlement` | Reassigns the saved home settlement without rebuilding the caravan. |
| `GetMountAndHarnessVisualIdsForPartyIcon` | Chooses camel or mule cargo visuals from faction culture and party index. |

## Real example

The campaign conversation path acquires a real culture template and creates a caravan for the current settlement:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Hero owner = Hero.MainHero;
Settlement settlement = Settlement.CurrentSettlement;
PartyTemplateObject template = owner.Culture.CaravanPartyTemplates[0];

MobileParty caravan = CaravanPartyComponent.CreateCaravanParty(
    owner,
    settlement,
    template,
    isInitialSpawn: false);
```

The source `CaravansCampaignBehavior` chooses a template whose ship-hull mode matches the selected spawn settlement before calling the same factory. A mod should make the same land/naval compatibility check instead of blindly using the first template.

## Risks and save boundaries

- `templateObject.ShipHulls` determines whether the caravan spawns at a port and loses land access. Passing a template incompatible with the settlement can create the wrong navigation state.
- Creation initializes trade gold from `Campaign.Current.Models.CaravanModel`, may call `EnterSettlementAction`, and emits a leader-busy event. It is not safe to call every tick or while a caravan already exists.
- `OnInitialize` and `OnFinalize` maintain `Owner.OwnedCaravans`. Replacing ownership outside `TransferCaravanOwnership` can leave the old owner's collection stale.
- `TransferCaravanOwnership` preserves trade gold explicitly; a raw component replacement would lose that handoff behavior.
- `ChangeHomeSettlement` only changes the component property. It does not move the party, reinitialize items, or update all external campaign decisions.
- The component's saveable owner, settlement, leader, and elite state must agree with the bound party; Agent or scene references do not belong here.

## Version note

This page follows v1.4.5 `CaravanPartyComponent`, `CaravansCampaignBehavior`, `CaravanConversationsCampaignBehavior`, and the caravan trade/settlement call sites. Naval template fields and ownership events are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [PartyComponent](../PartyComponent) · [LordPartyComponent](../LordPartyComponent) · [CustomPartyComponent](../CustomPartyComponent) · [BanditPartyComponent](../BanditPartyComponent)
- Related: [MobileParty](../MobileParty) · [Hero](../Hero) · [Settlement](../Settlement) · [PartyTemplateObject](../PartyTemplateObject) · [EnterSettlementAction](../../campaign-ext/EnterSettlementAction)
