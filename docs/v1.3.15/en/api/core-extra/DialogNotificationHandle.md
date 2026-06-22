<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DialogNotificationHandle`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DialogNotificationHandle

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `DialogNotificationHandle` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)