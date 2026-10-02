---
title: "GameNotificationVM"
description: "GameNotificationVM 的自动生成类参考。"
---
# GameNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core.ViewModelCollection
**Type:** `public class GameNotificationVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs

## 概述

`GameNotificationVM` 的自动生成类参考页面。声明来自 `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### FadeOutCurrentNotification
`public void FadeOutCurrentNotification(bool useExtraDisplayTime = false) `

### SkipCurrentNotification
`public void SkipCurrentNotification() `

### ClearNotifications
`public void ClearNotifications() `

### AddDialogNotification
`public MBInformationManager.DialogNotificationHandle AddDialogNotification(TextObject text,int extraTimeInMs,BasicCharacterObject announcerCharacter,Equipment equipment,MBInformationManager.NotificationPriority priority,string dialogSoundPath) `

### GetStatusOfDialogNotification
`public MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle) `

### ClearDialogNotification
`public void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle,bool fadeOut) `

### GetIsAnyDialogNotificationActiveOrQueued
`public bool GetIsAnyDialogNotificationActiveOrQueued() `

### ClearAllDialogNotifications
`public void ClearAllDialogNotifications(bool fadeOut) `

### AddGameNotification
`public void AddGameNotification(string notificationText,int extraTimeInMs,BasicCharacterObject announcerCharacter,Equipment equipment,string soundId) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
