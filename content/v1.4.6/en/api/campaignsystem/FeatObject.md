---
title: "FeatObject"
description: "FeatObject: a public class in TaleWorlds.CampaignSystem, inheriting PropertyObject; 8 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs."
---
# FeatObject

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class FeatObject : PropertyObject`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs`

## Overview

FeatObject lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs. It is a public class (sealed), implementing/inheriting PropertyObject; the inheritance chain is FeatObject → PropertyObject. It exposes 8 public/protected members: 1 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FeatObject is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CharacterDevelopment) the module directory; inheritance chain FeatObject → PropertyObject. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. PropertyObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DefaultCulturalFeats](../DefaultCulturalFeats)
- [same namespace DefaultPerks](../DefaultPerks)
- [same namespace DefaultSkillLevelingManager](../DefaultSkillLevelingManager)
- [same namespace DefaultTraits](../DefaultTraits)
