---
title: "SettlementPositionScript"
description: "SettlementPositionScript: a public class in SandBox.View, inheriting ScriptComponentBehavior; 5 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.View/Map/SettlementPositionScript.cs."
---
# SettlementPositionScript

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class SettlementPositionScript : ScriptComponentBehavior`
**File:** `SandBox.View/Map/SettlementPositionScript.cs`

## Overview

SettlementPositionScript lives in the SandBox.View module, source file SandBox.View/Map/SettlementPositionScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is SettlementPositionScript → ScriptComponentBehavior. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementPositionScript is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain SettlementPositionScript → ScriptComponentBehavior. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/SettlementPositionScript.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `OnSceneSave` | `protected override void OnSceneSave(string saveFolder)` | method |
| `IsOnlyVisual` | `protected override bool IsOnlyVisual()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace BlockadePositionScript](../BlockadePositionScript)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
