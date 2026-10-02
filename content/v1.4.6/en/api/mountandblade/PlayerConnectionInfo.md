---
title: "PlayerConnectionInfo"
description: "PlayerConnectionInfo: a public class in TaleWorlds.MountAndBlade; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/PlayerConnectionInfo.cs."
---
# PlayerConnectionInfo

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class PlayerConnectionInfo`
**File:** `TaleWorlds.MountAndBlade/PlayerConnectionInfo.cs`

## Overview

PlayerConnectionInfo lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/PlayerConnectionInfo.cs. It is a public class; the inheritance chain is PlayerConnectionInfo. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerConnectionInfo is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain PlayerConnectionInfo. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/PlayerConnectionInfo.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerConnectionInfo` | `public PlayerConnectionInfo(PlayerId playerID)` | constructor |
| `AddParameter` | `public void AddParameter(string name, object parameter)` | method |
| `GetParameter` | `public T GetParameter<T>(string name) where T : class` | method |
| `SessionKey` | `public int SessionKey` | property |
| `Name` | `public string Name` | property |
| `NetworkPeer` | `public NetworkCommunicator NetworkPeer` | property |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
