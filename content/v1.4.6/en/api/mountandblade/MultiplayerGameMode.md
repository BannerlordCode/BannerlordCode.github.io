---
title: "MultiplayerGameMode"
description: "MultiplayerGameMode: a public class in TaleWorlds.MountAndBlade; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MultiplayerGameMode.cs."
---
# MultiplayerGameMode

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MultiplayerGameMode`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameMode.cs`

## Overview

MultiplayerGameMode lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerGameMode.cs. It is a public class (abstract); the inheritance chain is MultiplayerGameMode. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerGameMode is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MultiplayerGameMode. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerGameMode.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `MultiplayerGameMode` | `protected MultiplayerGameMode(string name)` | constructor |
| `JoinCustomGame` | `public abstract void JoinCustomGame(JoinGameData joinGameData);` | method |
| `StartMultiplayerGame` | `public abstract void StartMultiplayerGame(string scene);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
