---
title: "MBInformationManager"
description: "MBInformationManager：TaleWorlds.Core 的 public 类；公开成员 25 个（方法 11、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/MBInformationManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBInformationManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class MBInformationManager`
**File:** `TaleWorlds.Core/MBInformationManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

MBInformationManager 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBInformationManager.cs。它是一个 public 类，继承链为 MBInformationManager。public/protected 成员共 25 个：11 方法、3 属性、8 事件、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBInformationManager 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 MBInformationManager。成员构成以方法为主（方法 11/25，属性 3/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBInformationManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `string>FiringQuickInformation;` | `public static event Action<string, int, BasicCharacterObject, Equipment, string>FiringQuickInformation;` | 事件 |
| `ClearingQuickInformations;` | `public static event Action ClearingQuickInformations;` | 事件 |
| `bool>OnShowMultiSelectionInquiry;` | `public static event Action<MultiSelectionInquiryData, bool, bool>OnShowMultiSelectionInquiry;` | 事件 |
| `Action` | `public static event Action<InformationData>OnAddMapNotice;` | 事件 |
| `Action` | `public static event Action<InformationData>OnRemoveMapNotice;` | 事件 |
| `Action` | `public static event Action<SceneNotificationData>OnShowSceneNotification;` | 事件 |
| `OnHideSceneNotification;` | `public static event Action OnHideSceneNotification;` | 事件 |
| `Func` | `public static event Func<bool>IsAnySceneNotificationActive;` | 事件 |
| `AddQuickInformation` | `public static void AddQuickInformation(TextObject message, int extraTimeInMs = 0, BasicCharacterObject announcerCharacter = null, Equipment equipment = null, string soundEventPath = "")` | 方法 |
| `ClearQuickInformations` | `public static void ClearQuickInformations()` | 方法 |
| `ShowMultiSelectionInquiry` | `public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)` | 方法 |
| `AddNotice` | `public static void AddNotice(InformationData data)` | 方法 |
| `MapNoticeRemoved` | `public static void MapNoticeRemoved(InformationData data)` | 方法 |
| `ShowHint` | `public static void ShowHint(string hint)` | 方法 |
| `HideInformations` | `public static void HideInformations()` | 方法 |
| `ShowSceneNotification` | `public static void ShowSceneNotification(SceneNotificationData data)` | 方法 |
| `HideSceneNotification` | `public static void HideSceneNotification()` | 方法 |
| `GetIsAnySceneNotificationActive` | `public static bool? GetIsAnySceneNotificationActive()` | 方法 |
| `Clear` | `public static void Clear()` | 方法 |
| `NotificationPriority` | `public enum NotificationPriority` | 属性 |
| `NotificationStatus` | `public enum NotificationStatus` | 属性 |
| `DialogNotificationHandle` | `public class DialogNotificationHandle` | 属性 |
| `NotificationPriority` | `public enum NotificationPriority` | 嵌套类型 |
| `NotificationStatus` | `public enum NotificationStatus` | 嵌套类型 |
| `DialogNotificationHandle` | `public class DialogNotificationHandle` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
