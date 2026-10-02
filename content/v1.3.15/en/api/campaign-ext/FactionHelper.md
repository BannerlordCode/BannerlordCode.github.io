---
title: "FactionHelper"
description: "Faction and kingdom facade: strength ratios, tribute-weighted power, stance enumeration, war-partner lists, player join eligibility, and hostility teardown."
---
# FactionHelper

**Namespace:** `Helpers`
**Module:** Helpers (TaleWorlds.CampaignSystem assembly)
**Type:** `public static class FactionHelper`
**Base:** none (static)
**Source:** `TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs`

## Overview

`FactionHelper` is the clan/kingdom-side facade of the `Helpers` namespace — the sibling of [DiplomacyHelper](../DiplomacyHelper/), [HeroHelper](../HeroHelper/), [SettlementHelper](../SettlementHelper/) and [CharacterHelper](../CharacterHelper/). Roughly forty public members across five concerns: **strength arithmetic** (`FindPotentialStrength`, `GetTotalEnemyKingdomPower`, `GetPowerRatioToEnemies`, `GetPowerRatioToTributePayedKingdoms`, the garrison-size constants), **stance enumeration** (`GetStances`, `GetEnemyKingdoms`), **name validation and generation** (`IsClanNameApplicable`, `IsKingdomNameApplicable`, `GenerateClanNameforPlayer`, `GetAdjectiveForFaction`), **player-join eligibility** (`CanPlayerEnterFaction`, `CanPlayerOfferVassalage`, `CanPlayerOfferMercenaryService`), and **state teardown** (`FinishAllRelatedHostileActions*`, `AdjustFactionStancesForClanJoiningKingdom`).

Almost everything is a pure query, but a meaningful minority **mutates** — `MakePeaceAction.Apply` inside `AdjustFactionStancesForClanJoiningKingdom`, `SetMoveModeHold` inside the `FinishAllRelatedHostileActions*` family, and `StanceLink.ResetPeaceStats` calls. Treat it as a query facade with a heavy write edge, and read the "Key members" notes before calling any of the mutators. Namespace is the bare `Helpers`, so `using Helpers;` is required.

## Mental Model

Think of `FactionHelper` as **"the political arithmetic layer the AI and the diplomacy UI share"**:

- **Typical call order in a mod.** Register a [CampaignBehaviorBase](../CampaignBehaviorBase/) via [CampaignGameStarter](../CampaignGameStarter/), subscribe to [CampaignEvents](../CampaignEvents/) in `RegisterEvents`, and on a daily/hourly tick ask `FactionHelper` questions like "can the player join this kingdom" or "how strong are my enemies". The eligibility methods return both a verdict *and* two `out` lists, so the natural call is verdict-then-explain in the same frame.
- **Two different "power" numbers, do not mix them.** `FindPotentialStrength(faction)` is a *static* tier-based number: `tier * 100` per clan, mercenary clans scaled down by how poor the kingdom leader is, then doubled. `Kingdom.CurrentTotalStrength` is the *live* number. `GetPowerRatioToEnemies` divides live strength by live enemy strength; `GetPowerRatioToTributePayedKingdoms` divides live strength by a tribute-weighted blend. They answer different questions and disagree in normal campaigns.
- **`GetStances` is the enumeration backbone.** It walks `Kingdom.All` and then `Clan.All`, returning every non-null `GetStanceWith(...)`. Four other methods are built on it (`GetTotalTributePayedKingdomsPower`, `AdjustFactionStancesForClanJoiningKingdom`, and indirectly the hostility teardown), so an O(k·c) stance lookup is behind what look like simple calls.
- **Trap: the eligibility methods take `Kingdom`, not `IFaction`.** `CanPlayerOfferVassalage` and `CanPlayerOfferMercenaryService` require a `Kingdom`. Passing a `Clan` gives you a compile-time mismatch at best; at runtime, if you cast, `GetStanceWith` style assumptions silently break because a clan has no `Leader` in the kingdom sense.
- **Trap: the `out` lists are always populated, even on `false`.** Both eligibility methods build `playerWars` and `warsOfFactionToJoin` **before** returning their verdict. A `false` return still hands you the reason data — use it for the tooltip instead of recomputing.
- **Trap: `IsMainClanMemberAvailableFor*` produce localized explanations that you must surface.** The four `IsMainClanMemberAvailableFor{Recall,PartyLeaderChange,SendingSettlement,SendingSettlementAsGovernor}` methods return a `bool` plus an `out TextObject explanation`. Ignoring the `out` gives the player a greyed-out button with no reason. The text carries the `=xxx` translation keys, so they localise with the game's text tables, not with mod-provided strings.
- **Trap: the `FinishAllRelatedHostileActions*` family reaches deep into live map events.** They set `MapEvent.DiplomaticallyFinished`, iterate `WarPartyComponents`, and call `SetMoveModeHold()` on mobile parties. Calling one mid-battle changes AI behaviour immediately and is not reversible except by finishing the battle.

### When to Use

**Use `FactionHelper` when:**
- You need to display or gate a political option: can the player enter a faction, swear vassalage, or offer mercenary service (`CanPlayerEnterFaction`, `CanPlayerOfferVassalage`, `CanPlayerOfferMercenaryService`).
- You need a strength ratio for a tooltip, a score, or an AI gate (`GetPowerRatioToEnemies`, `GetPowerRatioToTributePayedKingdoms`, `FindPotentialStrength`).
- You need to enumerate stances, enemies, armies, or possible war partners (`GetStances`, `GetEnemyKingdoms`, `GetKingdomArmies`, `GetPossibleKingdomsToDeclareWar`, `GetPossibleKingdomsToDeclarePeace`).
- You need the garrison-size model constants so your own settlement maths matches vanilla (`SettlementProsperityEffectOnGarrisonSizeConstant`, `SettlementFoodPotentialEffectOnGarrisonSizeConstant`, `OwnerClanEconomyEffectOnGarrisonSizeConstant`, `FindIdealGarrisonStrengthPerWalledCenter`).
- You need valid-name validation for a clan-creation screen (`IsClanNameApplicable`, `IsKingdomNameApplicable`) or culture/faction naming text (`GetFormalNameForFactionCulture`, `GetAdjectiveForFaction`, `GetTermUsedByOtherFaction`).
- You are merging clans into a kingdom or tearing down hostility and need vanilla's exact stance fixups.

**Do NOT use `FactionHelper` when:**
- You want the single stance you already hold, or the war-cause verdict. That is [DiplomacyHelper](../DiplomacyHelper/).
- You want to change relations directly. Use [MakePeaceAction](../MakePeaceAction/), `DeclareWarAction`, and the other `*Action.Apply` classes. `AdjustFactionStancesForClanJoiningKingdom` looks like a setter but is a *fixup* meant to run right after a join action.
- You want settlement proximity or geography. That is [SettlementHelper](../SettlementHelper/); `GetMidSettlementOfFaction` and `GetDistanceToClosestNonAllyFortificationOfFaction` are the only geography here.
- You want a lord-level answer ("can I recall this hero"). That is `HeroHelper` plus your own party logic; `IsMainClanMemberAvailableFor*` here is specifically about *clan members* of the player's clan.
- You need a saveable cache of these answers. Nothing here is serialized; store the numbers yourself in `SyncData([IDataStore](../IDataStore/))`.

## Dependencies

- [Kingdom](../../campaign/Kingdom/) — the concrete `IFaction` most members expect; supplies `CurrentTotalStrength`, `Armies`, `Clans`, `Leader`, `InitialHomeSettlement`.
- [Clan](../../campaign/Clan/) — `Tier`, `IsUnderMercenaryService`, `HomeSettlement`, `Settlements`, `NonBanditFactions`, and the player-clan gates in the eligibility methods.
- [StanceLink](../StanceLink/) — what `GetStances` returns and what the tribute/power maths walks; supplies `IsNeutral`, `IsAtWar`, `GetDailyTributeToPay`, `ResetPeaceStats`.
- [DiplomacyHelper](../DiplomacyHelper/) — the war-cause and prisoner counterpart in the same namespace.
- [HeroHelper](../HeroHelper/) — the lord-side facade; `Hero.MainHero` is the implicit player in most eligibility checks.
- [DiplomacyModel](../DiplomacyModel/) — supplies `IsAtConstantWar`, `GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom`, and `MinimumRelationWithConversationCharacterToJoinKingdom`.
- [ClanTierModel](../ClanTierModel/) — supplies `VassalEligibleTier` and `MercenaryEligibleTier`, the tier gates in the two join methods.
- [MakePeaceAction](../MakePeaceAction/) — what `AdjustFactionStancesForClanJoiningKingdom` applies when a joined clan's war is not the kingdom's war.
- [FactionManager](../FactionManager/) — the lower-level "are these at war" check used by `GetPossibleKingdomsToDeclareWar`.
- [MapEvent](../MapEvent/) — the object the `FinishAllRelatedHostileActions*` family mutates via `DiplomaticallyFinished` and `Update()`.
- [WarPartyComponent](../WarPartyComponent/) — iterated while holding besieging parties after a hostile action is finished.
- [Army](../Army/) — what `GetKingdomArmies` returns.
- [CultureObject](../CultureObject/) — the key for every faction/culture naming text lookup.
- [NameGenerator](../NameGenerator/) — used by `GenerateClanNameforPlayer` when the player's culture is not Vlandia.
- [Town](../../campaign/Town/) — the input to the prosperity/food garrison constants and `GetNeighborScoreForConsideringClan`'s fortification neighbours.
- [Hero](../../campaign/Hero/) — `Hero.MainHero.Gold`, `MapFaction`, `Leader.GetRelationWithPlayer` in the eligibility maths.
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.Models.*` and `Campaign.Current.Settlements` are live reads behind most members.
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — where code that calls into this facade typically lives.

## Key members

#### `public static float FindPotentialStrength(IFaction faction)`

A *static*, tier-based strength number, independent of current armies.
- **Algorithm:** for a kingdom faction, iterate `kingdom.Clans`, scaling each clan's `tier * 100` by `0.3` when the clan `IsUnderMercenaryService` (further reduced linearly down to `0.3 - (1 - leaderGold/100000) * 0.3` when the leader has under 100000 gold), summing; for a clan faction, `clan.Tier * 100`; finally multiply by 2.
- **Return-value semantics:** a plain `float` in the same rough units as `CurrentTotalStrength` but *not* the same quantity. Zero-ish for a faction that is neither a kingdom nor a clan.
- **Trap:** it reads `kingdom.Leader.Gold`, so a null `Leader` on a broken kingdom throws.
- **Trap:** the mercenary discount is a hard-coded 0.3 constant, not a model value. A modded mercenary system will not be reflected here.

#### `public static float GetPowerRatioToEnemies(Kingdom kingdom)` / `GetTotalEnemyKingdomPower(Kingdom kingdom)`

Live strength of the kingdom divided by the summed live strength of its enemy kingdoms.
- **Algorithm:** `kingdom.CurrentTotalStrength / (GetTotalEnemyKingdomPower(kingdom) + 0.0001f)`; the denominator sums `CurrentTotalStrength` over `GetEnemyKingdoms(kingdom)` (i.e. every `FactionsAtWarWith` entry that `IsKingdomFaction`).
- **Return-value semantics:** a ratio where `> 1` means the kingdom outguns its enemies. With **no** enemy kingdoms the denominator is `0.0001f`, so you get an enormous number rather than infinity or an exception.
- **Trap:** a `false`-then-huge ratio is easy to feed into a UI as "1000000 : 1". Clamp it.
- **Trap:** `CurrentTotalStrength` is a live value, so this changes every tick. Do not use it as a stable key.

#### `public static float GetPowerRatioToTributePayedKingdoms(Kingdom kingdom)` / `GetTotalTributePayedKingdomsPower(Kingdom kingdom)`

Live strength divided by a *tribute-weighted* measure of the kingdoms this one pays tribute to.
- **Algorithm (denominator):** walk `GetStances(kingdom)`; for each stance that `IsNeutral`, get `GetDailyTributeToPay(kingdom)`; when that value is **negative** (i.e. this kingdom receives tribute), add `sqrt(min(1, -dailyTribute / 4000)) * faction.CurrentTotalStrength`. Then the ratio is `CurrentTotalStrength / (that + 0.0001f)`.
- **Return-value semantics:** a ratio, same `> 1` convention. The `-dailyTribute / 4000` term saturates at 4000 gold/day — a tribute payer beyond that adds no further weight.
- **Trap:** only `IsNeutral` stances count. A tributary that is at war contributes nothing, and a *paying* stance (`dailyTribute > 0`) is skipped too.
- **Trap:** `GetStances` walks every kingdom and every clan, so this is O(factions) per call.

#### `public static IEnumerable<StanceLink> GetStances(IFaction faction)`

Every non-null stance link between `faction` and any other kingdom or clan.
- **Algorithm:** iterate `Kingdom.All` skipping `faction` itself, then `Clan.All` skipping `faction`, calling `GetStanceWith(other)` and keeping non-null results.
- **Return-value semantics:** a fresh `List<StanceLink>`, never `null`, containing only stances that actually exist. Factions with no stance relationship are simply absent — there is no "neutral by default" entry.
- **Cost:** O(k + c) with a dictionary-ish lookup each. Fine for per-frame UI, not for per-agent loops.
- **Trap:** self is excluded by reference comparison. Passing a faction whose object identity differs from the one in `Kingdom.All` (a cloned/reinstanced faction) yields an empty list plus a self-stance attempt.

#### `public static IEnumerable<Kingdom> GetEnemyKingdoms(IFaction faction)` / `List<IFaction> GetPossibleKingdomsToDeclareWar(Kingdom kingdom)` / `GetPossibleKingdomsToDeclarePeace(Kingdom kingdom)`

Enemy and candidate-partner lists.
- `GetEnemyKingdoms` filters `faction.FactionsAtWarWith` down to entries where `IsKingdomFaction`, cast to `Kingdom`. It returns a lazy `IEnumerable`, so enumerate once.
- `GetPossibleKingdomsToDeclareWar` iterates `Kingdom.All` and keeps kingdoms that are neither the argument itself nor at war with it (tested with `FactionManager.IsAtWarAgainstFaction`). Note it returns `List<IFaction>`, not `List<Kingdom>`.
- `GetPossibleKingdomsToDeclarePeace` is the mirror: it collects the kingdoms the argument **is** at war with.
- **Return-value semantics:** fresh lists/sequences, empty on no match. These are *candidate* lists — they encode no AI willingness, no relation requirement, and no distance.
- **Trap:** these lists are exactly what you feed into a "declare war" UI, but performing the war is your job via `DeclareWarAction`.

#### `public static bool CanPlayerEnterFaction(bool asVassal = false)`

A **score-threshold** check, not a rule check.
- **Algorithm:** sum `settlement.GetSettlementValueForFaction(Hero.OneToOneConversationHero.MapFaction)` over settlements owned by the player that are village/town/castle; compute `num3 = PlayerClan.Renown + (asVassal ? ownedValue/5000 : 0) + (asVassal ? MainHero.Gold/10000 : 0) + min(threshold, Renown)/threshold * 0.2 * PlayerClan.CurrentTotalStrength + OneToOneConversationHero.MapFaction.Leader.GetRelationWithPlayer() * 2`, where `threshold` is 50 for vassalage and 10 otherwise; return `num3 > 25` (non-vassal) or `num3 > 150` (vassal).
- **Return-value semantics:** a threshold verdict computed from a *live conversation partner*. **It is conversation-scoped** — `Hero.OneToOneConversationHero` is dereferenced with no null check, so calling it outside a conversation throws.
- **Trap:** the 25/150 thresholds and the 5000/10000 divisors are hard-coded literals. A mod that rebalances renown or clan strength gets vanilla-flavoured answers from this method.
- **Trap:** the score mixes renown, gold, settlement value and relation with very different scaling; it is meant for the "join this kingdom" menu, not for your own quest balance.

#### `public static bool CanPlayerOfferVassalage(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)` / `CanPlayerOfferMercenaryService(...)`

Full eligibility checks for joining a kingdom, with the reason data filled in on both paths.
- **Algorithm (common prefix):** compute `strengthThreshold = DiplomacyModel.GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(offerKingdom)`; `playerWars` = kingdoms at war with `Clan.PlayerClan.MapFaction` whose `CurrentTotalStrength` exceeds that threshold; `warsOfFactionToJoin` = kingdoms at war with `offerKingdom`.
- **Vassalage additionally requires:** `PlayerClan.Kingdom == null || PlayerClan.IsUnderMercenaryService`, not at war with `offerKingdom`, `PlayerClan.Tier >= ClanTierModel.VassalEligibleTier`, `offerKingdom` not eliminated, `offerKingdom.Leader.GetRelationWithPlayer() >= DiplomacyModel.MinimumRelationWithConversationCharacterToJoinKingdom`, and `playerWars ⊆ warsOfFactionToJoin` (checked as `Intersect(...).Count() == playerWars.Count`).
- **Mercenary additionally requires:** `PlayerClan.Kingdom == null`, tier at least `MercenaryEligibleTier`, the same relation gate, the same subset check, **and** `PlayerClan.Settlements.IsEmpty<Settlement>()`.
- **Return-value semantics:** `true` only when every condition holds. Both `out` lists are populated **before** the verdict, so they are the diagnostic data on a `false`.
- **Trap:** `offerKingdom.Leader` is dereferenced; a leaderless kingdom throws.
- **Trap:** the subset test means "every war the player is in must be a war the offer kingdom is also in". A player fighting a minor faction nobody cares about is *not* blocked, but a player fighting a major kingdom is. This surprises people.
- **Trap:** the mercenary method's settlement check is `IsEmpty<Settlement>()` on `PlayerClan.Settlements` — owning a single village disqualifies you.

#### `public static bool CanClanBeGrantedFief(Clan clan)`

A two-clause rule: `clan != Clan.PlayerClan && !clan.IsUnderMercenaryService`.
- **Return-value semantics:** `false` for the player clan and for any clan under mercenary service. Note it does **not** check tier, kingdom membership, or whether a fief is actually available — it answers only "is this clan structurally allowed to hold a fief".
- **Trap:** a null `clan` throws at the first comparison.

#### `public static Tuple<bool, string> IsClanNameApplicable(string name)` / `IsKingdomNameApplicable(string name)`

Name validation for the create-clan / create-kingdom screens.
- **Algorithm:** collect problems from `IsFactionNameApplicable(name)` (private: forbidden substrings and length rules), and for clans additionally check `Clan.All` for an existing clan (other than `Clan.PlayerClan`) with an equal name under `InvariantCultureIgnoreCase`, adding `str_clan_name_invalid_already_exist`; then fold the problem list into a single newline-joined string using `str_string_newline_newline_string`.
- **Return-value semantics:** `(true, "")` when `name` is acceptable; `(false, reason)` otherwise, with `reason` already localized and newline-joined when there are several problems. Never `(true, non-empty)`.
- **Trap:** the emptiness test is `list.Count == 0`, so a single problem produces exactly that problem's text.
- **Trap:** `IsKingdomNameApplicable` does **not** do the duplicate-clan check — the duplicate check is clan-specific. Do not assume the two are symmetric.
- **Use:** drive the "create your clan" screen's validation state; the string is display-ready.

#### `public static TextObject GenerateClanNameforPlayer()`

A suggested clan name for the player.
- **Algorithm:** read `CharacterObject.PlayerCharacter.Culture`; hard-code `"dey Corvand"` for the Vlandia culture, otherwise `NameGenerator.Current.GenerateClanName(culture, null)`.
- **Return-value semantics:** a `TextObject`. It is a *suggestion* — it does not register the name and does not check uniqueness.
- **Trap:** the Vlandia branch is a hard-coded literal with a translation key, so it is not affected by `NameGenerator` mods.
- **Trap:** `NameGenerator.Current` must be initialized; calling before the name generator is set up throws.
- **Trap:** it consumes the RNG inside `GenerateClanName`, so it is not deterministic.

#### `public static TextObject GetFormalNameForFactionCulture(CultureObject factionCulture)` / `GetInformalNameForFactionCulture(...)` / `GetAdjectiveForFactionCulture(...)` / `GetAdjectiveForFaction(IFaction faction)` / `GetTermUsedByOtherFaction(IFaction faction, IFaction otherFaction, bool pejorative)`

Naming and epithet text, all keyed on `StringId` through `GameTexts.FindText`.
- **Return-value semantics:** a `TextObject`. `GetAdjectiveForFaction` returns `str_adjective_for_faction` keyed on `faction.StringId` for a `Kingdom`, and **the faction's own `Name`** for anything else — so the "adjective" of a clan is its name, which is intentional.
- **Trap:** a modded faction or culture whose `StringId` has no text entry gets a `TextObject` that renders as its key. Always supply fallbacks for modded ids.
- **Trap:** `GetTermUsedByOtherFaction` is the one that varies by observer — pass the *observer* as `otherFaction` or the epithet will be the wrong party's opinion.

#### `public static void AdjustFactionStancesForClanJoiningKingdom(Clan joiningClan, Kingdom kingdomToJoin)`

The stance fixup to run **after** a clan joins a kingdom.
- **Algorithm:** for each stance of `joiningClan`, skip constant wars per `DiplomacyModel.IsAtConstantWar`; identify the other faction; if `stanceLink.IsAtWar` and `kingdomToJoin` is **not** at war with that other faction, apply `MakePeaceAction.Apply(joiningClan, otherFaction)` and then run `FinishAllRelatedHostileActionsOfFactionToFaction` in both directions; otherwise (at peace) call `stanceLink.ResetPeaceStats()`.
- **Side effects:** peace actions, hostility teardown (map-event changes, `SetMoveModeHold`), and peace-stat resets. This is a mutator in a mostly-query class.
- **Trap:** calling it before the join action has actually made the clan a member produces stances for a faction that is still independent.
- **Trap:** calling it *twice* for the same join re-resets peace stats against the same stances. There is no idempotency guard.
- **Trap:** it silently skips constant-war stances (per the diplomacy model), so some of the clan's enemies are left untouched by design.

#### `public static void FinishAllRelatedHostileActionsOfNobleToFaction(Hero noble, IFaction faction)` / `...OfFactionToFaction(IFaction faction1, IFaction faction2)` / `FinishAllRelatedHostileActions(Clan clan1, Clan clan2)` / `FinishAllRelatedHostileActions(Kingdom kingdom1, Kingdom kingdom2)`

Teardown of map-level hostilities between a noble/party/faction and a faction.
- **What the noble variant does:** if the noble's party is in a `MapEvent` against `faction` (matching on attacker/defender side leader party, and on kingdom `MapFaction` vs clan `Owner.Clan` depending on `faction.IsKingdomFaction`), it sets `MapEvent.DiplomaticallyFinished = true`, collects attacker-side parties, holds besieging `WarPartyComponent` parties that are defending the map-event settlement, calls `MapEvent.Update()`, and puts every mobile attacker party on hold; separately, if the noble's party is besieging a settlement owned by `faction`, it holds the defending war-party components, clears `BesiegerCamp`, and holds the noble's party.
- **Return value:** none. It is purely side-effecting and **not reversible** — you cannot un-hold a party or un-finish a map event through this API.
- **Trap:** it reaches into `MapEvent.AttackerSide.LeaderParty.MapFaction` and `.Owner.Clan` without null guards on the *other* side's leader party. A malformed map event throws.
- **Trap:** the kingdom/clan overloads are convenience wrappers over the faction pair; the clan-vs-clan and kingdom-vs-kingdom versions are different overloads with the same name — pass the right argument types or you hit an ambiguous-call compile error.
- **Use:** only as the cleanup half of a real diplomatic change (a peace, a defection, a kingdom merger), immediately after the corresponding action.

#### `public static bool IsMainClanMemberAvailableFor{Recall,PartyLeaderChange,SendingSettlement,SendingSettlementAsGovernor}(...)`

Availability checks for moving the player's clan members around, each with a localized `out TextObject explanation`.
- **Common pre-checks (recall variant):** rejects when the hero is already in the main party, when `CurrentSettlement.IsUnderSiege || IsUnderRaid`, when `Hero.MainHero.IsPrisoner`, when `MobileParty.MainParty.MapEvent != null`, when the main party `IsCurrentlyAtSea`; then defers to the private `IsMainClanMemberAvailableForRelocate`.
- **Return-value semantics:** `true` means the action is legal *right now*; `false` **always** comes with a populated `explanation` text built inline (e.g. `{HERO.NAME} is already in the main party.`, `You can't recall a clan member while you are in a map event.`).
- **Trap:** the explanation texts are inline literals with `{HERO.NAME}` properties, not `GameTexts.FindText` lookups. They will **not** appear in a string table dump and need the campaign text pipeline to localise.
- **Trap:** `IsMainClanMemberAvailableForPartyLeaderChange` takes a `bool isSend` flag, so the same method serves both "give command" and "take command" with different meaning.
- **Trap:** the "sending as governor" variant has an extra requirement on being already the governor of a settlement, which makes the two settlement variants non-interchangeable.

#### `public static float SettlementProsperityEffectOnGarrisonSizeConstant(Town town)` / `SettlementFoodPotentialEffectOnGarrisonSizeConstant(Settlement settlement)` / `OwnerClanEconomyEffectOnGarrisonSizeConstant(Clan clan)` / `FindIdealGarrisonStrengthPerWalledCenter(Kingdom kingdom, Clan clan = null)`

The vanilla garrison-size model, exposed piecewise.
- **Algorithm (prosperity):** `2.2f * (0.1f + 0.9f * sqrt(min(town.Prosperity, 5000f) / 5000f))` — a saturating curve capped at 5000 prosperity.
- **Return-value semantics:** multipliers/weights, not garrison counts. `FindIdealGarrisonStrengthPerWalledCenter` returns the ideal per-walled-center strength, using the other two constants and the clan economy constant.
- **Trap:** the `2.2f`, `5000f`, `0.1f` and `0.9f` are literals in the helper. They mirror the vanilla settlement model but do not read it, so a mod replacing the settlement model and calling these gets two different answers.
- **Use:** reuse these when your own settlement math must agree with what the player sees, rather than recomputing the curve.

#### `public static float GetDistanceToClosestNonAllyFortificationOfFaction(IFaction faction)` / `Settlement GetMidSettlementOfFaction(IFaction faction)`

Geography helpers for a faction.
- **Return-value semantics:** `GetDistanceToClosestNonAllyFortificationOfFaction` returns the minimum `MapDistanceModel.GetDistance` from `faction.FactionMidSettlement` to any `Town.AllFiefs` settlement owned by a different faction — or **`float.MaxValue`** when `FactionMidSettlement` is null, and also when every fief is the faction's own. Always check for `float.MaxValue` before using the value.
- **Trap:** `float.MaxValue` is a silent failure value, not an error. Feeding it into a score produces a faction that scores infinitely well.
- `GetMidSettlementOfFaction` returns the faction's settlement minimizing summed pairwise distances (weighting villages), falling back to `Clan.HomeSettlement` / `Kingdom.InitialHomeSettlement` when the faction owns none.

## Examples

### Example 1 — gate a "join this kingdom" menu button with a real reason

```csharp
public bool TryOfferVassalage(Kingdom offerKingdom, out string tooltip)
{
    // Both out lists are populated even when the verdict is false.
    bool can = FactionHelper.CanPlayerOfferVassalage(offerKingdom, out var playerWars, out var offerWars);

    if (can)
    {
        tooltip = "Available";
    }
    else if (playerWars.Except(offerWars).Any())
    {
        // The subset test is what actually blocked the join.
        tooltip = "You are at war with kingdoms they are not: "
                + string.Join(", ", playerWars.Except(offerWars).Select(k => k.Name.ToString()));
    }
    else
    {
        tooltip = "Tier, relation, or existing kingdom membership blocks this offer.";
    }
    return can;
}
```

### Example 2 — score a war as "we can win" with a clamped ratio

```csharp
public bool AreWeOutgunned(Kingdom kingdom)
{
    float ratio = FactionHelper.GetPowerRatioToEnemies(kingdom);
    // With zero enemy kingdoms the denominator is 0.0001f -> huge ratio.
    if (float.IsInfinity(ratio) || ratio > 1000f)
    {
        return false;
    }
    return ratio < 1f;
}
```

### Example 3 — list candidate war partners for a custom declare-war dialog

```csharp
public List<IFaction> GetWarTargets(Kingdom playerKingdom)
{
    // Returns candidates only - no AI willingness, no relation gate, no distance.
    var candidates = FactionHelper.GetPossibleKingdomsToDeclareWar(playerKingdom);
    return candidates.Where(f => !f.IsEliminated).ToList();
}
```

### Example 4 — run the vanilla stance fixup after a clan joins a kingdom

```csharp
public void OnClanJoinedKingdom(Clan joiningClan, Kingdom kingdom)
{
    // MUST run after the join action, and exactly once.
    // This can apply peace actions and tear down live map events.
    FactionHelper.AdjustFactionStancesForClanJoiningKingdom(joiningClan, kingdom);
}
```

### Example 5 — explain why a recall button is disabled

```csharp
public bool CanRecall(Hero hero, out string reason)
{
    MobileParty target = MobileParty.MainParty;
    bool ok = FactionHelper.IsMainClanMemberAvailableForRecall(hero, target, out var explanation);
    // The out TextObject is always populated on false - never recompute the reason.
    reason = ok ? string.Empty : explanation.ToString();
    return ok;
}
```

### Example 6 — validate a player-typed clan name

```csharp
public (bool ok, string reason) ValidateClanName(string typed)
{
    var result = FactionHelper.IsClanNameApplicable(typed);
    // result.Item1 = acceptable, result.Item2 = localized, newline-joined problems.
    return (result.Item1, result.Item2);
}
```

## Risks and crash boundaries

- **Conversation-scoped null dereference.** `CanPlayerEnterFaction` reads `Hero.OneToOneConversationHero.MapFaction` with no null check; the two `CanPlayerOffer*` methods read `offerKingdom.Leader`. Both throw outside a conversation, or for a leaderless kingdom. These are menu-time methods — never call them from a background or save path.
- **Live AI mutation with no undo.** `AdjustFactionStancesForClanJoiningKingdom` applies peace actions and calls `FinishAllRelatedHostileActions*`, which sets `MapEvent.DiplomaticallyFinished`, calls `MapEvent.Update()`, clears `BesiegerCamp`, and puts parties on hold. None of that is reversible through this API. Calling it out of order (before the join, or twice) leaves the map in a state vanilla never produces.
- **Double-call hazard.** `AdjustFactionStancesForClanJoiningKingdom` has no idempotency guard; a second call re-resets peace stats against the same stances. Guard with a flag in your own behavior if the trigger can fire twice.
- **Hard-coded constants defeat model replacement.** The 25/150 join thresholds, 5000/10000 divisors, the 0.3 mercenary discount in `FindPotentialStrength`, and the `2.2f / 5000f / 0.1f / 0.9f` garrison curve are literals in the helper. A mod replacing `DiplomacyModel`, `ClanTierModel`, the mercenary system or the settlement model will find `FactionHelper` still reporting vanilla numbers. Treat its verdicts as vanilla-flavoured and pair them with your own model checks.
- **Silent `float.MaxValue` failure.** `GetDistanceToClosestNonAllyFortificationOfFaction` returns `float.MaxValue` both when `FactionMidSettlement` is null and when the faction owns every fief. Use it in a min() comparison, never as a distance on its own.
- **`float.MaxValue` sentinel in the power ratio.** `GetPowerRatioToEnemies` adds `0.0001f` to the denominator, so a kingdom with no enemies reports an enormous ratio rather than infinity. Clamp before rendering.
- **Cost.** `GetStances` walks `Kingdom.All` *and* `Clan.All`; `GetTotalTributePayedKingdomsPower`, `GetPowerRatioToTributePayedKingdoms` and `AdjustFactionStancesForClanJoiningKingdom` are all built on it. On a heavily modded map this is expensive enough to matter inside a per-agent loop.
- **Cross-domain dependency.** The class lives in `TaleWorlds.CampaignSystem` under `Helpers` but returns `TaleWorlds.Localization` `TextObject`, uses `TaleWorlds.ObjectSystem` naming, and drives campaign actions from `TaleWorlds.CampaignSystem.Actions`. A mod missing one of those references gets a load-time assembly failure on the first call, not a compile error.
- **Load order.** Every member reads `Campaign.Current.Models.*` at call time. During character creation, the encyclopedia preview, or the editor those are uninitialized and you get a `NullReferenceException`. Gate on `Campaign.Current != null` for any code that also runs outside a campaign.
- **Save serialization and ID stability.** Nothing here is saved. Every faction identity used is object identity plus `StringId` (used as the `GameTexts.FindText` key). Renaming or re-iding a faction breaks every naming helper *and* every text entry keyed on the old id, silently, by rendering the key. Give modded factions their own string ids and text entries.
- **RNG boundary.** `GenerateClanNameforPlayer` consumes the name generator's RNG. Not reproducible — do not call it on a deterministic or networked path.

## Cross-Version Notes

- **v1.3.x (this page):** the member set above matches 1.3.15. The `GenerateClanNameforPlayer` Vlandia special case, the `2.2f/5000f` garrison constants and the 25/150 join thresholds are all present in this shape.
- **v1.4.x:** the structure holds. Newer versions extend `DiplomacyModel` with additional join conditions, which `CanPlayerOfferVassalage`/`CanPlayerOfferMercenaryService` pick up automatically because they read the model — but the hard-coded thresholds in `CanPlayerEnterFaction` and `FindPotentialStrength` are *not* model-driven and did not change.
- **v1.5.x:** expect more kingdom/clan political actions and more `DiplomacyModel` tuning. The stable contract to build on is `GetStances`, `GetEnemyKingdoms`, and the two `CanPlayerOffer*` methods with their `out` lists — they forward to models and will follow mod tuning. The literal thresholds will not.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](./)
- ↔ Sibling: [DiplomacyHelper](../DiplomacyHelper/) — war causes, prisoners, the single-stance view
- ↔ Sibling: [HeroHelper](../HeroHelper/) — the lord-side facade in the same namespace
- ↔ Sibling: [SettlementHelper](../SettlementHelper/) — the geography-side facade
- ↔ Sibling: [StanceLink](../StanceLink/) — what `GetStances` returns and what the power maths walks
- ↔ Sibling: [DiplomacyModel](../DiplomacyModel/) — the join thresholds and constant-war rules
- ↔ Sibling: [ClanTierModel](../ClanTierModel/) — the vassal / mercenary tier gates
- ↔ Sibling: [MakePeaceAction](../MakePeaceAction/) — what the join fixup applies
- ↔ Sibling: [MapEvent](../MapEvent/) — the live battle object the hostility teardown mutates
- ↑ Kingdom: [Kingdom](../../campaign/Kingdom/)
- ↑ Clan: [Clan](../../campaign/Clan/)
- ↑ Culture naming: [CultureObject](../CultureObject/)