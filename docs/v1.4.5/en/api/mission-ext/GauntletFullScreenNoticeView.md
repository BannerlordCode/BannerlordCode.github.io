<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletFullScreenNoticeView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletFullScreenNoticeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletFullScreenNoticeView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletFullScreenNoticeView.cs`

## Overview

`GauntletFullScreenNoticeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletFullScreenNoticeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletFullScreenNoticeView Current { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### SkipNotice
`public static void SkipNotice()`

**Purpose:** Handles logic related to `skip notice`.

## Usage Example

```csharp
var view = new GauntletFullScreenNoticeView();
```

## See Also

- [Complete Class Catalog](../catalog)