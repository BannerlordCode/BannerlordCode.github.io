---
title: "SPGeneralKillNotificationItemVM"
description: "SPGeneralKillNotificationItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General 的 public 类，继承 ViewModel；公开成员 12 个（方法 1、属性 10、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPGeneralKillNotificationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPGeneralKillNotificationItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

SPGeneralKillNotificationItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPGeneralKillNotificationItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：1 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPGeneralKillNotificationItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General`，继承链 SPGeneralKillNotificationItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 10/12，方法 1/12），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPGeneralKillNotificationItemVM` | `public SPGeneralKillNotificationItemVM(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning, Action<SPGeneralKillNotificationItemVM>onRemove)` | 构造函数 |
| `ExecuteRemove` | `public void ExecuteRemove()` | 方法 |
| `MurdererName` | `public string MurdererName` | 属性 |
| `MurdererType` | `public string MurdererType` | 属性 |
| `VictimName` | `public string VictimName` | 属性 |
| `VictimType` | `public string VictimType` | 属性 |
| `IsUnconscious` | `public bool IsUnconscious` | 属性 |
| `IsHeadshot` | `public bool IsHeadshot` | 属性 |
| `IsSuicide` | `public bool IsSuicide` | 属性 |
| `IsDrowning` | `public bool IsDrowning` | 属性 |
| `BackgroundColor` | `public Color BackgroundColor` | 属性 |
| `IsPaused` | `public bool IsPaused` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 SPGeneralKillNotificationVM](../SPGeneralKillNotificationVM/)
