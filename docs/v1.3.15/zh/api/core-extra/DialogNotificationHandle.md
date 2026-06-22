<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DialogNotificationHandle`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DialogNotificationHandle

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`DialogNotificationHandle` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### AddQuickInformation

```csharp
public static void AddQuickInformation(TextObject message, int extraTimeInMs = 0, BasicCharacterObject announcerCharacter = null, Equipment equipment = null, string soundEventPath = "")
```

### ClearQuickInformations

```csharp
public static void ClearQuickInformations()
```

### ShowMultiSelectionInquiry

```csharp
public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)
```

### AddNotice

```csharp
public static void AddNotice(InformationData data)
```

### MapNoticeRemoved

```csharp
public static void MapNoticeRemoved(InformationData data)
```

### ShowHint

```csharp
public static void ShowHint(string hint)
```

### HideInformations

```csharp
public static void HideInformations()
```

### ShowSceneNotification

```csharp
public static void ShowSceneNotification(SceneNotificationData data)
```

### HideSceneNotification

```csharp
public static void HideSceneNotification()
```

### GetIsAnySceneNotificationActive

```csharp
public static bool? GetIsAnySceneNotificationActive()
```

### Clear

```csharp
public static void Clear()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)