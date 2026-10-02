---
title: "MultiplayerGlobalMutedPlayersManager"
description: "MultiplayerGlobalMutedPlayersManager: a public class in TaleWorlds.MountAndBlade; 5 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs."
---
# MultiplayerGlobalMutedPlayersManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MultiplayerGlobalMutedPlayersManager`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs`

## Overview

MultiplayerGlobalMutedPlayersManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs. It is a public class; the inheritance chain is MultiplayerGlobalMutedPlayersManager. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerGlobalMutedPlayersManager is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MultiplayerGlobalMutedPlayersManager. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<PlayerId>MutedPlayers` | property |
| `MutePlayer` | `public static void MutePlayer(PlayerId playerId)` | method |
| `UnmutePlayer` | `public static void UnmutePlayer(PlayerId playerId)` | method |
| `IsUserMuted` | `public static bool IsUserMuted(PlayerId playerId)` | method |
| `ClearMutedPlayers` | `public static void ClearMutedPlayers()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
