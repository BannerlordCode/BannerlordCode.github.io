---
title: "MultiplayerAdminComponent"
description: "MultiplayerAdminComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 25 个（方法 21、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerAdminComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class MultiplayerAdminComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerAdminComponent 位于 TaleWorlds.MountAndBlade.Multiplayer 模块，源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs。它是一个 public 类，实现/继承 MissionNetwork，继承链为 MultiplayerAdminComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 25 个：21 方法、1 事件、1 构造函数、2 嵌套类型。 反编译器把该类型拆到了 2 个源文件，签名已合并。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerAdminComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MultiplayerAdminComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 21/25，属性 0/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnSetAdminMenuActiveState;` | `public event MultiplayerAdminComponent.OnSetAdminMenuActiveStateDelegate OnSetAdminMenuActiveState;` | 事件 |
| `MultiplayerAdminComponent` | `public MultiplayerAdminComponent()` | 构造函数 |
| `OnMissionStateActivated` | `public override void OnMissionStateActivated()` | 方法 |
| `ChangeAdminMenuActiveState` | `public void ChangeAdminMenuActiveState(bool isActive)` | 方法 |
| `KickPlayer` | `public void KickPlayer(NetworkCommunicator peerToKick, bool banPlayer)` | 方法 |
| `GlobalMuteUnmutePlayer` | `public void GlobalMuteUnmutePlayer(NetworkCommunicator peerToMute, bool unmute)` | 方法 |
| `EndWarmup` | `public void EndWarmup()` | 方法 |
| `ChangeWelcomeMessage` | `public void ChangeWelcomeMessage(string newWelcomeMessage)` | 方法 |
| `AdminAnnouncement` | `public void AdminAnnouncement(string message, bool isBroadcast)` | 方法 |
| `ChangeClassRestriction` | `public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool newValue)` | 方法 |
| `AdminEndMission` | `public void AdminEndMission()` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `MPAdminAnnouncement` | `public static string MPAdminAnnouncement(List<string>strings)` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `MPAdminKickPlayer` | `public static string MPAdminKickPlayer(List<string>strings)` | 方法 |
| `MPAdminBanPlayer` | `public static string MPAdminBanPlayer(List<string>strings)` | 方法 |
| `MPAdminChangeWelcomeMessage` | `public static string MPAdminChangeWelcomeMessage(List<string>strings)` | 方法 |
| `MPAdminChangeClassRestriction` | `public static string MPAdminChangeClassRestriction(List<string>strings)` | 方法 |
| `MPHostRestartGame` | `public static string MPHostRestartGame(List<string>strings)` | 方法 |
| `MPAdminChangeServerSlots` | `public static string MPAdminChangeServerSlots(List<string>strings)` | 方法 |
| `OnSelectPlayerToKickDelegate` | `public delegate void OnSelectPlayerToKickDelegate(bool banPlayer);` | 方法 |
| `OnSetAdminMenuActiveStateDelegate` | `public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu);` | 方法 |
| `OnSelectPlayerToKickDelegate` | `public delegate void OnSelectPlayerToKickDelegate(bool banPlayer)` | 嵌套类型 |
| `OnSetAdminMenuActiveStateDelegate` | `public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionNetwork](../MissionNetwork/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
