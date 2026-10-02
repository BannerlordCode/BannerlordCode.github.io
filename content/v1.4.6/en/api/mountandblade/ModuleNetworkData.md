---
title: "ModuleNetworkData"
description: "ModuleNetworkData: a public class in TaleWorlds.MountAndBlade; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ModuleNetworkData.cs."
---
# ModuleNetworkData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class ModuleNetworkData`
**File:** `TaleWorlds.MountAndBlade/ModuleNetworkData.cs`

## Overview

ModuleNetworkData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ModuleNetworkData.cs. It is a public class; the inheritance chain is ModuleNetworkData. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ModuleNetworkData is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ModuleNetworkData. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ModuleNetworkData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReadItemReferenceFromPacket` | `public static EquipmentElement ReadItemReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | method |
| `WriteItemReferenceToPacket` | `public static void WriteItemReferenceToPacket(EquipmentElement equipElement)` | method |
| `ReadWeaponReferenceFromPacket` | `public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | method |
| `WriteWeaponReferenceToPacket` | `public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)` | method |
| `ReadMissileWeaponReferenceFromPacket` | `public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | method |
| `WriteMissileWeaponReferenceToPacket` | `public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
