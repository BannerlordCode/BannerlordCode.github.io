<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobileParty`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [⭐ SDK Overview (canonical)](../../../../v1.3.15/en/architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/MobileParty](/versions/MobileParty)
<!-- END BREADCRUMB -->
# MobileParty (v1.3.0)

**Namespace**: TaleWorlds.CampaignSystem.Party
**Module**: TaleWorlds.CampaignSystem
**Version**: v1.3.0
**Type**: Sealed class (`public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`)

> v1.3.0 documentation for `MobileParty`. For the full API reference (properties, methods, examples) see the canonical version:
> [v1.3.15 `MobileParty`](../../../../v1.3.15/en/api/campaign/MobileParty)
> To see how this class changed across 1.3.0 / 1.3.15 / 1.4.5, see the [cross-version comparison](/versions/MobileParty).

## Overview

`MobileParty` is a mobile party in the campaign system, representing armies, caravans, villager parties, or bandit parties moving on the map. Each `MobileParty` has a `PartyBase` for shared data storage and a `MobilePartyAi` for AI behavior control. In v1.3.0 the class is declared `public sealed class`, inherits from `CampaignObjectBase`, and implements `ILocatable<MobileParty>` and several other interfaces; access the player's party via the static property `MobileParty.MainParty`.

## v1.3.0 Notes

- Sealed class in the `TaleWorlds.CampaignSystem.Party` namespace, source file `TaleWorlds.CampaignSystem/Party/MobileParty.cs` (about 5100 lines).
- Static access (all present in v1.3.0): `public static MobileParty MainParty`, `public static MBReadOnlyList<MobileParty> All`, plus the categorized collections `AllCaravanParties`, `AllPatrolParties`, `AllBanditParties`, `AllLordParties`, `AllGarrisonParties`, `AllMilitiaParties`, `AllVillagerParties`, `AllCustomParties`.
- Key properties (all present in v1.3.0): `Party` (`PartyBase`), `Ai` (`MobilePartyAi`), `IsActive` (`bool`), `Position` (`CampaignVec2`), `Name` (`TextObject`), `MemberRoster` (`TroopRoster`), `PrisonRoster` (`TroopRoster`), `ItemRoster` (`ItemRoster`), `CurrentSettlement`, `HomeSettlement`, `Army`.
- Key methods (all present in v1.3.0): `public void SetMoveModeHold()`, `public void SetMoveEngageParty(MobileParty, NavigationType)`, `public void SetMoveGoAroundParty(MobileParty, NavigationType)`, `public void SetMoveGoToSettlement(Settlement, NavigationType, bool)`, `public void SetMoveGoToPoint(CampaignVec2, NavigationType)`, `public void SetTargetSettlement(Settlement, bool)`.
- Note: v1.3.0 does NOT have the `SetMoveGatherMode` / `SetMoveTargetParty` / `SetMoveTargetSettlement` methods listed in the v1.3.15 docs; movement control is via the `SetMove*` family above.
- Compared to v1.3.15: simpler AI system, missing some later-added party features and advanced navigation systems, and simplified staffing systems.

## See Also

- [v1.3.15 full documentation](../../../../v1.3.15/en/api/campaign/MobileParty)
- [Cross-version API comparison](/versions/MobileParty)
- [Area API index](./)
- [v1.3.0 API overview](../)
