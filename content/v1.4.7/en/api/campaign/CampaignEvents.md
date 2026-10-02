---
title: "CampaignEvents"
description: "The campaign layer's only broadcast hub: 276 static properties exposing IMbEvent instances, combined with AddNonSerializedListener / ClearListeners for subscribing and unsubscribing. Derives from CampaignEventReceiver and is the one official state-notification source outside a Behavior."
---
# CampaignEvents

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** `TaleWorlds.CampaignSystem.CampaignEventReceiver`
**Source:** `TaleWorlds.CampaignSystem/CampaignEvents.cs` (declared at line 39)

## Overview

`CampaignEvents` is the campaign map layer's **only event bus**. It makes no business decisions; its entire job is turning "the world just changed" into a subscribable notification. The class has 276 public static properties, each returning an `IMbEvent<...>` or a `ReferenceIMBEvent<...>`. Internally it also has 275 `override` methods implementing `CampaignEventReceiver`, each of which `Invoke`s the matching `IMbEvent` when the engine calls the corresponding `OnXxx`.

For a modder, what matters most is the **access shape**: `CampaignEvents.XxxEvent` is not a C# `event` delegate, it is an `IMbEvent` interface. The subscription call is `AddNonSerializedListener(object owner, Action<...>)` and removal is `ClearListeners(object o)`, which clears by owner in bulk. 1.4.7 has **no** `AddListener` / `RemoveListener` — the `+=` form copied from older documentation does not compile.

Coverage is very broad: hero growth and relations, clan and kingdom creation / defection / destruction, parties and armies, quests and issues, towns and villages, battles and sieges, items and crafting, trade and prisoners, time advancement (`TickEvent` through `DailyTickEvent`), saving, character creation, dialogue, and a set of `ReferenceIMBEvent` vetoes that let you block decisions outright (`CanHeroDieEvent`, `CanHeroLeadPartyEvent`, …). Anything that means "world state changed" should be looked up here rather than polled.

## Mental Model

Treat `CampaignEvents` as **the single fact-change notification source for the campaign layer**. Five rules:

1. **Subscribe; do not poll.** To react to the player entering a settlement, subscribe to `CampaignEvents.BeforeSettlementEnteredEvent` / `SettlementEntered` / `AfterSettlementEntered` (all `IMbEvent<MobileParty, Settlement, Hero>`) rather than comparing `HomeSettlement` before and after inside `HourlyTickEvent`, which is both slower and lossy across tick boundaries.
2. **Pass `this` as owner.** `AddNonSerializedListener(this, Handler)` treats `owner` as a cleanup handle, and `ClearListeners(obj)` clears everything registered by that owner. Passing a stable `this` (your Behavior or SubModule) lets the engine strip all listeners when the object is destroyed.
3. **Separate veto hooks from after-the-fact notices.** Those prefixed `Before` (`BeforeSettlementEnteredEvent`, `BeforeMissionOpenedEvent`, `OnBeforeSaveEvent`, `OnPartyDisbandStartedEvent`, `OnCheckForIssueEvent`) let you intervene. Everything else is a post-hoc notification. Confusing the two is why "my mod tried to prevent it and it still happened" bugs exist.
4. **`ReferenceIMBEvent` is writable.** `CanHeroDieEvent`, `CanHeroLeadPartyEvent`, `CanHeroMarryEvent`, `CanHeroBecomePrisonerEvent`, `CanMoveToSettlementEvent`, `CanHaveCampaignIssuesEvent` and `IsSettlementBusyEvent` hand your callback a **mutable reference**; writing to it rewrites the engine's own decision. These are the correct entry points for adding restrictions.
5. **Mark in the callback, act on a tick.** Events fire while the engine is mutating the world, so reading the object that just changed can return an intermediate state. Set a flag and handle it in `HourlyTickEvent` or `DailyTickEvent`.

Naming has a trap: many events carry an `Event` suffix (`OnMissionStartedEvent`), others do not (`AfterMissionStarted`, `SettlementEntered`), and hero levelling is spelled with two l's, `HeroLevelledUp`. IDE completion on `CampaignEvents.` is more reliable than any document.

## When to Use / When Not To

- **Use**: to react to any campaign state change (hero growth, party transfer, town ownership, quest triggers, battle start / end, before-and-after saving).
- **Use**: to drive periodic logic — `TickEvent` (per logic frame), `QuarterHourlyTickEvent` / `HourlyTickEvent` / `DailyTickEvent` / `WeeklyTickEvent`, plus the per-object variants `HourlyTickPartyEvent`, `DailyTickSettlementEvent`, `DailyTickClanEvent` and so on.
- **Use**: to get the registration builder — `OnSessionLaunchedEvent`, `OnAfterSessionLaunchedEvent`, `OnNewGameCreatedEvent`, `OnGameEarlyLoadedEvent` and `OnGameLoadedEvent` all take a `CampaignGameStarter` you can inject Behaviors and menus into.
- **Don't**: subscribe with `+=` / `-=`. `IMbEvent` is not a delegate; `+=` does not compile.
- **Don't**: do long or cross-layer work inside a callback (for example reading `Mission.Current`). Ordering between campaign events and mission events is not guaranteed.
- **Don't**: store an `IMbEvent` handle in a static field for reuse across campaigns — the `CampaignEvents` instance is created and destroyed with the campaign.

## Member Guide

### 1. Subscription and removal API

| Member | What it is for, side effects, timing |
| --- | --- |
| `static IMbEvent<...> XxxEvent { get; }` (276 static properties in total) | Returns an event handle. The property forwards to the private static `Instance`, which reads `Campaign.Current.CampaignEvents` — **accessing it with no campaign throws an NRE**. |
| `IMbEvent<T1..T8>.AddNonSerializedListener(object owner, Action<...> action)` | Registers a listener. `owner` is the bulk-cleanup handle; `action` must match the generic arity exactly. |
| `ReferenceIMBEvent<T1..T3>.AddNonSerializedListener(object owner, ReferenceAction<...> action)` | The reference-semantics variant: the callback parameter is a mutable reference, and writes flow straight back to the event source. |
| `IMbEventBase.ClearListeners(object o)` | Clears listeners for one owner on this event. |
| `override void RemoveListeners(object obj)` | Clears that object's listeners across **all** events. The engine calls it when the campaign is destroyed. |

### 2. Time advancement

| Member | What it is for, side effects, timing |
| --- | --- |
| `TickEvent` (`IMbEvent<float>`) | Fires every logic frame with `dt`. **Extremely hot** — keep only trivial work here. |
| `QuarterHourlyTickEvent` / `HourlyTickEvent` (`IMbEvent`) | 15-minute and hourly advancement. Where most balance tweaks belong. |
| `HourlyTickPartyEvent` (`MobileParty`) / `HourlyTickSettlementEvent` (`Settlement`) / `HourlyTickClanEvent` (`Clan`) | Per-object hourly ticks, saving you a full-table sweep. |
| `DailyTickEvent` (`IMbEvent`) | Daily advancement — the standard moment for economy, hunger, injury and reputation decay. |
| `DailyTickPartyEvent` / `DailyTickTownEvent` / `DailyTickSettlementEvent` / `DailyTickHeroEvent` / `DailyTickClanEvent` | Per-object daily ticks. |
| `WeeklyTickEvent` | Weekly advancement for cross-week settlement such as markets and taxation. |
| `OnQuarterDailyPartyTick` (`IMbEvent<MobileParty>`) | Quarterly plus per-party combination tick. |
| `TickPartialHourlyAiEvent` (`IMbEvent<MobileParty>`) | Sharded AI tick, aligned with AI decision making. |
| `MissionTickEvent` (`IMbEvent<float>`) | A mirrored notification for mission-level ticks. Cross-layer logic must be careful about its ordering relative to `MissionBehavior` callbacks. |

### 3. Saving and lifecycle

| Member | What it is for, side effects, timing |
| --- | --- |
| `OnBeforeSaveEvent` / `OnSaveStartedEvent` (`IMbEvent`) | Pre-save hooks. **The last moment to detach EntityComponents and flush custom caches.** |
| `OnSaveOverEvent` (`IMbEvent<bool, string>`) | Saving finished; the first parameter is the success flag. |
| `CollectMetadataEntriesEvent` (`IMbEvent<List<KeyValuePair<string, string>>>`) | Push custom key/value pairs into save metadata (version numbers, mod lists). The standard way to stamp compatibility. |
| `OnGameEarlyLoadedEvent` / `OnGameLoadedEvent` (`IMbEvent<CampaignGameStarter>`) | Early and normal load phases, both carrying the registration builder. |
| `OnGameLoadFinishedEvent` (`IMbEvent`) | Loading fully finished — **the point at which world data is safe to use**. |
| `OnSessionLaunchedEvent` / `OnAfterSessionLaunchedEvent` (`IMbEvent<CampaignGameStarter>`) | Session launch and launch complete. The right place for a Behavior's real initialisation. |
| `OnNewGameCreatedEvent` / `OnNewGameCreatedPartialFollowUpEndEvent` (`IMbEvent<CampaignGameStarter>`) | New campaign created, and its follow-up phase completion. |
| `OnGameOverEvent` (`IMbEvent`) | Campaign failure. |
| `OnConfigChangedEvent` (`IMbEvent`) | Configuration change (resolution, language, quality). |
| `OnCharacterCreationInitializedEvent` (`IMbEvent<CharacterCreationManager>`) | Character creation manager is ready; combined with `OnCharacterCreationIsOverEvent` it lets you skip face generation. |
| `OnTutorialCompletedEvent` (`IMbEvent<string>`) / `CollectAvailableTutorialsEvent` (`IMbEvent<List<CampaignTutorial>>`) | Tutorial completion and available-tutorial collection. |

### 4. Heroes

| Member | What it is for, side effects, timing |
| --- | --- |
| `HeroLevelledUp` (`IMbEvent<Hero, bool>`) | Hero level-up; the second parameter says whether it was natural. Note the double L. |
| `HeroGainedSkill` (`IMbEvent<Hero, SkillObject, int, bool>`) | Skill gain: hero, skill, delta, whether to notify. |
| `HeroWounded` (`IMbEvent<Hero>`) | Wounding. |
| `HeroComesOfAgeEvent` / `HeroGrowsOutOfInfancyEvent` / `HeroReachesTeenAgeEvent` (`IMbEvent<Hero>`) | Growth stages. |
| `OnHeroActivatedEvent` (`Hero, Hero.CharacterStates`) / `HeroOccupationChangedEvent` (`Hero, Occupation`) | Activation and occupation change. |
| `OnPlayerMetHeroEvent` / `OnPlayerLearnsAboutHeroEvent` (`IMbEvent<Hero>`) | First meeting and learning about a hero. |
| `OnHeroChangedClanEvent` (`Hero, Clan`) | Hero switching clan. |
| `OnHeroUnregisteredEvent` (`IMbEvent<Hero>`) | Hero unregistered — **holding that Hero reference beyond this point is unsafe**. |
| `OnHeroCombatHitEvent` (`CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int`) | Map-layer melee hit record. |
| `OnHeroTeleportationRequestedEvent` (`Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail`) | Teleport request; an intervention hook. |
| `OnPlayerPartyKnockedOrKilledTroopEvent` (`IMbEvent<CharacterObject>`) | Player party attrition. |
| `OnChildConceivedEvent` (`Hero`) / `OnGivenBirthEvent` (`Hero, List<Hero>, int`) / `OnHeirSelectionRequestedEvent` (`Dictionary<Hero, int>`) / `OnHeirSelectionOverEvent` (`Hero`) | Conception, birth and succession. |
| `OnClanLeaderChangedEvent` (`Hero, Hero`) | Clan leadership change. |
| `OnHeroSharedFoodWithAnotherHeroEvent` (`Hero, Hero, float`) | Sharing food, a source of affinity. |

### 5. Clans, kingdoms and diplomacy

| Member | What it is for, side effects, timing |
| --- | --- |
| `OnClanCreatedEvent` (`Clan, bool`) / `OnClanDestroyedEvent` (`Clan`) | Clan creation and destruction. |
| `OnClanChangedKingdomEvent` (`Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool`) | Clan switching kingdom, with old and new kingdom plus action detail. |
| `OnClanDefectedEvent` (`Clan, Kingdom, Kingdom`) | Defection. |
| `OnClanInfluenceChangedEvent` (`Clan, float`) / `ClanTierIncrease` (`Clan, bool`) | Influence and clan tier. |
| `KingdomCreatedEvent` / `KingdomDestroyedEvent` (`IMbEvent<Kingdom>`) | Kingdom creation and destruction. |
| `RulingClanChanged` (`Kingdom, Clan`) | Ruling clan change. |
| `WarDeclared` (`IFaction, IFaction, DeclareWarAction.DeclareWarDetail`) | War declaration with both sides and action detail. |
| `OnAllianceStartedEvent` / `OnAllianceEndedEvent` (`Kingdom, Kingdom`) | Alliance formation and dissolution. |
| `OnCallToWarAgreementStartedEvent` / `OnCallToWarAgreementEndedEvent` (`Kingdom, Kingdom, Kingdom`) | Call-to-war agreements. |
| `OnPeaceOfferResolvedEvent` (`IFaction`) | Peace offer outcome. |
| `OnVassalOrMercenaryServiceOfferedToPlayerEvent` / `OnVassalOrMercenaryServiceOfferCanceledEvent` (`Kingdom`) | Vassalage and mercenary offers and cancellations. |
| `OnMercenaryServiceStartedEvent` / `OnMercenaryServiceEndedEvent` (`Clan, ...ServiceDetails`) | Mercenary service start and end. |
| `OnClanEarnedGoldFromTributeEvent` (`Clan, IFaction`) | Tribute income. |
| `OnMapEventContinuityNeedsUpdateEvent` (`IMbEvent<IFaction>`) | The engine requesting that encounter continuity be rebuilt. |

### 6. Settlements and towns

| Member | What it is for, side effects, timing |
| --- | --- |
| `BeforeSettlementEnteredEvent` / `SettlementEntered` / `AfterSettlementEntered` (`IMbEvent<MobileParty, Settlement, Hero>`) | The three phases of entering a settlement. **The first choice for "trigger on entering town" logic.** |
| `OnSettlementLeftEvent` (`IMbEvent<MobileParty, Settlement>`) | Leaving a settlement. |
| `OnSettlementOwnerChangedEvent` (`Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail`) | Ownership change with previous and new owner. |
| `VillageBecomeNormal` / `VillageBeingRaided` / `VillageLooted` (`IMbEvent<Village>`) | Village state transitions. |
| `IMbEvent<Village, Village>` | Population and loyalty drift between villages. |
| `TownRebelliosStateChanged` (`Town, bool`) / `RebellionFinished` (`Settlement, Clan`) / `RebelliousClanDisbandedAtSettlement` (`Settlement, Clan`) | Town rebellion flow. |
| `IMbEvent<Town, Building>` | Building state. |
| `IMbEvent<Town, Hero>` | Town garrison hero related. |
| `PrisonersChangeInSettlement` (`Settlement, FlattenedTroopRoster, Hero, bool`) | Prisoner changes in a settlement. |
| `OnHideoutSpottedEvent` (`PartyBase, PartyBase`) / `OnHideoutDeactivatedEvent` (`Settlement`) / `OnHomeHideoutChangedEvent` (`BanditPartyComponent, Hideout`) | Hideouts. |
| `IMbEvent<Settlement, FlattenedTroopRoster>` | Settlement troop changes. |

### 7. Parties, armies and map encounters

| Member | What it is for, side effects, timing |
| --- | --- |
| `MobilePartyCreated` (`MobileParty`) / `OnPartyRemovedEvent` / `OnPartySizeChangedEvent` (`PartyBase`) | Party lifecycle. |
| `OnPartyAddedToMapEventEvent` (`PartyBase`) / `NearbyPartyAddedToPlayerMapEvent` (`MobileParty`) / `PartyVisibilityChangedEvent` (`PartyBase`) | Parties entering the map or player visibility. **The standard entry point for proximity warnings.** |
| `OnPartyLeaderChangedEvent` (`MobileParty, Hero`) / `OnPartyLeaderChangeOfferCanceledEvent` (`MobileParty`) | Party leadership. |
| `OnPartyDisbandStartedEvent` (`MobileParty`) / `OnPartyDisbandCanceledEvent` (`MobileParty`) / `OnPartyDisbandedEvent` (`MobileParty, Settlement`) | The cancellable pre-hook plus after-the-fact notices for disbanding. |
| `ArmyCreated` (`Army`) / `OnPartyJoinedArmyEvent` (`MobileParty`) / `OnPartyLeftArmyEvent` (`MobileParty, Army`) / `PartyRemovedFromArmyEvent` (`MobileParty`) / `OnPlayerArmyLeaderChangedBehaviorEvent` (`IMbEvent`) | Army creation and dissolution. |
| `BanditPartyRecruited` (`MobileParty`) | Bandits recruited. |
| `PartyAttachedAnotherParty` (`MobileParty`) | A party merging into another. |
| `BattleStarted` (`PartyBase, PartyBase, object, bool`) / `MapEventEnded` (`MapEvent`) / `OnPlayerBattleEndEvent` (`MapEvent`) / `PlayerDesertedBattleEvent` (`int`) | Map-layer encounters. |
| `OnMobilePartyNavigationStateChangedEvent` / `OnMobilePartyRaftStateChangedEvent` (`MobileParty`) | Navigation and raft state. |
| `OnTroopsDesertedEvent` (`MobileParty, TroopRoster`) / `OnTroopRecruitedEvent` (`Hero, Settlement, Hero, CharacterObject, int`) / `OnTroopGivenToSettlementEvent` (`Hero, Settlement, TroopRoster`) | Troop movement. |
| `PlayerUpgradedTroopsEvent` (`CharacterObject, CharacterObject, int`) | Troop tier upgrade. |
| `OnUnitRecruitedEvent` (`CharacterObject, int`) | Recruiting a single unit. |
| `TrackDetectedEvent` / `TrackLostEvent` (`IMbEvent<Track>`) | Tracking acquisition and loss. |
| `ItemsLooted` (`MobileParty, ItemRoster`) / `OnCollectLootsItemsEvent` / `OnLootDistributedToPartyEvent` | Loot. |

### 8. Battles and sieges

| Member | What it is for, side effects, timing |
| --- | --- |
| `BeforeMissionOpenedEvent` (`IMbEvent`) | Before a mission opens; intervene here. |
| `OnMissionStartedEvent` / `AfterMissionStarted` (`IMbEvent<IMission>`) | Mission started / fully ready. **Use the latter before touching battle objects.** Note it has no `Event` suffix. |
| `OnMissionEndedEvent` (`IMbEvent<IMission>`) | Mission ended; do not change the world from here. |
| `BeforePlayerAgentSpawnEvent` (`ReferenceIMBEvent<MatrixFrame>`) / `PlayerAgentSpawned` (`IMbEvent`) | Before player Agent spawn (the MatrixFrame is writable) and after. |
| `LocationCharactersAreReadyToSpawnEvent` (`Dictionary<string, int>`) / `LocationCharactersSimulatedEvent` (`IMbEvent`) | Location character spawning. |
| `OnSiegeEventStartedEvent` (`SiegeEvent`) / `OnPlayerSiegeStartedEvent` (`IMbEvent`) / `OnSiegeEventEndedEvent` (`SiegeEvent`) | Siege lifecycle. |
| `SiegeCompletedEvent` / `AfterSiegeCompletedEvent` (`Settlement, MobileParty, bool, MapEvent.BattleTypes`) | Siege resolution and aftermath. |
| `OnSiegeAftermathAppliedEvent` (`MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>`) | Aftermath application. |
| `OnSiegeBombardmentHitEvent` / `OnSiegeBombardmentWallHitEvent` / `OnSiegeEngineDestroyedEvent` / `SiegeEngineBuiltEvent` | Siege engines. |
| `OnMobilePartyJoinedToSiegeEventEvent` / `OnMobilePartyLeftSiegeEventEvent` (`MobileParty`) | Parties joining and leaving a siege. |
| `OnBlockadeActivatedEvent` / `OnBlockadeDeactivatedEvent` (`SiegeEvent`) | Blockade state. |
| `RaidCompletedEvent` / `ForceVolunteersCompletedEvent` / `ForceSuppliesCompletedEvent` (`BattleSideEnum, ...EventComponent`) / `OnHideoutBattleCompletedEvent` | Post-battle event components. |

### 9. Quests, issues and menus

| Member | What it is for, side effects, timing |
| --- | --- |
| `OnQuestStartedEvent` (`QuestBase`) / `OnQuestCompletedEvent` (`QuestBase, QuestBase.QuestCompleteDetails`) | Quest start and completion. |
| `OnNewIssueCreatedEvent` (`IssueBase`) / `OnIssueUpdatedEvent` (`IssueBase, IssueBase.IssueUpdateDetails, Hero`) / `OnIssueOwnerChangedEvent` (`IssueBase, Hero`) | Issues. |
| `OnCheckForIssueEvent` (`Hero`) | Issue check; intervene here. |
| `GameMenuOpened` / `AfterGameMenuInitializedEvent` / `BeforeGameMenuOpenedEvent` (`IMbEvent<MenuCallbackArgs>`) | The three menu phases. Returning false from `BeforeGameMenuOpenedEvent` cancels the opening. |
| `GameMenuOptionSelectedEvent` (`IMbEvent<GameMenu, GameMenuOption>`) | A menu option was chosen. |
| `PersuasionProgressCommittedEvent` (`Tuple<PersuasionOptionArgs, PersuasionOptionResult>`) | Persuasion outcome committed. |
| `OnAgentJoinedConversationEvent` (`IAgent`) / `ConversationEnded` (`IEnumerable<CharacterObject>`) | Dialogue. |

### 10. Items, crafting, trade and prisoners

| Member | What it is for, side effects, timing |
| --- | --- |
| `OnItemSoldEvent` (`PartyBase, PartyBase, ItemRosterElement, int, Settlement`) / `OnPlayerTradeProfitEvent` (`IMbEvent<int>`) / `OnTradeRumorIsTakenEvent` (`List<TradeRumor>, Settlement`) | Trade. |
| `PlayerInventoryExchangeEvent` (before / after item lists plus a bool) / `OnItemsDiscardedByPlayerEvent` (`ItemRoster`) | Player inventory operations. |
| `OnItemProducedEvent` / `OnItemConsumedEvent` (`ItemObject, Settlement, int`) | Workshop production and consumption. |
| `OnNewItemCraftedEvent` (`ItemObject, ItemModifier, bool`) / `OnCraftingOrderCompletedEvent` (`Town, CraftingOrder, ItemObject, Hero`) / `CraftingPartUnlockedEvent` (`CraftingPiece`) | Crafting. |
| `WorkshopInitializedEvent` / `WorkshopTypeChangedEvent` (`Workshop`) / `WorkshopOwnerChangedEvent` (`Workshop, Hero`) | Workshops. |
| `OnItemsRefinedEvent` (`Hero, Crafting.RefiningFormula`) / `OnEquipmentSmeltedByHeroEvent` (`Hero, EquipmentElement`) | Refining and smelting. |
| `OnPrisonerTakenEvent` / `OnPrisonerReleasedEvent` / `OnMainPartyPrisonerRecruitedEvent` (`FlattenedTroopRoster`) / `OnPrisonerDonatedToSettlementEvent` / `OnPrisonerSoldEvent` (`PartyBase, PartyBase, TroopRoster`) | The full prisoner flow. |
| `OnRansomOfferedToPlayerEvent` / `OnRansomOfferCancelledEvent` (`Hero`) | Ransom. |
| `OnShipCreatedEvent` / `OnShipRepairedEvent` (`Ship, Settlement`) / `OnShipDestroyedEvent` (`PartyBase, Ship, DestroyShipAction.ShipDestroyDetail`) / `OnShipOwnerChangedEvent` (`Ship, PartyBase, ...`) | Ships. |
| `OnFigureheadUnlockedEvent` (`Figurehead`) | Figurehead unlocked. |
| `BarterablesRequested` (`IMbEvent<BarterData>`) | Barter request. |
| `OnMainPartyStarvingEvent` (`IMbEvent`) / `OnPartyConsumedFoodEvent` (`MobileParty`) | Starvation and supply. |
| `OnCaravanTransactionCompletedEvent` (`MobileParty, Town, List<ValueTuple<EquipmentElement, int>>`) | Caravan transaction completion. |

### 11. Veto hooks (ReferenceIMBEvent)

These hand your callback a mutable reference; writing to it rewrites the engine's own decision. They are the right entry points for adding restrictions.

| Member | What it is for, side effects, timing |
| --- | --- |
| `CanHeroLeadPartyEvent` (`Hero, bool`) | Whether the hero may lead a party. |
| `CanHeroMarryEvent` (`Hero, bool`) | Whether marriage is allowed. |
| `CanHeroEquipmentBeChangedEvent` (`Hero, bool`) | Whether equipment may change. |
| `CanBeGovernorOrHavePartyRoleEvent` (`Hero, bool`) | Whether the hero may be governor or hold a party role. |
| `CanHeroDieEvent` (`Hero, KillCharacterAction.KillCharacterActionDetail, bool`) | Whether death is allowed. **The standard entry point for invulnerability mods.** |
| `CanPlayerMeetWithHeroAfterConversationEvent` (`Hero, bool`) | Whether the player may meet the hero again after the conversation. |
| `CanHeroBecomePrisonerEvent` (`Hero, bool`) | Whether the hero can be captured. |
| `CanMoveToSettlementEvent` (`Hero, bool`) | Whether the hero may enter a settlement. |
| `CanHaveCampaignIssuesEvent` (`Hero, bool`) | Whether the hero may participate in issues. |
| `IsSettlementBusyEvent` (`Settlement, object, int`) | Whether a settlement is busy. |
| `BeforePlayerAgentSpawnEvent` (`MatrixFrame`) | The player's spawn pose; writable. |

### 12. Tournaments, UI and misc

| Member | What it is for, side effects, timing |
| --- | --- |
| `TournamentStarted` / `TournamentFinished` / `TournamentCancelled` / `PlayerStartedTournamentMatch` / `PlayerEliminatedFromTournament` / `OnPlayerJoinedTournamentEvent` / `MercenaryTroopChangedInTown` / `MercenaryNumberChangedInTown` | The full tournament flow. |
| `CharacterPortraitPopUpOpenedEvent` / `CharacterPortraitPopUpClosedEvent` / `PlayerStartTalkFromMenu` / `PlayerStartRecruitmentEvent` | UI flows. |
| `MapInteractableCreated` / `MapInteractableDestroyed` (`IInteractablePoint`) / `OnMapMarkerCreatedEvent` / `OnMapMarkerRemovedEvent` (`MapMarker`) | Map interactables and markers. |
| `AlleyOwnerChanged` / `AlleyOccupiedByPlayer` / `AlleyClearedByPlayer` | Alley gameplay. |
| `OnPlayerEarnedGoldFromAssetEvent` (`DefaultClanFinanceModel.AssetIncomeType, int`) | Asset income. |
| `OnPlayerBodyPropertiesChangedEvent` (`IMbEvent`) | Player appearance changes (outfit and cosmetics mods). |
| `OnBeforePlayerCharacterChangedEvent` (`Hero, Hero`) / `OnPlayerCharacterChangedEvent` (`Hero, Hero, MobileParty, bool`) | Pre- and post-hooks for changing the player character. |
| `OnIncidentResolvedEvent` (`Incident`) / `ArmyOverlaySetDirtyEvent` | Event components and UI dirty flags. |

## Examples

### Example 1: Subscribe and clear by owner

1.4.7's subscription call is `AddNonSerializedListener`, not `+=`.

```csharp
using TaleWorlds.CampaignSystem;

public class MyBehavior : CampaignBehaviorBase
{
    public MyBehavior() : base("MyMod.MyBehavior") { }

    public override void RegisterEvents()
    {
        // owner = this: every listener is stripped in one go when the object dies
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("MyBehavior.Placeholder", ref _placeholder);
    }

    private int _placeholder;

    private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        // The event has already fired: world state here may be mid-transition
    }

    private void OnDailyTick()
    {
        // Heavy work belongs here, not on TickEvent
    }
}
```

### Example 2: Using a ReferenceIMBEvent for "the protagonist cannot die"

This is the correct shape for a veto hook: the parameter is a reference, so writing the `bool` changes the engine's decision.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public class ImmortalBehavior : CampaignBehaviorBase
{
    public ImmortalBehavior() : base("MyMod.Immortal") { }

    public override void RegisterEvents()
    {
        // The engine writes true into the reference first; the mod rewrites it as needed
        CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, OnHeroDying);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("Immortal.Noop", ref _noop);
    }

    private int _noop;

    private void OnHeroDying(Hero hero, KillCharacterAction.KillCharacterActionDetail detail, ref bool canDie)
    {
        if (hero == Hero.MainHero)
        {
            canDie = false;
        }
    }
}
```

### Example 3: Initialising only after the session is ready, and cleaning up before saving

`RegisterEvents` only subscribes; the real initialisation happens on the launch events that carry a `CampaignGameStarter`.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;

public class InitBehavior : CampaignBehaviorBase
{
    private bool _initialized;

    public InitBehavior() : base("MyMod.Init") { }

    public override void RegisterEvents()
    {
        // The parameter is a CampaignGameStarter, so you can keep injecting
        CampaignEvents.OnAfterSessionLaunchedEvent.AddNonSerializedListener(this, OnSessionReady);
        CampaignEvents.OnBeforeSaveEvent.AddNonSerializedListener(this, OnBeforeSave);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("MyMod.Initialized", ref _initialized);
    }

    private void OnSessionReady(CampaignGameStarter starter)
    {
        if (!_initialized && Campaign.Current != null)
        {
            // Managers are assembled by now, so it is safe to iterate
            starter.AddGameMenu("my_mod_menu", "My Menu", OnMenuInitialize);
            _initialized = true;
        }
    }

    private void OnMenuInitialize(MenuCallbackArgs args)
    {
    }

    private void OnBeforeSave()
    {
        // Detach anything that would otherwise be serialised
    }
}
```

## Risks and Boundaries

- **Reading `CampaignEvents.XxxEvent` throws when there is no campaign**: the property forwards to `Campaign.Current.CampaignEvents`. Main menu, loading and module load all crash it. **Every subscription must happen inside the campaign lifetime.**
- **There is no `AddListener`.** The interface method is `AddNonSerializedListener(object owner, Action<...>)`. Older tutorials using `AddListener` do not compile on this version — the single most important note on this page.
- **Event ordering is not guaranteed.** `OnMissionStartedEvent` and `AfterMissionStarted` exist separately precisely because of that: when you need "battle fully ready", use the latter.
- **Intermediate state during callbacks.** Events fire while the engine mutates the world, so reading the just-changed object can return partial data. Habit: mark in the callback, act on a tick.
- **A wrong owner leaks listeners.** Registering under a temporary lambda host that `ClearListeners` can never match leaves callbacks attached to dead objects. Always pass a stable `this`.
- **Cross-layer access.** Reading `Mission.Current` or `Agent.MainAgent` from a campaign event crosses layers; the mission may not exist yet or may already be gone. Battle logic belongs in [MissionBehavior](../../mission/MissionBehavior).
- **Single-thread.** Every `IMbEvent.Invoke` happens on the main game thread. Triggering an `Invoke` from a network sync callback races the main thread over the collections.
- **Static properties, short-lived instance.** The `CampaignEvents` instance lives and dies with the campaign; caching an `IMbEvent` handle in a static field and reusing it across campaigns points at a dead instance.
- **The private fields in source are not API.** Fields like `_heroLevelledUp` are bulk-cleared by `RemoveListeners`; that is the engine's internal owner bookkeeping.

## Dependencies

- Upstream / providers:
  - [Campaign](../Campaign) owns the `CampaignEvents` instance (`Campaign.Current.CampaignEvents`) and offers `AddCampaignEventReceiver` as an alternative registration path.
  - The engine invokes each `IMbEvent` when the matching `OnXxx` on `CampaignEventReceiver` is called.
- Peers / downstream:
  - [CampaignBehaviorBase](../CampaignBehaviorBase) is the most common event host — subscribing in `RegisterEvents`, persisting in `SyncData`.
  - [CampaignGameStarter](../CampaignGameStarter) arrives in mods through `OnSessionLaunchedEvent` and friends.
  - [IFaction](../IFaction) state transitions (clan defection, kingdom destruction, war declaration) are broadcast through here.
  - Battle-layer events live in [MissionBehavior](../../mission/MissionBehavior), on a separate bus from this one.

## See Also

- ↑ Parent: [Campaign API index](../)
- ↔ Related: [Campaign](../Campaign) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignGameStarter](../CampaignGameStarter) · [IFaction](../IFaction) · [MissionBehavior](../../mission/MissionBehavior)