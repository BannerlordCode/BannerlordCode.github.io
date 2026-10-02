---
title: "MBProfileSelectionScreenBase"
description: "MBProfileSelectionScreenBase: a public class in TaleWorlds.MountAndBlade, inheriting ScreenBase, IGameStateListener; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBProfileSelectionScreenBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBProfileSelectionScreenBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBProfileSelectionScreenBase : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade/MBProfileSelectionScreenBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBProfileSelectionScreenBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBProfileSelectionScreenBase.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is MBProfileSelectionScreenBase → ScreenBase. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBProfileSelectionScreenBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBProfileSelectionScreenBase → ScreenBase. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBProfileSelectionScreenBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBProfileSelectionScreenBase` | `public MBProfileSelectionScreenBase(ProfileSelectionState state)` | constructor |
| `OnFrameTick` | `protected sealed override void OnFrameTick(float dt)` | method |
| `OnProfileSelectionTick` | `protected virtual void OnProfileSelectionTick(float dt)` | method |
| `OnActivateProfileSelection` | `protected void OnActivateProfileSelection()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
