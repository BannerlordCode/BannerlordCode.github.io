---
title: "MultiplayerMissionAgentVisualSpawnComponent"
description: "MultiplayerMissionAgentVisualSpawnComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 7 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs。"
---
# MultiplayerMissionAgentVisualSpawnComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerMissionAgentVisualSpawnComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs`

## 概述

MultiplayerMissionAgentVisualSpawnComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs。它是一个 public 类，实现/继承 MissionNetwork，继承链为 MultiplayerMissionAgentVisualSpawnComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 7 个：4 方法、3 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerMissionAgentVisualSpawnComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MultiplayerMissionAgentVisualSpawnComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 4/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMyAgentVisualSpawned;` | `public event Action OnMyAgentVisualSpawned;` | 事件 |
| `OnMyAgentSpawnedFromVisual;` | `public event Action OnMyAgentSpawnedFromVisual;` | 事件 |
| `OnMyAgentVisualRemoved;` | `public event Action OnMyAgentVisualRemoved;` | 事件 |
| `SpawnAgentVisualsForPeer` | `public void SpawnAgentVisualsForPeer(MissionPeer missionPeer, AgentBuildData buildData, int selectedEquipmentSetIndex = -1, bool isBot = false, int totalTroopCount = 0)` | 方法 |
| `RemoveAgentVisuals` | `public void RemoveAgentVisuals(MissionPeer missionPeer, bool sync = false)` | 方法 |
| `OnMyAgentSpawned` | `public void OnMyAgentSpawned()` | 方法 |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionNetwork](../MissionNetwork)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
