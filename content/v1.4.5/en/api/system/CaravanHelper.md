---
title: "CaravanHelper"
description: "Campaign helper for selecting a land or naval caravan party template from a culture's ordinary or elite template collection."
---
# CaravanHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class CaravanHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/CaravanHelper.cs`

## One-sentence responsibility

`CaravanHelper` selects a suitable [PartyTemplateObject](../../campaign/PartyTemplateObject) from a [CultureObject](../../campaign/CultureObject) for an ordinary or elite caravan, filtering by whether the template has ships.

## Mental Model

The helper is a template selector, not a caravan factory. `GetRandomCaravanTemplate` chooses between `culture.EliteCaravanPartyTemplates` and `culture.CaravanPartyTemplates`, then uses the private suitability rule:

- `isLand == true` accepts templates whose `ShipHulls.Count` is zero.
- `isLand == false` accepts templates whose `ShipHulls.Count` is greater than zero.

The returned template still describes stacks and ship hulls; the caller creates or refills the [MobileParty](../../campaign/MobileParty), adds roster members, and applies any party-size or ship limits. `CaravanHelper` itself does not read `Campaign.Current`, mutate a roster, or create a party.

## When to use and when not to use

- **Use it:** when a caravan behavior already has the caravan owner's culture and needs a compatible land or naval template.
- **Use it:** before scaling template stacks into a refill roster, as `CaravansCampaignBehavior` does for a convoy.
- **Do not use it:** to create a `MobileParty`, assign an owner, or add template stacks directly to a roster.
- **Do not pass a culture from an unrelated settlement:** culture owns the ordinary and elite template collections used by this selection.
- **Do not treat `isLand` as a “prefer land” hint:** it is an exact filter on `ShipHulls.Count`.

## Dependencies

- Input: [CultureObject](../../campaign/CultureObject), including `CaravanPartyTemplates` and `EliteCaravanPartyTemplates`.
- Output: [PartyTemplateObject](../../campaign/PartyTemplateObject), its `Stacks`, and its `ShipHulls`.
- Typical owner: [MobileParty](../../campaign/MobileParty) and its `CaravanPartyComponent`; callers decide whether the caravan is elite and whether it should be land or naval.
- Campaign context: [Campaign](../../campaign/Campaign) and [Settlement](../../campaign/Settlement) supply the culture to callers, but the helper has no Campaign singleton dependency in its own method body.
- Consumers: `CaravansCampaignBehavior`, caravan conversations, and caravan/merchant issue behaviors use the returned template before constructing or refilling a convoy.

## Public members

### GetRandomCaravanTemplate

`GetRandomCaravanTemplate(CultureObject culture, bool isElite, bool isLand)` selects randomly from the elite collection when `isElite` is true, otherwise from the ordinary collection, and keeps only templates matching the land/naval `ShipHulls` rule.

```csharp
MobileParty convoy = MobileParty.MainParty;
if (convoy != null && convoy.Owner != null && convoy.CaravanPartyComponent != null)
{
    PartyTemplateObject template = CaravanHelper.GetRandomCaravanTemplate(
        convoy.Owner.Culture,
        convoy.CaravanPartyComponent.IsElite,
        isLand: false);
}
```

This follows the `CaravansCampaignBehavior.RefillConvoyTroops` acquisition path; the selected template is later used to calculate roster additions.

## Real example

This example obtains a real active caravan and inspects the selected naval template without inventing a culture or constructing a party. The caller can use the template's actual stacks when the owning caravan behavior is ready to refill the convoy.

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static class CaravanTemplateInspection
{
    public static PartyTemplateObject FindNavalTemplate()
    {
        if (Campaign.Current == null)
        {
            return null;
        }

        MobileParty convoy = MobileParty.All
            .FirstOrDefault(party => party.IsCaravan && party.IsActive && party.Owner != null);
        if (convoy == null || convoy.CaravanPartyComponent == null)
        {
            return null;
        }

        return CaravanHelper.GetRandomCaravanTemplate(
            convoy.Owner.Culture,
            convoy.CaravanPartyComponent.IsElite,
            isLand: false);
    }
}
```

The helper returns a template, not a filled roster. Refill code must still respect `convoy.Party.PartySizeLimit`, stack counts, ship limits, and the active caravan behavior's lifecycle.

## Risks and save boundaries

- **Culture validity:** a null or incomplete `CultureObject` cannot provide the collections used by the method; acquire culture from a live caravan owner or current settlement.
- **Template availability:** the result depends on the culture's configured ordinary/elite collections and the exact `ShipHulls` filter. Do not assume every culture has both land and naval candidates.
- **Factory boundary:** the selected `PartyTemplateObject` does not create a party, assign a hero, or update `MemberRoster`/ships.
- **Elite flag:** `isElite` chooses a different collection; it does not upgrade an ordinary template or change `CaravanPartyComponent.IsElite`.
- **Save boundary:** templates and cultures are definition objects; do not save a random selection as if it were a caravan's mutable roster. Save the owning party/behavior state through the supported Campaign save path.

## Version note

This page follows v1.4.5 `Helpers/CaravanHelper.cs`. Land and naval selection is implemented solely through `ShipHulls.Count == 0` versus `> 0`; speed, capacity, owner, and roster decisions remain in the consuming caravan behavior.

## Navigation

- [↑ API system index](../)
- [Related: MobileParty](../../campaign/MobileParty)
- [Related: CultureObject](../../campaign/CultureObject)
- [Related: PartyTemplateObject](../../campaign/PartyTemplateObject)
- [Related: Campaign](../../campaign/Campaign)
