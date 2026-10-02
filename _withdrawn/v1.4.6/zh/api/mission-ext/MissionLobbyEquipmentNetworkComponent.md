---
title: "MissionLobbyEquipmentNetworkComponent"
description: "MissionLobbyEquipmentNetworkComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 12 个（方法 8、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionLobbyEquipmentNetworkComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionLobbyEquipmentNetworkComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionLobbyEquipmentNetworkComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs。它是一个 public 类，实现/继承 MissionNetwork，继承链为 MissionLobbyEquipmentNetworkComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 12 个：8 方法、2 事件、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionLobbyEquipmentNetworkComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionLobbyEquipmentNetworkComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 8/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnToggleLoadout;` | `public event MissionLobbyEquipmentNetworkComponent.OnToggleLoadoutDelegate OnToggleLoadout;` | 事件 |
| `OnEquipmentRefreshed;` | `public event MissionLobbyEquipmentNetworkComponent.OnRefreshEquipmentEventDelegate OnEquipmentRefreshed;` | 事件 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `PerkUpdated` | `public void PerkUpdated(int perkList, int perkIndex)` | 方法 |
| `EquipmentUpdated` | `public void EquipmentUpdated()` | 方法 |
| `ToggleLoadout` | `public void ToggleLoadout(bool isActive)` | 方法 |
| `OnToggleLoadoutDelegate` | `public delegate void OnToggleLoadoutDelegate(bool isActive);` | 方法 |
| `OnRefreshEquipmentEventDelegate` | `public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer);` | 方法 |
| `OnToggleLoadoutDelegate` | `public delegate void OnToggleLoadoutDelegate(bool isActive)` | 嵌套类型 |
| `OnRefreshEquipmentEventDelegate` | `public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionNetwork](../MissionNetwork/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
