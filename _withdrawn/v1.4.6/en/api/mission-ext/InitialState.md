---
title: "InitialState"
description: "InitialState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 7 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/InitialState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InitialState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class InitialState : GameState`
**File:** `TaleWorlds.MountAndBlade/InitialState.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

InitialState lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/InitialState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is InitialState → GameState → MBObjectBase. It exposes 7 public/protected members: 4 methods, 1 properties, 2 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InitialState lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain InitialState → GameState → MBObjectBase. The surface is method-led (methods 4/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/InitialState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | property |
| `OnInitialMenuOptionInvoked;` | `public event OnInitialMenuOptionInvokedDelegate OnInitialMenuOptionInvoked;` | event |
| `OnGameContentUpdated;` | `public event OnGameContentUpdatedDelegate OnGameContentUpdated;` | event |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnExecutedInitialStateOption` | `public void OnExecutedInitialStateOption(InitialStateOption target)` | method |
| `RefreshContentState` | `public void RefreshContentState()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
