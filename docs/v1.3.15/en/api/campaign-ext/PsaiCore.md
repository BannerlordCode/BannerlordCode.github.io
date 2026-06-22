<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PsaiCore`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiCore

**Namespace:** psai.net
**Module:** psai.net
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PsaiCore` is a class in the `psai.net` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static PsaiCore Instance { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)