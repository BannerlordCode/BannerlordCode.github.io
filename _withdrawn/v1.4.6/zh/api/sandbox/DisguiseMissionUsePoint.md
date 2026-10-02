---
title: "DisguiseMissionUsePoint"
description: "DisguiseMissionUsePoint：SandBox.Objects.Usables 的 public 类，继承 UsableMissionObject；公开成员 8 个（方法 6、属性 0、字段 1）。canonical 桶 sandbox。源文件 SandBox/Objects/Usables/DisguiseMissionUsePoint.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DisguiseMissionUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class DisguiseMissionUsePoint : UsableMissionObject`
**File:** `SandBox/Objects/Usables/DisguiseMissionUsePoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

DisguiseMissionUsePoint 位于 SandBox 模块，源文件 SandBox/Objects/Usables/DisguiseMissionUsePoint.cs。它是一个 public 类，实现/继承 UsableMissionObject，继承链为 DisguiseMissionUsePoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 8 个：6 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DisguiseMissionUsePoint 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects.Usables`，继承链 DisguiseMissionUsePoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 6/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/Usables/DisguiseMissionUsePoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisguiseMissionUsePoint` | `public DisguiseMissionUsePoint() : base(false)` | 构造函数 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 方法 |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | 方法 |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | 方法 |
| `GetUserFrameForAgent` | `public override WorldFrame GetUserFrameForAgent(Agent agent)` | 方法 |
| `InteractionPointDistance` | `public const float InteractionPointDistance` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 UsableMissionObject](../../mission-ext/UsableMissionObject/)
- [同命名空间 Chair](../Chair/)
- [同命名空间 CheckpointUsePoint](../CheckpointUsePoint/)
- [同命名空间 MusicianGroup](../MusicianGroup/)
- [同命名空间 Passage](../Passage/)
