---
title: "GameLog"
description: "GameLog: a public class in TaleWorlds.MountAndBlade.Diamond; 8 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/GameLog.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameLog

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class GameLog`
**File:** `TaleWorlds.MountAndBlade.Diamond/GameLog.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameLog lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/GameLog.cs. It is a public class; the inheritance chain is GameLog. It exposes 8 public/protected members: 1 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameLog lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain GameLog. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/GameLog.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `Type` | `public GameLogType Type` | property |
| `Player` | `public PlayerId Player` | property |
| `GameTime` | `public float GameTime` | property |
| `string>Data` | `public Dictionary<string, string>Data` | property |
| `GameLog` | `public GameLog()` | constructor |
| `GameLog` | `public GameLog(GameLogType type, PlayerId player, float gameTime)` | constructor |
| `GetDataAsString` | `public string GetDataAsString()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
