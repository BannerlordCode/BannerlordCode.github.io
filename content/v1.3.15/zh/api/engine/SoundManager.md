---
title: "SoundManager"
description: "SoundManager 是声音系统的静态门面，封装监听者姿态、一次性音效事件、音库加载、全局参数与语音聊天，全部转发到原生 ISoundManager。"
---
# SoundManager

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**类型：** `public static class SoundManager`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.Engine/SoundManager.cs`

## 概述

`SoundManager` 是声音系统的静态门面，把听者姿态、一次性音效、持续音效事件、音库加载、全局参数（RTPC）、总线暂停以及语音聊天/联机语音等功能统一收口。每个方法体都只有一行 `EngineApplicationInterface.ISoundManager.Method(...)`，把调用转发到原生声音引擎（Wwise 封装）。mod 播放 3D 音效通常用 `StartOneShotEvent`，需要持续控制的循环音效用 `CreateEvent` 拿到 `SoundEvent` 自行管理，而 `SetListenerFrame` 必须随相机每帧更新，否则所有 3D 音效的定位都会失真。

## 心智模型

`SoundManager` 是 mod 面对声音系统的门面，全部调用经 `EngineApplicationInterface.ISoundManager` 转发到原生层；它分几类：听者姿态（`SetListenerFrame`/`GetListenerFrame`）应每帧跟随相机更新，否则 3D 音效定位错误；一次性事件（`StartOneShotEvent`）是「开火即忘」的 3D 音效，最常用；持续事件用 `CreateEvent` 取回 `SoundEvent` 后由调用方管理生命周期；`SetState`/`SetGlobalParameter` 是 Wwise 风格的全局状态与参数。那些 `XBOX`/`Voice` 开头的方法属于联机语音与主机平台，普通单机 mod 不应调用。`LoadEventFileAux` 只在首次加载音库时执行一次（内部有 `_loaded` 守卫）。它只是调度入口，不持有音效实例本身。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `SetListenerFrame(MatrixFrame)` / `GetListenerFrame()` | 设置/读取听者姿态，应每帧随相机更新以维持 3D 定位 |
| `StartOneShotEvent(eventFullName, position)` | 在指定世界坐标播放一次性音效事件，返回是否成功 |
| `CreateEvent(eventFullName, scene)` | 创建可持续控制的 `SoundEvent` 实例，由调用方管理 |
| `SetState(stateGroup, state)` | 设置 Wwise 风格的全局状态（如环境/天气） |
| `SetGlobalParameter(name, value)` | 设置全局 RTPC 参数，影响所有相关音效 |
| `LoadEventFileAux(soundBank, decompress)` | 加载音库，内部保证只执行一次 |
| `PauseBus` / `UnpauseBus` | 按总线名暂停/恢复一组音效 |

## 真实示例

下面在战斗命中时播放一次性 3D 音效，并切换战斗状态、推高全局强度参数。`agent.Position` 提供世界坐标，`event.combat.sword_hit` 是音库里配置的事件名：

```csharp
Vec3 impactPoint = agent.Position;
SoundManager.StartOneShotEvent("event.combat.sword_hit", impactPoint);
SoundManager.SetState("combat", "in_battle");
SoundManager.SetGlobalParameter("combat_intensity", 1.0f);
```

持续音效应改用 `CreateEvent` 并保存返回的 `SoundEvent`，在合适时机 `Stop` 与释放，避免音效泄漏。

## 风险与崩溃边界

- **听者姿态必须每帧更新。** 不调用 `SetListenerFrame` 时，所有 3D 音效都用过时/默认姿态定位，听感会整体错位。
- **`StartOneShotEvent` 的事件名须存在。** 传入音库里不存在的 `eventFullName` 会返回 `false` 且不发声，不会抛异常，需自行校验。
- **`CreateEvent` 返回的实例要管理。** 持续 `SoundEvent` 不自动释放，忘记 `Stop`/`Clear` 会泄漏音效通道。
- **`XBOX`/`Voice` 方法平台相关。** 非主机或不需要联机语音时调用它们无意义，且依赖未初始化的原生子系统。

## 跨版本提示

1.3.15 与 1.4.5 的 `SoundManager` 公开方法数量与签名完全一致（均约 39 个），`StartOneShotEvent`、`CreateEvent`、`SetListenerFrame`、`SetState`、`LoadEventFileAux` 等转发目标 `ISoundManager` 均未变。跨版本 mod 可稳定依赖上述音效播放入口。

## 依赖关系

- 上游（转发目标）：[EngineApplicationInterface](../EngineApplicationInterface/) 提供 `ISoundManager` 原生实现。
- 下游（协作对象）：[mission/Mission](../../mission/Mission/) 提供相机与场景以驱动听者姿态；[mission/Agent](../../mission/Agent/) 提供音效发生的世界坐标。
- 相关阅读：[native-interop 架构说明](../../../architecture/native-interop/) 解释 `ISoundManager` 桥接；[崩溃边界](../../../architecture/crash-boundaries/) 解释原生调用失败后果。
- 配对门面：[MBDebug](../MBDebug/) 同为经 `EngineApplicationInterface` 转发的静态门面。

- 父级：[engine API](../)
- 同级：[EngineApplicationInterface](../EngineApplicationInterface/) · [MBDebug](../MBDebug/)
