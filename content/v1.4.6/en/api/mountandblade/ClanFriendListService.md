---
title: "ClanFriendListService"
description: "ClanFriendListService: a public class in TaleWorlds.MountAndBlade, inheriting IFriendListService; 9 exposed members (4 methods, 0 properties, 1 fields). Source: TaleWorlds.MountAndBlade/ClanFriendListService.cs."
---
# ClanFriendListService

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ClanFriendListService : IFriendListService`
**File:** `TaleWorlds.MountAndBlade/ClanFriendListService.cs`

## Overview

ClanFriendListService lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ClanFriendListService.cs. It is a public class, implementing/inheriting IFriendListService; the inheritance chain is ClanFriendListService → IFriendListService. It exposes 9 public/protected members: 4 methods, 1 fields, 3 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFriendListService is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ClanFriendListService → IFriendListService. The surface is method-led (methods 4/9, properties 0/9), so it mostly exposes operations. IFriendListService on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ClanFriendListService.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFriendListService` | `public ClanFriendListService()` | constructor |
| `Action` | `public event Action<PlayerId>OnUserStatusChanged;` | event |
| `Action` | `public event Action<PlayerId>OnFriendRemoved;` | event |
| `Task` | `public async Task<PlayerId>GetUserWithName(string name)` | method |
| `OnFriendListChanged;` | `public event Action OnFriendListChanged;` | event |
| `IEnumerable` | `public IEnumerable<PlayerId>GetPendingRequests()` | method |
| `IEnumerable` | `public IEnumerable<PlayerId>GetReceivedRequests()` | method |
| `OnClanInfoChanged` | `public void OnClanInfoChanged(List<ClanPlayerInfo>playerInfosInClan)` | method |
| `CodeName` | `public const string CodeName` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
