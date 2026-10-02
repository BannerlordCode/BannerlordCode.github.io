---
title: "LocationComplexTemplate"
description: "LocationComplexTemplate: a public class in TaleWorlds.CampaignSystem, inheriting MBObjectBase; 3 exposed members (1 methods, 0 properties, 2 fields). Source: TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs."
---
# LocationComplexTemplate

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class LocationComplexTemplate : MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs`

## Overview

LocationComplexTemplate lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs. It is a public class (sealed), implementing/inheriting MBObjectBase; the inheritance chain is LocationComplexTemplate → MBObjectBase. It exposes 3 public/protected members: 1 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocationComplexTemplate is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Settlements.Locations) the module directory; inheritance chain LocationComplexTemplate → MBObjectBase. The surface is method-led (methods 1/3, properties 0/3), so it mostly exposes operations. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |
| `List` | `public List<Location>Locations` | field |
| `string>>Passages` | `public List<KeyValuePair<string, string>>Passages` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AccompanyingCharacter](../AccompanyingCharacter)
- [same namespace CanUseDoor](../CanUseDoor)
- [same namespace CreateLocationCharacterDelegate](../CreateLocationCharacterDelegate)
- [same namespace Location](../Location)
