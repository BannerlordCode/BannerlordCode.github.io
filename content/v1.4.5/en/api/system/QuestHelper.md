---
title: "QuestHelper"
description: "QuestHelper is the shared static toolkit for quest and Issue alternative solutions, map arrows, village coercion, world prices, and quest cleanup after war declarations."
---
# QuestHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class QuestHelper`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/QuestHelper.cs`

## One-sentence responsibility

It centralizes shared quest checks and side effects: main-hero gold, eligible healthy troops, alternative-solution skill candidates, map arrows, village-coercion consequences, world price averages, and quest finalization after a war declaration.

## Mental Model

`QuestHelper` is not a Quest instance, quest registry, or inheritable quest base. It owns no state, but it is not purely functional: several entries read `Hero.MainHero`, `PartyBase.MainParty`, `Campaign.Current`, `Settlement.All`, or `QuestBase.QuestGiver`, and two entries can finalize a quest while changing relation, power, and Honor.

Read the class as five small contracts:

1. Map guidance normalizes a `CampaignVec2` direction and registers a randomized arrow with `IMapTracksCampaignBehavior`.
2. Alternative-solution prerequisites check the main hero's gold, filter a `TroopRoster` by hero/transfer/health/tier/mounted rules, and return melee or ranged skill candidates.
3. Village coercion identifies a main-party forced-supplies or forced-volunteers event and can apply the resulting quest failure, relation, power, and Honor changes.
4. Economy estimation walks every settlement and calculates an unweighted integer average from Town and Village item prices.
5. War cleanup observes whether the quest giver's faction is now at war with the main hero's faction, then chooses Fail or Cancel; it does not declare war.

The caller therefore needs a real Campaign, Quest, MapEvent, Party, or `ItemObject` context before calling. A static class is not permission to call these methods during loading, before the main hero exists, or before settlement data is ready.

## When to use and when not to use

- **Use it:** in a custom Issue or Quest alternative-solution check when the original gold, troop, and skill-candidate rules should be reused and a failure explanation should be returned to the UI.
- **Use it:** after a quest has real source and target settlement positions to add a direction arrow, or from a map-event/war callback to reuse the original quest cleanup rules.
- **Use it:** for a current-world Town/Village price estimate when calculating a quest reward, while treating the result as an unweighted estimate.
- **Do not use it:** as a payment operation. `CheckGoldForAlternativeSolution` only compares `Hero.MainHero.Gold` and does not deduct gold on success.
- **Do not use it:** as a troop transfer or roster-save API. `CheckRosterForAlternativeSolution` only reads the roster and counts healthy, non-hero, transferable units that satisfy the tier and mounted filters.
- **Do not use it:** as a generic quest-finalization wrapper. `ApplyGenericMinorMajorCoercionConsequences` fails the quest, reduces the quest giver's relation and power, and applies an Honor penalty to the main hero.
- **Do not use it:** to declare war or invent a replacement for `DeclareWarAction`. `CheckWarDeclarationAndFailOrCancelTheQuest` observes an existing faction relationship and finalizes the Quest.

## Dependencies

```text
Issue/Quest callback
  -> QuestHelper check
  -> QuestBase / QuestManager / MapEvent / Campaign.Current
  -> explanation, map arrow, quest completion, relation/power/Honor changes
```

| Dependency | Role and boundary |
| --- | --- |
| [QuestBase](../../campaign/QuestBase) | Supplies `QuestGiver` and `CompleteQuestWithFail`/`CompleteQuestWithCancel`; the consequence entry changes Quest state and triggers the quest lifecycle. |
| [QuestManager](../../campaign/QuestManager) | `CheckMinorMajorCoercion` delegates to it to test whether the quest exists in the owner Clan or settlement notables; the helper does not own the quest index. |
| [MobileParty](../../campaign/MobileParty) and [TroopRoster](../../campaign/TroopRoster) | Original Issues pass `MobileParty.MainParty.MemberRoster`; the helper reads the roster and does not own or transfer its members. |
| [MapEvent](../../campaign/MapEvent) and [PartyBase](../../campaign/PartyBase) | Coercion checks read the event's forced-supplies/volunteers flags, village, and attacker, and require `PartyBase.MainParty`. |
| `IMapTracksCampaignBehavior` | Owns the actual map arrow; `AddMapArrowFromPointToTarget` obtains it through `Campaign.Current.GetCampaignBehavior`. |
| [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) and `TraitLevelingHelper` | Generic coercion consequences use the Action to reduce relation and the trait helper to record the Honor change. |
| [DeclareWarAction](../../campaign-ext/DeclareWarAction) and [DiplomacyHelper](../DiplomacyHelper) | The war event supplies `DeclareWarDetail`; the helper calls `DiplomacyHelper.IsWarCausedByPlayer` to choose Fail or Cancel. |
| [Settlement](../../campaign/Settlement) and [ItemObject](../../core-extra/ItemObject) | The world-price method walks `Settlement.All`, then calls Town/Village `GetItemPrice(item)`; this is a current-world snapshot, not a market-model prediction. |

## Public entries

| Entry | Source behavior | Important boundary |
| --- | --- | --- |
| `AddMapArrowFromPointToTarget(TextObject, CampaignVec2, CampaignVec2, float, float)` | Normalizes the target direction, adds `MBRandom.RandomFloat` error, offsets the start by 4 units, and calls the map-track behavior's `AddMapArrow`. | `Campaign.Current` and two different positions must be valid; the helper does not own the arrow or track object. |
| `CheckGoldForAlternativeSolution(int, out TextObject)` | Compares `Hero.MainHero.Gold` with the requirement; failure sets a localized explanation with `GOLD_AMOUNT`, while success sets `explanation` to `null`. | Read-only check; no gold is deducted. It requires an initialized `Hero.MainHero`. |
| `GetAlternativeSolutionMeleeSkills()` | Returns a new list containing `OneHanded`, `TwoHanded`, and `Polearm`. | The caller may append to the returned list; it does not mutate `DefaultSkills`. |
| `CheckRosterForAlternativeSolution(TroopRoster, int, out TextObject, int, bool)` | Sums `Number - WoundedNumber` after excluding heroes and non-transferable characters, then applies minimum-tier and mounted filters. | The roster must be a readable live roster; the method does not transfer members or inspect unrelated inventory. |
| `GetAlternativeSolutionRangedSkills()` | Returns a new list containing `Bow`, `Crossbow`, and `Throwing`. | These are original alternative-solution candidates, not skills the current character already has. |
| `CheckMinorMajorCoercion(QuestBase, MapEvent, PartyBase)` | Returns true only for a main-party forced-supplies or forced-volunteers event in a Village; if the quest is not in the owner Clan, it checks settlement notables. | Read-only decision; the Quest, MapEvent, and settlement must be valid campaign objects. |
| `ApplyGenericMinorMajorCoercionConsequences(QuestBase, MapEvent)` | Creates a village-linked failure log, fails the Quest, reduces quest-giver relation by `5`, reduces power by `10f`, and applies `-50` Honor to the main hero. | Side-effecting finalization; call only after the coercion condition is confirmed and QuestGiver/settlement are valid. |
| `GetAveragePriceOfItemInTheWorld(ItemObject)` | Walks `Settlement.All`, sums Town/Village prices, and divides by the number of participating settlements using integer division. | It is not weighted by population, inventory, or trade volume; an empty Town/Village set is not a valid input state. |
| `CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase, IFaction, IFaction, DeclareWarAction.DeclareWarDetail, TextObject, TextObject, bool)` | If the quest-giver faction is at war with the main hero's faction, it fails when the player caused the war and `forceCancel` is false; otherwise it cancels. With no war, it does nothing. | Observes and finalizes a Quest; it does not declare war. The caller supplies the event detail and log objects. |

## Real example: check an original alternative solution

`VillageNeedsToolsIssueBehavior`, `LordNeedsHorsesIssueBehavior`, and related Issues pass `MobileParty.MainParty.MemberRoster`, then check gold after the troop check succeeds. This keeps the same order; `explanation` is populated only on failure.

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Localization;

TroopRoster roster = MobileParty.MainParty.MemberRoster;
TextObject explanation;

bool hasTroops = QuestHelper.CheckRosterForAlternativeSolution(
    roster, 10, out explanation, minimumTier: 2);

bool hasGold = hasTroops && QuestHelper.CheckGoldForAlternativeSolution(
    500, out explanation);

if (!hasGold)
{
    // Pass explanation to the Issue alternative-solution UI; do not deduct gold here.
}
```

## Real example: add a quest direction arrow

`NearbyBanditBaseIssueBehavior` and `NotableWantsDaughterFoundIssueBehavior` call this entry after they have real source and target settlement positions. The caller should ensure the positions are valid and different before asking the helper to normalize the direction.

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

public static void MarkQuestDirection(Settlement questSettlement, Settlement targetSettlement)
{
    if (Campaign.Current == null || questSettlement == null || targetSettlement == null)
    {
        return;
    }

    QuestHelper.AddMapArrowFromPointToTarget(
        new TextObject("{=xpsQyPaV}Direction to Bandits"),
        questSettlement.Position,
        targetSettlement.Position,
        5f,
        0.1f);
}
```

This only registers an arrow with the current `IMapTracksCampaignBehavior`. It does not add the target to the Quest's tracked objects and does not replace [CampaignEvents](../../campaign/CampaignEvents) quest lifecycle events.

## Real example: handle coercion and war callbacks

Original Issues call the decision first from a `MapEventStarted` callback or a war-declared callback, then invoke the side-effecting entry. Do not call the consequence method from an arbitrary UI click or before the event arguments have been assembled.

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Localization;

public static void HandleQuestMapEvent(
    QuestBase quest,
    MapEvent mapEvent,
    PartyBase attackerParty,
    IFaction faction1,
    IFaction faction2,
    DeclareWarAction.DeclareWarDetail detail,
    TextObject failLog,
    TextObject cancelLog)
{
    if (QuestHelper.CheckMinorMajorCoercion(quest, mapEvent, attackerParty))
    {
        QuestHelper.ApplyGenericMinorMajorCoercionConsequences(quest, mapEvent);
        return;
    }

    QuestHelper.CheckWarDeclarationAndFailOrCancelTheQuest(
        quest, faction1, faction2, detail, failLog, cancelLog);
}
```

The two branches represent different event boundaries: coercion immediately fails the Quest, while the war check only finalizes it after the quest giver and main hero are actually at war.

## Risks and save boundaries

- **Campaign context:** the map-arrow method reads `Campaign.Current`, while gold and war checks read `Hero.MainHero`; calling them before campaign initialization can produce null references or invalid results.
- **Roster semantics:** the count is healthy troop count, not the `Number` total. Heroes, non-transferable units, low-tier units, and units failing the mounted filter are excluded. The caller still owns the party/roster relationship.
- **Explanation output:** successful checks clear `explanation` to `null`; failure text uses `GOLD_AMOUNT`, `NUMBER`, `TIER`, and `MOUNTED` variables and should be passed to the UI.
- **Map vector:** the source has no business guard for a zero-length vector. Equal source and target positions can produce an invalid direction during normalization. `error` perturbs direction; it is not a distance tolerance.
- **Quest side effects:** the generic coercion method calls `QuestBase.CompleteQuestWithFail`, then changes relation, power, and Honor. It is not a log-only helper.
- **War side effects:** the war-check method finalizes only when war is real. `forceCancel` bypasses the player-caused-war Fail branch and selects Cancel. The method does not replace `DeclareWarAction.Apply...`.
- **Average price:** the result is an integer average of current Town/Village prices, with no inventory weighting or empty-set normalization. Run it after campaign economy data is initialized.
- **Save boundary:** the helper does not persist any result. A custom Quest should persist stable state through [QuestBase](../../campaign/QuestBase) or a Campaign Behavior; do not save transient `TextObject`, MapEvent, roster, or map-arrow references.

## Version note

This page follows v1.4.5 `Helpers/QuestHelper.cs` and its Issue call sites. For another version, recheck the alternative-solution filters, `QuestManager` quest-index rules, MapEvent coercion flags, price sources, and the Fail/Cancel ordering after war.

## Navigation

- Parent: [System API](../)
- Siblings: [MiscHelper](../MiscHelper) · [DiplomacyHelper](../DiplomacyHelper) · [MapEventHelper](../MapEventHelper)
- Related: [QuestBase](../../campaign/QuestBase) · [QuestManager](../../campaign/QuestManager) · [MapEvent](../../campaign/MapEvent) · [CampaignEvents](../../campaign/CampaignEvents)
