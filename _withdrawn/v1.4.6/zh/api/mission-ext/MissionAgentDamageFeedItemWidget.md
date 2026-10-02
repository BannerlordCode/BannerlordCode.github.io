---
title: "MissionAgentDamageFeedItemWidget"
description: "MissionAgentDamageFeedItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed 的 public 类，继承 Widget；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentDamageFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MissionAgentDamageFeedItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionAgentDamageFeedItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MissionAgentDamageFeedItemWidget → Widget → PropertyOwnerObject。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentDamageFeedItemWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed`，继承链 MissionAgentDamageFeedItemWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FadeInTime` | `public float FadeInTime` | 属性 |
| `StayTime` | `public float StayTime` | 属性 |
| `FadeOutTime` | `public float FadeOutTime` | 属性 |
| `TimeSinceCreation` | `public float TimeSinceCreation` | 属性 |
| `MissionAgentDamageFeedItemWidget` | `public MissionAgentDamageFeedItemWidget(UIContext context) : base(context)` | 构造函数 |
| `ShowFeed` | `public void ShowFeed()` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SetSpeedModifier` | `public void SetSpeedModifier(float newSpeed)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 MissionAgentDamageFeedWidget](../MissionAgentDamageFeedWidget/)
