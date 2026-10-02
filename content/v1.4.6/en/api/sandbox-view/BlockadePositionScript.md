---
title: "BlockadePositionScript"
description: "BlockadePositionScript: a public class in SandBox.View, inheriting ScriptComponentBehavior; 11 exposed members (3 methods, 0 properties, 8 fields). Source: SandBox.View/Map/BlockadePositionScript.cs."
---
# BlockadePositionScript

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class BlockadePositionScript : ScriptComponentBehavior`
**File:** `SandBox.View/Map/BlockadePositionScript.cs`

## Overview

BlockadePositionScript lives in the SandBox.View module, source file SandBox.View/Map/BlockadePositionScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is BlockadePositionScript → ScriptComponentBehavior. It exposes 11 public/protected members: 3 methods, 8 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BlockadePositionScript is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain BlockadePositionScript → ScriptComponentBehavior. The surface is method-led (methods 3/11, properties 0/11), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/BlockadePositionScript.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `List` | `public List<List<Vec3>>GetBlockadeArc(int totalNumberOfShips, out Vec3 center)` | method |
| `MaximumNumberOfShips` | `public int MaximumNumberOfShips` | field |
| `NumberOfArcs` | `public int NumberOfArcs` | field |
| `DistanceBetweenShips` | `public float DistanceBetweenShips` | field |
| `DistanceRandomizationOnArcs` | `public float DistanceRandomizationOnArcs` | field |
| `DistanceRandomizationBetweenArcs` | `public float DistanceRandomizationBetweenArcs` | field |
| `Angle` | `public float Angle` | field |
| `MissionShipId` | `public string MissionShipId` | field |
| `ShipScaleFactor` | `public float ShipScaleFactor` | field |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
- [same namespace HeirSelectionPopupView](../HeirSelectionPopupView)
