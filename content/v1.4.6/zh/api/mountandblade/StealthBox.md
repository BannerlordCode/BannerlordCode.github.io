---
title: "StealthBox"
description: "StealthBox：TaleWorlds.MountAndBlade 的 public 类，继承 ScriptComponentBehavior；公开成员 7 个（方法 4、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/Objects/StealthBox.cs。"
---
# StealthBox

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StealthBox : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/StealthBox.cs`

## 概述

StealthBox 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/StealthBox.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 StealthBox → ScriptComponentBehavior。public/protected 成员共 7 个：4 方法、1 属性、2 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StealthBox 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Objects），继承链 StealthBox → ScriptComponentBehavior。成员构成以方法为主（方法 4/7，属性 1/7），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/StealthBox.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<StealthBox>OnBoxInitialized;` | 事件 |
| `Action` | `public static event Action<StealthBox>OnBoxRemoved;` | 事件 |
| `CoversStandingAgents` | `public bool CoversStandingAgents` | 属性 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `IsPointInside` | `public bool IsPointInside(Vec3 point)` | 方法 |
| `IsAgentInside` | `public bool IsAgentInside(Agent agent)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimalSpawnSettings](../AnimalSpawnSettings)
- [同命名空间 AreaMarker](../AreaMarker)
- [同命名空间 FightAreaMarker](../FightAreaMarker)
- [同命名空间 FlagCapturePoint](../FlagCapturePoint)
