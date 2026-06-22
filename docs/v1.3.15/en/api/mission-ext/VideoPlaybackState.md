<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VideoPlaybackState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VideoPlaybackState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `VideoPlaybackState` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `VideoPath` | `public string VideoPath { get; }` |
| `AudioPath` | `public string AudioPath { get; }` |
| `FrameRate` | `public float FrameRate { get; }` |
| `SubtitleFileBasePath` | `public string SubtitleFileBasePath { get; }` |
| `CanUserSkip` | `public bool CanUserSkip { get; }` |


## Key Methods

### SetStartingParameters

```csharp
public void SetStartingParameters(string videoPath, string audioPath, string subtitleFileBasePath, float frameRate = 30f, bool canUserSkip = true)
```

### SetOnVideoFinisedDelegate

```csharp
public void SetOnVideoFinisedDelegate(Action onVideoFinised)
```

### OnVideoStarted

```csharp
public void OnVideoStarted()
```

### OnVideoFinished

```csharp
public void OnVideoFinished()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)