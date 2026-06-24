<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignObjectManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignObjectManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignObjectManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

## Overview

`CampaignObjectManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignObjectManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxCreatedPostfixIndex` | `public uint MaxCreatedPostfixIndex { get; }` |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; }` |

## Key Methods

### PreAfterLoad
`public void PreAfterLoad()`

**Purpose:** Handles logic related to `pre after load`.

### AfterLoad
`public void AfterLoad()`

**Purpose:** Handles logic related to `after load`.

### GetMaxObjectSubId
`public uint GetMaxObjectSubId()`

**Purpose:** Gets the current value of `max object sub id`.

### OnItemAdded
`public void OnItemAdded(T item)`

**Purpose:** Called when the `item added` event is raised.

### UnregisterItem
`public void UnregisterItem(T item)`

**Purpose:** Handles logic related to `unregister item`.

### Find
`public T Find(string id)`

**Purpose:** Handles logic related to `find`.

### FindFirst
`public T FindFirst(Predicate<T> predicate)`

**Purpose:** Handles logic related to `find first`.

### FindAll
`public MBReadOnlyList<T> FindAll(Predicate<T> predicate)`

**Purpose:** Handles logic related to `find all`.

### FindNextUniqueStringId
`public static string FindNextUniqueStringId(List<CampaignObjectType<T>> lists, string id)`

**Purpose:** Handles logic related to `find next unique string id`.

## Usage Example

```csharp
var manager = CampaignObjectManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)