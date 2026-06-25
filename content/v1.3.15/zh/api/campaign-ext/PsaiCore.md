---
title: PsaiCore
description: PsaiCore - 动态自适应音乐引擎核心
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PsaiCore`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiCore
**命名空间:** psai.net
**模块:** psai.net
**类型:** class

## 概述
`PsaiCore

` ?PSAI（Procedural Soundtrack Adaptive Intelligence）动态音乐引擎的核心单例类。它管理游戏音乐的主题（Theme）、强度（Intensity）、过渡和淡入淡出，根据游戏情境（战斗、探索、休息等）动态切换音乐。引擎通过加载项目文件（`.psai

` XML）定义音乐片段和主题关系，运行时根据触发的主?ID 和强度值自动选择并播放合适的片段?
核心概念?*Theme** 是一个音乐主题（?战斗"?探索"），每个主题有多?Segment（片段）?*Intensity** ?0~1 的强度值，决定音乐紧张程度。引擎自动在主题间过渡，支持保持当前强度（`HoldCurrentIntensity

`）、回到基础情绪（`ReturnToLastBasicMood

`）、休息（

`GoToRest

`）等操作?
## 心智模型
?

`PsaiCore

` 看作"智能音乐播放?。：游戏调用 

`TriggerMusicTheme(themeId, intensity)

` 触发主题，引擎自动选择匹配强度的片段播放，并在主题间平滑过渡?

`Update()

` 每帧调用以驱动引擎逻辑。`StopMusic

` 停止播放，`GoToRest

` 让音乐进入静默休息期。音量通过 

`GetVolume

`/

`SetVolume

` 控制?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Instance

` \| 

`static PsaiCore

` \| 单例实例 \|

## 主要方法
### IsInstanceInitialized
`

`

`csharp
public static bool IsInstanceInitialized()
`

`

`
检查单例实例是否已初始化?
### LoadSoundtrackFromProjectFile
`

`

`csharp
public PsaiResult LoadSoundtrackFromProjectFile(List&lt;string&gt; pathToProjectFiles)
`

`

`
?PSAI 项目文件（`.psai

` XML）加载音乐轨道定义。返?

`PsaiResult

` 表示加载结果?
### TriggerMusicTheme
`

`

`csharp
public PsaiResult TriggerMusicTheme(int themeId, float intensity)
public PsaiResult TriggerMusicTheme(int themeId, float intensity, int musicDurationInSeconds)
`

`

`
触发指定主题 ID 的音乐播放，设置初始强度。第二个重载可指定音乐持续时间（秒）?
### AddToCurrentIntensity
`

`

`csharp
public PsaiResult AddToCurrentIntensity(float deltaIntensity)
`

`

`
在当前强度基础上增减强度值（delta 可正可负）?
### StopMusic
`

`

`csharp
public PsaiResult StopMusic(bool immediately)
public PsaiResult StopMusic(bool immediately, float fadeOutSeconds)
`

`

`
停止音乐播放。`immediately

` ?true 时立即停止，否则平滑淡出。第二个重载可指定淡出时长?
### ReturnToLastBasicMood
`

`

`csharp
public PsaiResult ReturnToLastBasicMood(bool immediately)
`

`

`
返回到上一个基础情绪主题。用于从战斗等高强度主题回到探索等基础情绪?
### GoToRest
`

`

`csharp
public PsaiResult GoToRest(bool immediately, float fadeOutSeconds)
public PsaiResult GoToRest(bool immediately, float fadeOutSeconds, int restTimeMin, int restTimeMax)
`

`

`
让音乐进入休息状态（静默）。第二个重载可指定休息时间范围（秒）?
### HoldCurrentIntensity
`

`

`csharp
public PsaiResult HoldCurrentIntensity(bool hold)
`

`

`
锁定/解锁当前强度。锁定后强度不再自动衰减?
### Update
`

`

`csharp
public PsaiResult Update()
`

`

`
每帧调用，驱动引擎逻辑（片段选择、过渡、淡入淡出等）?
### GetVolume / SetVolume
`

`

`csharp
public float GetVolume()
public void SetVolume(float volume)
`

`

`
获取/设置音乐音量?~1）?
### SetPaused
`

`

`csharp
public void SetPaused(bool setPaused)
`

`

`
暂停/恢复音乐播放?
### GetCurrentIntensity
`

`

`csharp
public float GetCurrentIntensity()
`

`

`
返回当前音乐强度值（0~1）?
### GetPsaiInfo
`

`

`csharp
public PsaiInfo GetPsaiInfo()
`

`

`
返回引擎当前状态信息（

`PsaiInfo

` 对象），包含当前主题、强度、播放状态等?
### SetMaximumLatencyNeededByPlatformToBufferSounddata
`

`

`csharp
public PsaiResult SetMaximumLatencyNeededByPlatformToBufferSounddata(int latencyInMilliseconds)
`

`

`
设置平台缓冲音频数据所需的最大延迟（毫秒）?
### SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata
`

`

`csharp
public PsaiResult SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata(int latencyInMilliseconds)
`

`

`
设置平台播放缓冲音频数据所需的最大延迟（毫秒）?
### GetVersion
`

`

`csharp
public string GetVersion()
`

`

`
返回 PSAI 引擎版本字符串?
## 使用示例
### 示例: 触发战斗音乐
**场景**: 进入战斗时切换音?

`

`

`csharp
if (PsaiCore.IsInstanceInitialized())
{
    PsaiCore.Instance.TriggerMusicTheme(themeId: 3, intensity: 0.8f);
}
// 战斗结束后回到探索音?PsaiCore.Instance.ReturnToLastBasicMood(immediately: false);
`

`

`
**要点**: 调用前检?

`IsInstanceInitialized()

` 避免空引用。强?0.8 表示较高紧张度?
### 示例: 逐渐增加紧张?**场景**: 战斗中随时间提升音乐强度
`

`

`csharp
PsaiCore.Instance.AddToCurrentIntensity(0.1f); // 每次增加 0.1
`

`

`
**要点**: 

`AddToCurrentIntensity

` 在当前强度基础上增减，不会超过 1.0?
## 参见
- [完整类目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
