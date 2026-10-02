---
title: "GameStateScreenManager"
description: "GameStateScreenManager: a public class in TaleWorlds.MountAndBlade.View.Screens, inheriting IGameStateManagerListener; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/GameStateScreenManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameStateScreenManager

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class GameStateScreenManager : IGameStateManagerListener`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/GameStateScreenManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameStateScreenManager lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/GameStateScreenManager.cs. It is a public class, implementing/inheriting IGameStateManagerListener; the inheritance chain is GameStateScreenManager → IGameStateManagerListener. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameStateScreenManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Screens`, inheritance chain GameStateScreenManager → IGameStateManagerListener. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/GameStateScreenManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameStateScreenManager` | `public GameStateScreenManager()` | constructor |
| `CreateScreen` | `public ScreenBase CreateScreen(GameState state)` | method |
| `BuildScreens` | `public void BuildScreens()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateManagerListener](../../core-extra/IGameStateManagerListener/)
- [same namespace BannerBuilderScreen](../BannerBuilderScreen/)
- [same namespace BenchmarkScreen](../BenchmarkScreen/)
- [same namespace CreditsScreen](../CreditsScreen/)
- [same namespace FaceGeneratorScreen](../FaceGeneratorScreen/)
