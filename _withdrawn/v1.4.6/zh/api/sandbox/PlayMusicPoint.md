---
title: "PlayMusicPoint"
description: "PlayMusicPoint：SandBox.Objects.AnimationPoints 的 public 类，继承 AnimationPoint；公开成员 7 个（方法 7、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/Objects/AnimationPoints/PlayMusicPoint.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayMusicPoint

**Namespace:** `SandBox.Objects.AnimationPoints`
**Module:** `SandBox`
**Type:** `public class PlayMusicPoint : AnimationPoint`
**File:** `SandBox/Objects/AnimationPoints/PlayMusicPoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

PlayMusicPoint 位于 SandBox 模块，源文件 SandBox/Objects/AnimationPoints/PlayMusicPoint.cs。它是一个 public 类，实现/继承 AnimationPoint，继承链为 PlayMusicPoint → AnimationPoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayMusicPoint 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects.AnimationPoints`，继承链 PlayMusicPoint → AnimationPoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/AnimationPoints/PlayMusicPoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `StartLoop` | `public void StartLoop(SoundEvent trackEvent)` | 方法 |
| `EndLoop` | `public void EndLoop()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 方法 |
| `ChangeInstrument` | `public void ChangeInstrument(Tuple<InstrumentData, float>instrument)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AnimationPoint](../AnimationPoint/)
- [同命名空间 AnimationPoint](../AnimationPoint/)
- [同命名空间 ChairUsePoint](../ChairUsePoint/)
- [同命名空间 DynamicObjectAnimationPoint](../DynamicObjectAnimationPoint/)
