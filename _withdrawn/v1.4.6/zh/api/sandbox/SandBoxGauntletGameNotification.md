---
title: "SandBoxGauntletGameNotification"
description: "SandBoxGauntletGameNotification：SandBox.GauntletUI 的 public 类，继承 GauntletGameNotification；公开成员 7 个（方法 7、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/SandBoxGauntletGameNotification.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxGauntletGameNotification

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class SandBoxGauntletGameNotification : GauntletGameNotification`
**File:** `SandBox.GauntletUI/SandBoxGauntletGameNotification.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxGauntletGameNotification 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/SandBoxGauntletGameNotification.cs。它是一个 public 类，实现/继承 GauntletGameNotification，继承链为 SandBoxGauntletGameNotification → GauntletGameNotification → GlobalLayer → IComparable。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxGauntletGameNotification 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI`，继承链 SandBoxGauntletGameNotification → GauntletGameNotification → GlobalLayer → IComparable。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。继承链上的 IComparable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/SandBoxGauntletGameNotification.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public new static void Initialize()` | 方法 |
| `OnReceiveNewNotification` | `protected override void OnReceiveNewNotification(GameNotificationItemVM notification)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `UnregisterEvents` | `public override void UnregisterEvents()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `GetShouldBeSuspended` | `protected override bool GetShouldBeSuspended()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GauntletGameNotification](../../mission-ext/GauntletGameNotification/)
- [同命名空间 GauntletBarberScreen](../GauntletBarberScreen/)
- [同命名空间 GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [同命名空间 GauntletClanScreen](../GauntletClanScreen/)
- [同命名空间 GauntletCraftingScreen](../GauntletCraftingScreen/)
