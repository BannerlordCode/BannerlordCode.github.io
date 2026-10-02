---
title: "ClanFriendListService"
description: "ClanFriendListService: a public class in TaleWorlds.MountAndBlade, inheriting IFriendListService; 9 exposed members (4 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ClanFriendListService.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFriendListService

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ClanFriendListService : IFriendListService`
**File:** `TaleWorlds.MountAndBlade/ClanFriendListService.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ClanFriendListService lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ClanFriendListService.cs. It is a public class, implementing/inheriting IFriendListService; the inheritance chain is ClanFriendListService → IFriendListService. It exposes 9 public/protected members: 4 methods, 1 fields, 3 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFriendListService lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ClanFriendListService → IFriendListService. The surface is method-led (methods 4/9, properties 0/9), so it mostly exposes operations. IFriendListService on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ClanFriendListService.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
