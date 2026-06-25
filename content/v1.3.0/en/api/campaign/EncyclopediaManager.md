---
title: "EncyclopediaManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaManager

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`

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

**Purpose:** Creates a new `encyclopedia pages` instance or object.

### GetEncyclopediaPages
`public IEnumerable<EncyclopediaPage> GetEncyclopediaPages()`

**Purpose:** Gets the current value of `encyclopedia pages`.

### GetPageOf
`public EncyclopediaPage GetPageOf(Type type)`

**Purpose:** Gets the current value of `page of`.

### GetIdentifier
`public string GetIdentifier(Type type)`

**Purpose:** Gets the current value of `identifier`.

### GoToLink
`public void GoToLink(string pageType, string stringID)`

**Purpose:** Handles logic related to `go to link`.

### GoToLink
`public void GoToLink(string link)`

**Purpose:** Handles logic related to `go to link`.

### SetLinkCallback
`public void SetLinkCallback(Action<string, object> ExecuteLink)`

**Purpose:** Sets the value or state of `link callback`.

## Usage Example

```csharp
var manager = EncyclopediaManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)