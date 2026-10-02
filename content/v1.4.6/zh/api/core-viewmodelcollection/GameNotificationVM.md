---
title: "GameNotificationVM"
description: "GameNotificationVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 18 个（方法 9、属性 7、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs。"
---
# GameNotificationVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class GameNotificationVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs`

## 概述

GameNotificationVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameNotificationVM → ViewModel。public/protected 成员共 18 个：9 方法、7 属性、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameNotificationVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.Information），继承链 GameNotificationVM → ViewModel。成员构成以方法为主（方法 9/18，属性 7/18），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<GameNotificationItemVM>CurrentNotificationChanged;` | 事件 |
| `FadeOutCurrentNotification` | `public void FadeOutCurrentNotification(bool useExtraDisplayTime = false)` | 方法 |
| `SkipCurrentNotification` | `public void SkipCurrentNotification()` | 方法 |
| `GameNotificationVM` | `public GameNotificationVM()` | 构造函数 |
| `ClearNotifications` | `public void ClearNotifications()` | 方法 |
| `AddDialogNotification` | `public MBInformationManager.DialogNotificationHandle AddDialogNotification(TextObject text, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, MBInformationManager.NotificationPriority priority, string dialogSoundPath)` | 方法 |
| `GetStatusOfDialogNotification` | `public MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)` | 方法 |
| `ClearDialogNotification` | `public void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut)` | 方法 |
| `GetIsAnyDialogNotificationActiveOrQueued` | `public bool GetIsAnyDialogNotificationActiveOrQueued()` | 方法 |
| `ClearAllDialogNotifications` | `public void ClearAllDialogNotifications(bool fadeOut)` | 方法 |
| `AddGameNotification` | `public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)` | 方法 |
| `CurrentNotification` | `public GameNotificationItemVM CurrentNotification` | 属性 |
| `GotNotification` | `public bool GotNotification` | 属性 |
| `NotificationId` | `public int NotificationId` | 属性 |
| `CurrentNotificationDurationInSeconds` | `public float CurrentNotificationDurationInSeconds` | 属性 |
| `IsPaused` | `public bool IsPaused` | 属性 |
| `MustFadeOutCurrentNotification` | `public bool MustFadeOutCurrentNotification` | 属性 |
| `CurrentNotificationFadeOutDelayInSeconds` | `public float CurrentNotificationFadeOutDelayInSeconds` | 属性 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BasicTooltipViewModel](../BasicTooltipViewModel)
- [同命名空间 GameNotificationItemVM](../GameNotificationItemVM)
- [同命名空间 HintViewModel](../HintViewModel)
- [同命名空间 HintVM](../HintVM)
