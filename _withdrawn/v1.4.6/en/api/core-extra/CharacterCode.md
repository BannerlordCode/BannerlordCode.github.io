---
title: "CharacterCode"
description: "CharacterCode: a public class in TaleWorlds.Core; 20 exposed members (7 methods, 11 properties, 2 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/CharacterCode.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCode

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class CharacterCode`
**File:** `TaleWorlds.Core/CharacterCode.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

CharacterCode lives in the TaleWorlds.Core module, source file TaleWorlds.Core/CharacterCode.cs. It is a public class; the inheritance chain is CharacterCode. It exposes 20 public/protected members: 7 methods, 11 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCode lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain CharacterCode. The surface is property-led (properties 11/20, methods 7/20), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/CharacterCode.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsEmpty` | `public bool IsEmpty` | property |
| `EquipmentCode` | `public string EquipmentCode` | property |
| `Code` | `public string Code` | property |
| `IsFemale` | `public bool IsFemale` | property |
| `IsHero` | `public bool IsHero` | property |
| `FaceDirtAmount` | `public float FaceDirtAmount` | property |
| `Banner` | `public Banner Banner` | property |
| `FormationClass` | `public FormationClass FormationClass` | property |
| `Color1` | `public uint Color1` | property |
| `Color2` | `public uint Color2` | property |
| `Race` | `public int Race` | property |
| `CalculateEquipment` | `public Equipment CalculateEquipment()` | method |
| `CreateFrom` | `public static CharacterCode CreateFrom(BasicCharacterObject character)` | method |
| `CreateFrom` | `public static CharacterCode CreateFrom(BasicCharacterObject character, Equipment equipment)` | method |
| `CreateFrom` | `public static CharacterCode CreateFrom(string equipmentCode, BodyProperties bodyProperties, bool isFemale, bool isHero, uint color1, uint color2, FormationClass formationClass, int race)` | method |
| `CreateNewCodeString` | `public string CreateNewCodeString()` | method |
| `CreateEmpty` | `public static CharacterCode CreateEmpty()` | method |
| `CreateFrom` | `public static CharacterCode CreateFrom(string code)` | method |
| `SpecialCodeSeparator` | `public const string SpecialCodeSeparator` | field |
| `SpecialCodeSeparatorLength` | `public const int SpecialCodeSeparatorLength` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
