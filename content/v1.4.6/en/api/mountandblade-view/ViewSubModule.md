---
title: "ViewSubModule"
description: "ViewSubModule: a public class in TaleWorlds.MountAndBlade.View, inheriting MBSubModuleBase; 16 exposed members (14 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs."
---
# ViewSubModule

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ViewSubModule : MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs`

## Overview

ViewSubModule lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs. It is a public class, implementing/inheriting MBSubModuleBase; the inheritance chain is ViewSubModule → MBSubModuleBase. It exposes 16 public/protected members: 14 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ViewSubModule is a top-level type in TaleWorlds.MountAndBlade.View, namespace matching the module directory; inheritance chain ViewSubModule → MBSubModuleBase. The surface is method-led (methods 14/16, properties 2/16), so it mostly exposes operations. MBSubModuleBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Material>BannerTexturedMaterialCache` | `public static Dictionary<Tuple<Material, Banner>, Material>BannerTexturedMaterialCache` | property |
| `GameStateScreenManager` | `public static GameStateScreenManager GameStateScreenManager` | property |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | method |
| `OnSubModuleUnloaded` | `protected override void OnSubModuleUnloaded()` | method |
| `OnBeforeInitialModuleScreenSetAsRoot` | `protected override void OnBeforeInitialModuleScreenSetAsRoot()` | method |
| `OnNewModuleLoad` | `protected override void OnNewModuleLoad()` | method |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | method |
| `AfterAsyncTickTick` | `protected override void AfterAsyncTickTick(float dt)` | method |
| `OnGameStart` | `protected override void OnGameStart(Game game, IGameStarter gameStarterObject)` | method |
| `OnCampaignStart` | `public override void OnCampaignStart(Game game, object starterObject)` | method |
| `OnMultiplayerGameStart` | `public override void OnMultiplayerGameStart(Game game, object starterObject)` | method |
| `OnGameLoaded` | `public override void OnGameLoaded(Game game, object initializerObject)` | method |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | method |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | method |
| `DoLoading` | `public override bool DoLoading(Game game)` | method |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentVisuals](../AgentVisuals)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator)
- [same namespace BannerVisual](../BannerVisual)
- [same namespace BannerVisualCreator](../BannerVisualCreator)
