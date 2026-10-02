---
title: "ItemFlags"
description: "ItemFlags: a public enum in TaleWorlds.Core, inheriting uint; 21 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/ItemFlags.cs."
---
# ItemFlags

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum ItemFlags : uint`
**File:** `TaleWorlds.Core/ItemFlags.cs`

## Overview

ItemFlags lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ItemFlags.cs. It is a public enum, implementing/inheriting uint; the inheritance chain is ItemFlags → uint. It exposes 21 public/protected members: 21 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemFlags is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain ItemFlags → uint. The surface is method-led (methods 0/21, properties 0/21), so it mostly exposes operations. uint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ItemFlags.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `256U` | `ForceAttachOffHandPrimaryItemBone == 256U` | enum value |
| `512U` | `ForceAttachOffHandSecondaryItemBone == 512U` | enum value |
| `768U` | `AttachmentMask == 768U` | enum value |
| `1024U` | `NotUsableByFemale == 1024U` | enum value |
| `2048U` | `NotUsableByMale == 2048U` | enum value |
| `4096U` | `DropOnWeaponChange == 4096U` | enum value |
| `8192U` | `DropOnAnyAction == 8192U` | enum value |
| `16384U` | `CannotBePickedUp == 16384U` | enum value |
| `32768U` | `CanBePickedUpFromCorpse == 32768U` | enum value |
| `65536U` | `QuickFadeOut == 65536U` | enum value |
| `131072U` | `WoodenAttack == 131072U` | enum value |
| `262144U` | `WoodenParry == 262144U` | enum value |
| `524288U` | `HeldInOffHand == 524288U` | enum value |
| `1048576U` | `HasToBeHeldUp == 1048576U` | enum value |
| `2097152U` | `UseTeamColor == 2097152U` | enum value |
| `4194304U` | `Civilian == 4194304U` | enum value |
| `8388608U` | `DoNotScaleBodyAccordingToWeaponLength == 8388608U` | enum value |
| `16777216U` | `DoesNotHideChest == 16777216U` | enum value |
| `33554432U` | `NotStackable == 33554432U` | enum value |
| `67108864U` | `Stealth == 67108864U` | enum value |
| `134217728U` | `DoesNotSpawnWhenDropped == 134217728U` | enum value |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
