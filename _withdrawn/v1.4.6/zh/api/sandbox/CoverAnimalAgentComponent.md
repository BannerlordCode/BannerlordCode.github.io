---
title: "CoverAnimalAgentComponent"
description: "CoverAnimalAgentComponent：SandBox.Missions 的 public 类，继承 AgentComponent、IFocusable；公开成员 14 个（方法 9、属性 4、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/CoverAnimalAgentComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CoverAnimalAgentComponent

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class CoverAnimalAgentComponent : AgentComponent, IFocusable`
**File:** `SandBox/Missions/CoverAnimalAgentComponent.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

CoverAnimalAgentComponent 位于 SandBox 模块，源文件 SandBox/Missions/CoverAnimalAgentComponent.cs。它是一个 public 类，实现/继承 AgentComponent、IFocusable，继承链为 CoverAnimalAgentComponent → AgentComponent。public/protected 成员共 14 个：9 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CoverAnimalAgentComponent 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions`，继承链 CoverAnimalAgentComponent → AgentComponent。成员构成以方法为主（方法 9/14，属性 4/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/CoverAnimalAgentComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMovementStarted` | `public bool IsMovementStarted` | 属性 |
| `IsAtFinalPoint` | `public bool IsAtFinalPoint` | 属性 |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType` | 属性 |
| `IsFocusable` | `public virtual bool IsFocusable` | 属性 |
| `CoverAnimalAgentComponent` | `public CoverAnimalAgentComponent(Agent agent) : base(agent)` | 构造函数 |
| `SetDynamicPatrolArea` | `public void SetDynamicPatrolArea(GameEntity parentPatrolPoint)` | 方法 |
| `StartMovement` | `public void StartMovement()` | 方法 |
| `OnTick` | `public override void OnTick(float dt)` | 方法 |
| `IsTargetReached` | `public bool IsTargetReached()` | 方法 |
| `SetTargetFrame` | `public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, Agent.AIScriptedFrameFlags flags = Agent.AIScriptedFrameFlags.None)` | 方法 |
| `OnFocusGain` | `public void OnFocusGain(Agent userAgent)` | 方法 |
| `OnFocusLose` | `public void OnFocusLose(Agent userAgent)` | 方法 |
| `GetInfoTextForBeingNotInteractable` | `public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | 方法 |
| `GetDescriptionText` | `public TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentComponent](../../mission-ext/AgentComponent/)
- [基类/接口 IFocusable](../../mission-ext/IFocusable/)
- [同命名空间 CameraJumpScript](../CameraJumpScript/)
- [同命名空间 ChangeLightIntensityScript](../ChangeLightIntensityScript/)
- [同命名空间 CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent/)
- [同命名空间 CheckpointMissionLogic](../CheckpointMissionLogic/)
