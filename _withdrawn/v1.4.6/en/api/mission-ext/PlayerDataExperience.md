---
title: "PlayerDataExperience"
description: "PlayerDataExperience: a public struct in TaleWorlds.MountAndBlade.Diamond; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerDataExperience

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public struct PlayerDataExperience`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerDataExperience lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs. It is a public struct; the inheritance chain is PlayerDataExperience. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerDataExperience lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerDataExperience. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Experience` | `public int Experience` | property |
| `Level` | `public int Level` | property |
| `ExperienceToNextLevel` | `public int ExperienceToNextLevel` | property |
| `ExperienceInCurrentLevel` | `public int ExperienceInCurrentLevel` | property |
| `PlayerDataExperience` | `public PlayerDataExperience(int experience)` | constructor |
| `CalculateLevelFromExperience` | `public static int CalculateLevelFromExperience(int experience)` | method |
| `CalculateExperienceFromLevel` | `public static int CalculateExperienceFromLevel(int level)` | method |
| `ExperienceRequiredForLevel` | `public static int ExperienceRequiredForLevel(int level)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
