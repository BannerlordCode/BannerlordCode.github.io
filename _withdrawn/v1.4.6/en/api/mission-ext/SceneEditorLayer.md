---
title: "SceneEditorLayer"
description: "SceneEditorLayer: a public class in TaleWorlds.MountAndBlade.View.Screens, inheriting ScreenLayer; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SceneEditorLayer

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class SceneEditorLayer : ScreenLayer`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SceneEditorLayer lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs. It is a public class, implementing/inheriting ScreenLayer; the inheritance chain is SceneEditorLayer → ScreenLayer → IComparable. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneEditorLayer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Screens`, inheritance chain SceneEditorLayer → ScreenLayer → IComparable. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SceneEditorLayer` | `public SceneEditorLayer() : base(" ", -100)` | constructor |
| `OnActivate` | `protected override void OnActivate()` | method |
| `Tick` | `protected override void Tick(float dt)` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `RefreshGlobalOrder` | `protected override void RefreshGlobalOrder(ref int currentOrder)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScreenLayer](../../gui/ScreenLayer/)
- [same namespace BannerBuilderScreen](../BannerBuilderScreen/)
- [same namespace BenchmarkScreen](../BenchmarkScreen/)
- [same namespace CreditsScreen](../CreditsScreen/)
- [same namespace FaceGeneratorScreen](../FaceGeneratorScreen/)
