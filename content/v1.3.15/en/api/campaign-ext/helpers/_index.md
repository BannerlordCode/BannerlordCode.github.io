---
title: "Helpers Family Handbook"
description: "Campaign calculation, navigation, UI, and content helpers in TaleWorlds.CampaignSystem.Helpers."
weight: 20
---

# Helpers Family Handbook

**Responsibility:** `Helpers` is the campaign-layer utility boundary. It turns existing `Hero`, `MobileParty`, `Settlement`, `ItemObject`, or UI state into navigation, economy, presentation, and flow decisions; it normally owns none of those objects and does not replace a world-state `Action`.

## Mental model

Treat this namespace as calculation and flow utilities around live state, not as a service that can be registered or saved. `AiHelper`, `DistanceHelper`, `NavigationHelper`, and `SettlementHelper` read the map and models exposed by `Campaign.Current`; `HeroHelper`, `PartyBaseHelper`, `ItemHelper`, and `SkillHelper` read the entities passed to them; `InventoryScreenHelper`, `PartyScreenHelper`, `PortStateHelper`, and `CraftingHelper` move `Game.Current.GameStateManager` into a presentation state. The caller owns the campaign, map, and UI lifecycle checks.

Helpers do not establish persistent ownership for you. When the mod changes a hero, party, settlement, relation, or war, return to the [Actions family](../actions/). When it replaces a calculation, return to the [Models family](../models/). When it schedules work from ticks or events, return to the [Behaviors family](../behaviors/). Do not retain a Helper result as a long-lived entity reference, especially for map encounters, current settlements, or UI states.

## Dependencies

- **Upstream:** [Campaign](../../campaign/Campaign), [MobileParty](../../campaign/MobileParty), [Hero](../../campaign/Hero), [Settlement](../../campaign/Settlement), [ItemObject](../../core/ItemObject), and `Game.Current` provide the live inputs.
- **Map calculations:** `AiHelper`, `DistanceHelper`, and `NavigationHelper` depend on `Campaign.Current.Models.PartyNavigationModel`, `MapDistanceModel`, and `MapSceneWrapper`; they require an active campaign.
- **Downstream:** [CampaignEvents](../CampaignEvents), [CampaignBehaviorBase](../CampaignBehaviorBase), menu/quest UI, and the [save system](../../save-system/) consume the results. The Helper itself is not a save root.
- **Neighbors:** [Actions](../actions/), [Models](../models/), [MapEvents](../mapevents/), and [crash boundaries](../../../architecture/crash-boundaries).

## When to use and when not to

Use Helpers for the game's existing navigation, distance, equipment comparison, skill bonus, campaign text, and presentation flows. Do not call map-model or UI-state helpers from a per-frame Mission callback, and do not call them while `Campaign.Current`, `Game.Current`, or the target entity is outside its lifecycle. A few helpers, such as `BuildingHelper`, `EquipmentHelper`, and `MobilePartyHelper`, mutate runtime state; choose the corresponding Action, Behavior, or initialization phase before calling them.

## Types and typical timing

| Namespace | Type | Purpose | Timing |
|---|---|---|---|
| Helpers | [AIDifficulty](../AIDifficulty) | Selects Easy, Normal, or Hard AI for board games; it is a match setting, not the campaign difficulty switch. | Board-game setup |
| Helpers | [AiHelper](../AiHelper) | Chooses land/sea navigation capability and adjusted distance between mobile parties or a party and settlement. | Map path or AI target evaluation |
| Helpers | [AlleyHelper](../AlleyHelper) | Opens the alley-management screen and builds the clan-member selection for an alley. | Alley management confirmation |
| Helpers | [BannerHelper](../BannerHelper) | Selects banner items for heroes and adds banner effects to an explained number. | Hero equipment/effect calculation |
| Helpers | [BarterHelper](../BarterHelper) | Calculates barterables to add or remove when balancing an offer against faction values and a fulfilment ratio. | Barter quote calculation |
| Helpers | [BoardGameHelper](../BoardGameHelper) | Holds the board-game AI difficulty and Win/Loss/Draw enums. | Board-game state machine |
| Helpers | [BoardGameState](../BoardGameState) | Represents an unfinished board game, win, loss, or draw. | Board-game settlement |
| Helpers | [BuildingHelper](../BuildingHelper) | Reads building progress, tier, and completion time and exposes the official town-queue changes. | Town construction progression/UI |
| Helpers | [CaravanHelper](../CaravanHelper) | Selects a caravan template by culture, elite flag, and land/sea type. | Caravan creation or restore |
| Helpers | [CharacterHelper](../CharacterHelper) | Supplies death notification, body, pose, and facial-idle presentation helpers for characters. | Character presentation or death notification |
| Helpers | [CraftingHelper](../CraftingHelper) | Selects craftable heroes, changes the current template, and opens the crafting state. | Entering the crafting screen |
| Helpers | [DialogHelper](../DialogHelper) | Binds a dialog variable to a game-text ID for the dialog text system. | Dialog content setup |
| Helpers | [DiplomacyHelper](../DiplomacyHelper) | Queries war cause, faction survival, prisoner ownership, and alliance relationships. | Diplomacy condition or behavior decision |
| Helpers | [DistanceHelper](../DistanceHelper) | Computes reachable distances and land/sea ratios between settlements, parties, and map points. | Map range, pursuit, and AI evaluation |
| Helpers | [EmbarkDisembarkData](../EmbarkDisembarkData) | Carries transition validity, edge positions, and dead-zone direction returned by `NavigationHelper`. | One embark/disembark tick |
| Helpers | [EquipmentHelper](../EquipmentHelper) | Assigns an `Equipment`'s equipment elements to a hero. | Hero equipment initialization/replacement |
| Helpers | [FactionHelper](../FactionHelper) | Calculates potential strength, enemy kingdoms, stances, power ratios, and fief-grant conditions. | Kingdom decision and diplomacy UI |
| Helpers | [HeroHelper](../HeroHelper) | Finds last-seen text, closest settlement, command status, titles, and player-side hero ordering. | Hero list, encyclopedia, or decision UI |
| Helpers | [IncidentHelper](../IncidentHelper) | Selects a stable seeded element from a list using `MobileParty.MainParty`. | Reproducible incident sampling |
| Helpers | [InventoryCategoryType](../InventoryCategoryType) | Identifies inventory filters such as armor, weapons, shields, and goods. | Inventory-state initialization |
| Helpers | [InventoryItemType](../InventoryItemType) | Flags item categories so inventory filters can be combined. | Inventory item classification |
| Helpers | [InventoryMode](../InventoryMode) | Identifies default, trade, loot, warehouse, and stash presentation modes. | `InventoryState` creation |
| Helpers | [InventoryScreenHelper](../InventoryScreenHelper) | Creates inventory/trade/loot screens, configures `InventoryLogic`, listeners, and the pushed game state. | Main-party inventory flow |
| Helpers | [ItemHelper](../ItemHelper) | Compares weapon usages and creates weapon-damage and item-count text. | Item comparison, equipment, or tooltip creation |
| Helpers | [MapEventHelper](../MapEventHelper) | Reads raid/retreat context, identifies naval raids, and finishes encounter conversation flow. | While a `MapEvent` is active |
| Helpers | [MenuHelper](../MenuHelper) | Sets campaign-menu availability, issue/quest data, and encounter conditions/consequences. | GameMenu condition and callback phase |
| Helpers | [MiscHelper](../MiscHelper) | Provides controlled XML loading and campaign-ID generation. | Content loading or campaign identity creation |
| Helpers | [MobilePartyHelper](../MobilePartyHelper) | Spawns lord parties, creates clan parties, selects strong troops, and distributes shared XP. | Party initialization and campaign rewards |
| Helpers | [NavigationHelper](../NavigationHelper) | Uses the scene and `PartyNavigationModel` to validate terrain, find reachable points, and calculate land/sea transitions. | Map movement tick or path setup |
| Helpers | [PartyBaseHelper](../PartyBaseHelper) | Sorts rosters, formats party-size text, finds captains, and prints roster summaries. | Party or inventory presentation |
| Helpers | [PartyScreenHelper](../PartyScreenHelper) | Creates and closes PartyScreen flows for cheat, management, ransom, and loot modes. | Main-party party-management screen |
| Helpers | [PartyScreenMode](../PartyScreenMode) | Identifies the business mode of the current PartyScreen. | PartyScreen state transition |
| Helpers | [PerkHelper](../PerkHelper) | Clears hero perks and adds character, captain, party, or town perk bonuses to an explained number. | Model-derived value calculation |
| Helpers | [PersuasionHelper](../PersuasionHelper) | Converts a persuasion option result into player feedback and a default reaction. | After a persuasion option resolves |
| Helpers | [PortStateHelper](../PortStateHelper) | Opens port states for trade, loot, story mode, or fleet management. | Port interaction confirmation |
| Helpers | [QuestHelper](../QuestHelper) | Checks gold, roster, and skill requirements for quest alternatives and applies generic coercion consequences. | Quest condition and resolution |
| Helpers | [SettlementHelper](../SettlementHelper) | Finds the nearest town, village, hideout, or fortification for a navigation capability and predicate. | Map task, movement, or spawn setup |
| Helpers | [ShipHelper](../ShipHelper) | Builds ship banners from a ship origin or party and orders the player's naval-raid ships. | Naval grouping and presentation |
| Helpers | [SkillHelper](../SkillHelper) | Adds skill-level, character, party, or town SkillEffect bonuses to an explained number. | Character/party/town model calculation |
| Helpers | [StringHelpers](../StringHelpers) | Fills character, settlement, and effect data into `TextObject` variables and formats names. | Before text-template rendering |
| Helpers | [TeleportationHelper](../TeleportationHelper) | Calculates the remaining travel hours for a teleporting hero. | Teleport progress and map notice |
| Helpers | [TooltipHelper](../TooltipHelper) | Builds tooltip properties for encounter and siege send-troops power contexts. | Map tooltip presentation |
| Helpers | [TownHelpers](../TownHelpers) | Finds heroes available for town meetings and calculates equipment price deviation data. | Town menu and trade UI |

## Real acquisition paths

### Start map queries from the active main party

`SettlementHelper` and `NavigationHelper` take real campaign objects, not service placeholders. In v1.3.15 and v1.4.5, `MobileParty.NavigationType.All` means a party can use both land and naval navigation. The town result may be `null`, so the caller keeps that branch.

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

MobileParty party = MobileParty.MainParty;
Town nearestTown = SettlementHelper.FindNearestTownToMobileParty(
    party,
    MobileParty.NavigationType.All);

if (nearestTown != null)
{
    CampaignVec2 point = NavigationHelper.FindPointAroundPosition(
        nearestTown.Settlement.GatePosition,
        MobileParty.NavigationType.Default,
        maxDistance: 5f,
        requirePath: true);
}
```

### Text, seeded incidents, and town meetings

`IncidentHelper` deliberately uses the seeded random method on `MobileParty.MainParty`, so a save and seed can reproduce a choice; it is not cryptographic randomness. A town meeting starts from the main party's current settlement, and a completed `MapEvent` must not be kept as a long-lived source of campaign state.

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem;

Settlement settlement = MobileParty.MainParty.CurrentSettlement;
if (settlement != null && settlement.IsTown)
{
    var heroes = TownHelpers.GetHeroesToMeetInTown(settlement);
    Hero selected = IncidentHelper.GetSeededRandomElement(
        heroes.ToList(),
        seed: 42L);
}
```

## Crash, save, and thread boundaries

- Map Helpers depend on `Campaign.Current`, the map scene, and campaign Models. Calling them at the title screen, during early module loading, or after a campaign ends can produce null state or invalid `CampaignVec2` values.
- `InventoryScreenHelper`, `PartyScreenHelper`, `PortStateHelper`, and `CraftingHelper` create or push a `GameState`. Do not push them from a background thread or repeatedly from a frame callback; let the official state manager finish the close path.
- `BuildingHelper`, `EquipmentHelper`, `MobilePartyHelper`, and the perk/skill entry points can affect runtime state or derived caches. Cross-save state belongs to its owning Behavior/Saveable type, never to the Helper.
- `MapEventHelper` results only make sense during the encounter lifecycle. Store stable hero, party, or settlement identity instead of retaining a transient event reference.
- Using a Helper result to bypass [Actions](../actions/) and write hero, party, or settlement fields skips events, caches, and relation synchronization. The usual symptoms are stale UI, inconsistent old saves, or a later tick crash.

## Navigation and related pages

- **Parent:** [campaign-ext API](../)
- **Sibling families:** [Actions](../actions/), [Models](../models/), [Behaviors](../behaviors/), [MapEvents](../mapevents/)
- **Upstream entities:** [Campaign](../../campaign/Campaign), [MobileParty](../../campaign/MobileParty), [Hero](../../campaign/Hero), [Settlement](../../campaign/Settlement)
- **Risk guide:** [Crash boundaries](../../../architecture/crash-boundaries)
- **Module map:** [campaign-ext overview](../)
