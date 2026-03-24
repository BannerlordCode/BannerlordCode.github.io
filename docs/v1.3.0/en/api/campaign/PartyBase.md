# PartyBase / PartyBase

**Namespace**: TaleWorlds.CampaignSystem.Party
**File**: `bannerlord-1.3.0/TaleWorlds.CampaignSystem/Party/PartyBase.cs`
**Version**: v1.3.0

## Overview

`PartyBase` is the base class for parties in the campaign system, managing common party data such as position, members, prisoners, items, and food. PartyBase can represent both mobile parties (MobileParty) and settlements (Settlement).

## Differences from v1.3.15

- v1.3.0 PartyBase has a relatively simpler structure
- TaleWorlds.SaveSystem exists in v1.3.0 but save system implementation differs
- Fewer ComponentInterface integrations
- Missing some party-related features added in v1.3.15
- Simpler visibility and patrol systems

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Settlement | Settlement | Gets associated settlement |
| MobileParty | MobileParty | Gets associated mobile party |
| IsSettlement | bool | Whether is a settlement |
| IsMobile | bool | Whether is a mobile party |
| MemberRoster | TroopRoster | Gets member roster |
| PrisonRoster | TroopRoster | Gets prisoner roster |
| ItemRoster | ItemRoster | Gets item roster |
| Position | CampaignVec2 | Gets position |
| Name | TextObject | Gets name |

## Key Methods

| Method | Description |
|--------|-------------|
| OnVisibilityChanged | Called when visibility changes |
| OnConsumedFood | Called when food is consumed |

## Code Example

```csharp
// Get party position
PartyBase party = someParty;
CampaignVec2 position = party.Position;

// Check if mobile or settlement
if (party.IsMobile)
{
    MobileParty mobile = party.MobileParty;
    // Handle mobile party
}
else if (party.IsSettlement)
{
    Settlement settlement = party.Settlement;
    // Handle settlement
}

// Access rosters
TroopRoster members = party.MemberRoster;
ItemRoster items = party.ItemRoster;
```

## Notes

- PartyBase is an abstract concept representing shared party data
- Use IsMobile and IsSettlement to distinguish types
- Settlement and MobileParty share the same PartyBase instance
- Party visibility affects map events and encounters
