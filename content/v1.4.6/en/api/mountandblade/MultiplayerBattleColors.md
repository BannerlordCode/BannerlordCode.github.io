---
title: "MultiplayerBattleColors"
description: "MultiplayerBattleColors: a public struct in TaleWorlds.MountAndBlade; 5 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs."
---
# MultiplayerBattleColors

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public readonly struct MultiplayerBattleColors`
**File:** `TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs`

## Overview

MultiplayerBattleColors lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs. It is a public struct; the inheritance chain is MultiplayerBattleColors. It exposes 5 public/protected members: 2 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerBattleColors is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Missions.Multiplayer) the module directory; inheritance chain MultiplayerBattleColors. The surface is method-led (methods 2/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerBattleColors` | `public MultiplayerBattleColors(MultiplayerBattleColors.MultiplayerCultureColorInfo attackerColors, MultiplayerBattleColors.MultiplayerCultureColorInfo defenderColors)` | constructor |
| `CreateWith` | `public static MultiplayerBattleColors CreateWith(BasicCultureObject attackerCulture, BasicCultureObject defenderCulture)` | method |
| `GetPeerColors` | `public MultiplayerBattleColors.MultiplayerCultureColorInfo GetPeerColors(MissionPeer peer)` | method |
| `MultiplayerCultureColorInfo` | `public readonly struct MultiplayerCultureColorInfo` | property |
| `MultiplayerCultureColorInfo` | `public readonly struct MultiplayerCultureColorInfo` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
