---
title: "GameLoadingState"
description: "GameLoadingState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/GameLoadingState.cs."
---
# GameLoadingState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class GameLoadingState : GameState`
**File:** `TaleWorlds.MountAndBlade/GameLoadingState.cs`

## Overview

GameLoadingState lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/GameLoadingState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is GameLoadingState → GameState. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameLoadingState is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain GameLoadingState → GameState. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/GameLoadingState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | property |
| `SetLoadingParameters` | `public void SetLoadingParameters(MBGameManager gameLoader)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
