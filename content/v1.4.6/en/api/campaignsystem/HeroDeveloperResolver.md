---
title: "HeroDeveloperResolver"
description: "HeroDeveloperResolver: a public class in TaleWorlds.CampaignSystem, inheriting IConflictResolver; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SaveCompability/HeroDeveloperResolver.cs."
---
# HeroDeveloperResolver

**Namespace:** `TaleWorlds.CampaignSystem.SaveCompability`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class HeroDeveloperResolver : IConflictResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/HeroDeveloperResolver.cs`

## Overview

HeroDeveloperResolver lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SaveCompability/HeroDeveloperResolver.cs. It is a public class, implementing/inheriting IConflictResolver; the inheritance chain is HeroDeveloperResolver → IConflictResolver. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroDeveloperResolver is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SaveCompability) the module directory; inheritance chain HeroDeveloperResolver → IConflictResolver. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. IConflictResolver on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SaveCompability/HeroDeveloperResolver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsApplicable` | `public bool IsApplicable(ApplicationVersion version)` | method |
| `GetFieldMemberWithId` | `public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)` | method |
| `GetNewType` | `public Type GetNewType()` | method |
| `GetPropertyMemberWithId` | `public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver)
- [same namespace BattleTypeEnumResolver](../BattleTypeEnumResolver)
- [same namespace CharacterAttributesResolver](../CharacterAttributesResolver)
- [same namespace CharacterPerksResolver](../CharacterPerksResolver)
