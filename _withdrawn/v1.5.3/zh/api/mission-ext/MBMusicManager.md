---
title: "MBMusicManager"
description: "MBMusicManager 的自动生成类参考。"
---
# MBMusicManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMusicManager `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBMusicManager.cs

## 概述

`MBMusicManager` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBMusicManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsCreationCompleted
`public static bool IsCreationCompleted() `

### Create
`public static void Create() `

### Initialize
`public static void Initialize() `

### OnCampaignMusicHandlerInit
`public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler) `

### OnCampaignMusicHandlerFinalize
`public void OnCampaignMusicHandlerFinalize() `

### OnBattleMusicHandlerInit
`public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler) `

### OnBattleMusicHandlerFinalize
`public void OnBattleMusicHandlerFinalize() `

### OnSilencedMusicHandlerInit
`public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler) `

### OnSilencedMusicHandlerFinalize
`public void OnSilencedMusicHandlerFinalize() `

### ActivateBattleMode
`public void ActivateBattleMode() `

### DeactivateBattleMode
`public void DeactivateBattleMode() `

### ActivateCampaignMode
`public void ActivateCampaignMode() `

### DeactivateCampaignMode
`public void DeactivateCampaignMode() `

### DeactivateCurrentMode
`public void DeactivateCurrentMode() `

### UnpauseMusicManagerSystem
`public void UnpauseMusicManagerSystem() `

### PauseMusicManagerSystem
`public void PauseMusicManagerSystem() `

### StartTheme
`public void StartTheme(MusicTheme theme,float startIntensity,bool queueEndSegment = false) `

### StartThemeWithConstantIntensity
`public void StartThemeWithConstantIntensity(MusicTheme theme,bool queueEndSegment = false) `

### ForceStopThemeWithFadeOut
`public void ForceStopThemeWithFadeOut() `

### ChangeCurrentThemeIntensity
`public void ChangeCurrentThemeIntensity(float deltaIntensity) `

### Update
`public void Update(float dt) `

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture) `

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture,int battleSize,out bool isPaganBattle) `

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture,bool isVictory) `

### GetBattleTurnsOneSideTheme
`public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture,bool isPositive,bool isPaganBattle) `

### GetCampaignMusicTheme
`public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture,bool isDark,bool isWarMode,bool isAtSea) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
