---
title: "GauntletChatLogView"
description: "GauntletChatLogView：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 GlobalLayer；公开成员 9 个（方法 7、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletChatLogView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletChatLogView : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GauntletChatLogView 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs。它是一个 public 类，实现/继承 GlobalLayer，继承链为 GauntletChatLogView → GlobalLayer → IComparable。public/protected 成员共 9 个：7 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletChatLogView 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI`，继承链 GauntletChatLogView → GlobalLayer → IComparable。成员构成以方法为主（方法 7/9，属性 1/9），对外主要以操作入口暴露。继承链上的 IComparable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GauntletChatLogView Current` | 属性 |
| `GauntletChatLogView` | `public GauntletChatLogView()` | 构造函数 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnLateTick` | `protected override void OnLateTick(float dt)` | 方法 |
| `SetCanFocusWhileInMission` | `public void SetCanFocusWhileInMission(bool canFocusInMission)` | 方法 |
| `OnSupportedFeaturesReceived` | `public void OnSupportedFeaturesReceived(SupportedFeatures supportedFeatures)` | 方法 |
| `SetEnabled` | `public void SetEnabled(bool isEnabled)` | 方法 |
| `LoadMovie` | `public void LoadMovie(bool forMultiplayer)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GlobalLayer](../../gui/GlobalLayer/)
- [同命名空间 ChatLogMessageManager](../ChatLogMessageManager/)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel/)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView/)
