---
title: "MusicianGroup"
description: "MusicianGroup：SandBox.Objects.Usables 的 public 类，继承 UsableMachine；公开成员 9 个（方法 7、属性 0、字段 2）。canonical 桶 sandbox。源文件 SandBox/Objects/Usables/MusicianGroup.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MusicianGroup

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class MusicianGroup : UsableMachine`
**File:** `SandBox/Objects/Usables/MusicianGroup.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MusicianGroup 位于 SandBox 模块，源文件 SandBox/Objects/Usables/MusicianGroup.cs。它是一个 public 类，实现/继承 UsableMachine，继承链为 MusicianGroup → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 9 个：7 方法、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MusicianGroup 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects.Usables`，继承链 MusicianGroup → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 7/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/Usables/MusicianGroup.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `SetPlayList` | `public void SetPlayList(List<SettlementMusicData>playList)` | 方法 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `GapBetweenTracks` | `public const int GapBetweenTracks` | 字段 |
| `DisableAmbientMusic` | `public const bool DisableAmbientMusic` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 UsableMachine](../../mission-ext/UsableMachine/)
- [同命名空间 Chair](../Chair/)
- [同命名空间 CheckpointUsePoint](../CheckpointUsePoint/)
- [同命名空间 DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [同命名空间 Passage](../Passage/)
