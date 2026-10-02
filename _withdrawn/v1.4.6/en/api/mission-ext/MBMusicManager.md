---
title: "MBMusicManager"
description: "MBMusicManager: a public class in TaleWorlds.MountAndBlade; 28 exposed members (26 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBMusicManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBMusicManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBMusicManager`
**File:** `TaleWorlds.MountAndBlade/MBMusicManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBMusicManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBMusicManager.cs. It is a public class; the inheritance chain is MBMusicManager. It exposes 28 public/protected members: 26 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBMusicManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBMusicManager. The surface is method-led (methods 26/28, properties 2/28), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBMusicManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Current` | `public static MBMusicManager Current` | property |
| `CurrentMode` | `public MusicMode CurrentMode` | property |
| `IsCreationCompleted` | `public static bool IsCreationCompleted()` | method |
| `Create` | `public static void Create()` | method |
| `Initialize` | `public static void Initialize()` | method |
| `OnCampaignMusicHandlerInit` | `public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)` | method |
| `OnCampaignMusicHandlerFinalize` | `public void OnCampaignMusicHandlerFinalize()` | method |
| `OnBattleMusicHandlerInit` | `public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)` | method |
| `OnBattleMusicHandlerFinalize` | `public void OnBattleMusicHandlerFinalize()` | method |
| `OnSilencedMusicHandlerInit` | `public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)` | method |
| `OnSilencedMusicHandlerFinalize` | `public void OnSilencedMusicHandlerFinalize()` | method |
| `ActivateBattleMode` | `public void ActivateBattleMode()` | method |
| `DeactivateBattleMode` | `public void DeactivateBattleMode()` | method |
| `ActivateCampaignMode` | `public void ActivateCampaignMode()` | method |
| `DeactivateCampaignMode` | `public void DeactivateCampaignMode()` | method |
| `DeactivateCurrentMode` | `public void DeactivateCurrentMode()` | method |
| `UnpauseMusicManagerSystem` | `public void UnpauseMusicManagerSystem()` | method |
| `PauseMusicManagerSystem` | `public void PauseMusicManagerSystem()` | method |
| `StartTheme` | `public void StartTheme(MusicTheme theme, float startIntensity, bool queueEndSegment = false)` | method |
| `StartThemeWithConstantIntensity` | `public void StartThemeWithConstantIntensity(MusicTheme theme, bool queueEndSegment = false)` | method |
| `ForceStopThemeWithFadeOut` | `public void ForceStopThemeWithFadeOut()` | method |
| `ChangeCurrentThemeIntensity` | `public void ChangeCurrentThemeIntensity(float deltaIntensity)` | method |
| `Update` | `public void Update(float dt)` | method |
| `GetSiegeTheme` | `public MusicTheme GetSiegeTheme(BasicCultureObject culture)` | method |
| `GetBattleTheme` | `public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)` | method |
| `GetBattleEndTheme` | `public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictory)` | method |
| `GetBattleTurnsOneSideTheme` | `public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture, bool isPositive, bool isPaganBattle)` | method |
| `GetCampaignMusicTheme` | `public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture, bool isDark, bool isWarMode, bool isAtSea)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
