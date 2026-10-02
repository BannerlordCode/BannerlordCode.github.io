---
title: "SceneNotificationVM"
description: "SceneNotificationVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 25 个（方法 7、属性 17、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs。"
---
# SceneNotificationVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class SceneNotificationVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs`

## 概述

SceneNotificationVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SceneNotificationVM → ViewModel。public/protected 成员共 25 个：7 方法、17 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneNotificationVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.Information），继承链 SceneNotificationVM → ViewModel。成员构成以属性为主（属性 17/25，方法 7/25），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActiveData` | `public SceneNotificationData ActiveData` | 属性 |
| `SceneNotificationVM` | `public SceneNotificationVM(Action onPositiveTrigger, Action closeNotification, Func<string>getContinueInputText)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `CreateNotification` | `public void CreateNotification(SceneNotificationData data)` | 方法 |
| `ClearData` | `public void ClearData()` | 方法 |
| `ExecuteAffirmativeProcess` | `public void ExecuteAffirmativeProcess()` | 方法 |
| `ExecuteClose` | `public void ExecuteClose()` | 方法 |
| `ExecuteNegativeProcess` | `public void ExecuteNegativeProcess()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `IsShown` | `public bool IsShown` | 属性 |
| `IsReady` | `public bool IsReady` | 属性 |
| `ClickToContinueText` | `public string ClickToContinueText` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `AffirmativeDescription` | `public string AffirmativeDescription` | 属性 |
| `CancelDescription` | `public string CancelDescription` | 属性 |
| `SceneID` | `public string SceneID` | 属性 |
| `ButtonOkLabel` | `public string ButtonOkLabel` | 属性 |
| `ButtonCancelLabel` | `public string ButtonCancelLabel` | 属性 |
| `IsButtonOkShown` | `public bool IsButtonOkShown` | 属性 |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown` | 属性 |
| `AffirmativeTitleText` | `public string AffirmativeTitleText` | 属性 |
| `NegativeTitleText` | `public string NegativeTitleText` | 属性 |
| `Scene` | `public object Scene` | 属性 |
| `EndProgress` | `public float EndProgress` | 属性 |
| `AffirmativeHint` | `public BasicTooltipViewModel AffirmativeHint` | 属性 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BasicTooltipViewModel](../BasicTooltipViewModel)
- [同命名空间 GameNotificationItemVM](../GameNotificationItemVM)
- [同命名空间 GameNotificationVM](../GameNotificationVM)
- [同命名空间 HintViewModel](../HintViewModel)
