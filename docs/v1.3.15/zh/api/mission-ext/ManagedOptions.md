---
title: ManagedOptions
description: 托管游戏选项静态类，统一管理 51 项游戏设置的读取、设置和保存
---

<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedOptions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedOptions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 静态类
**领域:** 战斗系统 Mission

## 概述

`ManagedOptions

` ?Bannerlord 托管层（C#）游戏选项的统一入口。它通过 

`ManagedOptionsType

` 枚举标识 51 项游戏设置（语言、战斗、UI、多人、语音等），提供 

`GetConfig

` / 

`SetConfig

` / 

`GetDefaultConfig

` 三个核心方法读写配置值（统一?

`float

`），通过 

`BannerlordConfig

` 持久化?
选项变更时触?

`OnManagedOptionChanged

` 委托，通知所有订阅者（?

`VoiceChatHandler

`、UI 控件等）响应变更?
## 心智模型

?

`ManagedOptions

` 理解?游戏选项总线"?
1. **读取**（`GetConfig

`）：?

`ManagedOptionsType

` ?

`BannerlordConfig

` 读取当前值，布尔值返?0/1，枚?整数返回对应 float，浮点值直接返?2. **默认?*（`GetDefaultConfig

`）：返回每项的默认值（?

`FirstPersonFov

` 默认 65、`BattleSize

` 默认 2、`ReportDamage

` 默认 1?3. **设置**（`SetConfig

`）：按类型将 float 转换为对应类型（bool/int/float/string 索引）写?

`BannerlordConfig

`，然后触?

`OnManagedOptionChanged

` 委托
4. **保存**（`SaveConfig

`）：调用 

`BannerlordConfig.Save()

` 持久化到配置文件
5. **订阅**：其他系统通过 

`OnManagedOptionChanged

` 委托订阅变更通知，按类型过滤感兴趣的选项

## ManagedOptionsType 枚举

\| ?\| 名称 \| 默认 \| 说明 \|
\|----\|------\|------\|------\|
\| 0 \| 

`Language

` \| - \| 界面语言索引 \|
\| 1 \| 

`GyroOverrideForAttackDefend

` \| 0 \| 陀螺仪覆盖攻防方向 \|
\| 2 \| 

`ControlBlockDirection

` \| 0 \| 格挡方向控制模式 \|
\| 3 \| 

`ControlAttackDirection

` \| 1 \| 攻击方向控制模式 \|
\| 4 \| 

`NumberOfCorpses

` \| 3 \| 尸体数量 \|
\| 5 \| 

`BattleSize

` \| 2 \| 战斗规模 \|
\| 6 \| 

`ReinforcementWaveCount

` \| 3 \| 援军波次 \|
\| 7 \| 

`TurnCameraWithHorseInFirstPerson

` \| 2 \| 第一人称骑马镜头跟随 \|
\| 8 \| 

`ShowBlood

` \| 1 \| 显示血?\|
\| 9 \| 

`ShowAttackDirection

` \| 1 \| 显示攻击方向 \|
\| 10 \| 

`ShowTargetingReticle

` \| 1 \| 显示瞄准准星 \|
\| 11 \| 

`AutoSaveInterval

` \| 30 \| 自动保存间隔（分钟） \|
\| 12 \| 

`FriendlyTroopsBannerOpacity

` \| 1 \| 友军旗帜透明?\|
\| 13 \| 

`AlwaysShowFriendlyTroopBannersType

` \| 1 \| 始终显示友军旗帜类型 \|
\| 14 \| 

`ShowFormationDistances

` \| - \| 显示编队距离 \|
\| 15 \| 

`ReportDamage

` \| 1 \| 报告伤害 \|
\| 16 \| 

`ReportBark

` \| 1 \| 报告 bark \|
\| 17 \| 

`LockTarget

` \| 0 \| 锁定目标 \|
\| 18 \| 

`EnableTutorialHints

` \| 1 \| 启用教程提示 \|
\| 19 \| 

`ReportCasualtiesType

` \| 1 \| 伤亡报告类型 \|
\| 20 \| 

`ReportExperience

` \| 1 \| 报告经验 \|
\| 21 \| 

`ReportPersonalDamage

` \| 1 \| 报告个人伤害 \|
\| 22 \| 

`FirstPersonFov

` \| 65 \| 第一人称视场?\|
\| 23 \| 

`CombatCameraDistance

` \| 1 \| 战斗镜头距离 \|
\| 24 \| 

`EnableDamageTakenVisuals

` \| 1 \| 启用受伤视觉效果 \|
\| 25 \| 

`EnableVoiceChat

` \| 1 \| 启用语音聊天 \|
\| 26 \| 

`EnableDeathIcon

` \| 1 \| 启用死亡图标 \|
\| 27 \| 

`EnableNetworkAlertIcons

` \| 1 \| 启用网络警报图标 \|
\| 28 \| 

`ForceVSyncInMenus

` \| 1 \| 菜单强制垂直同步 \|
\| 29 \| 

`EnableVerticalAimCorrection

` \| 1 \| 启用垂直瞄准校正 \|
\| 30 \| 

`ZoomSensitivityModifier

` \| 0.667 \| 缩放灵敏度修?\|
\| 31 \| 

`UIScale

` \| 1 \| UI 缩放 \|
\| 32 \| 

`CrosshairType

` \| 0 \| 准星类型 \|
\| 33 \| 

`EnableGenericAvatars

` \| 0 \| 启用通用头像 \|
\| 34 \| 

`EnableGenericNames

` \| 0 \| 启用通用名称 \|
\| 35 \| 

`OrderType

` \| 0 \| 指令类型 \|
\| 36 \| 

`OrderLayoutType

` \| 0 \| 指令布局类型 \|
\| 37 \| 

`AutoTrackAttackedSettlements

` \| 0 \| 自动追踪被攻击定居点 \|
\| 38 \| 

`StopGameOnFocusLost

` \| 1 \| 失焦时暂停游?\|
\| 39 \| 

`SlowDownOnOrder

` \| 1 \| 下令时减?\|
\| 40 \| 

`HideFullServers

` \| 0 \| 隐藏满员服务?\|
\| 41 \| 

`HideEmptyServers

` \| 0 \| 隐藏空服务器 \|
\| 42 \| 

`HidePasswordProtectedServers

` \| 0 \| 隐藏密码服务?\|
\| 43 \| 

`HideUnofficialServers

` \| 0 \| 隐藏非官方服务器 \|
\| 44 \| 

`HideModuleIncompatibleServers

` \| 0 \| 隐藏模组不兼容服务器 \|
\| 45 \| 

`HideBattleUI

` \| 0 \| 隐藏战斗 UI \|
\| 46 \| 

`UnitSpawnPrioritization

` \| 0 \| 单位生成优先?\|
\| 47 \| 

`EnableSingleplayerChatBox

` \| 1 \| 启用单机聊天?\|
\| 48 \| 

`EnableMultiplayerChatBox

` \| 1 \| 启用多人聊天?\|
\| 49 \| 

`VoiceLanguage

` \| - \| 语音语言索引 \|
\| 50 \| 

`PlayerReceivedDamageDifficulty

` \| 0 \| 玩家受伤难度 \|

## 主要方法

### GetConfig

`

`

`csharp
public static float GetConfig(ManagedOptionsType type)
`

`

`

读取选项当前值。布尔选项返回 0/1，整?枚举返回对应 float，浮点选项直接返回。语言选项返回语言列表中的索引?
### GetDefaultConfig

`

`

`csharp
public static float GetDefaultConfig(ManagedOptionsType type)
`

`

`

读取选项默认值?
### SetConfig

`

`

`csharp
public static void SetConfig(ManagedOptionsType type, float value)
`

`

`

设置选项值。根据类型将 float 转换?bool/int/float/语言索引，写?

`BannerlordConfig

`，然后触?

`OnManagedOptionChanged

` 委托?
### SaveConfig

`

`

`csharp
public static SaveResult SaveConfig()
`

`

`

保存配置到文件。委托给 

`BannerlordConfig.Save()

`?
## 委托

### OnManagedOptionChanged

`

`

`csharp
public static OnManagedOptionChangedDelegate OnManagedOptionChanged;
`

`

`

选项变更通知委托。`SetConfig

` 设置完成后触发，传入变更?

`ManagedOptionsType

`。其他系统订阅此委托以响应选项变更?
## 使用示例

### 读取和设置选项

`

`

`csharp
using TaleWorlds.MountAndBlade;

// 读取当前 FOV
float fov = ManagedOptions.GetConfig(ManagedOptionsType.FirstPersonFov);
Console.WriteLine($"当前 FOV: {fov}");

// 设置 FOV ?90
ManagedOptions.SetConfig(ManagedOptionsType.FirstPersonFov, 90f);

// 保存配置
ManagedOptions.SaveConfig();
`

`

`

### 监听选项变更

`

`

`csharp
// 订阅选项变更通知
ManagedOptions.OnManagedOptionChanged += (type) =&gt;
{
    if (type == ManagedOptionsType.EnableVoiceChat)
    {
        bool enabled = ManagedOptions.GetConfig(type) != 0f;
        Console.WriteLine($"语音聊天已{(enabled ? "启用" : "禁用")}");
    }
};
`

`

`

### 获取默认?
`

`

`csharp
// 获取战斗规模默认?float defaultBattleSize = ManagedOptions.GetDefaultConfig(ManagedOptionsType.BattleSize);
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
