---
title: "MBInformationManager"
description: "MBInformationManager 的自动生成类参考。"
---
# MBInformationManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBInformationManager`
**Base:** 无
**File:** `TaleWorlds.Core/MBInformationManager.cs`

## 概述

`MBInformationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBInformationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddQuickInformation
`public static void AddQuickInformation(TextObject message, int extraTimeInMs = 0, BasicCharacterObject announcerCharacter = null, Equipment equipment = null, string soundEventPath = "")`

**用途 / Purpose:** 将 quick information 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MBInformationManager.AddQuickInformation(message, 0, null, null, "example");
```

### ClearQuickInformations
`public static void ClearQuickInformations()`

**用途 / Purpose:** 清空当前对象中的quick informations。

```csharp
// 静态调用，不需要实例
MBInformationManager.ClearQuickInformations();
```

### ShowMultiSelectionInquiry
`public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**用途 / Purpose:** 显示multi selection inquiry对应的界面或元素。

```csharp
// 静态调用，不需要实例
MBInformationManager.ShowMultiSelectionInquiry(data, false, false);
```

### AddNotice
`public static void AddNotice(InformationData data)`

**用途 / Purpose:** 将 notice 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MBInformationManager.AddNotice(data);
```

### MapNoticeRemoved
`public static void MapNoticeRemoved(InformationData data)`

**用途 / Purpose:** 调用 MapNoticeRemoved 对应的操作。

```csharp
// 静态调用，不需要实例
MBInformationManager.MapNoticeRemoved(data);
```

### ShowHint
`public static void ShowHint(string hint)`

**用途 / Purpose:** 显示hint对应的界面或元素。

```csharp
// 静态调用，不需要实例
MBInformationManager.ShowHint("example");
```

### HideInformations
`public static void HideInformations()`

**用途 / Purpose:** 隐藏informations对应的界面或元素。

```csharp
// 静态调用，不需要实例
MBInformationManager.HideInformations();
```

### ShowSceneNotification
`public static void ShowSceneNotification(SceneNotificationData data)`

**用途 / Purpose:** 显示scene notification对应的界面或元素。

```csharp
// 静态调用，不需要实例
MBInformationManager.ShowSceneNotification(data);
```

### HideSceneNotification
`public static void HideSceneNotification()`

**用途 / Purpose:** 隐藏scene notification对应的界面或元素。

```csharp
// 静态调用，不需要实例
MBInformationManager.HideSceneNotification();
```

### GetIsAnySceneNotificationActive
`public static bool? GetIsAnySceneNotificationActive()`

**用途 / Purpose:** 读取并返回当前对象中 is any scene notification active 的结果。

```csharp
// 静态调用，不需要实例
MBInformationManager.GetIsAnySceneNotificationActive();
```

### Clear
`public static void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 静态调用，不需要实例
MBInformationManager.Clear();
```

## 使用示例

```csharp
var manager = MBInformationManager.Current;
```

## 参见

- [本区域目录](../)