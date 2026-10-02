---
title: "MBInitialScreenBase"
description: "MBInitialScreenBase: a public class in TaleWorlds.MountAndBlade, inheriting ScreenBase, IGameStateListener; 13 exposed members (12 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBInitialScreenBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBInitialScreenBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBInitialScreenBase : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade/MBInitialScreenBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBInitialScreenBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBInitialScreenBase.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is MBInitialScreenBase → ScreenBase. It exposes 13 public/protected members: 12 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBInitialScreenBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBInitialScreenBase → ScreenBase. The surface is method-led (methods 12/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBInitialScreenBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
