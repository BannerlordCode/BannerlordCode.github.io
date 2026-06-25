---
title: "NativeOptionsType"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeOptionsType`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeOptionsType

**命名空间:** TaleWorlds.Engine.Options
**模块:** TaleWorlds.Engine
**类型:** `public enum NativeOptionsType`
**领域:** engine

## 概述

`NativeOptionsType` 位于 `TaleWorlds.Engine.Options`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine.Options` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `None` |
| `1` |
| `MasterVolume` |
| `SoundVolume` |
| `MusicVolume` |
| `VoiceChatVolume` |
| `VoiceOverVolume` |
| `SoundDevice` |
| `MaxSimultaneousSoundEventCount` |
| `SoundPreset` |
| `KeepSoundInBackground` |
| `SoundOcclusion` |
| `MouseSensitivity` |
| `InvertMouseYAxis` |
| `MouseYMovementScale` |
| `TrailAmount` |
| `EnableVibration` |
| `EnableGyroAssistedAim` |
| `GyroAimSensitivity` |
| `EnableTouchpadMouse` |
| `EnableAlternateAiming` |
| `DisplayMode` |
| `SelectedMonitor` |
| `SelectedAdapter` |
| `ScreenResolution` |
| `RefreshRate` |
| `ResolutionScale` |
| `FrameLimiter` |
| `VSync` |
| `Brightness` |

## 使用示例

```csharp
NativeOptionsType example = NativeOptionsType.None;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
