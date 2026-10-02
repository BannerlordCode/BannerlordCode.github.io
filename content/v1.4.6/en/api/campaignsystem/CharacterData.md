---
title: "CharacterData"
description: "CharacterData: a public class in TaleWorlds.CampaignSystem; 7 exposed members (2 methods, 2 properties, 1 fields). Source: TaleWorlds.CampaignSystem/CharacterData.cs."
---
# CharacterData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterData`
**File:** `TaleWorlds.CampaignSystem/CharacterData.cs`

## Overview

CharacterData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterData.cs. It is a public class; the inheritance chain is CharacterData. It exposes 7 public/protected members: 2 methods, 2 properties, 1 fields, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterData is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain CharacterData. The surface is method-led (methods 2/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ExportCharacter` | `public static void ExportCharacter(Hero hero, string path)` | method |
| `ImportCharacter` | `public static void ImportCharacter(Hero hero, string path)` | method |
| `CharacterDataExtension` | `public const string CharacterDataExtension` | field |
| `PropertyObjectData` | `public class PropertyObjectData` | property |
| `CharacterData.PropertyObjectData` | `public class SkillObjectData : CharacterData.PropertyObjectData` | property |
| `PropertyObjectData` | `public class PropertyObjectData` | nested type |
| `CharacterData.PropertyObjectData` | `public class SkillObjectData : CharacterData.PropertyObjectData` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
