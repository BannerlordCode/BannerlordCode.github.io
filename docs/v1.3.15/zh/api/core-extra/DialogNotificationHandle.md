<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DialogNotificationHandle`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DialogNotificationHandle

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public class DialogNotificationHandle`
**领域:** core-extra

## 概述

`DialogNotificationHandle` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddQuickInformation
`public static void AddQuickInformation(TextObject message, int extraTimeInMs = 0, BasicCharacterObject announcerCharacter = null, Equipment equipment = null, string soundEventPath = "")`

**用途 / Purpose:** 向当前集合/状态中添加 `quick information`。

### ClearQuickInformations
`public static void ClearQuickInformations()`

**用途 / Purpose:** 处理 `clear quick informations` 相关逻辑。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
DialogNotificationHandle.AddQuickInformation(message, 0, null, null, "example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
