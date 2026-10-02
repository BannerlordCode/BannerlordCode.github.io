---
title: "MBMusicManager"
description: "Auto-generated class reference for MBMusicManager."
---
# MBMusicManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMusicManager `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBMusicManager.cs

## Overview

Auto-generated stub for `MBMusicManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### IsCreationCompleted
`public static bool IsCreationCompleted()`

### Create
`public static void Create()`

### Initialize
`public static void Initialize()`

### OnCampaignMusicHandlerInit
`public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)`

### OnCampaignMusicHandlerFinalize
`public void OnCampaignMusicHandlerFinalize()`

### OnBattleMusicHandlerInit
`public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)`

### OnBattleMusicHandlerFinalize
`public void OnBattleMusicHandlerFinalize()`

### OnSilencedMusicHandlerInit
`public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)`

### OnSilencedMusicHandlerFinalize
`public void OnSilencedMusicHandlerFinalize()`

### ActivateBattleMode
`public void ActivateBattleMode()`

### DeactivateBattleMode
`public void DeactivateBattleMode()`

### ActivateCampaignMode
`public void ActivateCampaignMode()`

### DeactivateCampaignMode
`public void DeactivateCampaignMode()`

### DeactivateCurrentMode
`public void DeactivateCurrentMode()`

### UnpauseMusicManagerSystem
`public void UnpauseMusicManagerSystem()`

### PauseMusicManagerSystem
`public void PauseMusicManagerSystem()`

### StartTheme
`public void StartTheme(MusicTheme theme,float startIntensity,bool queueEndSegment = false)`

### StartThemeWithConstantIntensity
`public void StartThemeWithConstantIntensity(MusicTheme theme,bool queueEndSegment = false)`

### ForceStopThemeWithFadeOut
`public void ForceStopThemeWithFadeOut()`

### ChangeCurrentThemeIntensity
`public void ChangeCurrentThemeIntensity(float deltaIntensity)`

### Update
`public void Update(float dt)`

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture,int battleSize,out bool isPaganBattle)`

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture,bool isVictory)`

### GetBattleTurnsOneSideTheme
`public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture,bool isPositive,bool isPaganBattle)`

### GetCampaignMusicTheme
`public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture,bool isDark,bool isWarMode,bool isAtSea)`

## See Also

- [Section index](../)
