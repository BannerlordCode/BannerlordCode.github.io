---
title: "MBInitialScreenBase"
description: "MBInitialScreenBase: a public class in TaleWorlds.MountAndBlade, inheriting ScreenBase, IGameStateListener; 13 exposed members (12 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBInitialScreenBase.cs."
---
# MBInitialScreenBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBInitialScreenBase : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade/MBInitialScreenBase.cs`

## Overview

MBInitialScreenBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBInitialScreenBase.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is MBInitialScreenBase → ScreenBase. It exposes 13 public/protected members: 12 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBInitialScreenBase is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBInitialScreenBase → ScreenBase. The surface is method-led (methods 12/13, properties 0/13), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBInitialScreenBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBInitialScreenBase` | `public MBInitialScreenBase(InitialState state)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnFrameTick` | `protected sealed override void OnFrameTick(float dt)` | method |
| `OnInitialScreenTick` | `protected virtual void OnInitialScreenTick(float dt)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnPause` | `protected override void OnPause()` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `DoExitButtonAction` | `public static void DoExitButtonAction()` | method |
| `StartedRendering` | `public bool StartedRendering()` | method |
| `OnEditModeEnterPress` | `public static void OnEditModeEnterPress()` | method |
| `OnEditModeEnterRelease` | `public static void OnEditModeEnterRelease()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
