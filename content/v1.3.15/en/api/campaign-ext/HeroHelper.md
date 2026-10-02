---
title: "HeroHelper"
description: "Static hero-side queries: where a lord is, who is loyal to the player, how NPCs feel about each other, recruitment limits, and encyclopedia text."
---
# HeroHelper

**Namespace:** `Helpers`
**Module:** Helpers (TaleWorlds.CampaignSystem assembly)
**Type:** `public static class HeroHelper`
**Base:** none (static)
**Source:** `TaleWorlds.CampaignSystem/Helpers/HeroHelper.cs`

## Overview

`HeroHelper` is the hero-side counterpart to `SettlementHelper` / `FactionHelper`: a static, stateless facade over the questions a campaign layer keeps asking about lords. It answers *where is this hero right now* (`GetClosestSettlement`), *is he under the player's command* (`UnderPlayerCommand`), *how would two NPCs feel about meeting* (`DefaultRelation`, `NPCPersonalityClashWithNPC`, `TraitHarmony`), *can this hero be recruited from* (`HeroCanRecruitFromHero`, `GetVolunteerTroopsOfHeroForRecruitment`, `StartRecruitingMoneyLimit`), and a handful of conversation/encyclopedia presentation helpers (`GetLastSeenText`, `GetCharacterTypeName`, `SetPlayerSalutation`, `GetTitleInIndefiniteCase`).

Roughly thirty public members, all `static`. Nothing is cached: each call reads live hero state. Two of them — `SpawnHeroForTheFirstTime` and `SetPlayerSalutation` — *do* mutate, so treat this as a helper class with a thin write edge, not a pure query surface. Like the other classes in this namespace it lives in the bare `Helpers` namespace rather than `TaleWorlds.CampaignSystem`, so `using Helpers;` is mandatory.

## Mental Model

Think of `HeroHelper` as **"the lord-side toolbox you call from inside a campaign behavior, a menu, or a conversation"**:

- **Typical call order in a mod.** Register a [CampaignBehaviorBase](../CampaignBehaviorBase/) through [CampaignGameStarter](../CampaignGameStarter/); in its `RegisterEvents` subscribe to [CampaignEvents](../CampaignEvents/) (hourly or daily tick); inside the callback, resolve heroes (`Settlement.All` notables, `PartyBase.LeaderHero`) and ask `HeroHelper` questions. There is no init or teardown for the helper itself.
- **Two families of members.** *Queries* (`UnderPlayerCommand`, `DefaultRelation`, `TraitHarmony`, `IsCompanionInPlayerParty`, `HeroCanRecruitFromHero`) are safe to call repeatedly. *Mutators* (`SpawnHeroForTheFirstTime`, `SetPlayerSalutation`) must be called exactly once per hero / once per conversation, because they change state and write global text variables.
- **Global-conversation coupling.** `LordWillConspireWithLord`, `WillLordAttack`, and `SetPlayerSalutation` all read `Hero.OneToOneConversationHero` and write into `MBTextManager` text variables. They only make sense inside an active one-on-one conversation; calling them outside one dereferences a null conversation hero or silently overwrites text state used by the UI.
- **`GetClosestSettlement` is a fallback chain, not a distance query.** It tries `hero.CurrentSettlement`, then the party's settlement, then a locatable search around a mobile party, then the encounter settlement, then `SettlementHelper.FindNearestSettlementToSettlement`. When the hero is in no party and no settlement and there is no encounter, it returns `null`.
- **Trap: `GetRandomClanForNotable` is not uniformly random.** Preachers and gang leaders only get a clan with probability 0.5, the candidate list is first reduced by removing clans that already have a notable at that settlement, and the final pick is a probability-weighted walk using `GetProbabilityForClan`. It returns `null` when nothing qualifies — including for a notable who is neither preacher nor gang leader.
- **Trap: `GetVolunteerTroopsOfHeroForRecruitment` hard-codes 6 slots** and returns an empty list for a dead hero. It reads `hero.VolunteerTypes[i]` with no bounds guard beyond the loop.
- **Trap: `SetPlayerSalutation` writes `PLAYER_SALUTATION` but does not set it back.** It uses `MBTextManager.SetTextVariable(..., false)` — the `false` means "not permanent" — so the value lives only until the next text context is rebuilt.

### When to Use

**Use `HeroHelper` when:**
- You need to know whether a hero is effectively the player's — vassal, notable of the player's clan, or companion (`UnderPlayerCommand`).
- You need a default relation value for two NPCs who have never met (`DefaultRelation`) or a personality clash score (`NPCPersonalityClashWithNPC`).
- You need to place a lord somewhere sensible (`GetClosestSettlement`, `FindASuitableSettlementToTeleportForHero`, `GetRandomBirthDayForAge`).
- You need the recruitment gate or the volunteer roster for a lord (`HeroCanRecruitFromHero`, `GetVolunteerTroopsOfHeroForRecruitment`, `StartRecruitingMoneyLimit`).
- You need encyclopedia/conversation text for a hero (`GetLastSeenText`, `GetCharacterTypeName`, `GetTitleInIndefiniteCase`, `GetPersonalityTraitChangeName`).

**Do NOT use `HeroHelper` when:**
- You need the ordered combat-side list for a battle. `OrderHeroesOnPlayerSideByPriority` returns `CharacterObject` **string ids** sorted by encounter score — it is a UI/roster helper, not an authoritative party list.
- You want to change a hero's location, clan, or state. Use the `*Action.Apply` methods (for example [EnterSettlementAction](../EnterSettlementAction/)). `HeroHelper` will happily `ChangeState` a hero directly and bypass every event.
- You need settlement proximity. That is [SettlementHelper](../SettlementHelper/); `GetClosestSettlement` only resolves where a hero plausibly is, then delegates.
- You need relationship queries between factions. That is [DiplomacyHelper](../DiplomacyHelper/) / [FactionHelper](../FactionHelper/).
- You need to persist your own hero-related state. Use `SyncData` with an [IDataStore](../IDataStore/), not a helper-side cache.

## Dependencies

- [Hero](../../campaign/Hero/) — the object nearly every member operates on: `AliveLords`, `MapFaction`, `Clan`, `IsPrisoner`, `PartyBelongedTo`, `VolunteerTypes`, `LastKnownClosestSettlement`.
- [CharacterObject](../../campaign/CharacterObject/) — `CharacterHelper` is the sibling facade; `Hero.CharacterObject` is the bridge between the two.
- [SettlementHelper](../SettlementHelper/) — `GetClosestSettlement` and `FindASuitableSettlementToTeleportForHero` delegate their distance work to it.
- [DiplomacyHelper](../DiplomacyHelper/) — the faction-stance counterpart in the same `Helpers` namespace.
- [FactionHelper](../FactionHelper/) — for clan/faction level questions like which kingdom a lord could join.
- [AgeModel](../AgeModel/) — `DefaultRelation` reads `Campaign.Current.Models.AgeModel.MiddleAdultHoodAge`.
- [TraitObject](../TraitObject/) and [DefaultTraits](../DefaultTraits/) — honor levels drive `LordWillConspireWithLord`, `CalculateReliabilityConstant`, and `NPCPersonalityClashWithNPC`.
- [VolunteerModel](../VolunteerModel/) — `HeroCanRecruitFromHero` delegates to `Campaign.Current.Models.VolunteerModel.MaximumIndexHeroCanRecruitFromHero`.
- [EncounterModel](../EncounterModel/) — `OrderHeroesOnPlayerSideByPriority` sorts with `Campaign.Current.Models.EncounterModel.GetCharacterSergeantScore`.
- [ConversationHelper](../ConversationHelper/) — used inside `LordWillConspireWithLord` to render how one hero refers to another.
- [ConversationManager](../ConversationManager/) — `WillLordAttack` reads `Campaign.Current.ConversationManager.ConversationParty`; `LordWillConspireWithLord` looks up localized lines through it.
- [CampaignEvents](../CampaignEvents/) — the dispatcher your behavior subscribes to before calling into this helper at runtime.
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — the usual home for code that calls `HeroHelper` on a tick.
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.Models` and `Campaign.Current.ConversationManager` are the live reads behind most members.

## Key members

#### `public static bool UnderPlayerCommand(Hero hero)`

The "is this hero mine" test, defined as **any** of: the hero's `MapFaction.Leader == Hero.MainHero`; the hero is a notable whose `HomeSettlement.OwnerClan == Hero.MainHero.Clan`; or the hero `IsPlayerCompanion`.
- **Return-value semantics:** `false` for `null` input, so it is the safe version of the check.
- **Trap:** it does **not** consider `Hero.IsVassalOfPlayer` or `IsInAnyClan`, and it does not check whether the hero's party is the player's party. A lord who is your vassal but whose map faction leader is someone else fails this test.
- **Use:** gate "can the player give orders to this lord" UI and behavior, not loyalty semantics.

#### `public static bool IsCompanionInPlayerParty(Hero hero)`

`hero != null && hero.IsPlayerCompanion && hero.PartyBelongedTo == MobileParty.MainParty`.
- **Return-value semantics:** `false` when the hero is a companion of another party — companions parked in a garrison, a hosted visitor, or a party you met in a battle are all excluded.
- **Trap:** comparison is by reference against `MobileParty.MainParty`. During a mission or an encounter where the main party is temporarily re-parented, this can return `false` for a hero you believe is yours.

#### `public static int DefaultRelation(Hero hero, Hero otherHero)`

The baseline relation between two NPCs who have never met, derived from clan nobility, faction, culture, age, and personality clash.
- **Algorithm, in order:** both in the same noble clan → `40`; same map faction + same culture + both older than `AgeModel.MiddleAdultHoodAge` + `NPCPersonalityClashWithNPC > 40` → `-5`; same faction + same culture + both past middle adulthood → `25`; same faction + same culture → `10`; otherwise `0`.
- **Return-value semantics:** a plain `int` in roughly the `-100..100` relation scale. This is the *initial* value, not the live `Hero.RelationWith`.
- **Trap:** the age gates use `Campaign.Current.Models.AgeModel`, so the thresholds shift if a mod replaces the age model. The clash penalty only applies to adults; a young lord never gets the `-5` branch.

#### `public static int NPCPersonalityClashWithNPC(Hero firstNPC, Hero secondNPC)` / `public static int TraitHarmony(Hero considerer, TraitObject trait, Hero consideree, bool sensitive)`

Personality-compatibility scoring. `NPCPersonalityClashWithNPC` aggregates the clash between the two heroes' personality traits; `TraitHarmony` scores a single [TraitObject](../TraitObject/) between two heroes, and the `sensitive` flag enables the stricter weighting used for the clash computation.
- **Return-value semantics:** a positive `int` where higher means *more* clash / *less* harmony. `DefaultRelation` treats `> 40` as the threshold for the hostile default.
- **Use:** reuse these when you want a compatibility number in your own relation or quest system instead of the binary default-relation verdict.

#### `public static Settlement GetClosestSettlement(Hero hero)`

Resolves the settlement a hero is plausibly at, using a chain of fallbacks rather than a single distance query.
- **Chain:** `hero.CurrentSettlement` → if the hero belongs to a party, that party's `Settlement` if `IsSettlement`, else a `Settlement.StartFindingLocatablesAroundPosition` sweep around the party's position keeping the closest village/fortification, falling back to `SettlementHelper.FindNearestSettlementToMobileParty` when the sweep finds nothing → if there is no party but there is an active `PlayerEncounter` with a battle, the encounter settlement or the nearest village/fortification to the main party → finally, if the result is neither village nor fortification, `SettlementHelper.FindNearestSettlementToSettlement`.
- **Return-value semantics:** a village or fortification, or `null` when the hero is party-less and no encounter exists. It never returns a town-only result — the final step rewrites towns to the nearest village/fortification.
- **Trap:** the locatable sweep is seeded with `Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(...) * 1.5f`, so on very sparse custom maps it can miss a valid nearest settlement and silently degrade to the `SettlementHelper` fallback.
- **Trap:** it calls `Debug.FailedAssert` when a mobile party is neither in a settlement nor at a valid map position — in a development build that is an assert, in a shipped build it is the `else` branch doing nothing.

#### `public static List<string> OrderHeroesOnPlayerSideByPriority(bool includeArmyLeader = false, bool includePlayerCompanions = false)`

Builds the player's side roster for the pre-battle / formation UI.
- **Algorithm:** walks `MobileParty.MainParty.MapEvent.PartiesOnSide(playerSide)`, collecting each party's `LeaderHero` (skipping the army's leader party unless `includeArmyLeader`); if the party *is* the main party and `includePlayerCompanions` is set, appends every `Clan.PlayerClan.Companions` hero actually in the main party; then orders descending by `Campaign.Current.Models.EncounterModel.GetCharacterSergeantScore(hero)` and projects to `hero.CharacterObject.StringId`.
- **Return-value semantics:** a `List<string>` of **character string ids**, sorted best-first. This is the surprising part: the return type is `string`, not `Hero`, and not `CharacterObject`. Resolve each id before use, and remember ids are save-stable *only* if the character definition is not renamed.
- **Trap:** assumes `MobileParty.MainParty.MapEvent != null`. Calling it outside an active map event throws.

#### `public static bool LordWillConspireWithLord(Hero lord, Hero otherLord, bool suggestingBetrayal)`

Decides whether an NPC lord agrees to conspire (or to betray their liege) and sets the localized refusal text if not.
- **Algorithm:** rolls `otherLord.RandomInt(-9, 11)` plus `lord`'s honor trait level; subtracts 1 if `suggestingBetrayal`; refuses outright (with a bespoke refusal line) when betraying someone in the same clan as `Hero.OneToOneConversationHero`; if the score is negative, refuses and sets `CONSPIRE_REFUSAL` from `str_liege_support` or `str_lord_intrigue_refuses`.
- **Return-value semantics:** `true` means the plot is accepted; `false` means refused **and** the `CONSPIRE_REFUSAL` text variable has been populated for the conversation layer.
- **Trap:** this is randomized per call. Calling it twice for the same pair can give two different answers, so cache the result if your UI shows it twice.
- **Trap:** it dereferences `Hero.OneToOneConversationHero.MapFaction.Leader` up front. Outside an active conversation that throws.

#### `public static bool WillLordAttack()`

Decides whether the conversation partner will start a battle with the player right now.
- **Algorithm:** requires an active `PlayerEncounter.Current` where the player is the `Defender` side, and either no encountered party or its AI's `DoNotAttackMainPartyUntil` is past; requires a non-null `Hero.OneToOneConversationHero`; refuses in the `FreeOrCapturePrisonerHero` / `CapturedLord` conversation contexts or when the hero `IsPrisoner`; finally requires the encounter/conversation party's `Owner` and `LeaderHero` to be non-null and `FactionManager.IsAtWarAgainstFaction(party.MapFaction, Hero.MainHero.MapFaction)`.
- **Return-value semantics:** a single yes/no for "attack the player in this encounter", already accounting for the truce and prisoner special cases.
- **Use:** gate the attack option in a conversation menu. It is a decision query, not an action — you still have to run the encounter yourself.

#### `public static void SpawnHeroForTheFirstTime(Hero hero, Settlement spawnSettlement)`

Places a hero into the world for the first time: sets `BornSettlement`, applies [EnterSettlementAction](../EnterSettlementAction/) for the character only, then `ChangeState(Hero.CharacterStates.Active)`.
- **Side effects:** three. This is a mutator, and it does **not** raise the normal "hero entered settlement" events beyond what the action emits — bespoke spawning that skips the usual spawn pipeline will leave campaign data (notable lists, party membership, encyclopedia bookkeeping) inconsistent.
- **Trap:** calling it a second time re-enters the settlement and flips the state again, which resets any in-progress state you were relying on.
- **Trap:** it does not null-check `spawnSettlement`; the action will throw.

#### `public static void SetPlayerSalutation()`

Sets the `PLAYER_SALUTATION` text variable used by conversation lines, choosing between the lord form, the captain form (when `Hero.OneToOneConversationHero.IsPlayerCompanion`), `str_player_salutation_madame` (female main hero) and `str_player_salutation_sir`.
- **Side effect:** writes into `MBTextManager` with `permanent: false`, so the value is dropped when the next text context is built.
- **Trap:** requires `Hero.OneToOneConversationHero` to be non-null. Outside a conversation it throws.
- **Trap:** it only sets the variable; it does not refresh any already-built conversation text. Call it before the conversation lines are constructed, not after.

#### `public static bool HeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int index)`

Delegates to `Campaign.Current.Models.VolunteerModel.MaximumIndexHeroCanRecruitFromHero(buyerHero, sellerHero, -101)` and compares against `index`.
- **Return-value semantics:** `true` when `index` is at or below the model's maximum permitted volunteer index. Note the `-101` sentinel argument — it is asking the model "is this index reachable at all", not "how many tiers are unlocked".
- **Use:** per-slot enable/disable in a recruitment screen. For the whole roster see `GetVolunteerTroopsOfHeroForRecruitment`.
- **Trap:** a mod that replaces the volunteer model changes this answer without any API change on `HeroHelper` itself.

#### `public static List<CharacterObject> GetVolunteerTroopsOfHeroForRecruitment(Hero hero)`

Returns the hero's six volunteer types as a list.
- **Return-value semantics:** a fresh list of exactly 6 `CharacterObject` for a living hero; an **empty** list for a dead hero. The list can contain nulls if a hero definition has fewer than six volunteer types.
- **Trap:** the count 6 is hard-coded and duplicated here rather than read from the volunteer model. If a model changes the volunteer slot count, this method still returns 6 (or throws on the index if the model shrinks `VolunteerTypes`).

#### `public static float StartRecruitingMoneyLimit(Hero hero)` / `StartRecruitingMoneyLimitForClanLeader(Hero hero)`

The gold cap a hero may spend on starting recruitment.
- **Return-value semantics:** `0f` when the hero is in `Clan.PlayerClan` (the player is never gated); otherwise `50 + min(150, memberCount) * 20`, i.e. a range of 50..3050.
- **Trap:** the numbers are hard-coded constants in the helper, not model values. They will not respond to a difficulty or economy model.

#### `public static Clan GetRandomClanForNotable(Hero notable)`

Picks a sponsoring clan for a preacher or gang-leader notable, weighted by how many settlements the clan owns.
- **Algorithm:** builds the candidate list from `Clan.NonBanditFactions` filtered to `IsSect` (preacher) or `IsMafia` (gang leader) with probability 0.5; removes clans that already have a notable at `notable.HomeSettlement`; builds a `Settlement`→`Clan` lookup over towns and hideouts; walks the candidates subtracting `GetProbabilityForClan(clan, settlements, notable)` scaled by a random factor until the total drops to zero or below.
- **Return-value semantics:** a [Clan](../../campaign/Clan/), or `null` when the notable is neither preacher nor gang leader, the 0.5 roll failed, every candidate was eliminated, or the walk ran out.
- **Trap:** it dereferences `notable.HomeSettlement.Notables`. A notable with no home settlement throws.
- **Trap:** it consumes `MBRandom` — calling it inside a deterministic save-replay or a network-synchronised path desynchronises clients.

#### `public static CampaignTime GetRandomBirthDayForAge(float age)` / `GetRandomDeathDayAndBirthDay(int deathAge, out CampaignTime birthday, out CampaignTime deathday)`

Deterministic-window birth/death date sampling for spawning a hero of a given age.
- **Return-value semantics:** `GetRandomBirthDayForAge` returns a `CampaignTime` `age` years before the campaign's current day, with the intra-year day randomized inside that year. `GetRandomDeathDayAndBirthDay` fills both `out` parameters so that the span between them equals `deathAge` years.
- **Trap:** both consume the global `MBRandom` stream. Use them during campaign load or in single-player only.

#### `public static TextObject GetLastSeenText(Hero hero)`

Builds the encyclopedia "last seen" line.
- **Return-value semantics:** `str_never_seen_encyclopedia_entry` when `hero.LastKnownClosestSettlement == null`; otherwise `str_last_seen_encyclopedia_entry` with `SETTLEMENT` set to the settlement's `EncyclopediaLinkWithName` and `IS_IN_SETTLEMENT` set to 1/0.
- **Trap:** `hero.LastKnownClosestSettlement` is only updated for heroes the campaign has actually observed; a mod that spawns heroes without updating it will show "never seen" in the encyclopedia forever.

## Examples

### Example 1 — is this lord effectively the player's, in a daily-tick behavior

```csharp
public class VassalLedgerBehavior : CampaignBehaviorBase
{
    private readonly List<string> _ledger = new List<string>();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // Persist by index, never by Hero reference.
        for (int i = 0; i < _ledger.Count; i++)
        {
            dataStore.SyncData("_ledger_" + i, ref _ledger[i]);
        }
    }

    private void OnDailyTick()
    {
        _ledger.Clear();
        foreach (Hero hero in Hero.AllAlive)
        {
            // UnderPlayerCommand is null-safe; IsCompanionInPlayerParty is the
            // stricter "actually riding with me right now" check.
            if (HeroHelper.UnderPlayerCommand(hero) && !HeroHelper.IsCompanionInPlayerParty(hero))
            {
                Settlement home = HeroHelper.GetClosestSettlement(hero);
                _ledger.Add($"{hero.StringId}@{home?.StringId ?? "nowhere"}");
            }
        }
    }
}
```

### Example 2 — seed a fresh lord with a plausible birth date

```csharp
public void SeedNewLord(Hero lord, int age)
{
    // Both calls consume MBRandom, so keep them off networked/deterministic paths.
    CampaignTime birthday = HeroHelper.GetRandomBirthDayForAge(age);
    Settlement spawn = HeroHelper.GetClosestSettlement(lord)
                       ?? SettlementHelper.FindRandomSettlement(s => s.IsVillage);
    // Mutator: sets BornSettlement, enters the settlement, flips state to Active.
    HeroHelper.SpawnHeroForTheFirstTime(lord, spawn);
    Debug.Print($"{lord.StringId} born {birthday} at {spawn.StringId}");
}
```

### Example 3 — gate the recruitment panel per volunteer slot

```csharp
public List<CharacterObject> BuildRecruitmentRoster(Hero buyer, Hero seller)
{
    var roster = HeroHelper.GetVolunteerTroopsOfHeroForRecruitment(seller); // 6 slots, empty if dead
    var result = new List<CharacterObject>();
    for (int i = 0; i < roster.Count; i++)
    {
        if (roster[i] != null && HeroHelper.HeroCanRecruitFromHero(buyer, seller, i))
        {
            result.Add(roster[i]);
        }
    }
    return result;
}
```

### Example 4 — order the player's battle side, then resolve the ids back to heroes

```csharp
public List<Hero> GetPlayerSidePriorityOrder()
{
    // Returns CharacterObject.StringId, NOT Hero objects.
    var ids = HeroHelper.OrderHeroesOnPlayerSideByPriority(
        includeArmyLeader: true,
        includePlayerCompanions: true);

    var ordered = new List<Hero>();
    foreach (string id in ids)
    {
        CharacterObject co = Campaign.Current.GetCharacterObject(id);
        if (co?.HeroObject != null)
        {
            ordered.Add(co.HeroObject);
        }
    }
    return ordered;
}
```

### Example 5 — decide whether to offer an attack inside a conversation

```csharp
public bool TryOfferAttack(MenuCallback callback)
{
    if (!HeroHelper.WillLordAttack())
    {
        return false; // truce, prisoner, or defender-side conditions failed
    }
    // WillLordAttack is a query only - running the encounter is your job.
    callback();
    return true;
}
```

## Risks and crash boundaries

- **Null-reflexive by design in several members.** `UnderPlayerCommand` and `IsCompanionInPlayerParty` null-check their argument; `GetClosestSettlement`, `SetPlayerSalutation`, `LordWillConspireWithLord`, `WillLordAttack`, `GetRandomClanForNotable` do not. In a campaign full of hero-less parties, prisoner swaps, and mass executions, `null` heroes reach these methods regularly.
- **Conversation-scoped members throw outside conversations.** `SetPlayerSalutation`, `LordWillConspireWithLord` and `WillLordAttack` all dereference `Hero.OneToOneConversationHero`. They are safe only inside `ConversationManager`'s conversation flow. A UI that evaluates "can I attack" from a menu callback outside a conversation will throw.
- **Map-event assumption.** `OrderHeroesOnPlayerSideByPriority` dereferences `MobileParty.MainParty.MapEvent`. Calling it from a menu that is reachable outside a battle/mission/map event crashes.
- **Direct mutation bypasses the event pipeline.** `SpawnHeroForTheFirstTime` calls `hero.ChangeState(...)` directly. Hero state changes made this way do not always raise the `CampaignEvents` your other systems listen to, so a spawn can leave party rosters, notable lists, and encyclopedia data inconsistent. Prefer the `*Action.Apply` path.
- **Global RNG consumption.** `GetRandomClanForNotable`, `GetRandomBirthDayForAge` and `GetRandomDeathDayAndBirthDay` advance `MBRandom`. In multiplayer, replays, or anywhere determinism matters, calling them twice for the same logical event desynchronises the result.
- **Cross-domain dependency.** The class sits in `TaleWorlds.CampaignSystem` but returns `TextObject` (from `TaleWorlds.Localization`) and reads `Campaign.Current.Models.*`. A mod shipping an older `TaleWorlds.Localization` gets a load-time assembly failure on the first call to `GetLastSeenText`, not a compile error.
- **Load order.** `GetLastSeenText` depends on `LastKnownClosestSettlement` having been populated by the campaign's observation system. During the very first campaign tick, before the encyclopedia has observed anyone, it returns "never seen" for everyone.
- **Save serialization and ID stability.** `OrderHeroesOnPlayerSideByPriority` hands you `CharacterObject` string ids. Persist those ids in your own `SyncData`, and remember they are only as stable as the character XML definitions — renaming or re-iding a troop silently breaks saved rosters. Keys you build yourself (index-based, versioned prefixes) survive; `Hero` references do not.
- **Hard-coded constants defeat model replacement.** The 6 volunteer slots and the `50 + min(150, n) * 20` money limit are literals. A mod replacing `VolunteerModel` or an economy model will find `HeroHelper` still reporting the base-game numbers — treat its answers as vanilla-flavoured, not authoritative.

## Cross-Version Notes

- **v1.3.x (this page):** the member set above matches 1.3.15. `OrderHeroesOnPlayerSideByPriority` returns `List<string>`, and `GetLastSeenText` uses `str_last_seen_encyclopedia_entry`.
- **v1.4.x:** largely stable. Newer versions add hero age-stage handling and additional encyclopedia text, but `UnderPlayerCommand`, `DefaultRelation`, `GetClosestSettlement` and `WillLordAttack` keep their shapes and semantics.
- **v1.5.x:** expect additional hero-lifecycle members around family and marriage. The three core semantics above — "is this hero the player's", "where would this hero plausibly be", "what is the default relation between these NPCs" — are the stable contract; prefer them over probing hero fields directly.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](./)
- ↔ Sibling: [CharacterHelper](../CharacterHelper/) — the character/troop-side facade in the same namespace
- ↔ Sibling: [SettlementHelper](../SettlementHelper/) — where the distance work in `GetClosestSettlement` actually happens
- ↔ Sibling: [DiplomacyHelper](../DiplomacyHelper/) — faction stances and war causes
- ↔ Sibling: [FactionHelper](../FactionHelper/) — clan/kingdom-level queries
- ↔ Sibling: [ConversationHelper](../ConversationHelper/) — hero-to-hero reference text used inside conspiracy checks
- ↔ Sibling: [VolunteerModel](../VolunteerModel/) — the real source of the recruitment index limit
- ↔ Sibling: [EncounterModel](../EncounterModel/) — the sergeant score used to order the battle side
- ↑ Hero: [Hero](../../campaign/Hero/)
- ↑ Clan: [Clan](../../campaign/Clan/)
- ↑ Behavior base: [CampaignBehaviorBase](../CampaignBehaviorBase/)