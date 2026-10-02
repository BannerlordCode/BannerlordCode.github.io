---
title: "ICommunityClientHandler"
description: "ICommunityClientHandler: a public interface in TaleWorlds.MountAndBlade; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ICommunityClientHandler.cs."
---
# ICommunityClientHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ICommunityClientHandler`
**File:** `TaleWorlds.MountAndBlade/ICommunityClientHandler.cs`

## Overview

ICommunityClientHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ICommunityClientHandler.cs. It is a public interface; the inheritance chain is ICommunityClientHandler. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICommunityClientHandler is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ICommunityClientHandler. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ICommunityClientHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnJoinCustomGameResponse` | `void OnJoinCustomGameResponse(string address, int port, PlayerJoinGameResponseDataFromHost response);` | method |
| `OnQuitFromGame` | `void OnQuitFromGame();` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
