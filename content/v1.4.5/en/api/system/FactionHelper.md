---
title: "FactionHelper: faction rules, validation, and transition gates"
description: "FactionHelper is the v1.4.5 campaign utility for faction strength and stance queries, name validation, joining gates, garrison estimates, and clan-management eligibility checks."
---
# FactionHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class FactionHelper`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs`

## One-sentence responsibility

It centralizes faction-level calculations and UI eligibility checks while also exposing a small set of explicitly mutation-bearing methods that finish hostile actions or reconcile stances.

## Mental Model

`FactionHelper` is not a generic faction service and it does not own a `Kingdom`, `Clan`, or `Settlement`. It reads the current campaign graph and active models to calculate strength ratios, stances, distances, garrison factors, names, and candidate lists. Its validation methods return a boolean plus an explanation for UI; they do not apply the resulting join, transfer, appointment, or rename.

The class also contains methods that cross the read/write boundary. `FinishAllRelatedHostileActionsOfNobleToFaction` can mark a `MapEvent` diplomatically finished, stop parties, clear a besieger camp, and finish an army objective. `AdjustFactionStancesForClanJoiningKingdom` can call `MakePeaceAction.Apply` and reset stance statistics. Treat those methods as campaign transitions, not calculations, and run them only from the lifecycle that owns the corresponding Action or faction change.

## When to use and when not to use

- Use the query methods to obtain current faction relationships, power ratios, possible war or peace targets, a weighted mid-settlement, or text appropriate for a faction and culture.
- Use `IsClanNameApplicable` and `IsKingdomNameApplicable` as `InformationManager` validation callbacks. A successful tuple means the proposed name passes this helper's checks; it does not rename the object.
- Use `CanPlayerOfferMercenaryService`, `CanPlayerOfferVassalage`, and the `IsMainClanMemberAvailableFor*` methods immediately before a UI transition, then let the owning Action or campaign behavior perform the change.
- Use garrison helper values as model inputs or explanations, not as a replacement for the active garrison model or a direct garrison mutation.
- Do not use the `FinishAllRelatedHostileActions*` family as a read-only cleanup preview. It can change map events, party movement, army objectives, and siege state.
- Do not call `GetAllyMinorFactions` expecting a list in v1.4.5; its method body throws `NotImplementedException`.

## Dependencies and mutation boundary

```text
IFaction / Clan / Kingdom / Settlement / Hero
                    |
                    v
             FactionHelper
          /       |        \
         v        v         v
  queries     UI gates    transition helpers
    |           |             |
 Models/events  UI       Actions / MapEvent / parties
```

- Faction graph: [`IFaction`](../../campaign/IFaction), [`Clan`](../../campaign/Clan), [`Kingdom`](../../campaign/Kingdom), [`StanceLink`](../../campaign/StanceLink), and [`Army`](../../campaign/Army) provide the relationships and ownership that the helper reads.
- Campaign models: [`MapDistanceModel`](../../campaign/MapDistanceModel), `DiplomacyModel`, `AgeModel`, `ClanTierModel`, `ClanFinanceModel`, and `DelayedTeleportationModel` supply version-sensitive thresholds and distances.
- UI consumers: the clan and kingdom management ViewModels use the name validators and `IsMainClanMemberAvailableFor*` explanations to enable or disable actions.
- Mutation consumers: [`MakePeaceAction`](../../campaign-ext/MakePeaceAction) and related campaign Actions own persistent changes; `FactionHelper` only coordinates some surrounding hostile-action cleanup.
- Related party context: [`Hero`](../../campaign/Hero), [`MobileParty`](../../campaign/MobileParty), and [`Settlement`](../../campaign/Settlement) are required inputs for the availability checks.

## Public members by contract

| Group | Members | Source-confirmed behavior |
|---|---|---|
| Strength and relationships | `FindPotentialStrength`, `GetEnemyKingdoms`, `GetStances`, `GetPowerRatioToEnemies`, `GetPowerRatioToTributePayedKingdoms`, `GetTotalEnemyKingdomPower`, `GetTotalTributePayedKingdomsPower`, `GetKingdomArmies` | Read faction membership, current strength, war links, stance links, negative neutral tribute, or kingdom armies. Power ratios add `0.0001f` to the denominator; they are current calculations, not saved scores. |
| Name validation | `IsClanNameApplicable`, `IsKingdomNameApplicable` | Check length, special characters, leading/trailing or repeated spaces, and duplicate names while excluding the current player clan or kingdom. Return `Tuple<bool, string>` with combined localized error text. |
| Joining and fief gates | `CanClanBeGrantedFief`, `CanPlayerEnterFaction`, `CanPlayerOfferMercenaryService`, `CanPlayerOfferVassalage`, `GetPossibleKingdomsToDeclareWar`, `GetPossibleKingdomsToDeclarePeace` | Read current player, clan, kingdom, relation, tier, settlement, diplomacy, and war constraints. They return permission or candidate lists; they do not apply war, peace, vassalage, or mercenary service. |
| Garrison inputs | `SettlementProsperityEffectOnGarrisonSizeConstant`, `SettlementFoodPotentialEffectOnGarrisonSizeConstant`, `OwnerClanEconomyEffectOnGarrisonSizeConstant`, `FindIdealGarrisonStrengthPerWalledCenter` | Compute prosperity, village hearth, owner-gold, and faction/clan strength factors for a walled center. They do not add troops or replace `GarrisonModel`. |
| Hostile-action transitions | `FinishAllRelatedHostileActionsOfNobleToFaction`, its faction and clan/kingdom overloads, `AdjustFactionStancesForClanJoiningKingdom` | Can update map events and party behavior, call `MakePeaceAction.Apply`, reset peace stats, clear siege objectives, and stop parties. These are mutation paths. |
| Names and culture text | `GetTermUsedByOtherFaction`, `GetFormalNameForFactionCulture`, `GetInformalNameForFactionCulture`, `GetAdjectiveForFactionCulture`, `GetAdjectiveForFaction`, `GenerateClanNameforPlayer` | Return localized text or a generated player clan name. `GenerateClanNameforPlayer` uses a special Vlandia result and otherwise `NameGenerator.Current`; it does not assign the name. |
| Settlement geometry | `GetDistanceToClosestNonAllyFortificationOfFaction`, `GetMidSettlementOfFaction`, `ChooseHeirClanForFiefs` | Use current settlements and `MapDistanceModel`; choose a fallback or nearest eligible clan without changing the old clan. A missing result can fall back to `Clan.PlayerClan` or remain null depending on the method. |
| Member availability | `IsMainClanMemberAvailableForRecall`, `IsMainClanMemberAvailableForPartyLeaderChange`, `IsMainClanMemberAvailableForSendingSettlement`, `IsMainClanMemberAvailableForSendingSettlementAsGovernor` | Check age, captivity, battle, sea state, army, governor, target settlement, gold, teleportation, and delayed-recovery conditions, returning an explanation through `out TextObject`. They are gates, not the subsequent Actions. |
| Explicitly unsupported | `GetAllyMinorFactions` | The v1.4.5 body throws `NotImplementedException`; callers must not treat its signature as implemented behavior. |

## Real C# example: combine live queries and gates

The following uses real campaign acquisition paths and keeps the helper's results separate from the Actions that would later mutate the world:

```csharp
using System;
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null)
{
    float enemyPowerRatio = FactionHelper.GetPowerRatioToEnemies(playerKingdom);
    Settlement center = FactionHelper.GetMidSettlementOfFaction(playerKingdom);
}

Tuple<bool, string> proposedName = FactionHelper.IsClanNameApplicable("House Corvand");
if (!proposedName.Item1)
{
    TextObject validationText = new TextObject(proposedName.Item2);
}

Hero candidate = Hero.OneToOneConversationHero;
Settlement target = Settlement.CurrentSettlement;
if (candidate != null && target != null)
{
    TextObject explanation;
    bool canSend = FactionHelper.IsMainClanMemberAvailableForSendingSettlement(candidate, target, out explanation);
}
```

`playerKingdom`, `Hero.OneToOneConversationHero`, and `Settlement.CurrentSettlement` are live campaign paths. `proposedName` and `canSend` are decisions only; a successful result does not itself call a rename or hero-transfer Action.

## Real call paths and mutation examples

StoryMode and campaign UI pass `FactionHelper.IsClanNameApplicable` or `IsKingdomNameApplicable` directly as the validation delegate of `InformationManager.ShowTextInquiry`. The callback is called repeatedly while the user edits text, so it must remain a pure validation step; the later confirmation handler owns the actual name assignment.

Clan management ViewModels call `IsMainClanMemberAvailableForPartyLeaderChange`, `IsMainClanMemberAvailableForSendingSettlement`, and `IsMainClanMemberAvailableForSendingSettlementAsGovernor` to produce disabled reasons. Those methods inspect current battle, siege, sea, governor, prisoner, and delayed-teleportation state; they do not bypass the Action or appointment flow.

The exception is the hostile-action family. When a clan joins a kingdom, `AdjustFactionStancesForClanJoiningKingdom` may call `MakePeaceAction.Apply` for a non-constant-war stance and then invoke `FinishAllRelatedHostileActionsOfFactionToFaction` in both directions. This is why a caller must not use it as a harmless preview or repeat it from a UI refresh.

## Risks and save boundaries

- `FactionHelper` assumes a live `Campaign.Current` for many methods. `CanPlayerEnterFaction` also assumes `Hero.OneToOneConversationHero`, current settlements, and active faction models are available; calling it during menu startup or teardown can fail.
- Name validation with a null string triggers a failed assertion before treating the value as empty. Validate input at the UI boundary and do not interpret the returned message as a persistent error record.
- `GetEnemyKingdoms` exposes a LINQ projection over the faction's current war list; enumerate it while the campaign state is valid. `GetStances` builds a list across all `Kingdom.All` and `Clan.All` entries and skips the input faction itself.
- `GetDistanceToClosestNonAllyFortificationOfFaction` returns `float.MaxValue` when there is no faction middle settlement or no closer candidate. Check that sentinel before converting it to travel time or comparing it as an ordinary distance.
- `GetMidSettlementOfFaction` uses a weighted distance heuristic: villages count as `0.1` and castles as `0.25` of their distance. It is not the settlement selected by the campaign's ownership or AI model.
- The availability methods return a precondition plus explanation. They can become stale immediately after a battle, siege, Action, or tick; recheck just before applying the change.
- The hostile-action methods mutate map-event and party state and may dispatch Actions. Never call them from a render loop, repeated tooltip refresh, or a speculative calculation.
- `GetAllyMinorFactions` is an explicit unsupported path that throws. Do not catch and convert that exception into an empty ally list because that would hide a source-level unsupported feature.
- The helper does not define a save schema. Persist stable campaign identifiers or behavior state, not `TextObject` explanations, enumerators, faction snapshots, or cached `Settlement` references.

## Version note

This page follows v1.4.5 `FactionHelper.cs` and its CampaignSystem, StoryMode, clan-management, and log-entry call sites. The `GetAllyMinorFactions` exception, the `0.0001f` ratio denominator, the garrison formulas, and the model-backed availability gates are version-sensitive details that should be rechecked before targeting another build.

## Navigation

- [↑ API system index](../)
- [↔ PartyBaseHelper](../PartyBaseHelper)
- [↔ SettlementHelper](../SettlementHelper)
- [Related: IFaction](../../campaign/IFaction)
- [Related: Clan](../../campaign/Clan)
- [Related: Kingdom](../../campaign/Kingdom)
- [Related: StanceLink](../../campaign/StanceLink)
- [Related: Hero](../../campaign/Hero)
- [Related: Settlement](../../campaign/Settlement)
- [Related: MakePeaceAction](../../campaign-ext/MakePeaceAction)
- [Related: MapDistanceModel](../../campaign/MapDistanceModel)

