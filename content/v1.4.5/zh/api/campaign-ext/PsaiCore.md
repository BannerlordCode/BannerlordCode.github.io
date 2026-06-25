---
title: "PsaiCore"
description: "PsaiCore 的自动生成类参考。"
---
# PsaiCore

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class PsaiCore`
**Base:** 无
**File:** `bin/TaleWorlds.PSAI/psai.net/PsaiCore.cs`

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

**用途 / Purpose:** 判断当前对象是否处于 「instance initialized」 状态或条件。

```csharp
// 静态调用，不需要实例
PsaiCore.IsInstanceInitialized();
```

### SetMaximumLatencyNeededByPlatformToBufferSounddata
`public PsaiResult SetMaximumLatencyNeededByPlatformToBufferSounddata(int latencyInMilliseconds)`

**用途 / Purpose:** 为 「maximum latency needed by platform to buffer sounddata」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.SetMaximumLatencyNeededByPlatformToBufferSounddata(0);
```

### SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata
`public PsaiResult SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata(int latencyInMilliseconds)`

**用途 / Purpose:** 为 「maximum latency needed by platform to play back buffered sounddata」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata(0);
```

### LoadSoundtrackFromProjectFile
`public PsaiResult LoadSoundtrackFromProjectFile(List<string> pathToProjectFiles)`

**用途 / Purpose:** 从持久化存储或流中读取 「soundtrack from project file」。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.LoadSoundtrackFromProjectFile(pathToProjectFiles);
```

### TriggerMusicTheme
`public PsaiResult TriggerMusicTheme(int themeId, float intensity)`

**用途 / Purpose:** 触发「music theme」对应的逻辑或事件。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.TriggerMusicTheme(0, 0);
```

### TriggerMusicTheme
`public PsaiResult TriggerMusicTheme(int themeId, float intensity, int musicDurationInSeconds)`

**用途 / Purpose:** 触发「music theme」对应的逻辑或事件。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.TriggerMusicTheme(0, 0, 0);
```

### AddToCurrentIntensity
`public PsaiResult AddToCurrentIntensity(float deltaIntensity)`

**用途 / Purpose:** 将 「to current intensity」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.AddToCurrentIntensity(0);
```

### StopMusic
`public PsaiResult StopMusic(bool immediately)`

**用途 / Purpose:** 停止「music」流程或状态机。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.StopMusic(false);
```

### StopMusic
`public PsaiResult StopMusic(bool immediately, float fadeOutSeconds)`

**用途 / Purpose:** 停止「music」流程或状态机。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.StopMusic(false, 0);
```

### ReturnToLastBasicMood
`public PsaiResult ReturnToLastBasicMood(bool immediately)`

**用途 / Purpose:** 处理与 「return to last basic mood」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.ReturnToLastBasicMood(false);
```

### GoToRest
`public PsaiResult GoToRest(bool immediately, float fadeOutSeconds)`

**用途 / Purpose:** 处理与 「go to rest」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GoToRest(false, 0);
```

### GoToRest
`public PsaiResult GoToRest(bool immediately, float fadeOutSeconds, int restTimeMin, int restTimeMax)`

**用途 / Purpose:** 处理与 「go to rest」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GoToRest(false, 0, 0, 0);
```

### HoldCurrentIntensity
`public PsaiResult HoldCurrentIntensity(bool hold)`

**用途 / Purpose:** 处理与 「hold current intensity」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.HoldCurrentIntensity(false);
```

### GetVersion
`public string GetVersion()`

**用途 / Purpose:** 读取并返回当前对象中 「version」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetVersion();
```

### Update
`public PsaiResult Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.Update();
```

### GetVolume
`public float GetVolume()`

**用途 / Purpose:** 读取并返回当前对象中 「volume」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetVolume();
```

### SetVolume
`public void SetVolume(float volume)`

**用途 / Purpose:** 为 「volume」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
psaiCore.SetVolume(0);
```

### SetPaused
`public void SetPaused(bool setPaused)`

**用途 / Purpose:** 为 「paused」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
psaiCore.SetPaused(false);
```

### GetCurrentIntensity
`public float GetCurrentIntensity()`

**用途 / Purpose:** 读取并返回当前对象中 「current intensity」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetCurrentIntensity();
```

### GetPsaiInfo
`public PsaiInfo GetPsaiInfo()`

**用途 / Purpose:** 读取并返回当前对象中 「psai info」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetPsaiInfo();
```

### GetSoundtrackInfo
`public SoundtrackInfo GetSoundtrackInfo()`

**用途 / Purpose:** 读取并返回当前对象中 「soundtrack info」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetSoundtrackInfo();
```

### GetThemeInfo
`public ThemeInfo GetThemeInfo(int themeId)`

**用途 / Purpose:** 读取并返回当前对象中 「theme info」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetThemeInfo(0);
```

### GetSegmentInfo
`public SegmentInfo GetSegmentInfo(int segmentId)`

**用途 / Purpose:** 读取并返回当前对象中 「segment info」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetSegmentInfo(0);
```

### GetCurrentSegmentId
`public int GetCurrentSegmentId()`

**用途 / Purpose:** 读取并返回当前对象中 「current segment id」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetCurrentSegmentId();
```

### GetCurrentThemeId
`public int GetCurrentThemeId()`

**用途 / Purpose:** 读取并返回当前对象中 「current theme id」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetCurrentThemeId();
```

### GetRemainingMillisecondsOfCurrentSegmentPlayback
`public int GetRemainingMillisecondsOfCurrentSegmentPlayback()`

**用途 / Purpose:** 读取并返回当前对象中 「remaining milliseconds of current segment playback」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetRemainingMillisecondsOfCurrentSegmentPlayback();
```

### GetRemainingMillisecondsUntilNextSegmentStart
`public int GetRemainingMillisecondsUntilNextSegmentStart()`

**用途 / Purpose:** 读取并返回当前对象中 「remaining milliseconds until next segment start」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.GetRemainingMillisecondsUntilNextSegmentStart();
```

### MenuModeEnter
`public PsaiResult MenuModeEnter(int menuThemeId, float menuThemeIntensity)`

**用途 / Purpose:** 处理与 「menu mode enter」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.MenuModeEnter(0, 0);
```

### MenuModeLeave
`public PsaiResult MenuModeLeave()`

**用途 / Purpose:** 处理与 「menu mode leave」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.MenuModeLeave();
```

### MenuModeIsActive
`public bool MenuModeIsActive()`

**用途 / Purpose:** 处理与 「menu mode is active」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.MenuModeIsActive();
```

### CutSceneIsActive
`public bool CutSceneIsActive()`

**用途 / Purpose:** 处理与 「cut scene is active」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.CutSceneIsActive();
```

### CutSceneEnter
`public PsaiResult CutSceneEnter(int themeId, float intensity)`

**用途 / Purpose:** 处理与 「cut scene enter」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.CutSceneEnter(0, 0);
```

### CutSceneLeave
`public PsaiResult CutSceneLeave(bool immediately, bool reset)`

**用途 / Purpose:** 处理与 「cut scene leave」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.CutSceneLeave(false, false);
```

### PlaySegment
`public PsaiResult PlaySegment(int segmentId)`

**用途 / Purpose:** 处理与 「play segment」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.PlaySegment(0);
```

### CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible
`public bool CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(int sourceSegmentId, int targetThemeId)`

**用途 / Purpose:** 检查「if at least one direct transition or layering is possible」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
var result = psaiCore.CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(0, 0);
```

### SetLastBasicMood
`public void SetLastBasicMood(int themeId)`

**用途 / Purpose:** 为 「last basic mood」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
psaiCore.SetLastBasicMood(0);
```

### Release
`public void Release()`

**用途 / Purpose:** 处理与 「release」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiCore 实例
PsaiCore psaiCore = ...;
psaiCore.Release();
```

## 使用示例

```csharp
PsaiCore.IsInstanceInitialized();
```

## 参见

- [本区域目录](../)