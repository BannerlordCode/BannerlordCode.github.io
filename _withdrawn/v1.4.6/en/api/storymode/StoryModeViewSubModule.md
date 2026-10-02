---
title: "StoryModeViewSubModule"
description: "StoryModeViewSubModule: a public class in StoryMode.View, inheriting MBSubModuleBase; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode.View/StoryModeViewSubModule.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeViewSubModule

**Namespace:** `StoryMode.View`
**Module:** `StoryMode.View`
**Type:** `public class StoryModeViewSubModule : MBSubModuleBase`
**File:** `StoryMode.View/StoryModeViewSubModule.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeViewSubModule lives in the StoryMode.View module, source file StoryMode.View/StoryModeViewSubModule.cs. It is a public class, implementing/inheriting MBSubModuleBase; the inheritance chain is StoryModeViewSubModule → MBSubModuleBase. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeViewSubModule lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.View`, inheritance chain StoryModeViewSubModule → MBSubModuleBase. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.View/StoryModeViewSubModule.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace StoryModeViewCreator](../StoryModeViewCreator/)
