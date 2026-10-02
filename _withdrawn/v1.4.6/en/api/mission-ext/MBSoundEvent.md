---
title: "MBSoundEvent"
description: "MBSoundEvent: a public class in TaleWorlds.MountAndBlade; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBSoundEvent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBSoundEvent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBSoundEvent`
**File:** `TaleWorlds.MountAndBlade/MBSoundEvent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBSoundEvent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBSoundEvent.cs. It is a public class; the inheritance chain is MBSoundEvent. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBSoundEvent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBSoundEvent. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBSoundEvent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlaySound` | `public static bool PlaySound(int soundCodeId, in Vec3 position)` | method |
| `PlaySound` | `public static bool PlaySound(int soundCodeId, Vec3 position)` | method |
| `PlaySound` | `public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, Vec3 position)` | method |
| `PlaySound` | `public static bool PlaySound(string soundPath, ref SoundEventParameter parameter, Vec3 position)` | method |
| `PlaySound` | `public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, in Vec3 position)` | method |
| `PlayEventFromSoundBuffer` | `public static void PlayEventFromSoundBuffer(string eventId, byte[]soundData, Scene scene, bool is3d, bool isBlocking)` | method |
| `CreateEventFromExternalFile` | `public static void CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
