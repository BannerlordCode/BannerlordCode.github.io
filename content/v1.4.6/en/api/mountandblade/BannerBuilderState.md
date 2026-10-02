---
title: "BannerBuilderState"
description: "BannerBuilderState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 6 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BannerBuilderState.cs."
---
# BannerBuilderState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BannerBuilderState : GameState`
**File:** `TaleWorlds.MountAndBlade/BannerBuilderState.cs`

## Overview

BannerBuilderState lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BannerBuilderState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is BannerBuilderState → GameState. It exposes 6 public/protected members: 2 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBuilderState is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BannerBuilderState → GameState. The surface is method-led (methods 2/6, properties 2/6), so it mostly exposes operations. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BannerBuilderState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `DefaultBannerKey` | `public string DefaultBannerKey` | property |
| `BannerBuilderState` | `public BannerBuilderState()` | constructor |
| `BannerBuilderState` | `public BannerBuilderState(string defaultBannerKey)` | constructor |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
