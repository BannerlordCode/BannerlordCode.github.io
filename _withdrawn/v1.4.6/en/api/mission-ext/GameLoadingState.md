---
title: "GameLoadingState"
description: "GameLoadingState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/GameLoadingState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameLoadingState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class GameLoadingState : GameState`
**File:** `TaleWorlds.MountAndBlade/GameLoadingState.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameLoadingState lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/GameLoadingState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is GameLoadingState → GameState → MBObjectBase. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameLoadingState lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain GameLoadingState → GameState → MBObjectBase. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/GameLoadingState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | property |
| `SetLoadingParameters` | `public void SetLoadingParameters(MBGameManager gameLoader)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
