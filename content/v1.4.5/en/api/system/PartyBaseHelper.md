---
title: "PartyBaseHelper"
description: "PartyBase and roster helpers for display, capacity, captains, speed limits, and cultural feats; they provide current calculations and a small roster-ordering mutation without owning PartyBase lifetime."
---
# PartyBaseHelper

**Namespace:** Helpers  
**Module:** TaleWorlds.CampaignSystem  
**Type:** public static class PartyBaseHelper  
**Base:** System.Object  
**Source:** bin/TaleWorlds.CampaignSystem/Helpers/PartyBaseHelper.cs

## One-line responsibility

This static class centralizes reusable Campaign helpers for [PartyBase](../../campaign/PartyBase) roster display, healthy counts, capacity ratios, visual leaders, animal speed limits, and cultural Feat queries.

## Mental model

PartyBaseHelper consumes a PartyBase already owned by [MobileParty](../../campaign/MobileParty) or [Settlement](../../campaign/Settlement). It does not create PartyBase, register a MobileParty, or own encounter, captivity, transfer, or destruction lifetime. Most entries calculate current values or build localized text; SortRoster is the exception that changes member-roster order.

Keep three boundaries separate:

- GetPartySizeText, GetShipSizeText, Print*, GetVisualPartyLeader, and GetSpeedLimitation are suitable for UI, tooltips, logs, and read-only rule calculations.
- FindPartySizeNormalLimit, GetCaptainOfTroop, and HasFeat calculate current or random results; they do not write those results back to PartyBase.
- SortRoster moves the highest-tier character to roster index 0 and is not read-only. Hero membership, captivity, item trade, and battles belong to their Actions rather than to this helper.

## Dependencies and call chain

| Dependency | Role and timing |
| --- | --- |
| [PartyBase](../../campaign/PartyBase) | Supplies MemberRoster, PrisonRoster, ItemRoster, health counts, LeaderHero, Culture, host, and map state; the helper does not work with an orphan PartyBase. |
| [MobileParty](../../campaign/MobileParty) and [Settlement](../../campaign/Settlement) | Create and own PartyBase; FindPartySizeNormalLimit is meaningful for a MobileParty's wages, payment limit, and PartySizeLimit. |
| [Campaign](../../campaign/Campaign) and Models | Capacity ratio reads AverageWage, PaymentLimit, and PartySizeLimit; those derived values require initialized Models. |
| [TroopRoster](../../campaign/TroopRoster) and [ItemRoster](../../campaign/ItemRoster) | Display, ordering, troop categories, item categories, and animal speed limits iterate these rosters directly. |
| [CharacterObject](../../campaign/CharacterObject), [Hero](../../campaign/Hero), and FeatObject | Visual leaders, random captains, and cultural Feat lookup use character/faction culture; the results do not mutate them. |
| [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction), [TakePrisonerAction](../../campaign-ext/TakePrisonerAction), and [DestroyPartyAction](../../campaign-ext/DestroyPartyAction) | Own complete party relationships, captivity, and termination; this helper cannot replace those world-changing entries. |

## Key entries and call boundaries

### Health, ships, and capacity

| Entry | Actual behavior | Timing |
| --- | --- | --- |
| GetPartySizeText(PartyBase) | Returns one number when all members are healthy; otherwise sets HEALTHY_NUM/WOUNDED_NUM and finds str_party_health. | Party UI, tooltips, and notifications; returns a localized TextObject. |
| GetPartySizeText(int, int, bool) | When inspected, shows exact healthy/wounded counts; when not inspected, returns a number of ? markers based on total-size thresholds. | Use the inspection flag to preserve the UI information boundary; healtyNumber is the source spelling, not a different concept. |
| GetShipSizeText(int, bool) | Shows the ship count when inspected and ? otherwise. | Sea-party UI; it does not validate ship inventory. |
| FindPartySizeNormalLimit(MobileParty) | Uses PaymentLimit, non-clan-leader leader wages, TotalWage, AverageWage, and PartySizeLimit to calculate a ratio clamped between 0.1 and 1.0. | AI/economy input; the result is a ratio, not a troop count or saved cap. |

### Party members and visual identity

| Entry | Actual behavior | Notes |
| --- | --- | --- |
| SortRoster(MobileParty) | Finds the highest-tier CharacterObject in the member roster and swaps it with index 0, stopping early at the CharacterStatsModel maximum tier. | Changes actual roster order/version; call only in a party-owned flow, never just to render a preview. |
| GetCaptainOfTroop(PartyBase, CharacterObject) | With a 20% random chance chooses an unwounded Hero member; otherwise falls back to PartyBase.LeaderHero. The v1.4.5 method body does not read affectorCharacter. | A random display/battle input, not a captain appointment; it may return null. |
| GetVisualPartyLeader(PartyBase) | Null Party returns null; a LeaderHero wins; without one, the first member is returned when a roster exists. | Use for map icons, notifications, and character images; do not treat it as the political leader. |
| GetSpeedLimitation(ItemRoster, out ItemObject) | Finds the minimum modified mount speed among animal items and returns that speed plus the limiting Item; with no animal it returns 100 and null. | Read-only speed diagnosis; it does not edit inventory or Party Speed. |

### Text and roster summaries

| Entry | Actual behavior | Output boundary |
| --- | --- | --- |
| PrintRosterContents(TroopRoster) | Prints Hero names, or counts and names for regular characters, separated by commas. | Diagnostic/text output; it is not the complete saved roster record. |
| PrintSummarisedItemRoster(ItemRoster) | Groups items as trade goods, armor, weapons, and other; totals each category and keeps the highest-value item as its representative. Returns an empty TextObject when there are no categories. | A summary, not an exact inventory list; never use it for trading or save data. |
| PrintRegularTroopCategories(TroopRoster) | Excludes Heroes and zero-count entries, totals Infantry, Ranged, Cavalry, and HorseArcher, and merges localized text. | Represents regular troops only; it omits Heroes, injury splits, and individual units. |
| HasFeat(PartyBase, FeatObject) | Checks culture in order: LeaderHero, Party, Owner, then Settlement; returns false when no context is available. | A cultural-rule query; it does not add a Feat or replace a Model. |

## Real example: read current-party UI and diagnostic data

This obtains the host PartyBase from the active Campaign's main MobileParty, then reads display text, visual leader, and animal speed limitation without modifying a roster:

```csharp
    using TaleWorlds.CampaignSystem;
    using TaleWorlds.CampaignSystem.Party;
    using TaleWorlds.Core;
    using TaleWorlds.Localization;

    public static class PartySummary
    {
        public static TextObject GetCurrentPartySummary(out CharacterObject visualLeader, out ItemObject speedItem)
        {
            visualLeader = null;
            speedItem = null;
            if (Campaign.Current == null || MobileParty.MainParty == null || !MobileParty.MainParty.IsActive)
            {
                return TextObject.GetEmpty();
            }

            PartyBase party = MobileParty.MainParty.Party;
            TextObject size = PartyBaseHelper.GetPartySizeText(party);
            visualLeader = PartyBaseHelper.GetVisualPartyLeader(party);
            PartyBaseHelper.GetSpeedLimitation(party.ItemRoster, out speedItem);
            return size;
        }
    }
```

size may contain exact numbers or an inspection-aware value; visual leader and speed limitation are also call-time results.

## Risks and save boundaries

- **Campaign/Model phase:** FindPartySizeNormalLimit reads Campaign.Current.AverageWage, payment limits, and Models. Calling it in the main menu, early loading, or after Campaign teardown can fail.
- **Roster side effect:** SortRoster swaps real members. Do not call it from rendering, repeated ticks, or merely to find a high-tier unit; use a read-only traversal for that purpose.
- **Random result:** GetCaptainOfTroop uses random state and cannot be a persistent appointment or a cross-tick identity. Use PartyBase.LeaderHero when the real leader is required.
- **Summary is not state:** Print* text drops roster fields, GetPartySizeText may deliberately hide exact counts, and GetSpeedLimitation only describes animals. Do not parse these outputs to mutate the world.
- **Action boundary:** PartyBaseHelper does not handle Hero membership, captivity, trade, battle, disbanding, or destruction. Use [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction), [TakePrisonerAction](../../campaign-ext/TakePrisonerAction), [StartBattleAction](../../campaign-ext/StartBattleAction), and [DestroyPartyAction](../../campaign-ext/DestroyPartyAction).
- **Save and cache:** PartyBase and its three rosters belong to the Campaign object graph; capacity, health, strength, and visual data may be recomputed after loading. Do not save TextObjects, enumerators, cached ratios, or old PartyBase references as cross-save handles.

## Version note

This page follows v1.4.5 Helpers/PartyBaseHelper.cs and call sites in AI, map visuals, GameMenu overlays, tooltips, and notification ViewModels. The affectorCharacter parameter of GetCaptainOfTroop is not read by this version's implementation; do not invent filtering semantics for it.

## Navigation

- ↑ Parent: [System API](../)
- ↔ Siblings: [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [TroopRoster](../../campaign/TroopRoster)
- Related: [ItemRoster](../../campaign/ItemRoster) · [CharacterObject](../../campaign/CharacterObject) · [Hero](../../campaign/Hero) · [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction) · [TakePrisonerAction](../../campaign-ext/TakePrisonerAction) · [StartBattleAction](../../campaign-ext/StartBattleAction) · [DestroyPartyAction](../../campaign-ext/DestroyPartyAction) · [Campaign roadmap](../../../architecture/roadmap)
