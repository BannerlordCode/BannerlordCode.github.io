---
title: "MultiplayerClassDivisions"
description: "MultiplayerClassDivisions: a public class in TaleWorlds.MountAndBlade; 15 exposed members (10 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs."
---
# MultiplayerClassDivisions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerClassDivisions`
**File:** `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

## Overview

MultiplayerClassDivisions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs. It is a public class; the inheritance chain is MultiplayerClassDivisions. It exposes 15 public/protected members: 10 methods, 3 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerClassDivisions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MultiplayerClassDivisions. The surface is method-led (methods 10/15, properties 3/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<MultiplayerClassDivisions.MPHeroClassGroup>MultiplayerHeroClassGroups` | property |
| `IEnumerable` | `public static IEnumerable<MultiplayerClassDivisions.MPHeroClass>GetMPHeroClasses(BasicCultureObject culture)` | method |
| `MBReadOnlyList` | `public static MBReadOnlyList<MultiplayerClassDivisions.MPHeroClass>GetMPHeroClasses()` | method |
| `GetMPHeroClassForCharacter` | `public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForCharacter(BasicCharacterObject character)` | method |
| `List` | `public static List<List<IReadOnlyPerkObject>>GetAllPerksForHeroClass(MultiplayerClassDivisions.MPHeroClass heroClass, string forcedForGameMode = null)` | method |
| `GetMPHeroClassForPeer` | `public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForPeer(MissionPeer peer, bool skipTeamCheck = false)` | method |
| `GetMPHeroClassForFormation` | `public static TargetIconType GetMPHeroClassForFormation(Formation formation)` | method |
| `List` | `public static List<List<IReadOnlyPerkObject>>GetAvailablePerksForPeer(MissionPeer missionPeer)` | method |
| `Initialize` | `public static void Initialize()` | method |
| `Release` | `public static void Release()` | method |
| `GetMinimumTroopCost` | `public static int GetMinimumTroopCost(BasicCultureObject culture = null)` | method |
| `MBObjectBase` | `public class MPHeroClass : MBObjectBase` | property |
| `MPHeroClassGroup` | `public class MPHeroClassGroup` | property |
| `MBObjectBase` | `public class MPHeroClass : MBObjectBase` | nested type |
| `MPHeroClassGroup` | `public class MPHeroClassGroup` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
