---
title: "CampaignObjectManager"
description: "Auto-generated class reference for CampaignObjectManager."
---
# CampaignObjectManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignObjectManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignObjectManager from the subsystem API first
CampaignObjectManager campaignObjectManager = ...;
campaignObjectManager.PreAfterLoad();
```

### AfterLoad
`public void AfterLoad()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignObjectManager from the subsystem API first
CampaignObjectManager campaignObjectManager = ...;
campaignObjectManager.AfterLoad();
```

### GetMaxObjectSubId
`public uint GetMaxObjectSubId()`

**Purpose:** Reads and returns the `max object sub id` value held by the current object.

```csharp
// Obtain an instance of CampaignObjectManager from the subsystem API first
CampaignObjectManager campaignObjectManager = ...;
var result = campaignObjectManager.GetMaxObjectSubId();
```

### OnItemAdded
`public void OnItemAdded(T item)`

**Purpose:** Invoked when the `item added` event is raised.

```csharp
// Obtain an instance of CampaignObjectManager from the subsystem API first
CampaignObjectManager campaignObjectManager = ...;
campaignObjectManager.OnItemAdded(item);
```

### UnregisterItem
`public void UnregisterItem(T item)`

**Purpose:** Unregisters `item` from the current system.

```csharp
// Obtain an instance of CampaignObjectManager from the subsystem API first
CampaignObjectManager campaignObjectManager = ...;
campaignObjectManager.UnregisterItem(item);
```

### Find
`public T Find(string id)`

**Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Obtain an instance of CampaignObjectManager from the subsystem API first
CampaignObjectManager campaignObjectManager = ...;
var result = campaignObjectManager.Find("example");
```

### FindFirst
`public T FindFirst(Predicate<T> predicate)`

**Purpose:** Looks up the matching `first` in the current collection or scope.

```csharp
// Obtain an instance of CampaignObjectManager from the subsystem API first
CampaignObjectManager campaignObjectManager = ...;
var result = campaignObjectManager.FindFirst(predicate);
```

### FindAll
`public MBReadOnlyList<T> FindAll(Predicate<T> predicate)`

**Purpose:** Looks up the matching `all` in the current collection or scope.

```csharp
// Obtain an instance of CampaignObjectManager from the subsystem API first
CampaignObjectManager campaignObjectManager = ...;
var result = campaignObjectManager.FindAll(predicate);
```

### FindNextUniqueStringId
`public static string FindNextUniqueStringId(List<CampaignObjectType<T>> lists, string id)`

**Purpose:** Looks up the matching `next unique string id` in the current collection or scope.

```csharp
// Static call; no instance required
CampaignObjectManager.FindNextUniqueStringId(lists, "example");
```

## Usage Example

```csharp
var manager = CampaignObjectManager.Current;
```

## See Also

- [Area Index](../)