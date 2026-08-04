---
title: "MapEventHelper"
description: "MapEventHelper centralizes map-encounter rules for naval raids, siege departure, encountered-party selection, conversation exits, and hideout troop filtering."
---
# MapEventHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class MapEventHelper`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/MapEventHelper.cs`

## One-sentence responsibility

It turns the live state of `MapEvent`, `MobileParty.MainParty`, and `PlayerEncounter` into rules that encounter menus and map-event components can consume, and prepares the filtered `FlattenedTroopRoster` required by hideout missions; it does not create or end a `MapEvent` or submit battle results.

## Mental Model

`MapEventHelper` is a stateless Campaign-layer rule set. It owns no event instance. Its inputs normally come from the current [MapEvent](../../campaign/MapEvent), the player party, or an active conversation, and its outputs describe what the current menu or mission phase should do. `GetRaidContext` and `IsNavalRaid` inspect healthy mobile-party presence on land or at sea, the village faction, and looting history. `CanMainPartyLeaveBattleCommonCondition`, `GetSallyOutDefenderLeader`, and `GetEncounteredPartyBase` support encounter menus. `OnConversationEnd` is the narrow side-effecting exception: it may set `PlayerEncounter.LeaveEncounter`. The hideout method builds a temporary flattened roster after removing wounded troops, heroes, bosses, and selected high-level regular troops.

Acquire a real current event first, then call the entry that matches the menu or mission phase. Do not cache these results as permanent diplomacy or battle state, and do not treat the roster returned by `GetPriorityListForHideoutMission` as a writable view of an original party roster.

## When to use and when not to use

- **Use it:** when a valid village `MapEvent` must be classified as a naval raid or when the sea/land presence of the raider and village-faction sides is needed; use `GetRaidContext` or `IsNavalRaid`.
- **Use it:** from an active encounter menu when the original siege-departure condition, encountered-party selection, or conversation-end leave flag is required.
- **Use it:** when a hideout mission factory must calculate the first-phase troop count from `BanditDensityModel` and filter multiple `MobileParty` rosters.
- **Do not use it:** to create a `MapEvent`, mutate faction relations, kill parties, or resolve a battle. Encounter code, an [Action](../../campaign-ext/StartBattleAction), and campaign event chains own those operations.
- **Do not use it:** from the main menu or a background task without `Campaign.Current`, the current settlement, `MobileParty.MainParty.MapEvent`, or the active conversation context that the selected entry requires. These static methods do not manufacture missing state.
- **Do not use it:** as a global switch for every naval battle. `IsNavalRaid` recognizes the source-defined village-raid conditions; other naval events require their actual `MapEvent` type and mission flow.

## Dependencies

```text
Campaign.Current.Models.BanditDensityModel
  -> GetPriorityListForHideoutMission
MobileParty.MainParty.MapEvent / CurrentSettlement / SiegeEvent
  -> encounter menu rules
MapEvent + parties + PlayerEncounter.Current
  -> GetRaidContext -> IsNavalRaid
Campaign.Current.ConversationManager.ConversationEndOneShot
  -> OnConversationEnd -> PlayerEncounter.LeaveEncounter
```

| Dependency | Role and timing |
| --- | --- |
| [MapEvent](../../campaign/MapEvent) | Provides the attacker/defender sides, village settlement, looting history, and `MapEventParty` collections. Raid classification must use a live event. |
| [MobileParty](../../campaign/MobileParty) and [PartyBase](../../campaign/PartyBase) | Supply `MainParty`, the current settlement, healthy-member counts, sea state, and encountered leaders. Their references are not safe to cache across event lifetimes. |
| [Campaign](../../campaign/Campaign) | `GetPriorityListForHideoutMission` reads first-phase percentage and count limits from `Campaign.Current.Models.BanditDensityModel`. |
| `PlayerEncounter` and the conversation manager | Raid context reads interrupted-looting state; `OnConversationEnd` can set the leave-encounter flag. Both require the corresponding encounter or conversation phase. |
| [TroopRoster](../../campaign/TroopRoster) and `FlattenedTroopRoster` | Hideout filtering copies troop data from each party roster, then removes wounded troops, heroes, bosses, and selected regular troops; it does not transfer ownership back to the source roster. |
| [CampaignEvents](../../campaign/CampaignEvents) and [StartBattleAction](../../campaign-ext/StartBattleAction) | Campaign behaviors, encounter menus, and MapEvent components consume these rules. They own event registration, creation, and result submission rather than this helper. |

## Public entries

### Raid and sea/land presence

| Entry | Actual behavior | Boundary |
| --- | --- | --- |
| `GetRaidContext(MapEvent, out BattleSideEnum, out bool, out bool, out bool, out bool, out bool)` | Accepts only a valid village `MapEvent`; derives the raider side from war state, scans healthy mobile parties on both sides, reports sea/land presence, and records whether looting has occurred. Invalid input returns `false` with default out values. | Use when all presence and looting flags are needed; do not consume the out values as a strong classification after a `false` return. |
| `IsNavalRaid(MapEvent)` | Reuses `GetRaidContext` and combines looting history with sea/land presence to decide whether the village raid is naval. | This is the source's raid rule, not a general naval-battle detector. Null, non-village, or incomplete events return `false`. |

### Encounter menus and battle phases

| Entry | Actual behavior | Boundary |
| --- | --- | --- |
| `GetSallyOutDefenderLeader()` | Looks for the defender leader party in the current town garrison MapEvent, then the settlement party MapEvent, and finally the besieger camp. | Call only from a sally-out menu with a valid `CurrentSettlement` and siege data; the source assumes that one of those chains is available. |
| `CanMainPartyLeaveBattleCommonCondition()` | Attackers normally may leave; as a defender, the player may leave only when the siege-side condition allows it and the player is no longer inside the settlement. | This is a menu-visibility condition for an active `MainParty.MapEvent`, not an API that ends a battle. |
| `GetEncounteredPartyBase(PartyBase, PartyBase)` | If either input is `PartyBase.MainParty`, returns the other party. Otherwise, returns the attacker when the defender has no MapEvent; in the remaining case it returns the defender. | Use to select the party shown by an encounter menu; the result does not represent diplomacy or victory. |
| `OnConversationEnd()` | When the active encountered party exists and is no longer at war with the player's faction, sets `PlayerEncounter.LeaveEncounter` to `true`. | It is intended as a `ConversationEndOneShot` callback and changes encounter flow; do not invoke it for arbitrary conversations. |

### Hideout roster filtering

`GetPriorityListForHideoutMission(List<MobileParty>, out int firstPhaseTroopCount)` totals healthy troops and calculates the first-phase count from `Campaign.Current.Models.BanditDensityModel`. It flattens the party rosters, removes wounded troops, removes heroes and the culture's `BanditBoss`, then removes the selected number of highest-level regular troops. The `out firstPhaseTroopCount` is the first-wave count; the return value is a temporary filtered `FlattenedTroopRoster`, not an ownership transfer from any source party.

## Real example: classify the current map event as a naval raid

`MobileParty.MainParty.MapEvent` is the real acquisition path for the player's current encounter. The caller accepts that the event can be null and passes the live event to the helper rather than constructing a fake one.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

public static bool PlayerIsInNavalRaid()
{
    MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
    return mapEvent != null && MapEventHelper.IsNavalRaid(mapEvent);
}
```

When the UI needs each side's presence flags, call `GetRaidContext` on that same live event and only consume the out values when it returns `true`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Core;

public static bool TryReadRaidSides(
    MapEvent mapEvent,
    out BattleSideEnum raiderSide,
    out bool raiderHasSea,
    out bool raiderHasLand,
    out bool villageHasSea,
    out bool villageHasLand,
    out bool wasLooting)
{
    return MapEventHelper.GetRaidContext(
        mapEvent,
        out raiderSide,
        out raiderHasSea,
        out raiderHasLand,
        out villageHasSea,
        out villageHasLand,
        out wasLooting);
}
```

## Real example: register the conversation-end encounter boundary

The source's Issues and Quest behaviors attach `MapEventHelper.OnConversationEnd` to `ConversationEndOneShot`. A custom campaign behavior should register it only after the Campaign and conversation manager exist, leaving the callback to inspect `PlayerEncounter`:

```csharp
using TaleWorlds.CampaignSystem;

public static void RegisterEncounterConversationBoundary()
{
    if (Campaign.Current != null)
    {
        Campaign.Current.ConversationManager.ConversationEndOneShot += MapEventHelper.OnConversationEnd;
    }
}
```

## Risks and save boundaries

- **MapEvent lifetime:** `MapEvent`, `MapEventParty`, `SiegeEvent`, and `PlayerEncounter` are live encounter context. Do not store the helper's inputs or outputs in a campaign behavior and read them after the encounter changes.
- **Null and phase assumptions:** `GetRaidContext` safely returns `false` for an invalid village event, but `GetSallyOutDefenderLeader` assumes that the current settlement, town/garrison, settlement party MapEvent, or siege camp supplies a valid chain. Calling it in the wrong phase can produce a null reference.
- **Sea/land semantics:** only healthy mobile parties count. A party with no healthy members contributes neither sea nor land presence; do not replace the source condition with total party count or a separate ship list.
- **Side-effecting callback:** `OnConversationEnd` can set `PlayerEncounter.LeaveEncounter` and change the next menu. It is not a pure query; do not register it when the custom flow must remain in the encounter.
- **Roster ownership:** `GetPriorityListForHideoutMission` returns a temporary flattened filter. Do not treat it as `MobileParty.MemberRoster` or subtract troops from the source parties after calling it; the Mission factory owns later use.
- **Model and save boundary:** the first-phase hideout count comes from the active `BanditDensityModel` and can change with model replacement or version. It is a calculation input, not a permanent number to save. Custom persistent state belongs in a Campaign Behavior with stable `SyncData` data.

## Version note

This page follows v1.4.5 `Helpers/MapEventHelper.cs` and its call sites in `MenuHelper`, `EncounterGameMenuBehavior`, `RaidEventComponent`, `FieldBattleEventComponent`, and multiple Issue/Quest conversation callbacks. Recheck naval classification, the sally-out leader chain, `BanditDensityModel` members, and `ConversationEndOneShot` lifetime when targeting another version.

## Navigation

- ↑ Parent: [System API](../)
- ↔ Siblings: [HeroHelper](../HeroHelper) · [MenuHelper](../MenuHelper) · [CharacterHelper](../CharacterHelper)
- Related: [MapEvent](../../campaign/MapEvent) · [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [Campaign](../../campaign/Campaign) · [CampaignEvents](../../campaign/CampaignEvents) · [StartBattleAction](../../campaign-ext/StartBattleAction)
