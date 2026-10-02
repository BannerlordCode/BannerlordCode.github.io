---
title: "MBMusicManager"
description: "MBMusicManager：TaleWorlds.MountAndBlade 的 public 类；公开成员 28 个（方法 26、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MBMusicManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBMusicManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBMusicManager`
**File:** `TaleWorlds.MountAndBlade/MBMusicManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MBMusicManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBMusicManager.cs。它是一个 public 类，继承链为 MBMusicManager。public/protected 成员共 28 个：26 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBMusicManager 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MBMusicManager。成员构成以方法为主（方法 26/28，属性 2/28），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBMusicManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MBMusicManager Current` | 属性 |
| `CurrentMode` | `public MusicMode CurrentMode` | 属性 |
| `IsCreationCompleted` | `public static bool IsCreationCompleted()` | 方法 |
| `Create` | `public static void Create()` | 方法 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `OnCampaignMusicHandlerInit` | `public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)` | 方法 |
| `OnCampaignMusicHandlerFinalize` | `public void OnCampaignMusicHandlerFinalize()` | 方法 |
| `OnBattleMusicHandlerInit` | `public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)` | 方法 |
| `OnBattleMusicHandlerFinalize` | `public void OnBattleMusicHandlerFinalize()` | 方法 |
| `OnSilencedMusicHandlerInit` | `public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)` | 方法 |
| `OnSilencedMusicHandlerFinalize` | `public void OnSilencedMusicHandlerFinalize()` | 方法 |
| `ActivateBattleMode` | `public void ActivateBattleMode()` | 方法 |
| `DeactivateBattleMode` | `public void DeactivateBattleMode()` | 方法 |
| `ActivateCampaignMode` | `public void ActivateCampaignMode()` | 方法 |
| `DeactivateCampaignMode` | `public void DeactivateCampaignMode()` | 方法 |
| `DeactivateCurrentMode` | `public void DeactivateCurrentMode()` | 方法 |
| `UnpauseMusicManagerSystem` | `public void UnpauseMusicManagerSystem()` | 方法 |
| `PauseMusicManagerSystem` | `public void PauseMusicManagerSystem()` | 方法 |
| `StartTheme` | `public void StartTheme(MusicTheme theme, float startIntensity, bool queueEndSegment = false)` | 方法 |
| `StartThemeWithConstantIntensity` | `public void StartThemeWithConstantIntensity(MusicTheme theme, bool queueEndSegment = false)` | 方法 |
| `ForceStopThemeWithFadeOut` | `public void ForceStopThemeWithFadeOut()` | 方法 |
| `ChangeCurrentThemeIntensity` | `public void ChangeCurrentThemeIntensity(float deltaIntensity)` | 方法 |
| `Update` | `public void Update(float dt)` | 方法 |
| `GetSiegeTheme` | `public MusicTheme GetSiegeTheme(BasicCultureObject culture)` | 方法 |
| `GetBattleTheme` | `public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)` | 方法 |
| `GetBattleEndTheme` | `public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictory)` | 方法 |
| `GetBattleTurnsOneSideTheme` | `public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture, bool isPositive, bool isPaganBattle)` | 方法 |
| `GetCampaignMusicTheme` | `public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture, bool isDark, bool isWarMode, bool isAtSea)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
