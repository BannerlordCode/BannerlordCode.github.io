---
title: "BannerViewModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerViewModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.BannerEditor
**Module:** TaleWorlds.Core
**Type:** `public class BannerViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.BannerEditor/BannerViewModel.cs`

## Overview

`BannerViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `BannerViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |

## Usage Example

```csharp
var vm = new BannerViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)