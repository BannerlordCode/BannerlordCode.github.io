---
title: "BannerlordFriendListService"
description: "BannerlordFriendListService: a public class in TaleWorlds.MountAndBlade, inheriting IFriendListService; 5 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BannerlordFriendListService.cs."
---
# BannerlordFriendListService

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BannerlordFriendListService : IFriendListService`
**File:** `TaleWorlds.MountAndBlade/BannerlordFriendListService.cs`

## Overview

BannerlordFriendListService lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BannerlordFriendListService.cs. It is a public class, implementing/inheriting IFriendListService; the inheritance chain is BannerlordFriendListService → IFriendListService. It exposes 5 public/protected members: 1 methods, 3 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerlordFriendListService is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BannerlordFriendListService → IFriendListService. The surface is method-led (methods 1/5, properties 0/5), so it mostly exposes operations. IFriendListService on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BannerlordFriendListService.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<PlayerId>OnUserStatusChanged;` | event |
| `Action` | `public event Action<PlayerId>OnFriendRemoved;` | event |
| `OnFriendListChanged;` | `public event Action OnFriendListChanged;` | event |
| `BannerlordFriendListService` | `public BannerlordFriendListService()` | constructor |
| `OnFriendListReceived` | `public void OnFriendListReceived(FriendInfo[]friends)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
