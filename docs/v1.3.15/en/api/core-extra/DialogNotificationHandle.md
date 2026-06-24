<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DialogNotificationHandle`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DialogNotificationHandle

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DialogNotificationHandle`
**Area:** core-extra

## Overview

`DialogNotificationHandle` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddQuickInformation
`public static void AddQuickInformation(TextObject message, int extraTimeInMs = 0, BasicCharacterObject announcerCharacter = null, Equipment equipment = null, string soundEventPath = "")`

**Purpose:** Adds `quick information` to the current collection or state.

### ClearQuickInformations
`public static void ClearQuickInformations()`

**Purpose:** Handles logic related to `clear quick informations`.

### ShowMultiSelectionInquiry
`public static void ShowMultiSelectionInquiry(MultiSelectionInquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**Purpose:** Handles logic related to `show multi selection inquiry`.

### AddNotice
`public static void AddNotice(InformationData data)`

**Purpose:** Adds `notice` to the current collection or state.

### MapNoticeRemoved
`public static void MapNoticeRemoved(InformationData data)`

**Purpose:** Handles logic related to `map notice removed`.

### ShowHint
`public static void ShowHint(string hint)`

**Purpose:** Handles logic related to `show hint`.

### HideInformations
`public static void HideInformations()`

**Purpose:** Handles logic related to `hide informations`.

### ShowSceneNotification
`public static void ShowSceneNotification(SceneNotificationData data)`

**Purpose:** Handles logic related to `show scene notification`.

### HideSceneNotification
`public static void HideSceneNotification()`

**Purpose:** Handles logic related to `hide scene notification`.

### GetIsAnySceneNotificationActive
`public static bool? GetIsAnySceneNotificationActive()`

**Purpose:** Gets the current value of `is any scene notification active`.

### Clear
`public static void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
DialogNotificationHandle.AddQuickInformation(message, 0, null, null, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
