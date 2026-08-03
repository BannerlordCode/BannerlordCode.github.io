---
title: "MarriageModel"
description: "Checks marriage eligibility and chooses relation/clan outcomes before MarriageAction applies the union."
---
# MarriageModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`  
**Base:** `MBGameModel<MarriageModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultMarriageModel.cs`

## One-line job

`MarriageModel` answers whether heroes or clans are suitable for marriage and which clan should own each hero after the union. It is a decision policy; `MarriageAction` performs relation, clan, and event changes.

## Mental Model

Marriage offers and conversations query suitability repeatedly. When the player accepts, `MarriageAction.Apply` rechecks the couple, obtains the effective relation increase and destination clan, then applies both-side changes. Keeping the check pure prevents a conversation preview from changing relations or moving a hero between clans.

```text
Hero / Clan state -> MarriageModel eligibility and outcome queries
                  -> offer / conversation preview
                  -> MarriageAction.Apply -> relation + clan + events + save
```

## Dependencies

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active model. |
| [`Hero`](../../campaign/Hero) / [`Clan`](../../campaign/Clan) | Supply age, relation, faction, and ownership state. |
| [`MarriageAction`](../MarriageAction) | Applies the selected union. |
| `MarriageOfferCampaignBehavior` | Owns offer lifecycle and persistence. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `IsCoupleSuitableForMarriage` | Validate a specific pair. | Offer, conversation, Action recheck |
| `IsSuitableForMarriage` | Validate one hero's general eligibility. | Hero and cheat/UI query |
| `IsClanSuitableForMarriage` | Validate a clan for NPC offers. | Offer scheduling |
| `GetEffectiveRelationIncrease` | Return relation change used by the Action. | Marriage application |
| `GetClanAfterMarriage` | Choose the destination clan. | Marriage application |

## Real access path

```csharp
public bool CanPropose(Hero first, Hero second)
{
    if (Campaign.Current == null || first == null || second == null)
    {
        return false;
    }
    return Campaign.Current.Models.MarriageModel
        .IsCoupleSuitableForMarriage(first, second);
}
```

`MarriageAction.Apply` calls the same methods before applying `ChangeRelationAction` and clan membership changes. Do not move either hero in a suitability method.

## Risks and debugging order

1. Suitability is called during previews and must be side-effect free.
2. Preserve dead, imprisoned, related, age, and existing-marriage branches from the default model.
3. Clan ownership changes must go through the Action so both clan lists and save references agree.
4. A custom destination clan must be registered and alive before the Action applies it.
5. Offer state is owned by campaign behaviors; the model has no save payload.

## Navigation

- [Campaign-ext models family](../models/)
- [Hero](../../campaign/Hero)
- [Clan](../../campaign/Clan)
- [MarriageAction](../MarriageAction)
- [CampaignEvents](../CampaignEvents)
