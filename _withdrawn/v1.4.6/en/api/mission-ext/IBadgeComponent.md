---
title: "IBadgeComponent"
description: "IBadgeComponent: a public interface in TaleWorlds.MountAndBlade.Diamond; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/IBadgeComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBadgeComponent

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public interface IBadgeComponent`
**File:** `TaleWorlds.MountAndBlade.Diamond/IBadgeComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IBadgeComponent lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/IBadgeComponent.cs. It is a public interface; the inheritance chain is IBadgeComponent. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBadgeComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain IBadgeComponent. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/IBadgeComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `int>DataDictionary` | `Dictionary<ValueTuple<PlayerId, string, string>, int>DataDictionary` | property |
| `OnPlayerJoin` | `void OnPlayerJoin(PlayerData playerData);` | method |
| `OnStartingNextBattle` | `void OnStartingNextBattle();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
