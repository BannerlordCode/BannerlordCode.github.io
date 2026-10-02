---
title: "SnowAndRainTextureDefiner"
description: "SnowAndRainTextureDefiner: a public class in SandBox.View, inheriting ScriptComponentBehavior; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox.View/Map/SnowAndRainTextureDefiner.cs."
---
# SnowAndRainTextureDefiner

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class SnowAndRainTextureDefiner : ScriptComponentBehavior`
**File:** `SandBox.View/Map/SnowAndRainTextureDefiner.cs`

## Overview

SnowAndRainTextureDefiner lives in the SandBox.View module, source file SandBox.View/Map/SnowAndRainTextureDefiner.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is SnowAndRainTextureDefiner → ScriptComponentBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SnowAndRainTextureDefiner is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain SnowAndRainTextureDefiner → ScriptComponentBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/SnowAndRainTextureDefiner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `OnTerrainReload` | `protected override void OnTerrainReload(int step)` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace BlockadePositionScript](../BlockadePositionScript)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
