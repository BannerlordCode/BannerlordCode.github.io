---
title: "StoryModeViewSubModule"
description: "StoryModeViewSubModule: a public class in StoryMode.View, inheriting MBSubModuleBase; 8 exposed members (8 methods, 0 properties, 0 fields). Source: StoryMode.View/StoryModeViewSubModule.cs."
---
# StoryModeViewSubModule

**Namespace:** `StoryMode.View`
**Module:** `StoryMode.View`
**Type:** `public class StoryModeViewSubModule : MBSubModuleBase`
**File:** `StoryMode.View/StoryModeViewSubModule.cs`

## Overview

StoryModeViewSubModule lives in the StoryMode.View module, source file StoryMode.View/StoryModeViewSubModule.cs. It is a public class, implementing/inheriting MBSubModuleBase; the inheritance chain is StoryModeViewSubModule → MBSubModuleBase. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeViewSubModule is a top-level type in StoryMode.View, namespace matching the module directory; inheritance chain StoryModeViewSubModule → MBSubModuleBase. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MBSubModuleBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.View/StoryModeViewSubModule.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | method |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | method |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | method |
| `FillDataForCampaign` | `protected virtual void FillDataForCampaign()` | method |
| `OnSubModuleUnloaded` | `protected override void OnSubModuleUnloaded()` | method |
| `OnSubModuleDeactivated` | `public override void OnSubModuleDeactivated()` | method |
| `OnSubModuleActivated` | `public override void OnSubModuleActivated()` | method |
| `OnBeforeGameStart` | `protected override void OnBeforeGameStart(MBGameManager mbGameManager, List<string>disabledModules)` | method |

## See Also

- [↑ storymode-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeViewCreator](../StoryModeViewCreator)
