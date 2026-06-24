<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBMusicManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBMusicManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMusicManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMusicManager.cs`

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

### GetCampaignTheme
`public MusicTheme GetCampaignTheme(BasicCultureObject culture, bool isDark)`

**用途 / Purpose:** 获取 `campaign theme` 的当前值。

### GetCampaignDramaticThemeWithCulture
`public MusicTheme GetCampaignDramaticThemeWithCulture(BasicCultureObject culture)`

**用途 / Purpose:** 获取 `campaign dramatic theme with culture` 的当前值。

### GetSeaCampignMusic
`public MusicTheme GetSeaCampignMusic(BasicCultureObject culture)`

**用途 / Purpose:** 获取 `sea campign music` 的当前值。

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**用途 / Purpose:** 获取 `battle theme` 的当前值。

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**用途 / Purpose:** 获取 `siege theme` 的当前值。

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictorious)`

**用途 / Purpose:** 获取 `battle end theme` 的当前值。

### IsCreationCompleted
`public static bool IsCreationCompleted()`

**用途 / Purpose:** 处理 `is creation completed` 相关逻辑。

### Create
`public static void Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnCampaignMusicHandlerInit
`public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)`

**用途 / Purpose:** 当 `campaign music handler init` 事件触发时调用此方法。

### OnCampaignMusicHandlerFinalize
`public void OnCampaignMusicHandlerFinalize()`

**用途 / Purpose:** 当 `campaign music handler finalize` 事件触发时调用此方法。

### OnBattleMusicHandlerInit
`public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)`

**用途 / Purpose:** 当 `battle music handler init` 事件触发时调用此方法。

### OnBattleMusicHandlerFinalize
`public void OnBattleMusicHandlerFinalize()`

**用途 / Purpose:** 当 `battle music handler finalize` 事件触发时调用此方法。

### OnSilencedMusicHandlerInit
`public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)`

**用途 / Purpose:** 当 `silenced music handler init` 事件触发时调用此方法。

### OnSilencedMusicHandlerFinalize
`public void OnSilencedMusicHandlerFinalize()`

**用途 / Purpose:** 当 `silenced music handler finalize` 事件触发时调用此方法。

### ActivateBattleMode
`public void ActivateBattleMode()`

**用途 / Purpose:** 处理 `activate battle mode` 相关逻辑。

### DeactivateBattleMode
`public void DeactivateBattleMode()`

**用途 / Purpose:** 处理 `deactivate battle mode` 相关逻辑。

### ActivateCampaignMode
`public void ActivateCampaignMode()`

**用途 / Purpose:** 处理 `activate campaign mode` 相关逻辑。

### DeactivateCampaignMode
`public void DeactivateCampaignMode()`

**用途 / Purpose:** 处理 `deactivate campaign mode` 相关逻辑。

### DeactivateCurrentMode
`public void DeactivateCurrentMode()`

**用途 / Purpose:** 处理 `deactivate current mode` 相关逻辑。

### UnpauseMusicManagerSystem
`public void UnpauseMusicManagerSystem()`

**用途 / Purpose:** 处理 `unpause music manager system` 相关逻辑。

### PauseMusicManagerSystem
`public void PauseMusicManagerSystem()`

**用途 / Purpose:** 处理 `pause music manager system` 相关逻辑。

### StartTheme
`public void StartTheme(MusicTheme theme, float startIntensity, bool queueEndSegment = false)`

**用途 / Purpose:** 处理 `start theme` 相关逻辑。

### StartThemeWithConstantIntensity
`public void StartThemeWithConstantIntensity(MusicTheme theme, bool queueEndSegment = false)`

**用途 / Purpose:** 处理 `start theme with constant intensity` 相关逻辑。

### ForceStopThemeWithFadeOut
`public void ForceStopThemeWithFadeOut()`

**用途 / Purpose:** 处理 `force stop theme with fade out` 相关逻辑。

### ChangeCurrentThemeIntensity
`public void ChangeCurrentThemeIntensity(float deltaIntensity)`

**用途 / Purpose:** 处理 `change current theme intensity` 相关逻辑。

### Update
`public void Update(float dt)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**用途 / Purpose:** 获取 `siege theme` 的当前值。

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**用途 / Purpose:** 获取 `battle theme` 的当前值。

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictory)`

**用途 / Purpose:** 获取 `battle end theme` 的当前值。

### GetBattleTurnsOneSideTheme
`public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture, bool isPositive, bool isPaganBattle)`

**用途 / Purpose:** 获取 `battle turns one side theme` 的当前值。

### GetCampaignMusicTheme
`public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture, bool isDark, bool isWarMode, bool isAtSea)`

**用途 / Purpose:** 获取 `campaign music theme` 的当前值。

## 使用示例

```csharp
var manager = MBMusicManager.Current;
```

## 参见

- [完整类目录](../catalog)