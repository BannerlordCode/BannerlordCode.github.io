---
title: "GameNotificationItemVM"
description: "GameNotificationItemVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 0、属性 6、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs。"
---
# GameNotificationItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class GameNotificationItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs`

## 概述

GameNotificationItemVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameNotificationItemVM → ViewModel。public/protected 成员共 7 个：6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameNotificationItemVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.Information），继承链 GameNotificationItemVM → ViewModel。成员构成以属性为主（属性 6/7，方法 0/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameNotificationItemVM` | `public GameNotificationItemVM(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment characterEquipment, string soundId, int priority, bool isDialog, string dialogSoundPath)` | 构造函数 |
| `ExtraTimeInMs` | `public int ExtraTimeInMs` | 属性 |
| `GameNotificationText` | `public string GameNotificationText` | 属性 |
| `CharacterNameText` | `public string CharacterNameText` | 属性 |
| `NotificationSoundId` | `public string NotificationSoundId` | 属性 |
| `DialogSoundPath` | `public string DialogSoundPath` | 属性 |
| `Announcer` | `public CharacterImageIdentifierVM Announcer` | 属性 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BasicTooltipViewModel](../BasicTooltipViewModel)
- [同命名空间 GameNotificationVM](../GameNotificationVM)
- [同命名空间 HintViewModel](../HintViewModel)
- [同命名空间 HintVM](../HintVM)
