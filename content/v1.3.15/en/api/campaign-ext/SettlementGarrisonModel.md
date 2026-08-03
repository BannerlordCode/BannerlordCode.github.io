---
title: "SettlementGarrisonModel"
description: "The model contract for garrison growth, auto-recruitment, party transfers, and daily wall-repair limits."
---
# SettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`  
**Base:** `MBGameModel<SettlementGarrisonModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`

## One-line job

`SettlementGarrisonModel` decides daily base-garrison change, auto-recruitment limits, how many troops a party should take from or leave in a garrison, and the daily wall-repair limit. It does not mutate rosters or wall hit points.

## Mental Model

This is garrison policy, not the garrison party. `GarrisonRecruitmentCampaignBehavior` reads the first two methods during settlement ticks and applies the result; `Town.RepairWallsOfSettlementDaily` reads the repair limit and then writes wall ratios. The two `FindNumber...` methods are AI recommendations, not executed transfers.

The signatures also carry preconditions: the find methods depend on `settlement.Town.GarrisonParty`, party size, and ownership context. Check for a town, a party, and a garrison before calling them; they are not static math functions safe for an uninitialized settlement.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | Owns the registered campaign model. |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | Supply settlement, garrison, prosperity, food, wall, and owner context. |
| `GarrisonRecruitmentCampaignBehavior` | Applies base change and auto-recruitment results. |
| [`MobileParty`](../../campaign/MobileParty) / `PartyRoster` | Receive recommended party-to-garrison quantities; behavior or Actions perform transfers. |
| `Town.RepairWallsOfSettlementDaily` | Applies the maximum repair amount to each wall section. |

## Public contract

| Member | Actual responsibility and timing |
| --- | --- |
| `GetMaximumDailyAutoRecruitmentCount(Town)` | Maximum number automatically added to a garrison per day. |
| `CalculateBaseGarrisonChange(Settlement, bool)` | Daily base-garrison delta, including explained rebellion/issue effects. |
| `FindNumberOfTroopsToTakeFromGarrison(MobileParty, Settlement, float)` | Recommended number for an AI party to take from a garrison. |
| `FindNumberOfTroopsToLeaveToGarrison(MobileParty, Settlement)` | Recommended number for an AI party to leave behind. |
| `GetMaximumDailyRepairAmount(Settlement)` | Maximum wall hit points that the settlement may repair in one day. |

## Real access path

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Town != null);
MobileParty party = MobileParty.MainParty;

if (settlement?.Town != null && party != null)
{
    SettlementGarrisonModel model = Campaign.Current.Models.SettlementGarrisonModel;
    int autoRecruit = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town);
    ExplainedNumber baseChange = model
        .CalculateBaseGarrisonChange(settlement, includeDescriptions: true);
    int leave = model.FindNumberOfTroopsToLeaveToGarrison(party, settlement);
    float repair = model.GetMaximumDailyRepairAmount(settlement);
}
```

Use the returned quantities for a preview or AI decision. Register a replacement during campaign startup; do not edit `MemberRoster` from a Model method.

## Risks and version boundary

- The find methods return recommendations, not transfer Actions. Applying the result twice removes or adds troops twice.
- The default implementation reads `settlement.Town.GarrisonParty`; calling it for a village or a settlement without a garrison can null-reference.
- Repair is measured in wall hit points. `Town` divides it by a section's maximum and writes each section, so the result is not a `0..1` ratio.
- The default returns zero during a siege or when all sections are full. Skipping either boundary changes the siege lifecycle.
- Garrison size feeds food, wages, militia, and building effects; tune this Model only after checking the daily-tick chain.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Default: DefaultSettlementGarrisonModel](../DefaultSettlementGarrisonModel)
- [Related: SettlementFoodModel](../SettlementFoodModel) · [SettlementMilitiaModel](../SettlementMilitiaModel)
- [Downstream: Town](../../campaign/Town) · [MobileParty](../../campaign/MobileParty)

