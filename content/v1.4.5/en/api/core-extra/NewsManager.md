---
title: "NewsManager"
description: "Auto-generated class reference for NewsManager."
---
# NewsManager

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public class NewsManager`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.NewsManager/NewsManager.cs`

## Overview

`NewsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `NewsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInPreviewMode` | `public bool IsInPreviewMode { get; }` |
| `LocalizationID` | `public string LocalizationID { get; }` |

## Key Methods

### GetNewsItems
`public async Task<MBReadOnlyList<NewsItem>> GetNewsItems(bool forceRefresh)`

**Purpose:** **Purpose:** Reads and returns the news items value held by the this instance.

```csharp
// Obtain an instance of NewsManager from the subsystem API first
NewsManager newsManager = ...;
var result = newsManager.GetNewsItems(false);
```

### SetNewsSourceURL
`public void SetNewsSourceURL(string url)`

**Purpose:** **Purpose:** Assigns a new value to news source u r l and updates the object's internal state.

```csharp
// Obtain an instance of NewsManager from the subsystem API first
NewsManager newsManager = ...;
newsManager.SetNewsSourceURL("example");
```

### UpdateNewsItems
`public async Task UpdateNewsItems(bool forceRefresh)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of news items.

```csharp
// Obtain an instance of NewsManager from the subsystem API first
NewsManager newsManager = ...;
var result = newsManager.UpdateNewsItems(false);
```

### UpdateLocalizationID
`public void UpdateLocalizationID(string localizationID)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of localization i d.

```csharp
// Obtain an instance of NewsManager from the subsystem API first
NewsManager newsManager = ...;
newsManager.UpdateLocalizationID("example");
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of NewsManager from the subsystem API first
NewsManager newsManager = ...;
newsManager.OnFinalize();
```

## Usage Example

```csharp
var manager = NewsManager.Current;
```

## See Also

- [Area Index](../)