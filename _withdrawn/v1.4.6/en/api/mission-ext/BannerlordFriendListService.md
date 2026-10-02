---
title: "BannerlordFriendListService"
description: "BannerlordFriendListService: a public class in TaleWorlds.MountAndBlade, inheriting IFriendListService; 5 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BannerlordFriendListService.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerlordFriendListService

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BannerlordFriendListService : IFriendListService`
**File:** `TaleWorlds.MountAndBlade/BannerlordFriendListService.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerlordFriendListService lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BannerlordFriendListService.cs. It is a public class, implementing/inheriting IFriendListService; the inheritance chain is BannerlordFriendListService → IFriendListService. It exposes 5 public/protected members: 1 methods, 3 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerlordFriendListService lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BannerlordFriendListService → IFriendListService. The surface is method-led (methods 1/5, properties 0/5), so it mostly exposes operations. IFriendListService on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BannerlordFriendListService.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public event Action<PlayerId>OnUserStatusChanged;` | event |
| `Action` | `public event Action<PlayerId>OnFriendRemoved;` | event |
| `OnFriendListChanged;` | `public event Action OnFriendListChanged;` | event |
| `BannerlordFriendListService` | `public BannerlordFriendListService()` | constructor |
| `OnFriendListReceived` | `public void OnFriendListReceived(FriendInfo[]friends)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
