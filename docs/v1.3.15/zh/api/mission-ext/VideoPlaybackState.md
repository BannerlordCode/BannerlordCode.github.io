<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VideoPlaybackState`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VideoPlaybackState

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`VideoPlaybackState` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `VideoPath` | `public string VideoPath { get; }` |
| `AudioPath` | `public string AudioPath { get; }` |
| `FrameRate` | `public float FrameRate { get; }` |
| `SubtitleFileBasePath` | `public string SubtitleFileBasePath { get; }` |
| `CanUserSkip` | `public bool CanUserSkip { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)