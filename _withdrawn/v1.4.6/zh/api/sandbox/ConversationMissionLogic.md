---
title: "ConversationMissionLogic"
description: "ConversationMissionLogic：SandBox.Conversation.MissionLogics 的 public 类，继承 MissionLogic；公开成员 8 个（方法 4、属性 3、字段 0）。canonical 桶 sandbox。源文件 SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationMissionLogic

**Namespace:** `SandBox.Conversation.MissionLogics`
**Module:** `SandBox`
**Type:** `public class ConversationMissionLogic : MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

ConversationMissionLogic 位于 SandBox 模块，源文件 SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 ConversationMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 8 个：4 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConversationMissionLogic 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Conversation.MissionLogics`，继承链 ConversationMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 4/8，属性 3/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OtherSideConversationData` | `public ConversationCharacterData OtherSideConversationData` | 属性 |
| `PlayerConversationData` | `public ConversationCharacterData PlayerConversationData` | 属性 |
| `IsMultiAgentConversation` | `public bool IsMultiAgentConversation` | 属性 |
| `ConversationMissionLogic` | `public ConversationMissionLogic(ConversationCharacterData playerCharacterData, ConversationCharacterData otherCharacterData, bool isMultiAgentConversation)` | 构造函数 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [同命名空间 MissionConversationLogic](../MissionConversationLogic/)
