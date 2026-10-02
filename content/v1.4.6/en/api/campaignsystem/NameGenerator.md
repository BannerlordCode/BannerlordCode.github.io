---
title: "NameGenerator"
description: "NameGenerator: a public class in TaleWorlds.CampaignSystem; 8 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/NameGenerator.cs."
---
# NameGenerator

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NameGenerator`
**File:** `TaleWorlds.CampaignSystem/NameGenerator.cs`

## Overview

NameGenerator lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/NameGenerator.cs. It is a public class; the inheritance chain is NameGenerator. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NameGenerator is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain NameGenerator. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/NameGenerator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static NameGenerator Current` | property |
| `NameGenerator` | `public NameGenerator()` | constructor |
| `GenerateHeroNameAndHeroFullName` | `public void GenerateHeroNameAndHeroFullName(Hero hero, out TextObject firstName, out TextObject fullName, bool useDeterministicValues = true)` | method |
| `GenerateHeroFirstName` | `public TextObject GenerateHeroFirstName(Hero hero)` | method |
| `GenerateFirstNameForPlayer` | `public TextObject GenerateFirstNameForPlayer(CultureObject culture, bool isFemale)` | method |
| `GenerateClanName` | `public TextObject GenerateClanName(CultureObject culture, Settlement clanOriginSettlement)` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<TextObject>GetNameListForCulture(CultureObject npcCulture, bool isFemale)` | method |
| `AddName` | `public void AddName(TextObject name)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
