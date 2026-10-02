---
title: "BodyProperties"
description: "BodyProperties: a public struct in TaleWorlds.Core; 24 exposed members (9 methods, 14 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/BodyProperties.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BodyProperties

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct BodyProperties`
**File:** `TaleWorlds.Core/BodyProperties.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

BodyProperties lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BodyProperties.cs. It is a public struct; the inheritance chain is BodyProperties. It exposes 24 public/protected members: 9 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BodyProperties lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain BodyProperties. The surface is property-led (properties 14/24, methods 9/24), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BodyProperties.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StaticProperties` | `public StaticBodyProperties StaticProperties` | property |
| `DynamicProperties` | `public DynamicBodyProperties DynamicProperties` | property |
| `Age` | `public float Age` | property |
| `Weight` | `public float Weight` | property |
| `Build` | `public float Build` | property |
| `KeyPart1` | `public ulong KeyPart1` | property |
| `KeyPart2` | `public ulong KeyPart2` | property |
| `KeyPart3` | `public ulong KeyPart3` | property |
| `KeyPart4` | `public ulong KeyPart4` | property |
| `KeyPart5` | `public ulong KeyPart5` | property |
| `KeyPart6` | `public ulong KeyPart6` | property |
| `KeyPart7` | `public ulong KeyPart7` | property |
| `KeyPart8` | `public ulong KeyPart8` | property |
| `BodyProperties` | `public BodyProperties(DynamicBodyProperties dynamicBodyProperties, StaticBodyProperties staticBodyProperties)` | constructor |
| `FromXmlNode` | `public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)` | method |
| `FromString` | `public static bool FromString(string keyValue, out BodyProperties bodyProperties)` | method |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `ToString` | `public override string ToString()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `ClampForMultiplayer` | `public BodyProperties ClampForMultiplayer()` | method |
| `Default` | `public static BodyProperties Default` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
