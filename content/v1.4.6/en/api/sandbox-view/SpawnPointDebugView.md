---
title: "SpawnPointDebugView"
description: "SpawnPointDebugView: a public class in SandBox.View, inheriting ScriptComponentBehavior; 7 exposed members (7 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/SandBox/SpawnPointDebugView.cs."
---
# SpawnPointDebugView

**Namespace:** `SandBox.View.Missions.SandBox`
**Module:** `SandBox.View`
**Type:** `public class SpawnPointDebugView : ScriptComponentBehavior`
**File:** `SandBox.View/Missions/SandBox/SpawnPointDebugView.cs`

## Overview

SpawnPointDebugView lives in the SandBox.View module, source file SandBox.View/Missions/SandBox/SpawnPointDebugView.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is SpawnPointDebugView → ScriptComponentBehavior. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawnPointDebugView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions.SandBox) the module directory; inheritance chain SpawnPointDebugView → ScriptComponentBehavior. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/SandBox/SpawnPointDebugView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnSceneSave` | `protected override void OnSceneSave(string saveFolder)` | method |
| `OnCheckForProblems` | `protected override bool OnCheckForProblems()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SpawnPointUnits](../SpawnPointUnits)
