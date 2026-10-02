---
title: "DefaultClanMemberPartyRoleModel"
description: "DefaultClanMemberPartyRoleModel: a public class in TaleWorlds.CampaignSystem, inheriting ClanMemberPartyRoleModel; 6 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultClanMemberPartyRoleModel.cs."
---
# DefaultClanMemberPartyRoleModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultClanMemberPartyRoleModel : ClanMemberPartyRoleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanMemberPartyRoleModel.cs`

## Overview

DefaultClanMemberPartyRoleModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultClanMemberPartyRoleModel.cs. It is a public class, implementing/inheriting ClanMemberPartyRoleModel; the inheritance chain is DefaultClanMemberPartyRoleModel → ClanMemberPartyRoleModel → MBGameModel. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultClanMemberPartyRoleModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultClanMemberPartyRoleModel → ClanMemberPartyRoleModel → MBGameModel. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultClanMemberPartyRoleModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumPartyRoleAssignmentCount` | `public override int MaximumPartyRoleAssignmentCount` | property |
| `IEnumerable` | `public override IEnumerable<PartyRole>GetAssignablePartyRoles()` | method |
| `GetRelevantSkillForPartyRole` | `public override SkillObject GetRelevantSkillForPartyRole(PartyRole role)` | method |
| `IsHeroAssignableForPartyRole` | `public override bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)` | method |
| `DoesHeroHaveEnoughSkillForPartyRole` | `public override bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)` | method |
| `IsHeroAssignableForPartyRoleInParty` | `public override bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ClanMemberPartyRoleModel](../ClanMemberPartyRoleModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
