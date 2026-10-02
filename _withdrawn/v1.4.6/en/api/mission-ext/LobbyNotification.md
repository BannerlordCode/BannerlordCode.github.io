---
title: "LobbyNotification"
description: "LobbyNotification: a public class in TaleWorlds.MountAndBlade.Diamond; 12 exposed members (2 methods, 5 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyNotification

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class LobbyNotification`
**File:** `TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LobbyNotification lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs. It is a public class; the inheritance chain is LobbyNotification. It exposes 12 public/protected members: 2 methods, 5 properties, 2 fields, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LobbyNotification lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain LobbyNotification. The surface is property-led (properties 5/12, methods 2/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `Type` | `public NotificationType Type` | property |
| `Date` | `public DateTime Date` | property |
| `Message` | `public string Message` | property |
| `string>Parameters` | `public Dictionary<string, string>Parameters` | property |
| `LobbyNotification` | `public LobbyNotification()` | constructor |
| `LobbyNotification` | `public LobbyNotification(NotificationType type, DateTime date, string message)` | constructor |
| `LobbyNotification` | `public LobbyNotification(int id, NotificationType type, DateTime date, string message, string serializedParameters)` | constructor |
| `GetParametersAsString` | `public string GetParametersAsString()` | method |
| `GetTextObjectOfMessage` | `public TextObject GetTextObjectOfMessage()` | method |
| `BadgeIdParameterName` | `public const string BadgeIdParameterName` | field |
| `FriendRequesterParameterName` | `public const string FriendRequesterParameterName` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
