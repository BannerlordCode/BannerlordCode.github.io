<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBInformationManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBInformationManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBInformationManager`
**Base:** none
**File:** `TaleWorlds.Core/MBInformationManager.cs`

## Overview

`MBInformationManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

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

## Usage Example

```csharp
// Typical usage of MBInformationManager (Manager)
MBInformationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)