---
title: "CheatsHotKeyCategory"
description: "CheatsHotKeyCategory：TaleWorlds.Engine 的 public 类，继承 GameKeyContext；公开成员 25 个（方法 0、属性 0、字段 24）。源文件 TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs。"
---
# CheatsHotKeyCategory

**Namespace:** `TaleWorlds.Engine.InputSystem`
**Module:** `TaleWorlds.Engine`
**Type:** `public class CheatsHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs`

## 概述

CheatsHotKeyCategory 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs。它是一个 public 类，实现/继承 GameKeyContext，继承链为 CheatsHotKeyCategory → GameKeyContext。public/protected 成员共 25 个：24 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CheatsHotKeyCategory 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录不同（TaleWorlds.Engine.InputSystem），继承链 CheatsHotKeyCategory → GameKeyContext。成员构成以方法为主（方法 0/25，属性 0/25），对外主要以操作入口暴露。继承链上的 GameKeyContext 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheatsHotKeyCategory` | `public CheatsHotKeyCategory() : base(" ", 0, GameKeyContext.GameKeyContextType.Default)` | 构造函数 |
| `CategoryId` | `public const string CategoryId` | 字段 |
| `MissionScreenHotkeyIncreaseCameraSpeed` | `public const string MissionScreenHotkeyIncreaseCameraSpeed` | 字段 |
| `MissionScreenHotkeyDecreaseCameraSpeed` | `public const string MissionScreenHotkeyDecreaseCameraSpeed` | 字段 |
| `ResetCameraSpeed` | `public const string ResetCameraSpeed` | 字段 |
| `MissionScreenHotkeyIncreaseSlowMotionFactor` | `public const string MissionScreenHotkeyIncreaseSlowMotionFactor` | 字段 |
| `MissionScreenHotkeyDecreaseSlowMotionFactor` | `public const string MissionScreenHotkeyDecreaseSlowMotionFactor` | 字段 |
| `EnterSlowMotion` | `public const string EnterSlowMotion` | 字段 |
| `Pause` | `public const string Pause` | 字段 |
| `MissionScreenHotkeyHealYourSelf` | `public const string MissionScreenHotkeyHealYourSelf` | 字段 |
| `MissionScreenHotkeyHealYourHorse` | `public const string MissionScreenHotkeyHealYourHorse` | 字段 |
| `MissionScreenHotkeyKillEnemyAgent` | `public const string MissionScreenHotkeyKillEnemyAgent` | 字段 |
| `MissionScreenHotkeyKillAllEnemyAgents` | `public const string MissionScreenHotkeyKillAllEnemyAgents` | 字段 |
| `MissionScreenHotkeyKillEnemyHorse` | `public const string MissionScreenHotkeyKillEnemyHorse` | 字段 |
| `MissionScreenHotkeyKillAllEnemyHorses` | `public const string MissionScreenHotkeyKillAllEnemyHorses` | 字段 |
| `MissionScreenHotkeyKillFriendlyAgent` | `public const string MissionScreenHotkeyKillFriendlyAgent` | 字段 |
| `MissionScreenHotkeyKillAllFriendlyAgents` | `public const string MissionScreenHotkeyKillAllFriendlyAgents` | 字段 |
| `MissionScreenHotkeyKillFriendlyHorse` | `public const string MissionScreenHotkeyKillFriendlyHorse` | 字段 |
| `MissionScreenHotkeyKillAllFriendlyHorses` | `public const string MissionScreenHotkeyKillAllFriendlyHorses` | 字段 |
| `MissionScreenHotkeyKillYourSelf` | `public const string MissionScreenHotkeyKillYourSelf` | 字段 |
| `MissionScreenHotkeyKillYourHorse` | `public const string MissionScreenHotkeyKillYourHorse` | 字段 |
| `MissionScreenHotkeyGhostCam` | `public const string MissionScreenHotkeyGhostCam` | 字段 |
| `MissionScreenHotkeySwitchAgentToAi` | `public const string MissionScreenHotkeySwitchAgentToAi` | 字段 |
| `MissionScreenHotkeyControlFollowedAgent` | `public const string MissionScreenHotkeyControlFollowedAgent` | 字段 |
| `MissionScreenHotkeyTeleportMainAgent` | `public const string MissionScreenHotkeyTeleportMainAgent` | 字段 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DebugHotKeyCategory](../DebugHotKeyCategory)
- [同命名空间 EngineInputManager](../EngineInputManager)
