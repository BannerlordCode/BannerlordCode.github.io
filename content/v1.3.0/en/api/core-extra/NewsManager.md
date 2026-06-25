---
title: "NewsManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NewsManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NewsManager

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public class NewsManager`
**Base:** none
**File:** `TaleWorlds.Library/NewsManager/NewsManager.cs`

## Overview

`NewsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `NewsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewsItems` | `public MBReadOnlyList<NewsItem> NewsItems { get; }` |
| `IsInPreviewMode` | `public bool IsInPreviewMode { get; }` |
| `LocalizationID` | `public string LocalizationID { get; }` |

## Key Methods

### GetNewsItems
`public async Task<MBReadOnlyList<NewsItem>> GetNewsItems(bool forceRefresh)`

**Purpose:** Gets the current value of `news items`.

### SetNewsSourceURL
`public void SetNewsSourceURL(string url)`

**Purpose:** Sets the value or state of `news source u r l`.

### UpdateNewsItems
`public async Task UpdateNewsItems(bool forceRefresh)`

**Purpose:** Updates the state or data of `news items`.

### UpdateLocalizationID
`public void UpdateLocalizationID(string localizationID)`

**Purpose:** Updates the state or data of `localization i d`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var manager = NewsManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)