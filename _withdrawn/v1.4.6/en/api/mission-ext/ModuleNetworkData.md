---
title: "ModuleNetworkData"
description: "ModuleNetworkData: a public class in TaleWorlds.MountAndBlade; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ModuleNetworkData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ModuleNetworkData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class ModuleNetworkData`
**File:** `TaleWorlds.MountAndBlade/ModuleNetworkData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ModuleNetworkData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ModuleNetworkData.cs. It is a public class; the inheritance chain is ModuleNetworkData. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ModuleNetworkData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ModuleNetworkData. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ModuleNetworkData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ReadItemReferenceFromPacket` | `public static EquipmentElement ReadItemReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | method |
| `WriteItemReferenceToPacket` | `public static void WriteItemReferenceToPacket(EquipmentElement equipElement)` | method |
| `ReadWeaponReferenceFromPacket` | `public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | method |
| `WriteWeaponReferenceToPacket` | `public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)` | method |
| `ReadMissileWeaponReferenceFromPacket` | `public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | method |
| `WriteMissileWeaponReferenceToPacket` | `public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
