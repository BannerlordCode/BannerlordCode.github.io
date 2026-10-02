---
title: "MBProfileSelectionScreenBase"
description: "MBProfileSelectionScreenBase: a public class in TaleWorlds.MountAndBlade, inheriting ScreenBase, IGameStateListener; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBProfileSelectionScreenBase.cs."
---
# MBProfileSelectionScreenBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBProfileSelectionScreenBase : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade/MBProfileSelectionScreenBase.cs`

## Overview

MBProfileSelectionScreenBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBProfileSelectionScreenBase.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is MBProfileSelectionScreenBase → ScreenBase. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBProfileSelectionScreenBase is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBProfileSelectionScreenBase → ScreenBase. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBProfileSelectionScreenBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBProfileSelectionScreenBase` | `public MBProfileSelectionScreenBase(ProfileSelectionState state)` | constructor |
| `OnFrameTick` | `protected sealed override void OnFrameTick(float dt)` | method |
| `OnProfileSelectionTick` | `protected virtual void OnProfileSelectionTick(float dt)` | method |
| `OnActivateProfileSelection` | `protected void OnActivateProfileSelection()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
