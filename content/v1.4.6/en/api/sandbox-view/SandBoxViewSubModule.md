---
title: "SandBoxViewSubModule"
description: "SandBoxViewSubModule: a public class in SandBox.View, inheriting MBSubModuleBase; 13 exposed members (10 methods, 3 properties, 0 fields). Source: SandBox.View/SandBoxViewSubModule.cs."
---
# SandBoxViewSubModule

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public class SandBoxViewSubModule : MBSubModuleBase`
**File:** `SandBox.View/SandBoxViewSubModule.cs`

## Overview

SandBoxViewSubModule lives in the SandBox.View module, source file SandBox.View/SandBoxViewSubModule.cs. It is a public class, implementing/inheriting MBSubModuleBase; the inheritance chain is SandBoxViewSubModule → MBSubModuleBase. It exposes 13 public/protected members: 10 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxViewSubModule is a top-level type in SandBox.View, namespace matching the module directory; inheritance chain SandBoxViewSubModule → MBSubModuleBase. The surface is method-led (methods 10/13, properties 3/13), so it mostly exposes operations. MBSubModuleBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/SandBoxViewSubModule.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandBoxViewVisualManager` | `public static SandBoxViewVisualManager SandBoxViewVisualManager` | property |
| `ConversationViewManager` | `public static ConversationViewManager ConversationViewManager` | property |
| `MapConversationDataProvider` | `public static IMapConversationDataProvider MapConversationDataProvider` | property |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | method |
| `OnSubModuleUnloaded` | `protected override void OnSubModuleUnloaded()` | method |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | method |
| `OnCampaignStart` | `public override void OnCampaignStart(Game game, object starterObject)` | method |
| `OnGameLoaded` | `public override void OnGameLoaded(Game game, object initializerObject)` | method |
| `OnAfterGameInitializationFinished` | `public override void OnAfterGameInitializationFinished(Game game, object starterObject)` | method |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | method |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | method |
| `OnInitialState` | `public override void OnInitialState()` | method |
| `SetMapConversationDataProvider` | `public static void SetMapConversationDataProvider(IMapConversationDataProvider mapConversationDataProvider)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMusicHandler](../CampaignMusicHandler)
- [same namespace IChangeableScreen](../IChangeableScreen)
- [same namespace MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier)
- [same namespace PreloadScreen](../PreloadScreen)
