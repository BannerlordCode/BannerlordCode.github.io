---
title: "LobbyClientConnectResult"
description: "LobbyClientConnectResult: a public class in TaleWorlds.MountAndBlade.Diamond; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/LobbyClientConnectResult.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyClientConnectResult

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class LobbyClientConnectResult`
**File:** `TaleWorlds.MountAndBlade.Diamond/LobbyClientConnectResult.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LobbyClientConnectResult lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/LobbyClientConnectResult.cs. It is a public class; the inheritance chain is LobbyClientConnectResult. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LobbyClientConnectResult lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain LobbyClientConnectResult. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/LobbyClientConnectResult.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Connected` | `public bool Connected` | property |
| `Error` | `public TextObject Error` | property |
| `LobbyClientConnectResult` | `public LobbyClientConnectResult(bool connected, TextObject error)` | constructor |
| `FromServerConnectResult` | `public static LobbyClientConnectResult FromServerConnectResult(string errorCode, Dictionary<string, string>parameters)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
