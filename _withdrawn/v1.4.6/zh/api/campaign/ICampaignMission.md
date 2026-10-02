---
title: "ICampaignMission"
description: "ICampaignMission：TaleWorlds.CampaignSystem 的 public 接口；公开成员 21 个（方法 16、属性 5、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/ICampaignMission.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICampaignMission

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICampaignMission`
**File:** `TaleWorlds.CampaignSystem/ICampaignMission.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

ICampaignMission 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ICampaignMission.cs。它是一个 public 接口，继承链为 ICampaignMission。public/protected 成员共 21 个：16 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICampaignMission 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 ICampaignMission。成员构成以方法为主（方法 16/21，属性 5/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ICampaignMission.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `GameState State` | 属性 |
| `AgentSupplier` | `IMissionTroopSupplier AgentSupplier` | 属性 |
| `Location` | `Location Location` | 属性 |
| `LastVisitedAlley` | `Alley LastVisitedAlley` | 属性 |
| `Mode` | `MissionMode Mode` | 属性 |
| `SetMissionMode` | `void SetMissionMode(MissionMode newMode, bool atStart);` | 方法 |
| `OnCloseEncounterMenu` | `void OnCloseEncounterMenu();` | 方法 |
| `AgentLookingAtAgent` | `bool AgentLookingAtAgent(IAgent agent1, IAgent agent2);` | 方法 |
| `OnCharacterLocationChanged` | `void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation);` | 方法 |
| `OnProcessSentence` | `void OnProcessSentence();` | 方法 |
| `OnConversationContinue` | `void OnConversationContinue();` | 方法 |
| `CheckIfAgentCanFollow` | `bool CheckIfAgentCanFollow(IAgent agent);` | 方法 |
| `AddAgentFollowing` | `void AddAgentFollowing(IAgent agent);` | 方法 |
| `CheckIfAgentCanUnFollow` | `bool CheckIfAgentCanUnFollow(IAgent agent);` | 方法 |
| `RemoveAgentFollowing` | `void RemoveAgentFollowing(IAgent agent);` | 方法 |
| `OnConversationPlay` | `void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath);` | 方法 |
| `OnConversationStart` | `void OnConversationStart(IAgent agent, bool setActionsInstantly);` | 方法 |
| `OnConversationEnd` | `void OnConversationEnd(IAgent agent);` | 方法 |
| `EndMission` | `void EndMission();` | 方法 |
| `FadeOutCharacter` | `void FadeOutCharacter(CharacterObject characterObject);` | 方法 |
| `OnGameStateChanged` | `void OnGameStateChanged();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
