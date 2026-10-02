---
title: "ClanMemberPartyRoleModel"
description: "ClanMemberPartyRoleModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<ClanMemberPartyRoleModel>; 6 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs."
---
# ClanMemberPartyRoleModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanMemberPartyRoleModel : MBGameModel<ClanMemberPartyRoleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs`

## Overview

ClanMemberPartyRoleModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ClanMemberPartyRoleModel>; the inheritance chain is ClanMemberPartyRoleModel → MBGameModel. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanMemberPartyRoleModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain ClanMemberPartyRoleModel → MBGameModel. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumPartyRoleAssignmentCount` | `public abstract int MaximumPartyRoleAssignmentCount` | property |
| `IEnumerable` | `public abstract IEnumerable<PartyRole>GetAssignablePartyRoles();` | method |
| `GetRelevantSkillForPartyRole` | `public abstract SkillObject GetRelevantSkillForPartyRole(PartyRole role);` | method |
| `IsHeroAssignableForPartyRole` | `public abstract bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party);` | method |
| `DoesHeroHaveEnoughSkillForPartyRole` | `public abstract bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party);` | method |
| `IsHeroAssignableForPartyRoleInParty` | `public abstract bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
