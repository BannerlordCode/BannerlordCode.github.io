---
title: "ClanMemberPartyRoleModel"
description: "ClanMemberPartyRoleModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<ClanMemberPartyRoleModel>; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanMemberPartyRoleModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanMemberPartyRoleModel : MBGameModel<ClanMemberPartyRoleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

ClanMemberPartyRoleModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ClanMemberPartyRoleModel>; the inheritance chain is ClanMemberPartyRoleModel → MBGameModel → GameModel. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanMemberPartyRoleModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain ClanMemberPartyRoleModel → MBGameModel → GameModel. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaximumPartyRoleAssignmentCount` | `public abstract int MaximumPartyRoleAssignmentCount` | property |
| `IEnumerable` | `public abstract IEnumerable<PartyRole>GetAssignablePartyRoles();` | method |
| `GetRelevantSkillForPartyRole` | `public abstract SkillObject GetRelevantSkillForPartyRole(PartyRole role);` | method |
| `IsHeroAssignableForPartyRole` | `public abstract bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party);` | method |
| `DoesHeroHaveEnoughSkillForPartyRole` | `public abstract bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party);` | method |
| `IsHeroAssignableForPartyRoleInParty` | `public abstract bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
