<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMusicManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBMusicManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMusicManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBMusicManager.cs`

## 概述

`MBMusicManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### IsCreationCompleted
```csharp
public static bool IsCreationCompleted()
```

### Create
```csharp
public static void Create()
```

### Initialize
```csharp
public static void Initialize()
```

### OnCampaignMusicHandlerInit
```csharp
public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)
```

### OnCampaignMusicHandlerFinalize
```csharp
public void OnCampaignMusicHandlerFinalize()
```

### OnBattleMusicHandlerInit
```csharp
public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)
```

### OnBattleMusicHandlerFinalize
```csharp
public void OnBattleMusicHandlerFinalize()
```

### OnSilencedMusicHandlerInit
```csharp
public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)
```

### OnSilencedMusicHandlerFinalize
```csharp
public void OnSilencedMusicHandlerFinalize()
```

### ActivateBattleMode
```csharp
public void ActivateBattleMode()
```

### DeactivateBattleMode
```csharp
public void DeactivateBattleMode()
```

### ActivateCampaignMode
```csharp
public void ActivateCampaignMode()
```

### DeactivateCampaignMode
```csharp
public void DeactivateCampaignMode()
```

### DeactivateCurrentMode
```csharp
public void DeactivateCurrentMode()
```

### UnpauseMusicManagerSystem
```csharp
public void UnpauseMusicManagerSystem()
```

### PauseMusicManagerSystem
```csharp
public void PauseMusicManagerSystem()
```

### StartTheme
```csharp
public void StartTheme(MusicTheme theme, float startIntensity, bool queueEndSegment = false)
```

### StartThemeWithConstantIntensity
```csharp
public void StartThemeWithConstantIntensity(MusicTheme theme, bool queueEndSegment = false)
```

### ForceStopThemeWithFadeOut
```csharp
public void ForceStopThemeWithFadeOut()
```

### ChangeCurrentThemeIntensity
```csharp
public void ChangeCurrentThemeIntensity(float deltaIntensity)
```

### Update
```csharp
public void Update(float dt)
```

### GetSiegeTheme
```csharp
public MusicTheme GetSiegeTheme(BasicCultureObject culture)
```

### GetBattleTheme
```csharp
public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)
```

### GetBattleEndTheme
```csharp
public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictory)
```

### GetBattleTurnsOneSideTheme
```csharp
public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture, bool isPositive, bool isPaganBattle)
```

### GetCampaignMusicTheme
```csharp
public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture, bool isDark, bool isWarMode, bool isAtSea)
```

### GetCampaignTheme
```csharp
public MusicTheme GetCampaignTheme(BasicCultureObject culture, bool isDark)
```

### GetCampaignDramaticThemeWithCulture
```csharp
public MusicTheme GetCampaignDramaticThemeWithCulture(BasicCultureObject culture)
```

### GetSeaCampignMusic
```csharp
public MusicTheme GetSeaCampignMusic(BasicCultureObject culture)
```

### GetBattleTheme
```csharp
public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)
```

## 使用示例

```csharp
// MBMusicManager (Manager) 的典型用法
MBMusicManager.Current;
```

## 参见

- [完整类目录](../catalog)