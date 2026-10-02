---
title: "MissionConversationLogic"
description: "MissionConversationLogic：SandBox.Conversation.MissionLogics 的 public 类，继承 MissionLogic；公开成员 21 个（方法 14、属性 5、字段 0）。canonical 桶 sandbox。源文件 SandBox/Conversation/MissionLogics/MissionConversationLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionConversationLogic

**Namespace:** `SandBox.Conversation.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionConversationLogic : MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/MissionConversationLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionConversationLogic 位于 SandBox 模块，源文件 SandBox/Conversation/MissionLogics/MissionConversationLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionConversationLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 21 个：14 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionConversationLogic 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Conversation.MissionLogics`，继承链 MissionConversationLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 14/21，属性 5/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Conversation/MissionLogics/MissionConversationLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MissionConversationLogic Current` | 属性 |
| `State` | `public MissionState State` | 属性 |
| `ConversationManager` | `public ConversationManager ConversationManager` | 属性 |
| `IsReadyForConversation` | `public bool IsReadyForConversation` | 属性 |
| `ConversationAgent` | `public Agent ConversationAgent` | 属性 |
| `MissionConversationLogic` | `public MissionConversationLogic(CharacterObject teleportNearChar)` | 构造函数 |
| `MissionConversationLogic` | `public MissionConversationLogic()` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `SetSpawnArea` | `public void SetSpawnArea(Alley alley)` | 方法 |
| `SetSpawnArea` | `public void SetSpawnArea(Workshop workshop)` | 方法 |
| `SetSpawnArea` | `public void SetSpawnArea(string customTag)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | 方法 |
| `StartConversation` | `public void StartConversation(Agent agent, bool setActionsInstantly, bool isInitialization = false)` | 方法 |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | 方法 |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | 方法 |
| `DisableStartConversation` | `public void DisableStartConversation(bool isDisabled)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [同命名空间 ConversationMissionLogic](../ConversationMissionLogic/)
