---
title: "SkillEffect"
description: "SkillEffect: a public class in TaleWorlds.CampaignSystem, inheriting PropertyObject; 11 exposed members (2 methods, 8 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/SkillEffect.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkillEffect

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class SkillEffect : PropertyObject`
**File:** `TaleWorlds.CampaignSystem/SkillEffect.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

SkillEffect lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SkillEffect.cs. It is a public class (sealed), implementing/inheriting PropertyObject; the inheritance chain is SkillEffect → PropertyObject → MBObjectBase. It exposes 11 public/protected members: 2 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkillEffect lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain SkillEffect → PropertyObject → MBObjectBase. The surface is property-led (properties 8/11, methods 2/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SkillEffect.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<SkillEffect>All` | property |
| `Bonus` | `public float Bonus` | property |
| `BaseValue` | `public float BaseValue` | property |
| `LimitMin` | `public float LimitMin` | property |
| `LimitMax` | `public float LimitMax` | property |
| `Role` | `public PartyRole Role` | property |
| `IncrementType` | `public EffectIncrementType IncrementType` | property |
| `EffectedSkill` | `public SkillObject EffectedSkill` | property |
| `SkillEffect` | `public SkillEffect(string stringId) : base(stringId)` | constructor |
| `Initialize` | `public void Initialize(TextObject description, SkillObject effectedSkill, PartyRole role, float bonus, EffectIncrementType incrementType, float baseValue = 0f, float limitMin = -3.4028235E+38f, float limitMax = 3.4028235E+38f)` | method |
| `GetSkillEffectValue` | `public float GetSkillEffectValue(int skillLevel)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PropertyObject](../../core-extra/PropertyObject/)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
