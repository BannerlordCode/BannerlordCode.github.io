# MobileParty / MobileParty

**Namespace**: TaleWorlds.CampaignSystem.Party
**File**: `bannerlord-1.3.0/TaleWorlds.CampaignSystem/Party/MobileParty.cs`
**Version**: v1.3.0

## Overview

`MobileParty` is a mobile party in the campaign system, representing armies, caravans, or bandit parties moving on the map. Each MobileParty has a PartyBase for shared data storage and a MobilePartyAi for AI behavior control.

## Differences from v1.3.15

- v1.3.0 MobileParty is much smaller than v1.3.15 (about 5100 lines vs larger in v1.3.15)
- Simpler AI system
- Missing some party features added in v1.3.15
- No or fewer advanced navigation systems
- Simplified staffing systems
- Fewer event callbacks and hooks

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Party | PartyBase | Gets associated PartyBase |
| Ai | MobilePartyAi | Gets AI controller |
| IsActive | bool | Whether is active |
| Position | CampaignVec2 | Gets position |
| Name | TextObject | Gets name |
| MemberRoster | TroopRoster | Gets member roster |
| PrisonRoster | TroopRoster | Gets prisoner roster |
| ItemRoster | ItemRoster | Gets item roster |

## Key Methods

| Method | Description |
|--------|-------------|
| SetMoveGatherMode | Set move and gather mode |
| SetMoveTargetParty | Set move target party |
| SetMoveTargetSettlement | Set move target settlement |

## Code Example

```csharp
// Access mobile party
MobileParty party = someMobileParty;

// Check if active
if (!party.IsActive)
    return;

// Get position
CampaignVec2 position = party.Position;

// Access rosters
TroopRoster members = party.MemberRoster;

// Access AI
MobilePartyAi ai = party.Ai;
ai.SetMoveTargetSettlement(targetSettlement);
```

## Notes

- MobileParty stores shared data through PartyBase
- AI behavior is controlled through MobilePartyAi
- Parties can move on the map and participate in battles
- Parties need food to sustain themselves
- Attachments and armies are supported in this version
