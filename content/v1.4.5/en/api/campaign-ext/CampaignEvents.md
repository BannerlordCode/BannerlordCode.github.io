---
title: "CampaignEvents"
description: "The central publish/subscribe event bus of the Bannerlord campaign layer: mods subscribe to static events to react safely to world changes such as hero deaths, settlement captures, wars, and clan switches, without polling or mutating internal fields."
---
# CampaignEvents

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/CampaignEvents.cs` (authoritative semantics from the bannerlord-1.4.5 source; all events listed here were verified to exist with the same signature in 1.3.15)

## Overview

The central notification hub for every significant world change on the campaign layer. When a hero dies, a settlement changes hands, a war is declared, a clan switches kingdom, gold flows, and so on, it broadcasts a payload-carrying notification to every subscriber, so you can react to world changes without polling the entire world every tick.

## Mental Model

Think of `CampaignEvents` as the **broadcast megaphone** of the campaign map, not a box that holds data. It does not itself hold business state such as a "hero list" or "settlement list" — it holds only about 200 `MbEvent<T>` delegate containers, plus a fan-out logic that translates `*Action` calls into broadcasts.

### Which layer it lives on, and who owns it

- **Layer:** pure campaign (Campaign) layer. It is unrelated to the `Mission`-layer `IMissionListener` system — events that happen inside a battle scene go through the Mission system and are out of scope here.
- **Owner:** created by `Campaign` at campaign start and kept as `Campaign.Current.CampaignEvents`; it lives and dies with the campaign, a single instance per save.
- **Dual identity:** it is both a `CampaignEventReceiver` (callable by the event dispatcher) and exposes the underlying `MbEvent<T>` to mods for subscription through a bunch of `public static IMbEvent<T>` properties.
- **You never `new CampaignEvents()`:** there is no public constructor. The private static `Instance => Campaign.Current.CampaignEvents` is only for the internal static properties; a mod simply accesses a static property such as `CampaignEvents.HeroKilledEvent`.

### The full publish/subscribe chain

From a "hero killed" happening to your code being called takes four steps:

1. **Trigger:** somewhere in the engine core, an `*Action` calls `CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)` after mutating world state (real code in `KillCharacterAction.cs:144`).
2. **Dispatch:** `CampaignEventDispatcher` fans this call out to every registered `CampaignEventReceiver` (an array containing the central `CampaignEvents` hub and the native SandBox behavior receivers).
3. **Delivery:** `CampaignEvents`'s overridden `OnHeroKilled(...)` calls the underlying `Instance._heroKilled.Invoke(victim, killer, detail, showNotification)`, which fires every lambda registered via `AddNonSerializedListener`.
4. **Subscriber:** your mod writes `CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled)` inside `CampaignBehaviorBase.RegisterEvents()`, and the lambda runs.

### Two subscription styles

| Style | How | Who uses it |
|------|--------|------|
| **lambda listener (recommended)** | In `CampaignBehaviorBase.RegisterEvents()`, call `CampaignEvents.XEvent.AddNonSerializedListener(this, handler)` | The vast majority of mods |
| **receiver override** | Your behavior inherits `CampaignEventReceiver` and overrides the `OnXxx` virtual methods | Native SandBox behaviors; mods rarely need this |

> **On "serialized vs non-serialized":** in this version (the `IMbEvent` interface only declares `AddNonSerializedListener`), the delegate closure itself is **not written into the save**. But the behavior that hosts it (`CampaignBehaviorBase`) is part of the campaign object — `CampaignBehaviorManager` rebuilds behaviors after a load and calls `RegisterEvents()` again, so the lambda is re-attached. So what really matters is the **lifecycle of the owner**: if the owner is a transient object (UI / menu), after a load the lambda is neither restored nor auto-cleaned, which easily leaks or double-adds (see Risks).

## When to Use / When Not to Use

**Use events** when you need "do something when X happens": pop a notification, log, adjust a related value, unlock a feature, trigger custom logic.

**Do not use events:**

- Do not treat an event as an entry point to "actively change the world". An event is only a **notification**; changing the world should go through the matching `*Action.Apply` (for example, after a lord dies, if you want to give the player gold, call `ChangeHeroGold` / `GoldGainAction` inside the `HeroKilledEvent` handler, rather than writing fields yourself).
- Do not try to "manually fire an event" to fool other systems. `CampaignEvents` has no public `Fire` / `Trigger` API for mods; to make the world change, call the matching `*Action`, which broadcasts the event itself.
- Do not do slow / blocking work inside a handler — it runs **synchronously inside the campaign tick that triggered it**; slowing it down or throwing breaks the entire tick (see Risks).
- Do not replace event subscription with "scan every `Hero` every hour to see who died" polling.

## Dependencies

**Upstream (who triggers / who owns)**

- [Campaign](../../campaign/Campaign/) — holds the unique `CampaignEvents` instance, created and destroyed with the campaign
- [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) — fans out every `OnXxx` call to this hub and every receiver
- The various `*Action` types (action index at [actions-index](../../final/actions/_index)): `KillCharacterAction`, `ChangeOwnerOfSettlementAction`, `ChangeKingdomAction`, `ChangeRelationAction`, `MakePeaceAction`, `DeclareWarAction`, `TakePrisonerAction`, `RemoveCompanionAction`, `StartMercenaryServiceAction`, `EndMercenaryServiceAction`, `TeleportHeroAction`, `SiegeAftermathAction`, and so on, which fire the matching event after mutating state

**Downstream (who consumes)**

- [CampaignBehaviorBase](../CampaignBehaviorBase/) — mod behaviors subscribe inside `RegisterEvents()`
- [CampaignEventReceiver](../CampaignEventReceiver/) — the abstract base that defines all the `OnXxx` virtual methods
- The game's various native `CampaignBehavior`s (such as `DefaultLogsCampaignBehavior` listening to `BattleStarted`)

**Related / implementation**

- [MbEvent](../../campaign/MbEvent) and [IMbEvent](../../campaign/IMbEvent) — the underlying delegate container and interface (`AddNonSerializedListener` / `ClearListeners`)
- [ReferenceMBEvent](../../campaign/ReferenceMBEvent) — the "reference-type" event with `ref`/`out` parameters (such as `CanHeroDieEvent`), allowing listeners to vote/override the return value
- [CampaignGameStarter](../CampaignGameStarter/) — the entry point that registers behaviors
- [CampaignBehaviorManager](../../campaign/CampaignBehaviorManager) — manages behavior lifecycle, rebuilds and re-subscribes after a load
- [SaveManager](../../save-system/SaveManager/) — the save point: behaviors are rebuilt with the save, event closures are not serialized

## Risks and Crash Boundaries

1. **Manually "firing" an event outside the campaign tick:** there is no public trigger API; calling the underlying `MbEvent.Invoke` directly bypasses consistency checks and breaks other systems' assumptions. To notify the world, call the matching `*Action`.
2. **Handler closure captures an unregistered / already-destroyed `MBObject` reference:** if your lambda holds objects such as `Hero` / `Settlement` and references an instance that no longer exists after a load, it can still be called during a tick → `NullReferenceException` or even a corrupt save. Prefer fetching fresh inside the handler, or null-check first.
3. **Lifecycle / serialization mismatch:** the closure of `AddNonSerializedListener` is not written to the save. If the owner is a transient object (one-shot UI, menu), the handler is not restored after a load and is not auto-cleaned — it may leak, or stack up on the next `RegisterEvents()`.
4. **Duplicate subscription:** `RegisterEvents()` may be called multiple times in a session (for example, `CampaignBehaviorManager.AddBehavior` at runtime). Without deduplication, the same logic fires multiple times. You can dedupe at the start of `RegisterEvents()` with `CampaignEvents.XEvent.ClearListeners(this)` (underlying it clears all listeners of an owner via `CampaignEventDispatcher.RemoveListeners(obj)`), or `RemoveBehavior` when unloading the behavior.
5. **Uncaught exception inside a handler:** it runs synchronously inside the tick, and the exception interrupts the whole tick chain and may cascade into a corrupt save. Always try/catch critical paths inside a handler.
6. **Adding/removing a listener of the same event inside the handler:** `MbEvent` is iterating a singly-linked list during `Invoke`; adding/removing at runtime may skip or double-execute. Do not subscribe/unsubscribe to yourself inside a callback.
7. **Assuming the world is initialized too early:** the world is only complete after `OnNewGameCreated` / `OnGameLoaded`; do not access not-yet-ready world data directly inside `RegisterEvents()`.

## Member Reference: Event Index by Domain

Below are only the events mods subscribe to most often and misuse most easily (the full set of ~200+ static events is in the source file `CampaignEvents.cs`). Each event gives the `IMbEvent` payload type and "when it fires". Those marked ★ get a deep dive below.

### Hero

| Event property | Payload type | Fires when |
|----------|----------|----------|
| `HeroKilledEvent` ★ | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>` | Any hero dies (including the main hero), triggered by `KillCharacterAction` |
| `BeforeHeroKilledEvent` ★ | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>` | Before the death settlement is applied; good for salvaging loot / recording last-will state |
| `HeroWounded` | `IMbEvent<Hero>` | A hero is wounded (not killed) |
| `HeroCreated` | `IMbEvent<Hero, bool>` | A hero is created (`bool` indicates natural birth) |
| `HeroComesOfAgeEvent` / `HeroReachesTeenAgeEvent` / `HeroGrowsOutOfInfancyEvent` | `IMbEvent<Hero>` | Coming-of-age stage transition |
| `HeroPrisonerTaken` ★ | `IMbEvent<PartyBase, Hero>` | A hero is taken prisoner, triggered by `TakePrisonerAction` |
| `HeroPrisonerReleased` | `IMbEvent<Hero, PartyBase, IFaction, EndCaptivityDetail, bool>` | A hero's captivity ends |
| `HeroRelationChanged` | `IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero>` | A relationship value between two heroes changes |
| `HeroLevelledUp` | `IMbEvent<Hero, bool>` | Levels up (`bool` whether to pop a notification) |
| `OnPlayerMetHeroEvent` / `OnPlayerLearnsAboutHeroEvent` | `IMbEvent<Hero>` | The player meets / learns about a hero |
| `RenownGained` | `IMbEvent<Hero, int, bool>` | Renown increases |
| `OnHeroChangedClan` | `IMbEvent<Hero, Clan>` | A hero switches clan (e.g. becomes a companion) |
| `OnBeforeMainCharacterDiedEvent` | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>` | Before the main hero dies (related to game-over flow) |

### Settlement

| Event property | Payload type | Fires when |
|----------|----------|----------|
| `OnSettlementOwnerChangedEvent` ★ | `IMbEvent<Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail>` | A town/castle changes hands, triggered by `ChangeOwnerOfSettlementAction` |
| `OnGovernorChangedEvent` | `IMbEvent<Town, Hero, Hero>` | Governor changes (old/new) |
| `SettlementEntered` / `AfterSettlementEntered` / `BeforeSettlementEnteredEvent` | `IMbEvent<MobileParty, Settlement, Hero>` | A party enters/leaves a settlement |
| `OnSettlementLeftEvent` | `IMbEvent<MobileParty, Settlement>` | A party leaves a settlement |
| `VillageStateChanged` | `IMbEvent<Village, Village.VillageStates, Village.VillageStates, MobileParty>` | Village state transition (e.g. raided) |
| `RebellionFinished` / `RebelliousClanDisbandedAtSettlement` | `IMbEvent<Settlement, Clan>` | Rebellion put down / rebel clan disbanded |
| `TownRebelliosStateChanged` | `IMbEvent<Town, bool>` | Town enters/exits rebellion state |
| `AlleyOwnerChanged` / `AlleyOccupiedByPlayer` / `AlleyClearedByPlayer` | `IMbEvent<Alley, …>` | Alley ownership / occupied / cleared |
| `MercenaryTroopChangedInTown` / `MercenaryNumberChangedInTown` | `IMbEvent<Town, …>` | Town mercenary changes |

### Party & MobileParty

| Event property | Payload type | Fires when |
|----------|----------|----------|
| `OnPartyRemovedEvent` ★ | `IMbEvent<PartyBase>` | A party is removed from the map (disbanded/destroyed) |
| `MobilePartyCreated` / `MobilePartyDestroyed` | `IMbEvent<MobileParty>` / `IMbEvent<MobileParty, PartyBase>` | Party created / destroyed |
| `OnPartySizeChangedEvent` | `IMbEvent<PartyBase>` | Party size changes |
| `OnPartyLeaderChangedEvent` | `IMbEvent<MobileParty, Hero>` | Party leader changes |
| `OnHeroJoinedPartyEvent` | `IMbEvent<Hero, MobileParty>` | A hero joins a party |
| `BanditPartyRecruited` | `IMbEvent<MobileParty>` | A bandit party is recruited |
| `OnPartyJoinedArmyEvent` / `OnPartyRemovedFromArmyEvent` / `OnPartyLeftArmyEvent` | `IMbEvent<MobileParty>` / `IMbEvent<MobileParty, Army>` | Joins/leaves an army |
| `OnPartyDisbandStartedEvent` / `OnPartyDisbandedEvent` / `OnPartyDisbandCanceledEvent` | `IMbEvent<MobileParty>` / `IMbEvent<MobileParty, Settlement>` | Party disband flow |
| `ItemsLooted` / `OnTroopsDesertedEvent` | `IMbEvent<MobileParty, ItemRoster>` / `IMbEvent<MobileParty, TroopRoster>` | Loot / deserters |
| `OnMobilePartyRaftStateChanged` / `OnMobilePartyNavigationStateChangedEvent` | `IMbEvent<MobileParty>` | Raft / navigation state |

### War & Diplomacy

| Event property | Payload type | Fires when |
|----------|----------|----------|
| `WarDeclared` ★ | `IMbEvent<IFaction, IFaction, DeclareWarAction.DeclareWarDetail>` | Two factions declare war, triggered by `DeclareWarAction` |
| `MakePeace` | `IMbEvent<IFaction, IFaction, MakePeaceAction.MakePeaceDetail>` | Two factions make peace |
| `OnClanChangedKingdomEvent` ★ | `IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool>` | A clan switches kingdom, triggered by `ChangeKingdomAction` |
| `OnClanDefectedEvent` / `OnClanCreatedEvent` / `OnClanDestroyedEvent` | `IMbEvent<Clan, …>` | Clan defects / created / destroyed |
| `KingdomDecisionAdded` / `KingdomDecisionCancelled` / `KingdomDecisionConcluded` | `IMbEvent<KingdomDecision, …>` | Kingdom decision flow |
| `RulingClanChanged` / `OnClanLeaderChangedEvent` | `IMbEvent<Kingdom, Clan>` / `IMbEvent<Hero, Hero>` | Ruling clan / clan leader change |
| `KingdomCreated` / `KingdomDestroyed` | `IMbEvent<Kingdom>` | Kingdom created / destroyed |
| `OnAllianceStartedEvent` / `OnAllianceEndedEvent` | `IMbEvent<Kingdom, Kingdom>` | Alliance formed / ended |
| `OnTradeAgreementSignedEvent` | `IMbEvent<Kingdom, Kingdom>` | Trade agreement signed |
| `OnMercenaryServiceStartedEvent` / `OnMercenaryServiceEndedEvent` | `IMbEvent<Clan, …>` | Mercenary service starts / ends |
| `ClanTierIncrease` / `OnClanInfluenceChangedEvent` / `OnClanEarnedGoldFromTributeEvent` | `IMbEvent<Clan, …>` | Clan tier up / influence / tribute gold |

### Economy & Trade

| Event property | Payload type | Fires when |
|----------|----------|----------|
| `HeroOrPartyTradedGold` ★ | `IMbEvent<(Hero, PartyBase), (Hero, PartyBase), (int, string), bool>` | A transfer between hero/party |
| `HeroOrPartyGaveItem` | `IMbEvent<(Hero, PartyBase), (Hero, PartyBase), ItemRosterElement, bool>` | An item is given |
| `OnItemSoldEvent` / `OnPrisonerSoldEvent` | `IMbEvent<PartyBase, PartyBase, …>` | Item / prisoner sold |
| `OnCaravanTransactionCompletedEvent` | `IMbEvent<MobileParty, Town, List<(EquipmentElement, int)>>` | Caravan transaction completed |
| `ItemProducedEvent` / `ItemConsumedEvent` | `IMbEvent<ItemObject, Settlement, int>` | Town produces / consumes |
| `OnPlayerTradeProfit` / `OnPlayerEarnedGoldFromAssetEvent` | `IMbEvent<int>` / `IMbEvent<DefaultClanFinanceModel.AssetIncomeType, int>` | Player trade/asset profit |
| `OnNewItemCraftedEvent` / `OnItemsRefined` / `OnCraftingOrderCompleted` | `IMbEvent<…>` | Smithing-related |
| `OnWorkshopInitializedEvent` / `OnWorkshopOwnerChangedEvent` / `OnWorkshopTypeChangedEvent` | `IMbEvent<Workshop, …>` | Workshop changes |
| `OnTradeRumorIsTakenEvent` / `PlayerInventoryExchangeEvent` | `IMbEvent<…>` | Trade rumor / inventory exchange |

### Recruitment & Volunteer

| Event property | Payload type | Fires when |
|----------|----------|----------|
| `OnUnitRecruitedEvent` / `OnTroopRecruitedEvent` | `IMbEvent<CharacterObject, int>` / `IMbEvent<Hero, Settlement, Hero, CharacterObject, int>` | Unit/troop recruited |
| `OnTroopGivenToSettlementEvent` | `IMbEvent<Hero, Settlement, TroopRoster>` | Give troops to a settlement |
| `OnMainPartyPrisonerRecruitedEvent` / `OnPrisonerDonatedToSettlementEvent` | `IMbEvent<FlattenedTroopRoster, …>` | Main party recruits prisoner / donates prisoner |
| `OnPrisonerTakenEvent` / `OnPrisonerReleasedEvent` / `OnPrisonerChangeInSettlement` | `IMbEvent<FlattenedTroopRoster, …>` | Ordinary (non-hero) prisoner changes |
| `PlayerStartRecruitmentEvent` | `IMbEvent<CharacterObject>` | Player starts recruiting |
| `OnPlayerCharacterChangedEvent` / `OnBeforePlayerCharacterChangedEvent` | `IMbEvent<Hero, Hero, MobileParty, bool>` / `IMbEvent<Hero, Hero>` | Player character changes (inheritance/transformation, etc.) |

### Romance & Pregnancy

| Event property | Payload type | Fires when |
|----------|----------|----------|
| `RomanticStateChanged` | `IMbEvent<Hero, Hero, Romance.RomanceLevelEnum>` | Romance level changes |
| `BeforeHeroesMarried` | `IMbEvent<Hero, Hero, bool>` | Before marriage |
| `OnMarriageOfferedToPlayerEvent` / `OnMarriageOfferCanceledEvent` | `IMbEvent<Hero, Hero>` | Marriage proposed to / withdrawn from player |
| `OnChildConceived` / `OnGivenBirthEvent` | `IMbEvent<Hero>` / `IMbEvent<Hero, List<Hero>, int>` | Conception / birth |
| `ChildEducationCompletedEvent` | `IMbEvent<Hero, int>` | Child education completed |
| `OnHeroTeleportationRequestedEvent` | `IMbEvent<Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail>` | A hero teleport is requested |

### Siege

| Event property | Payload type | Fires when |
|----------|----------|----------|
| `OnSiegeEventStartedEvent` / `OnSiegeEventEndedEvent` / `OnPlayerSiegeStartedEvent` | `IMbEvent<SiegeEvent>` / `IMbEvent` | Siege starts / ends |
| `SiegeCompletedEvent` / `AfterSiegeCompletedEvent` | `IMbEvent<Settlement, MobileParty, bool, MapEvent.BattleTypes>` | Siege resolved (before/after) |
| `SiegeAftermathAppliedEvent` | `IMbEvent<MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>>` | Siege aftermath applied |
| `OnSiegeBombardmentHitEvent` / `OnSiegeBombardmentWallHitEvent` / `OnSiegeEngineDestroyedEvent` | `IMbEvent<MobileParty, Settlement, BattleSideEnum, SiegeEngineType, …>` | Bombardment hit / wall / engine destroyed |
| `SiegeEngineBuiltEvent` / `OnBlockadeActivatedEvent` / `OnBlockadeDeactivatedEvent` | `IMbEvent<…>` | Engine built / blockade |

### Misc / Lifecycle / Ticks

- **Clocks:** `DailyTickEvent` / `HourlyTickEvent` / `QuarterHourlyTickEvent` / `WeeklyTickEvent` (`IMbEvent`, no payload); `TickEvent` (`IMbEvent<float>`, passes elapsed game time); and per-object `DailyTickPartyEvent` (`IMbEvent<MobileParty>`), `DailyTickTownEvent` (`IMbEvent<Town>`), `DailyTickSettlementEvent`, `DailyTickHeroEvent`, `DailyTickClanEvent`, and the matching `HourlyTick*` family. These are the **highest-frequency** hooks, good for periodic logic but keep them light.
- **Session / save:** `OnSessionLaunchedEvent` / `OnAfterSessionLaunchedEvent` / `OnNewGameCreatedEvent` ★ / `OnNewGameCreatedPartialFollowUpEvent` (`IMbEvent<CampaignGameStarter, int>`)/ `OnGameLoadedEvent` / `OnGameEarlyLoadedEvent` / `OnGameLoadFinishedEvent` / `OnGameOverEvent`; `OnBeforeSaveEvent` / `OnSaveStartedEvent` / `OnSaveOverEvent` (`IMbEvent<bool, string>`).
- **Quest / issue:** `OnQuestStartedEvent` / `OnQuestCompletedEvent` (`IMbEvent<QuestBase, QuestBase.QuestCompleteDetails>`)/ `OnQuestLogAddedEvent`; `OnIssueUpdatedEvent` ★ / `OnNewIssueCreatedEvent` / `OnIssueOwnerChangedEvent` / `OnIssueLogAddedEvent` / `OnCheckForIssueEvent`.
- **Mission bridge:** `OnMissionStartedEvent` / `OnMissionEndedEvent` / `AfterMissionStarted` (`IMbEvent<IMission>`), `MapEventStarted` / `MapEventEnded` (`IMbEvent<MapEvent, …>`), `OnHeroCombatHitEvent` ★ (`IMbEvent<CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int>`), `OnPlayerBattleEndEvent`.
- **Conversation / tournament / barter:** `OnAgentJoinedConversationEvent`, `OnConversationEnded`, `PlayerStartTalkFromMenu`, `PersuasionProgressCommittedEvent`; `TournamentStarted` / `TournamentFinished` / `PlayerStartedTournamentMatch` / `OnPlayerJoinedTournamentEvent`; `BarterablesRequested` / `OnBarterAcceptedEvent` / `OnBarterCanceledEvent`.
- **Reference-style "can-*" events** (`ReferenceMBEvent`, can override the return value): `CanHeroDieEvent`, `CanMarryEvent`, `CanHeroLeadPartyEvent`, `CanKingdomBeDiscontinued`, `CanHeroEquipmentBeChangedEvent`, `CanHeroBecomePrisonerEvent`, `CanMoveToSettlementEvent`, and so on — when subscribing, the handler's last parameter is `ref`/`out`, used to vote or override.

## Deep Dive on High-Frequency Events (real signatures + subscription snippets)

The 10 events below cover the real needs of most mods. Each gives the **real static property signature**, **when it fires**, **payload meaning**, and a **safe subscription snippet**.

### 1. `HeroKilledEvent` — hero death

```csharp
// Static property signature (from CampaignEvents.cs)
public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> HeroKilledEvent { get; }

// Fires: any hero death, called by KillCharacterAction.ApplyByBattle / ApplyByOldAge, etc.
//       CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)
// Payload order: (Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
```

```csharp
CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);

private void OnHeroKilled(Hero victim, Hero killer,
    KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
{
    if (victim == null || !victim.IsLord) return; // fetch fresh, avoid dangling references
    InformationManager.DisplayMessage(
        new InformationMessage($"{victim.Name} died at the hands of {killer?.Name} (cause: {detail})"));
}
```

### 2. `BeforeHeroKilledEvent` — before the death settlement

```csharp
public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> BeforeHeroKilledEvent { get; }
// Same payload as HeroKilledEvent. Good for salvaging loot, recording last-will relations,
// or triggering a deathbed line before the character is really removed from the world.
```

### 3. `OnSettlementOwnerChangedEvent` — settlement changes hands

```csharp
public static IMbEvent<Settlement, bool, Hero, Hero, Hero,
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail> OnSettlementOwnerChangedEvent { get; }

// Fires: after ChangeOwnerOfSettlementAction changes ownership
// Payload: (Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner,
//        Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
```

```csharp
CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(this, OnSettlementOwnerChanged);

private void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim,
    Hero newOwner, Hero oldOwner, Hero capturerHero,
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
{
    if (settlement == null) return;
    // detail distinguishes the source: conquest / claim / rebellion, etc.
}
```

### 4. `OnPartyRemovedEvent` — party removed from the map

```csharp
public static IMbEvent<PartyBase> OnPartyRemovedEvent { get; }
// Fires: when a MobileParty is destroyed or disbanded. Note the payload is PartyBase (not only MobileParty).
// Payload: (PartyBase party)
```

> To "tell apart the main party vs some AI party", check `party.IsMainParty` or `party.MobileParty` inside the handler; do not assume it is a `MobileParty`.

### 5. `OnClanChangedKingdomEvent` — clan switches kingdom

```csharp
public static IMbEvent<Clan, Kingdom, Kingdom,
    ChangeKingdomAction.ChangeKingdomActionDetail, bool> OnClanChangedKingdomEvent { get; }

// Fires: after ChangeKingdomAction changes ownership
// Payload: (Clan clan, Kingdom oldKingdom, Kingdom newKingdom,
//        ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification)
```

### 6. `HeroOrPartyTradedGold` — transfer

```csharp
public static IMbEvent<(Hero, PartyBase), (Hero, PartyBase), (int, string), bool> HeroOrPartyTradedGold { get; }

// Payload: ((Hero giver, PartyBase giverParty), (Hero recipient, PartyBase recipientParty),
//        (int goldAmount, string text), bool showNotification)
// Note this uses C# value tuples; when deconstructing (Hero giver, PartyBase giverParty) maps to the two fields.
```

### 7. `OnIssueUpdatedEvent` — issue updated

```csharp
public static IMbEvent<IssueBase, IssueBase.IssueUpdateDetails, Hero> OnIssueUpdatedEvent { get; }

// Fires: called inside IssueBase when the player accepts / advances / completes / fails / times out, etc.
//       CampaignEventDispatcher.Instance.OnIssueUpdated(this, details, solver)
// Payload: (IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)
//       details is an enum: PlayerStartedIssueQuestClassicSolution / IssueFinishedWithSuccess /
//       IssueFail / IssueTimedOut / IssueCancel ...
```

### 8. `HeroPrisonerTaken` — hero taken prisoner

```csharp
public static IMbEvent<PartyBase, Hero> HeroPrisonerTaken { get; }
// Fires: after TakePrisonerAction sets a hero as prisoner
// Payload: (PartyBase capturer, Hero prisoner)
// Note: ordinary (non-hero) soldiers taken prisoner go through OnPrisonerTakenEvent (IMbEvent<FlattenedTroopRoster>); don't mix them up.
```

### 9. `OnNewGameCreatedEvent` — new game created

```csharp
public static IMbEvent<CampaignGameStarter> OnNewGameCreatedEvent { get; }
// Fires: after a new campaign is built, following OnSessionLaunched. This is the safe point to
// initialize "per-game-run state".
// Payload: (CampaignGameStarter campaignGameStarter)
```

### 10. `BattleStarted` — battle/raid starts (with `WarDeclared`, `OnHeroCombatHitEvent`)

```csharp
public static IMbEvent<PartyBase, PartyBase, object, bool> BattleStarted { get; }
// Fires: when a map battle/raid starts (underlying _battleStarted.Invoke(attackerParty, defenderParty, subject, showNotification))
// Payload: (PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)
//       subject is the concrete battle/raid entity (MapEvent / RaidEventComponent, etc.); cast as needed.

public static IMbEvent<IFaction, IFaction, DeclareWarAction.DeclareWarDetail> WarDeclared { get; }
// Payload: (IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)

public static IMbEvent<CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int>
    OnHeroCombatHitEvent { get; }
// Payload: (CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party,
//        WeaponComponentData usedWeapon, bool isFatal, int xp)
// Note: this is the campaign-layer combat-hit notification (from the battle resolution), not the
// per-frame Agent hit inside a Mission.
```

## Minimal Real Examples

### Example 1: a behavior listening for hero death (real subscription path)

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class LordDeathLogger : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Pass owner: this; when the behavior unloads, CampaignEventDispatcher.RemoveListeners(this)
        // clears every listener registered by this behavior, avoiding leaks.
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // The handler runs inside the campaign tick that triggered the death — keep it light, null-check.
        if (victim == null || !victim.IsLord) return;
        InformationManager.DisplayMessage(
            new InformationMessage(
                new TextObject("{=}Lord {VICTIM} was slain by {KILLER}")
                    .SetTextVariable("VICTIM", victim.Name)
                    .SetTextVariable("KILLER", killer?.Name ?? "unknown")));
        // Want to change the world? Call *Action, e.g.:
        // Hero.MainHero.ChangeHeroGold(100);  // or GoldGainAction.ApplyForHero(...)
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This behavior has no persistent fields; when it does, read/write here on load/save.
    }
}
```

### Example 2: registering the behavior into the campaign (real acquisition path)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        if (game.GameType is Campaign campaign)
        {
            // CampaignGameStarter.AddBehavior adds the behavior to the campaign;
            // CampaignBehaviorManager then calls its RegisterEvents(), attaching the listener above.
            ((CampaignGameStarter)starterObject).AddBehavior(new LordDeathLogger());
        }
    }
}
```

> You can also add dynamically at runtime: `Campaign.Current.CampaignBehaviorManager.AddBehavior(new LordDeathLogger());` (this method immediately calls `RegisterEvents()` once).

## Cross-Version Notes

- The authoritative semantics of this page come from the **bannerlord-1.4.5** source; the events listed here (`HeroKilledEvent`, `OnSettlementOwnerChangedEvent`, `OnPartyRemovedEvent`, `OnClanChangedKingdomEvent`, `OnIssueUpdatedEvent`, `HeroPrisonerTaken`, `OnNewGameCreatedEvent`, `BattleStarted`, `WarDeclared`, `HeroOrPartyTradedGold`, `OnHeroCombatHitEvent`, `DailyTickPartyEvent`, etc.) were all verified to exist in **1.3.15** with the **same `IMbEvent<T>` signature**.
- In both versions `IMbEvent` only exposes `AddNonSerializedListener` — that is, a "non-serialized listener", with no `AddListener` (serialized listener) public API occasionally mentioned in old docs; listener recovery relies entirely on behaviors being rebuilt with the save. If you have seen `AddListener`, that is a misunderstanding of other engine versions.
- This page focuses on the Campaign layer; for real-time events inside a battle scene (Agent hits, Mission start/end, etc.) use the `Mission` / `IMissionListener` system (see [Mission](../../mission/Mission/)).

## See Also

- ↑ Parent: [campaign-ext index](../)
- ↔ Sibling: [CampaignBehaviorBase](../CampaignBehaviorBase/) · [CampaignEventReceiver](../CampaignEventReceiver/) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [CampaignGameStarter](../CampaignGameStarter/) · [CampaignBehaviorManager](../../campaign/CampaignBehaviorManager) · [MbEvent](../../campaign/MbEvent) · [IMbEvent](../../campaign/IMbEvent) · [ReferenceMBEvent](../../campaign/ReferenceMBEvent) · [actions index](../../final/actions/_index)
- Related classes: [Campaign](../../campaign/Campaign/) · [Hero](../../campaign/Hero/) · [Settlement](../../campaign/Settlement/) · [MobileParty](../../campaign/MobileParty/) · [Clan](../../campaign/Clan/) · [Kingdom](../../campaign/Kingdom/) · [PartyBase](../../campaign/PartyBase/) · [IssueBase](../../campaign/IssueBase) · [CharacterObject](../../campaign/CharacterObject/) · [Workshop](../../campaign/Workshop/) · [Village](../../campaign/Village/) · [save system](../../save-system/SaveManager/) · [MBSubModuleBase](../../core/MBSubModuleBase/)
