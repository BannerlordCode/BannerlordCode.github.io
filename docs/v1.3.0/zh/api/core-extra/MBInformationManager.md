<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBInformationManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 向当前集合/状态中添加 `quick information`。

### ShowMultiSelectionInquiry
`public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**用途 / Purpose:** 处理 `show multi selection inquiry` 相关逻辑。

### AddNotice
`public static void AddNotice(InformationData data)`

**用途 / Purpose:** 向当前集合/状态中添加 `notice`。

### MapNoticeRemoved
`public static void MapNoticeRemoved(InformationData data)`

**用途 / Purpose:** 处理 `map notice removed` 相关逻辑。

### ShowHint
`public static void ShowHint(string hint)`

**用途 / Purpose:** 处理 `show hint` 相关逻辑。

### HideInformations
`public static void HideInformations()`

**用途 / Purpose:** 处理 `hide informations` 相关逻辑。

### ShowSceneNotification
`public static void ShowSceneNotification(SceneNotificationData data)`

**用途 / Purpose:** 处理 `show scene notification` 相关逻辑。

### HideSceneNotification
`public static void HideSceneNotification()`

**用途 / Purpose:** 处理 `hide scene notification` 相关逻辑。

### GetIsAnySceneNotificationActive
`public static bool? GetIsAnySceneNotificationActive()`

**用途 / Purpose:** 获取 `is any scene notification active` 的当前值。

### Clear
`public static void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
var manager = MBInformationManager.Current;
```

## 参见

- [完整类目录](../catalog)