---
title: "MBMusicManager"
description: "MBMusicManager 的自动生成类参考。"
---
# MBMusicManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMusicManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBMusicManager.cs`

## 概述

`MBMusicManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBMusicManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static MBMusicManager Current { get; }` |
| `CurrentMode` | `public MusicMode CurrentMode { get; }` |

## 主要方法

### IsCreationCompleted
`public static bool IsCreationCompleted()`

**用途 / Purpose:** 判断当前对象是否处于 「creation completed」 状态或条件。

```csharp
// 静态调用，不需要实例
MBMusicManager.IsCreationCompleted();
```

### Create
`public static void Create()`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
MBMusicManager.Create();
```

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
MBMusicManager.Initialize();
```

### OnCampaignMusicHandlerInit
`public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)`

**用途 / Purpose:** 在 「campaign music handler init」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnCampaignMusicHandlerInit(campaignMusicHandler);
```

### OnCampaignMusicHandlerFinalize
`public void OnCampaignMusicHandlerFinalize()`

**用途 / Purpose:** 在 「campaign music handler finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnCampaignMusicHandlerFinalize();
```

### OnBattleMusicHandlerInit
`public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)`

**用途 / Purpose:** 在 「battle music handler init」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnBattleMusicHandlerInit(battleMusicHandler);
```

### OnBattleMusicHandlerFinalize
`public void OnBattleMusicHandlerFinalize()`

**用途 / Purpose:** 在 「battle music handler finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnBattleMusicHandlerFinalize();
```

### OnSilencedMusicHandlerInit
`public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)`

**用途 / Purpose:** 在 「silenced music handler init」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnSilencedMusicHandlerInit(silencedMusicHandler);
```

### OnSilencedMusicHandlerFinalize
`public void OnSilencedMusicHandlerFinalize()`

**用途 / Purpose:** 在 「silenced music handler finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnSilencedMusicHandlerFinalize();
```

### ActivateBattleMode
`public void ActivateBattleMode()`

**用途 / Purpose:** 激活「battle mode」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.ActivateBattleMode();
```

### DeactivateBattleMode
`public void DeactivateBattleMode()`

**用途 / Purpose:** 停用「battle mode」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateBattleMode();
```

### ActivateCampaignMode
`public void ActivateCampaignMode()`

**用途 / Purpose:** 激活「campaign mode」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.ActivateCampaignMode();
```

### DeactivateCampaignMode
`public void DeactivateCampaignMode()`

**用途 / Purpose:** 停用「campaign mode」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateCampaignMode();
```

### DeactivateCurrentMode
`public void DeactivateCurrentMode()`

**用途 / Purpose:** 停用「current mode」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateCurrentMode();
```

### UnpauseMusicManagerSystem
`public void UnpauseMusicManagerSystem()`

**用途 / Purpose:** 处理与 「unpause music manager system」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.UnpauseMusicManagerSystem();
```

### PauseMusicManagerSystem
`public void PauseMusicManagerSystem()`

**用途 / Purpose:** 处理与 「pause music manager system」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.PauseMusicManagerSystem();
```

### StartTheme
`public void StartTheme(MusicTheme theme, float startIntensity, bool queueEndSegment = false)`

**用途 / Purpose:** 启动「theme」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.StartTheme(theme, 0, false);
```

### StartThemeWithConstantIntensity
`public void StartThemeWithConstantIntensity(MusicTheme theme, bool queueEndSegment = false)`

**用途 / Purpose:** 启动「theme with constant intensity」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.StartThemeWithConstantIntensity(theme, false);
```

### ForceStopThemeWithFadeOut
`public void ForceStopThemeWithFadeOut()`

**用途 / Purpose:** 处理与 「force stop theme with fade out」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.ForceStopThemeWithFadeOut();
```

### ChangeCurrentThemeIntensity
`public void ChangeCurrentThemeIntensity(float deltaIntensity)`

**用途 / Purpose:** 处理与 「change current theme intensity」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.ChangeCurrentThemeIntensity(0);
```

### Update
`public void Update(float dt)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
mBMusicManager.Update(0);
```

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 「siege theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSiegeTheme(culture);
```

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**用途 / Purpose:** 读取并返回当前对象中 「battle theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTheme(culture, 0, isPaganBattle);
```

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictory)`

**用途 / Purpose:** 读取并返回当前对象中 「battle end theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleEndTheme(culture, false);
```

### GetBattleTurnsOneSideTheme
`public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture, bool isPositive, bool isPaganBattle)`

**用途 / Purpose:** 读取并返回当前对象中 「battle turns one side theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTurnsOneSideTheme(culture, false, false);
```

### GetCampaignMusicTheme
`public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture, bool isDark, bool isWarMode, bool isAtSea)`

**用途 / Purpose:** 读取并返回当前对象中 「campaign music theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignMusicTheme(culture, false, false, false);
```

### GetCampaignTheme
`public MusicTheme GetCampaignTheme(BasicCultureObject culture, bool isDark)`

**用途 / Purpose:** 读取并返回当前对象中 「campaign theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignTheme(culture, false);
```

### GetCampaignDramaticThemeWithCulture
`public MusicTheme GetCampaignDramaticThemeWithCulture(BasicCultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 「campaign dramatic theme with culture」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignDramaticThemeWithCulture(culture);
```

### GetSeaCampignMusic
`public MusicTheme GetSeaCampignMusic(BasicCultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 「sea campign music」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSeaCampignMusic(culture);
```

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**用途 / Purpose:** 读取并返回当前对象中 「battle theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTheme(culture, 0, isPaganBattle);
```

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 「siege theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSiegeTheme(culture);
```

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictorious)`

**用途 / Purpose:** 读取并返回当前对象中 「battle end theme」 的结果。

```csharp
// 先通过子系统 API 拿到 MBMusicManager 实例
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleEndTheme(culture, false);
```

## 使用示例

```csharp
var manager = MBMusicManager.Current;
```

## 参见

- [本区域目录](../)