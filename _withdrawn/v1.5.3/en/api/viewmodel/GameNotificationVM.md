---
title: "GameNotificationVM"
description: "Auto-generated class reference for GameNotificationVM."
---
# GameNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core.ViewModelCollection
**Type:** `public class GameNotificationVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs

## Overview

Auto-generated stub for `GameNotificationVM`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### FadeOutCurrentNotification
`public void FadeOutCurrentNotification(bool useExtraDisplayTime = false)`

### SkipCurrentNotification
`public void SkipCurrentNotification()`

### ClearNotifications
`public void ClearNotifications()`

### AddDialogNotification
`public MBInformationManager.DialogNotificationHandle AddDialogNotification(TextObject text,int extraTimeInMs,BasicCharacterObject announcerCharacter,Equipment equipment,MBInformationManager.NotificationPriority priority,string dialogSoundPath)`

### GetStatusOfDialogNotification
`public MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)`

### ClearDialogNotification
`public void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle,bool fadeOut)`

### GetIsAnyDialogNotificationActiveOrQueued
`public bool GetIsAnyDialogNotificationActiveOrQueued()`

### ClearAllDialogNotifications
`public void ClearAllDialogNotifications(bool fadeOut)`

### AddGameNotification
`public void AddGameNotification(string notificationText,int extraTimeInMs,BasicCharacterObject announcerCharacter,Equipment equipment,string soundId)`

## See Also

- [Section index](../)
