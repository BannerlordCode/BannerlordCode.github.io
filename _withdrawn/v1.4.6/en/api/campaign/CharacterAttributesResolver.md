---
title: "CharacterAttributesResolver"
description: "CharacterAttributesResolver: a public class in TaleWorlds.CampaignSystem.SaveCompability, inheriting IConflictResolver; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterAttributesResolver

**Namespace:** `TaleWorlds.CampaignSystem.SaveCompability`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterAttributesResolver : IConflictResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

CharacterAttributesResolver lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs. It is a public class, implementing/inheriting IConflictResolver; the inheritance chain is CharacterAttributesResolver → IConflictResolver. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterAttributesResolver lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.SaveCompability`, inheritance chain CharacterAttributesResolver → IConflictResolver. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsApplicable` | `public bool IsApplicable(ApplicationVersion version)` | method |
| `GetFieldMemberWithId` | `public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)` | method |
| `GetNewType` | `public Type GetNewType()` | method |
| `GetPropertyMemberWithId` | `public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IConflictResolver](../../save-system/IConflictResolver/)
- [same namespace ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver/)
- [same namespace BattleTypeEnumResolver](../BattleTypeEnumResolver/)
- [same namespace CharacterPerksResolver](../CharacterPerksResolver/)
- [same namespace CharacterTraitsResolver](../CharacterTraitsResolver/)
