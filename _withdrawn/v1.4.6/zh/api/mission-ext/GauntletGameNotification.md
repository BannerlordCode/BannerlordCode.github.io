---
title: "GauntletGameNotification"
description: "GauntletGameNotification：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 GlobalLayer；公开成员 10 个（方法 7、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletGameNotification

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletGameNotification : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GauntletGameNotification 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs。它是一个 public 类，实现/继承 GlobalLayer，继承链为 GauntletGameNotification → GlobalLayer → IComparable。public/protected 成员共 10 个：7 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletGameNotification 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI`，继承链 GauntletGameNotification → GlobalLayer → IComparable。成员构成以方法为主（方法 7/10，属性 2/10），对外主要以操作入口暴露。继承链上的 IComparable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `protected static GauntletGameNotification Current` | 属性 |
| `MovieName` | `protected virtual string MovieName` | 属性 |
| `GauntletGameNotification` | `protected GauntletGameNotification()` | 构造函数 |
| `OnReceiveNewNotification` | `protected virtual void OnReceiveNewNotification(GameNotificationItemVM notification)` | 方法 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `OnFinalize` | `public virtual void OnFinalize()` | 方法 |
| `RegisterEvents` | `public virtual void RegisterEvents()` | 方法 |
| `UnregisterEvents` | `public virtual void UnregisterEvents()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `GetShouldBeSuspended` | `protected virtual bool GetShouldBeSuspended()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GlobalLayer](../../gui/GlobalLayer/)
- [同命名空间 ChatLogMessageManager](../ChatLogMessageManager/)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel/)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView/)
