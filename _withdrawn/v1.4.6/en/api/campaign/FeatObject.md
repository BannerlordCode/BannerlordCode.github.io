---
title: "FeatObject"
description: "FeatObject: a public class in TaleWorlds.CampaignSystem.CharacterDevelopment, inheriting PropertyObject; 8 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FeatObject

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class FeatObject : PropertyObject`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

FeatObject lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs. It is a public class (sealed), implementing/inheriting PropertyObject; the inheritance chain is FeatObject → PropertyObject → MBObjectBase. It exposes 8 public/protected members: 1 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FeatObject lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterDevelopment`, inheritance chain FeatObject → PropertyObject → MBObjectBase. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<FeatObject>All` | property |
| `EffectBonus` | `public float EffectBonus` | property |
| `IncrementType` | `public FeatObject.AdditionType IncrementType` | property |
| `IsPositive` | `public bool IsPositive` | property |
| `FeatObject` | `public FeatObject(string stringId) : base(stringId)` | constructor |
| `Initialize` | `public void Initialize(string name, string description, float effectBonus, bool isPositiveEffect, FeatObject.AdditionType incrementType)` | method |
| `AdditionType` | `public enum AdditionType` | property |
| `AdditionType` | `public enum AdditionType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PropertyObject](../../core-extra/PropertyObject/)
- [same namespace DefaultCulturalFeats](../DefaultCulturalFeats/)
- [same namespace DefaultPerks](../DefaultPerks/)
- [same namespace DefaultSkillLevelingManager](../DefaultSkillLevelingManager/)
- [same namespace DefaultTraits](../DefaultTraits/)
