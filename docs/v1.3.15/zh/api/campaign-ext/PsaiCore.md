<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PsaiCore`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiCore

**命名空间:** psai.net
**模块:** psai.net
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PsaiCore` 是 `psai.net` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static PsaiCore Instance { get; set; }` |


## 主要方法

### IsInstanceInitialized

```csharp
public static bool IsInstanceInitialized()
```

### SetMaximumLatencyNeededByPlatformToBufferSounddata

```csharp
public PsaiResult SetMaximumLatencyNeededByPlatformToBufferSounddata(int latencyInMilliseconds)
```

### SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata

```csharp
public PsaiResult SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata(int latencyInMilliseconds)
```

### LoadSoundtrackFromProjectFile

```csharp
public PsaiResult LoadSoundtrackFromProjectFile(List<string> pathToProjectFiles)
```

### TriggerMusicTheme

```csharp
public PsaiResult TriggerMusicTheme(int themeId, float intensity)
```

### TriggerMusicTheme

```csharp
public PsaiResult TriggerMusicTheme(int themeId, float intensity, int musicDurationInSeconds)
```

### AddToCurrentIntensity

```csharp
public PsaiResult AddToCurrentIntensity(float deltaIntensity)
```

### StopMusic

```csharp
public PsaiResult StopMusic(bool immediately)
```

### StopMusic

```csharp
public PsaiResult StopMusic(bool immediately, float fadeOutSeconds)
```

### ReturnToLastBasicMood

```csharp
public PsaiResult ReturnToLastBasicMood(bool immediately)
```

### GoToRest

```csharp
public PsaiResult GoToRest(bool immediately, float fadeOutSeconds)
```

### GoToRest

```csharp
public PsaiResult GoToRest(bool immediately, float fadeOutSeconds, int restTimeMin, int restTimeMax)
```

### HoldCurrentIntensity

```csharp
public PsaiResult HoldCurrentIntensity(bool hold)
```

### GetVersion

```csharp
public string GetVersion()
```

### Update

```csharp
public PsaiResult Update()
```

### GetVolume

```csharp
public float GetVolume()
```

### SetVolume

```csharp
public void SetVolume(float volume)
```

### SetPaused

```csharp
public void SetPaused(bool setPaused)
```

### GetCurrentIntensity

```csharp
public float GetCurrentIntensity()
```

### GetPsaiInfo

```csharp
public PsaiInfo GetPsaiInfo()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)