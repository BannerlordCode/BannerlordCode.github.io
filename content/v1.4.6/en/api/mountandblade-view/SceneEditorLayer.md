---
title: "SceneEditorLayer"
description: "SceneEditorLayer: a public class in TaleWorlds.MountAndBlade.View, inheriting ScreenLayer; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs."
---
# SceneEditorLayer

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class SceneEditorLayer : ScreenLayer`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs`

## Overview

SceneEditorLayer lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs. It is a public class, implementing/inheriting ScreenLayer; the inheritance chain is SceneEditorLayer → ScreenLayer. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneEditorLayer is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Screens) the module directory; inheritance chain SceneEditorLayer → ScreenLayer. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. ScreenLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneEditorLayer` | `public SceneEditorLayer() : base(" ", -100)` | constructor |
| `OnActivate` | `protected override void OnActivate()` | method |
| `Tick` | `protected override void Tick(float dt)` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `RefreshGlobalOrder` | `protected override void RefreshGlobalOrder(ref int currentOrder)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerBuilderScreen](../BannerBuilderScreen)
- [same namespace BenchmarkScreen](../BenchmarkScreen)
- [same namespace CreditsScreen](../CreditsScreen)
- [same namespace FaceGeneratorScreen](../FaceGeneratorScreen)
