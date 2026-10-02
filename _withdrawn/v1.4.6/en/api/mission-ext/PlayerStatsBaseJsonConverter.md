---
title: "PlayerStatsBaseJsonConverter"
description: "PlayerStatsBaseJsonConverter: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting JsonConverter; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerStatsBaseJsonConverter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsBaseJsonConverter

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsBaseJsonConverter : JsonConverter`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsBaseJsonConverter.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerStatsBaseJsonConverter lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerStatsBaseJsonConverter.cs. It is a public class, implementing/inheriting JsonConverter; the inheritance chain is PlayerStatsBaseJsonConverter → JsonConverter. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerStatsBaseJsonConverter lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerStatsBaseJsonConverter → JsonConverter. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. JsonConverter on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerStatsBaseJsonConverter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | method |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | method |
| `CanWrite` | `public override bool CanWrite` | property |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
