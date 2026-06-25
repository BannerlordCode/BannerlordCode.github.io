---
title: "EncyclopediaManager"
description: "Auto-generated class reference for EncyclopediaManager."
---
# EncyclopediaManager

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaManager.cs`

## Overview

`EncyclopediaManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EncyclopediaManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ViewDataTracker` | `public IViewDataTracker ViewDataTracker { get; }` |

## Key Methods

### CreateEncyclopediaPages
`public void CreateEncyclopediaPages()`

**Purpose:** Constructs a new `encyclopedia pages` entity and returns it to the caller.

```csharp
// Obtain an instance of EncyclopediaManager from the subsystem API first
EncyclopediaManager encyclopediaManager = ...;
encyclopediaManager.CreateEncyclopediaPages();
```

### GetEncyclopediaPages
`public IEnumerable<EncyclopediaPage> GetEncyclopediaPages()`

**Purpose:** Reads and returns the `encyclopedia pages` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaManager from the subsystem API first
EncyclopediaManager encyclopediaManager = ...;
var result = encyclopediaManager.GetEncyclopediaPages();
```

### GetPageOf
`public EncyclopediaPage GetPageOf(Type type)`

**Purpose:** Reads and returns the `page of` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaManager from the subsystem API first
EncyclopediaManager encyclopediaManager = ...;
var result = encyclopediaManager.GetPageOf(type);
```

### GetIdentifier
`public string GetIdentifier(Type type)`

**Purpose:** Reads and returns the `identifier` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaManager from the subsystem API first
EncyclopediaManager encyclopediaManager = ...;
var result = encyclopediaManager.GetIdentifier(type);
```

### GoToLink
`public void GoToLink(string pageType, string stringID)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of EncyclopediaManager from the subsystem API first
EncyclopediaManager encyclopediaManager = ...;
encyclopediaManager.GoToLink("example", "example");
```

### GoToLink
`public void GoToLink(string link)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of EncyclopediaManager from the subsystem API first
EncyclopediaManager encyclopediaManager = ...;
encyclopediaManager.GoToLink("example");
```

### SetLinkCallback
`public void SetLinkCallback(Action<string, object> ExecuteLink)`

**Purpose:** Assigns a new value to `link callback` and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaManager from the subsystem API first
EncyclopediaManager encyclopediaManager = ...;
encyclopediaManager.SetLinkCallback(action<string, executeLink);
```

## Usage Example

```csharp
var manager = EncyclopediaManager.Current;
```

## See Also

- [Area Index](../)