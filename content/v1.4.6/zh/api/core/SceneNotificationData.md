---
title: "SceneNotificationData"
description: "SceneNotificationData：TaleWorlds.Core 的 public 类；公开成员 30 个（方法 6、属性 20、字段 0）。源文件 TaleWorlds.Core/SceneNotificationData.cs。"
---
# SceneNotificationData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class SceneNotificationData`
**File:** `TaleWorlds.Core/SceneNotificationData.cs`

## 概述

SceneNotificationData 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/SceneNotificationData.cs。它是一个 public 类，继承链为 SceneNotificationData。public/protected 成员共 30 个：6 方法、20 属性、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneNotificationData 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 SceneNotificationData。成员构成以属性为主（属性 20/30，方法 6/30），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/SceneNotificationData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneID` | `public virtual string SceneID` | 属性 |
| `SoundEventPath` | `public virtual string SoundEventPath` | 属性 |
| `TitleText` | `public virtual TextObject TitleText` | 属性 |
| `AffirmativeDescriptionText` | `public virtual TextObject AffirmativeDescriptionText` | 属性 |
| `NegativeDescriptionText` | `public virtual TextObject NegativeDescriptionText` | 属性 |
| `AffirmativeHintText` | `public virtual TextObject AffirmativeHintText` | 属性 |
| `AffirmativeHintTextExtended` | `public virtual TextObject AffirmativeHintTextExtended` | 属性 |
| `AffirmativeTitleText` | `public virtual TextObject AffirmativeTitleText` | 属性 |
| `NegativeTitleText` | `public virtual TextObject NegativeTitleText` | 属性 |
| `AffirmativeText` | `public virtual TextObject AffirmativeText` | 属性 |
| `NegativeText` | `public virtual TextObject NegativeText` | 属性 |
| `IsAffirmativeOptionShown` | `public virtual bool IsAffirmativeOptionShown` | 属性 |
| `IsNegativeOptionShown` | `public virtual bool IsNegativeOptionShown` | 属性 |
| `PauseActiveState` | `public virtual bool PauseActiveState` | 属性 |
| `RelevantContext` | `public virtual SceneNotificationData.RelevantContextType RelevantContext` | 属性 |
| `SceneProperties` | `public virtual SceneNotificationData.NotificationSceneProperties SceneProperties` | 属性 |
| `OnAffirmativeAction` | `public virtual void OnAffirmativeAction()` | 方法 |
| `OnNegativeAction` | `public virtual void OnNegativeAction()` | 方法 |
| `OnCloseAction` | `public virtual void OnCloseAction()` | 方法 |
| `Banner[]GetBanners` | `public virtual Banner[]GetBanners()` | 方法 |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public virtual SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | 方法 |
| `SceneNotificationData.SceneNotificationShip[]GetShips` | `public virtual SceneNotificationData.SceneNotificationShip[]GetShips()` | 方法 |
| `SceneNotificationCharacter` | `public readonly struct SceneNotificationCharacter` | 属性 |
| `SceneNotificationShip` | `public readonly struct SceneNotificationShip` | 属性 |
| `NotificationSceneProperties` | `public struct NotificationSceneProperties` | 属性 |
| `RelevantContextType` | `public enum RelevantContextType` | 属性 |
| `SceneNotificationCharacter` | `public readonly struct SceneNotificationCharacter` | 嵌套类型 |
| `SceneNotificationShip` | `public readonly struct SceneNotificationShip` | 嵌套类型 |
| `NotificationSceneProperties` | `public struct NotificationSceneProperties` | 嵌套类型 |
| `RelevantContextType` | `public enum RelevantContextType` | 嵌套类型 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
