---
title: "PlayerSessionId"
description: "PlayerSessionId: a public struct in TaleWorlds.MountAndBlade.Diamond; 11 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerSessionId.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerSessionId

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public struct PlayerSessionId`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerSessionId.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerSessionId lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerSessionId.cs. It is a public struct; the inheritance chain is PlayerSessionId. It exposes 11 public/protected members: 7 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerSessionId lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerSessionId. The surface is method-led (methods 7/11, properties 2/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerSessionId.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Guid` | `public Guid Guid` | property |
| `SessionKey` | `public SessionKey SessionKey` | property |
| `PlayerSessionId` | `public PlayerSessionId(Guid guid)` | constructor |
| `PlayerSessionId` | `public PlayerSessionId(SessionKey sessionKey)` | constructor |
| `NewGuid` | `public static PlayerSessionId NewGuid()` | method |
| `ToString` | `public override string ToString()` | method |
| `byte[]ToByteArray` | `public byte[]ToByteArray()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `Equals` | `public override bool Equals(object o)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
