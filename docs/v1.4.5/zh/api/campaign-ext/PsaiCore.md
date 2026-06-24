<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PsaiCore`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PsaiCore

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class PsaiCore`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.net/PsaiCore.cs`

## 概述

`PsaiCore` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static PsaiCore Instance { get; set; }` |

## 主要方法

### IsInstanceInitialized
`public static bool IsInstanceInitialized()`

**用途 / Purpose:** 处理 `is instance initialized` 相关逻辑。

### SetMaximumLatencyNeededByPlatformToBufferSounddata
`public PsaiResult SetMaximumLatencyNeededByPlatformToBufferSounddata(int latencyInMilliseconds)`

**用途 / Purpose:** 设置 `maximum latency needed by platform to buffer sounddata` 的值或状态。

### SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata
`public PsaiResult SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata(int latencyInMilliseconds)`

**用途 / Purpose:** 设置 `maximum latency needed by platform to play back buffered sounddata` 的值或状态。

### LoadSoundtrackFromProjectFile
`public PsaiResult LoadSoundtrackFromProjectFile(List<string> pathToProjectFiles)`

**用途 / Purpose:** 加载 `soundtrack from project file` 数据。

### TriggerMusicTheme
`public PsaiResult TriggerMusicTheme(int themeId, float intensity)`

**用途 / Purpose:** 处理 `trigger music theme` 相关逻辑。

### TriggerMusicTheme
`public PsaiResult TriggerMusicTheme(int themeId, float intensity, int musicDurationInSeconds)`

**用途 / Purpose:** 处理 `trigger music theme` 相关逻辑。

### AddToCurrentIntensity
`public PsaiResult AddToCurrentIntensity(float deltaIntensity)`

**用途 / Purpose:** 向当前集合/状态中添加 `to current intensity`。

### StopMusic
`public PsaiResult StopMusic(bool immediately)`

**用途 / Purpose:** 处理 `stop music` 相关逻辑。

### StopMusic
`public PsaiResult StopMusic(bool immediately, float fadeOutSeconds)`

**用途 / Purpose:** 处理 `stop music` 相关逻辑。

### ReturnToLastBasicMood
`public PsaiResult ReturnToLastBasicMood(bool immediately)`

**用途 / Purpose:** 处理 `return to last basic mood` 相关逻辑。

### GoToRest
`public PsaiResult GoToRest(bool immediately, float fadeOutSeconds)`

**用途 / Purpose:** 处理 `go to rest` 相关逻辑。

### GoToRest
`public PsaiResult GoToRest(bool immediately, float fadeOutSeconds, int restTimeMin, int restTimeMax)`

**用途 / Purpose:** 处理 `go to rest` 相关逻辑。

### HoldCurrentIntensity
`public PsaiResult HoldCurrentIntensity(bool hold)`

**用途 / Purpose:** 处理 `hold current intensity` 相关逻辑。

### GetVersion
`public string GetVersion()`

**用途 / Purpose:** 获取 `version` 的当前值。

### Update
`public PsaiResult Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### GetVolume
`public float GetVolume()`

**用途 / Purpose:** 获取 `volume` 的当前值。

### SetVolume
`public void SetVolume(float volume)`

**用途 / Purpose:** 设置 `volume` 的值或状态。

### SetPaused
`public void SetPaused(bool setPaused)`

**用途 / Purpose:** 设置 `paused` 的值或状态。

### GetCurrentIntensity
`public float GetCurrentIntensity()`

**用途 / Purpose:** 获取 `current intensity` 的当前值。

### GetPsaiInfo
`public PsaiInfo GetPsaiInfo()`

**用途 / Purpose:** 获取 `psai info` 的当前值。

### GetSoundtrackInfo
`public SoundtrackInfo GetSoundtrackInfo()`

**用途 / Purpose:** 获取 `soundtrack info` 的当前值。

### GetThemeInfo
`public ThemeInfo GetThemeInfo(int themeId)`

**用途 / Purpose:** 获取 `theme info` 的当前值。

### GetSegmentInfo
`public SegmentInfo GetSegmentInfo(int segmentId)`

**用途 / Purpose:** 获取 `segment info` 的当前值。

### GetCurrentSegmentId
`public int GetCurrentSegmentId()`

**用途 / Purpose:** 获取 `current segment id` 的当前值。

### GetCurrentThemeId
`public int GetCurrentThemeId()`

**用途 / Purpose:** 获取 `current theme id` 的当前值。

### GetRemainingMillisecondsOfCurrentSegmentPlayback
`public int GetRemainingMillisecondsOfCurrentSegmentPlayback()`

**用途 / Purpose:** 获取 `remaining milliseconds of current segment playback` 的当前值。

### GetRemainingMillisecondsUntilNextSegmentStart
`public int GetRemainingMillisecondsUntilNextSegmentStart()`

**用途 / Purpose:** 获取 `remaining milliseconds until next segment start` 的当前值。

### MenuModeEnter
`public PsaiResult MenuModeEnter(int menuThemeId, float menuThemeIntensity)`

**用途 / Purpose:** 处理 `menu mode enter` 相关逻辑。

### MenuModeLeave
`public PsaiResult MenuModeLeave()`

**用途 / Purpose:** 处理 `menu mode leave` 相关逻辑。

### MenuModeIsActive
`public bool MenuModeIsActive()`

**用途 / Purpose:** 处理 `menu mode is active` 相关逻辑。

### CutSceneIsActive
`public bool CutSceneIsActive()`

**用途 / Purpose:** 处理 `cut scene is active` 相关逻辑。

### CutSceneEnter
`public PsaiResult CutSceneEnter(int themeId, float intensity)`

**用途 / Purpose:** 处理 `cut scene enter` 相关逻辑。

### CutSceneLeave
`public PsaiResult CutSceneLeave(bool immediately, bool reset)`

**用途 / Purpose:** 处理 `cut scene leave` 相关逻辑。

### PlaySegment
`public PsaiResult PlaySegment(int segmentId)`

**用途 / Purpose:** 处理 `play segment` 相关逻辑。

### CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible
`public bool CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(int sourceSegmentId, int targetThemeId)`

**用途 / Purpose:** 处理 `check if at least one direct transition or layering is possible` 相关逻辑。

### SetLastBasicMood
`public void SetLastBasicMood(int themeId)`

**用途 / Purpose:** 设置 `last basic mood` 的值或状态。

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

## 使用示例

```csharp
PsaiCore.IsInstanceInitialized();
```

## 参见

- [完整类目录](../catalog)