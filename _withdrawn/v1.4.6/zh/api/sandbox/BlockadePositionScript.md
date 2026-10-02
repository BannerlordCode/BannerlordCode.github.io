---
title: "BlockadePositionScript"
description: "BlockadePositionScript：SandBox.View.Map 的 public 类，继承 ScriptComponentBehavior；公开成员 11 个（方法 3、属性 0、字段 8）。canonical 桶 sandbox。源文件 SandBox.View/Map/BlockadePositionScript.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BlockadePositionScript

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class BlockadePositionScript : ScriptComponentBehavior`
**File:** `SandBox.View/Map/BlockadePositionScript.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BlockadePositionScript 位于 SandBox.View 模块，源文件 SandBox.View/Map/BlockadePositionScript.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 BlockadePositionScript → ScriptComponentBehavior → DotNetObject。public/protected 成员共 11 个：3 方法、8 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BlockadePositionScript 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map`，继承链 BlockadePositionScript → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 3/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/BlockadePositionScript.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | 方法 |
| `List` | `public List<List<Vec3>>GetBlockadeArc(int totalNumberOfShips, out Vec3 center)` | 方法 |
| `MaximumNumberOfShips` | `public int MaximumNumberOfShips` | 字段 |
| `NumberOfArcs` | `public int NumberOfArcs` | 字段 |
| `DistanceBetweenShips` | `public float DistanceBetweenShips` | 字段 |
| `DistanceRandomizationOnArcs` | `public float DistanceRandomizationOnArcs` | 字段 |
| `DistanceRandomizationBetweenArcs` | `public float DistanceRandomizationBetweenArcs` | 字段 |
| `Angle` | `public float Angle` | 字段 |
| `MissionShipId` | `public string MissionShipId` | 字段 |
| `ShipScaleFactor` | `public float ShipScaleFactor` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView/)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent/)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)
- [同命名空间 HeirSelectionPopupView](../HeirSelectionPopupView/)
