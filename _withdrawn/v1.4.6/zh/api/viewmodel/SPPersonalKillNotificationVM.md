---
title: "SPPersonalKillNotificationVM"
description: "SPPersonalKillNotificationVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal 的 public 类，继承 ViewModel；公开成员 5 个（方法 3、属性 1、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPPersonalKillNotificationVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPPersonalKillNotificationVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

SPPersonalKillNotificationVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPPersonalKillNotificationVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPPersonalKillNotificationVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`，继承链 SPPersonalKillNotificationVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPPersonalKillNotificationVM` | `public SPPersonalKillNotificationVM()` | 构造函数 |
| `OnPersonalKill` | `public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)` | 方法 |
| `OnPersonalHit` | `public void OnPersonalHit(int damageAmount, bool isMountDamage, bool isFriendlyFire, string killedAgentName)` | 方法 |
| `OnPersonalMessage` | `public void OnPersonalMessage(string message)` | 方法 |
| `MBBindingList` | `public MBBindingList<SPPersonalKillNotificationItemVM>NotificationList` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 SPPersonalKillNotificationItemVM](../SPPersonalKillNotificationItemVM/)
