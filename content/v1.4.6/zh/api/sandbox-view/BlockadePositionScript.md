---
title: "BlockadePositionScript"
description: "BlockadePositionScript：SandBox.View 的 public 类，继承 ScriptComponentBehavior；公开成员 11 个（方法 3、属性 0、字段 8）。源文件 SandBox.View/Map/BlockadePositionScript.cs。"
---
# BlockadePositionScript

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class BlockadePositionScript : ScriptComponentBehavior`
**File:** `SandBox.View/Map/BlockadePositionScript.cs`

## 概述

BlockadePositionScript 位于 SandBox.View 模块，源文件 SandBox.View/Map/BlockadePositionScript.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 BlockadePositionScript → ScriptComponentBehavior。public/protected 成员共 11 个：3 方法、8 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BlockadePositionScript 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map），继承链 BlockadePositionScript → ScriptComponentBehavior。成员构成以方法为主（方法 3/11，属性 0/11），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/BlockadePositionScript.cs 的方法体或该类型的深写页确认。

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

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
- [同命名空间 HeirSelectionPopupView](../HeirSelectionPopupView)
