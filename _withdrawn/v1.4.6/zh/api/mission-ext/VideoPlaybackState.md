---
title: "VideoPlaybackState"
description: "VideoPlaybackState：TaleWorlds.MountAndBlade 的 public 类，继承 GameState；公开成员 9 个（方法 4、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/VideoPlaybackState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VideoPlaybackState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VideoPlaybackState : GameState`
**File:** `TaleWorlds.MountAndBlade/VideoPlaybackState.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

VideoPlaybackState 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/VideoPlaybackState.cs。它是一个 public 类，实现/继承 GameState，继承链为 VideoPlaybackState → GameState → MBObjectBase。public/protected 成员共 9 个：4 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VideoPlaybackState 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 VideoPlaybackState → GameState → MBObjectBase。成员构成以属性为主（属性 5/9，方法 4/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/VideoPlaybackState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VideoPath` | `public string VideoPath` | 属性 |
| `AudioPath` | `public string AudioPath` | 属性 |
| `FrameRate` | `public float FrameRate` | 属性 |
| `SubtitleFileBasePath` | `public string SubtitleFileBasePath` | 属性 |
| `CanUserSkip` | `public bool CanUserSkip` | 属性 |
| `SetStartingParameters` | `public void SetStartingParameters(string videoPath, string audioPath, string subtitleFileBasePath, float frameRate = 30f, bool canUserSkip = true)` | 方法 |
| `SetOnVideoFinisedDelegate` | `public void SetOnVideoFinisedDelegate(Action onVideoFinised)` | 方法 |
| `OnVideoStarted` | `public void OnVideoStarted()` | 方法 |
| `OnVideoFinished` | `public void OnVideoFinished()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameState](../../core-extra/GameState/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
