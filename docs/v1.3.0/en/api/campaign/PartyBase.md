<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyBase`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [⭐ SDK Overview (canonical)](../../../../v1.3.15/en/architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyBase (v1.3.0)

**Namespace**: TaleWorlds.CampaignSystem.Party
**Module**: TaleWorlds.CampaignSystem
**Version**: v1.3.0
**Type**: Sealed class (`public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`)

> v1.3.0 documentation for `PartyBase`. For the full API reference (properties, methods, examples) see the canonical version:
> [v1.3.15 `PartyBase`](../../../../v1.3.15/en/api/campaign/PartyBase)

## Overview

`PartyBase` is the base class for parties in the campaign system, managing common party data such as position, members, prisoners, items, and food. `PartyBase` can represent both mobile parties (`MobileParty`) and settlements (`Settlement`). In v1.3.0 the class is declared `public sealed class` and implements `IBattleCombatant`, `IRandomOwner`, and `IInteractablePoint`; access the player's party via the static property `PartyBase.MainParty`.

## v1.3.0 Notes

- Sealed class in the `TaleWorlds.CampaignSystem.Party` namespace, source file `TaleWorlds.CampaignSystem/Party/PartyBase.cs`.
- Static access: `public static PartyBase MainParty`.
- Key properties (all present in v1.3.0): `Settlement` (`Settlement`), `MobileParty` (`MobileParty`), `IsSettlement` (`bool`), `IsMobile` (`bool`), `IsActive` (`bool`), `MemberRoster` (`TroopRoster`), `PrisonRoster` (`TroopRoster`), `ItemRoster` (`ItemRoster`), `Position` (`CampaignVec2`), `Name` (`TextObject`).
- Member count properties (all present in v1.3.0): `NumberOfHealthyMembers`, `NumberOfRegularMembers`, `NumberOfWoundedTotalMembers`, `NumberOfAllMembers`, `NumberOfPrisoners`, `NumberOfMounts`, `NumberOfPackAnimals`, `NumberOfMenWithHorse`, `NumberOfMenWithoutHorse`.
- Key methods (all present in v1.3.0): `public void OnVisibilityChanged(bool)`, `public void OnConsumedFood()`, `public int AddMember(CharacterObject, int, int)`, `public int AddPrisoner(CharacterObject, int)`, `public void AddMembers(TroopRoster)`, `public void AddPrisoners(TroopRoster)`, `public void SetCustomName(TextObject)`.
- Compared to v1.3.15: simpler structure, fewer `ComponentInterface` integrations, missing some later-added party-related features; the save system implementation differs (`TaleWorlds.SaveSystem` exists in v1.3.0 but implementation details vary).

## See Also

- [v1.3.15 full documentation](../../../../v1.3.15/en/api/campaign/PartyBase)
- [Area API index](./)
- [v1.3.0 API overview](../)
