---
title: "MBInformationManager"
description: "MBInformationManager: a public class in TaleWorlds.Core; 25 exposed members (11 methods, 3 properties, 0 fields). Source: TaleWorlds.Core/MBInformationManager.cs."
---
# MBInformationManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class MBInformationManager`
**File:** `TaleWorlds.Core/MBInformationManager.cs`

## Overview

MBInformationManager lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBInformationManager.cs. It is a public class; the inheritance chain is MBInformationManager. It exposes 25 public/protected members: 11 methods, 3 properties, 8 events, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBInformationManager is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain MBInformationManager. The surface is method-led (methods 11/25, properties 3/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBInformationManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `string>FiringQuickInformation;` | `public static event Action<string, int, BasicCharacterObject, Equipment, string>FiringQuickInformation;` | event |
| `ClearingQuickInformations;` | `public static event Action ClearingQuickInformations;` | event |
| `bool>OnShowMultiSelectionInquiry;` | `public static event Action<MultiSelectionInquiryData, bool, bool>OnShowMultiSelectionInquiry;` | event |
| `Action` | `public static event Action<InformationData>OnAddMapNotice;` | event |
| `Action` | `public static event Action<InformationData>OnRemoveMapNotice;` | event |
| `Action` | `public static event Action<SceneNotificationData>OnShowSceneNotification;` | event |
| `OnHideSceneNotification;` | `public static event Action OnHideSceneNotification;` | event |
| `Func` | `public static event Func<bool>IsAnySceneNotificationActive;` | event |
| `AddQuickInformation` | `public static void AddQuickInformation(TextObject message, int extraTimeInMs = 0, BasicCharacterObject announcerCharacter = null, Equipment equipment = null, string soundEventPath = "")` | method |
| `ClearQuickInformations` | `public static void ClearQuickInformations()` | method |
| `ShowMultiSelectionInquiry` | `public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)` | method |
| `AddNotice` | `public static void AddNotice(InformationData data)` | method |
| `MapNoticeRemoved` | `public static void MapNoticeRemoved(InformationData data)` | method |
| `ShowHint` | `public static void ShowHint(string hint)` | method |
| `HideInformations` | `public static void HideInformations()` | method |
| `ShowSceneNotification` | `public static void ShowSceneNotification(SceneNotificationData data)` | method |
| `HideSceneNotification` | `public static void HideSceneNotification()` | method |
| `GetIsAnySceneNotificationActive` | `public static bool? GetIsAnySceneNotificationActive()` | method |
| `Clear` | `public static void Clear()` | method |
| `NotificationPriority` | `public enum NotificationPriority` | property |
| `NotificationStatus` | `public enum NotificationStatus` | property |
| `DialogNotificationHandle` | `public class DialogNotificationHandle` | property |
| `NotificationPriority` | `public enum NotificationPriority` | nested type |
| `NotificationStatus` | `public enum NotificationStatus` | nested type |
| `DialogNotificationHandle` | `public class DialogNotificationHandle` | nested type |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
