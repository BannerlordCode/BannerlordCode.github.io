---
title: "SPPersonalKillNotificationItemVM"
description: "SPPersonalKillNotificationItemVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 1、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs。"
---
# SPPersonalKillNotificationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPPersonalKillNotificationItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs`

## 概述

SPPersonalKillNotificationItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPPersonalKillNotificationItemVM → ViewModel。public/protected 成员共 9 个：1 方法、5 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPPersonalKillNotificationItemVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal），继承链 SPPersonalKillNotificationItemVM → ViewModel。成员构成以属性为主（属性 5/9，方法 1/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPPersonalKillNotificationItemVM` | `public SPPersonalKillNotificationItemVM(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious, Action<SPPersonalKillNotificationItemVM>onRemoveItem)` | 构造函数 |
| `SPPersonalKillNotificationItemVM` | `public SPPersonalKillNotificationItemVM(int amount, bool isMountDamage, bool isFriendlyFire, string killedAgentName, Action<SPPersonalKillNotificationItemVM>onRemoveItem)` | 构造函数 |
| `SPPersonalKillNotificationItemVM` | `public SPPersonalKillNotificationItemVM(string victimAgentName, Action<SPPersonalKillNotificationItemVM>onRemoveItem)` | 构造函数 |
| `ExecuteRemove` | `public void ExecuteRemove()` | 方法 |
| `VictimType` | `public string VictimType` | 属性 |
| `Message` | `public string Message` | 属性 |
| `ItemType` | `public int ItemType` | 属性 |
| `Amount` | `public int Amount` | 属性 |
| `IsPaused` | `public bool IsPaused` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SPPersonalKillNotificationVM](../SPPersonalKillNotificationVM)
