---
title: "PartySizeLimitModel"
description: "Campaign policy for troop, prisoner, garrison, and initial-roster capacity."
---
# PartySizeLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`  
**Base:** `MBGameModel<PartySizeLimitModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartySizeLimitModel.cs`

## One-line job

`PartySizeLimitModel` answers how many members, prisoners, garrison troops, and initial roster entries a party may support. It is a calculation provider, not a roster editor: `PartyBase` caches its answers while Actions and roster APIs perform the actual transfer.

## Mental Model

Capacity has several distinct contracts. Member capacity governs living troops and heroes; prisoner capacity is separate; garrison capacity belongs to a settlement; initial-roster methods choose a starting composition from a template. Treating all four as one number causes recruitment screens, prisoner transfers, and party creation to disagree.

```text
PartyBase / Settlement / PartyTemplateObject
             |
             v
Campaign.Current.Models.PartySizeLimitModel
             |
             +--> member / prisoner / garrison limits
             +--> clan-tier and hero effects
             +--> initial roster and ship selection
             |
             v
PartyBase caches limits; PartyScreen and party creation consume them
```

The default model combines clan tier, leader skills/perks, party component, settlement context, and template ratios. Use it for previews and eligibility checks. Use `GiveGoldAction`, recruitment APIs, prisoner transfer APIs, or `TroopRoster` operations for mutations; changing a cached limit cannot safely create space in a roster.

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Supplies the active model registry. |
| [`PartyBase`](../../campaign/PartyBase) | Owns member/prisoner rosters and cached limits. |
| [`Hero`](../../campaign/Hero) / [`Clan`](../../campaign/Clan) | Provide leader and clan-tier effects. |
| `PartyTemplateObject` | Defines initial composition ratios. |

### Downstream

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | Uses initial roster/ship selection during party creation. |
| [`TroopRoster`](../TroopRoster) | Receives actual recruitment and transfer mutations. |
| PartyScreen transfer UI | Reads explained limits for transfer validation and UI. |
| [`Settlement`](../../campaign/Settlement) | Supplies garrison context. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetPartyMemberSizeLimit` | Explain troop/hero capacity for a `PartyBase`. | Cached by `PartyBase` |
| `GetPartyPrisonerSizeLimit` | Explain prisoner capacity. | Prisoner transfer and UI |
| `CalculateGarrisonPartySizeLimit` | Calculate settlement garrison capacity. | Settlement management |
| `GetClanTierPartySizeEffectForHero` | Return the clan-tier contribution for a hero-led party. | Capacity explanation |
| `FindAppropriateInitialRosterForMobileParty` | Build a roster from a `PartyTemplateObject`. | Party creation |
| `FindAppropriateInitialShipsForMobileParty` | Select initial ships when the template supports them. | Naval party creation |

## Real access paths

```csharp
using TaleWorlds.CampaignSystem;

public int GetFreeTroopSlots(PartyBase party)
{
    if (Campaign.Current == null || party == null)
    {
        return 0;
    }

    ExplainedNumber limit = Campaign.Current.Models.PartySizeLimitModel
        .GetPartyMemberSizeLimit(party, includeDescriptions: true);
    return Math.Max(0, (int)limit.ResultNumber - party.NumberOfAllMembers);
}
```

`PartyBase.PartySizeLimit` and `PartyBase.PartySizeLimitExplainer` use this same model and cache the numeric answer. A replacement must keep the result stable until the party invalidates its cache.

```csharp
public MobileParty CreateFromTemplate(PartyTemplateObject template, MobileParty party)
{
    PartySizeLimitModel model = Campaign.Current.Models.PartySizeLimitModel;
    TroopRoster roster = model.FindAppropriateInitialRosterForMobileParty(party, template);
    foreach (TroopRosterElement element in roster.GetTroopRoster())
    {
        party.MemberRoster.AddToCounts(element.Character, element.Number, insertAtFront: false);
    }
    return party;
}
```

Use the official party creation path in production; the example shows why the model returns a roster while the caller owns the mutation.

## Replacement rules

- Delegate to the installed default model and adjust only the factor you own.
- Preserve non-negative limits and `ExplainedNumber` descriptions.
- Keep member and prisoner limits independent.
- Do not use a hero-only estimate for a garrison or a garrison limit for a mobile party.
- Do not call initial-roster methods on every map tick; they are creation-time policies.

## Risks and debugging order

1. **Cache mismatch:** inspect `PartyBase` cached fields before blaming the model; legitimate roster changes must invalidate them through the party API.
2. **Clan tier drift:** changing `Clan.Tier` directly skips the campaign progression contract; use the supported clan progression path.
3. **Template overflow:** the default implementation asserts when a template ratio exceeds its expected bound. Validate custom templates before calling it.
4. **Null campaign:** title screen and module startup have no active registry.
5. **Naval divergence:** v1.4.5 can return ships as well as troops; do not discard the ship result for a naval party.

## Navigation

- [Campaign-ext models family](../models/)
- [PartyBase](../../campaign/PartyBase)
- [MobileParty](../../campaign/MobileParty)
- [TroopRoster](../TroopRoster)
- [PartyWageModel](../PartyWageModel)
