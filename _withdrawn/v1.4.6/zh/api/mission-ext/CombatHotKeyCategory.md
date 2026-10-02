---
title: "CombatHotKeyCategory"
description: "CombatHotKeyCategory：TaleWorlds.MountAndBlade 的 public 类，继承 GameKeyContext；公开成员 45 个（方法 0、属性 0、字段 44）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/CombatHotKeyCategory.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CombatHotKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class CombatHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/CombatHotKeyCategory.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CombatHotKeyCategory 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CombatHotKeyCategory.cs。它是一个 public 类（sealed），实现/继承 GameKeyContext，继承链为 CombatHotKeyCategory → GameKeyContext。public/protected 成员共 45 个：44 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CombatHotKeyCategory 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 CombatHotKeyCategory → GameKeyContext。成员构成以方法为主（方法 0/45，属性 0/45），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CombatHotKeyCategory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CombatHotKeyCategory` | `public CombatHotKeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | 构造函数 |
| `CategoryId` | `public const string CategoryId` | 字段 |
| `MissionScreenHotkeyCameraZoomIn` | `public const int MissionScreenHotkeyCameraZoomIn` | 字段 |
| `MissionScreenHotkeyCameraZoomOut` | `public const int MissionScreenHotkeyCameraZoomOut` | 字段 |
| `Action` | `public const int Action` | 字段 |
| `Jump` | `public const int Jump` | 字段 |
| `Crouch` | `public const int Crouch` | 字段 |
| `Attack` | `public const int Attack` | 字段 |
| `Defend` | `public const int Defend` | 字段 |
| `Kick` | `public const int Kick` | 字段 |
| `ToggleWeaponMode` | `public const int ToggleWeaponMode` | 字段 |
| `ToggleWalkMode` | `public const int ToggleWalkMode` | 字段 |
| `EquipWeapon1` | `public const int EquipWeapon1` | 字段 |
| `EquipWeapon2` | `public const int EquipWeapon2` | 字段 |
| `EquipWeapon3` | `public const int EquipWeapon3` | 字段 |
| `EquipWeapon4` | `public const int EquipWeapon4` | 字段 |
| `EquipPrimaryWeapon` | `public const int EquipPrimaryWeapon` | 字段 |
| `EquipSecondaryWeapon` | `public const int EquipSecondaryWeapon` | 字段 |
| `DropWeapon` | `public const int DropWeapon` | 字段 |
| `SheathWeapon` | `public const int SheathWeapon` | 字段 |
| `Zoom` | `public const int Zoom` | 字段 |
| `ViewCharacter` | `public const int ViewCharacter` | 字段 |
| `LockTarget` | `public const int LockTarget` | 字段 |
| `CameraToggle` | `public const int CameraToggle` | 字段 |
| `Cheer` | `public const int Cheer` | 字段 |
| `PushToTalk` | `public const int PushToTalk` | 字段 |
| `EquipmentSwitch` | `public const int EquipmentSwitch` | 字段 |
| `DeploymentCameraIsActive` | `public const string DeploymentCameraIsActive` | 字段 |
| `ToggleZoom` | `public const string ToggleZoom` | 字段 |
| `ControllerEquipDropRRight` | `public const string ControllerEquipDropRRight` | 字段 |
| `ControllerEquipDropRUp` | `public const string ControllerEquipDropRUp` | 字段 |
| `ControllerEquipDropRLeft` | `public const string ControllerEquipDropRLeft` | 字段 |
| `ControllerEquipDropRDown` | `public const string ControllerEquipDropRDown` | 字段 |
| `ControllerEquipDropRThumb` | `public const string ControllerEquipDropRThumb` | 字段 |
| `CheerBarkSelectFirstCategory` | `public const string CheerBarkSelectFirstCategory` | 字段 |
| `CheerBarkSelectSecondCategory` | `public const string CheerBarkSelectSecondCategory` | 字段 |
| `CheerBarkCloseMenu` | `public const string CheerBarkCloseMenu` | 字段 |
| `CheerBarkItem1` | `public const string CheerBarkItem1` | 字段 |
| `CheerBarkItem2` | `public const string CheerBarkItem2` | 字段 |
| `CheerBarkItem3` | `public const string CheerBarkItem3` | 字段 |
| `CheerBarkItem4` | `public const string CheerBarkItem4` | 字段 |
| `ControlModeToggle` | `public const string ControlModeToggle` | 字段 |
| `ControllerToggleWalk` | `public const string ControllerToggleWalk` | 字段 |
| `ControllerToggleCrouch` | `public const string ControllerToggleCrouch` | 字段 |
| `ForfeitSpawn` | `public const string ForfeitSpawn` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameKeyContext](../../system/GameKeyContext/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
