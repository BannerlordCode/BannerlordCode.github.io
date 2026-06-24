<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LeaveType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LeaveType

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum LeaveType`
**Area:** campaign-ext

## Overview

`LeaveType` lives in `TaleWorlds.CampaignSystem.GameMenus`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Default` |
| `Mission` |
| `Submenu` |
| `BribeAndEscape` |
| `Escape` |
| `Craft` |
| `ForceToGiveGoods` |
| `ForceToGiveTroops` |
| `Bribe` |
| `LeaveTroopsAndFlee` |
| `OrderTroopsToAttack` |
| `Raid` |
| `HostileAction` |
| `Recruit` |
| `Trade` |
| `Wait` |
| `Leave` |
| `Continue` |
| `Manage` |
| `TroopSelection` |
| `WaitQuest` |
| `Surrender` |
| `Conversation` |
| `DefendAction` |
| `Devastate` |
| `Pillage` |
| `ShowMercy` |
| `Leaderboard` |
| `OpenStash` |
| `ManageGarrison` |

## Usage Example

```csharp
LeaveType example = LeaveType.Default;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
