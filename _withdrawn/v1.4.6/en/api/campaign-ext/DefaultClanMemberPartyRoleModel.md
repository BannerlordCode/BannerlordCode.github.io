---
title: "DefaultClanMemberPartyRoleModel"
description: "DefaultClanMemberPartyRoleModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting ClanMemberPartyRoleModel; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultClanMemberPartyRoleModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultClanMemberPartyRoleModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultClanMemberPartyRoleModel : ClanMemberPartyRoleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanMemberPartyRoleModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultClanMemberPartyRoleModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultClanMemberPartyRoleModel.cs. It is a public class, implementing/inheriting ClanMemberPartyRoleModel; the inheritance chain is DefaultClanMemberPartyRoleModel → ClanMemberPartyRoleModel → MBGameModel → GameModel. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultClanMemberPartyRoleModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultClanMemberPartyRoleModel → ClanMemberPartyRoleModel → MBGameModel → GameModel. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultClanMemberPartyRoleModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaximumPartyRoleAssignmentCount` | `public override int MaximumPartyRoleAssignmentCount` | property |
| `IEnumerable` | `public override IEnumerable<PartyRole>GetAssignablePartyRoles()` | method |
| `GetRelevantSkillForPartyRole` | `public override SkillObject GetRelevantSkillForPartyRole(PartyRole role)` | method |
| `IsHeroAssignableForPartyRole` | `public override bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)` | method |
| `DoesHeroHaveEnoughSkillForPartyRole` | `public override bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)` | method |
| `IsHeroAssignableForPartyRoleInParty` | `public override bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClanMemberPartyRoleModel](../ClanMemberPartyRoleModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
