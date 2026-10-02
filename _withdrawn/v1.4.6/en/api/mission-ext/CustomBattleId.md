---
title: "CustomBattleId"
description: "CustomBattleId: a public struct in TaleWorlds.MountAndBlade.Diamond; 10 exposed members (7 methods, 1 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleId

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public struct CustomBattleId`
**File:** `TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomBattleId lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs. It is a public struct; the inheritance chain is CustomBattleId. It exposes 10 public/protected members: 7 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleId lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain CustomBattleId. The surface is method-led (methods 7/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Guid` | `public Guid Guid` | property |
| `CustomBattleId` | `public CustomBattleId(Guid guid)` | constructor |
| `NewGuid` | `public static CustomBattleId NewGuid()` | method |
| `ToString` | `public override string ToString()` | method |
| `byte[]ToByteArray` | `public byte[]ToByteArray()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `Equals` | `public override bool Equals(object o)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Empty` | `public static CustomBattleId Empty` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
