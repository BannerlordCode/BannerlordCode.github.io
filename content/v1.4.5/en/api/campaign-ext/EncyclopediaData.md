---
title: "EncyclopediaData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaData

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class EncyclopediaData`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Encyclopedia/EncyclopediaData.cs`

## Overview

`EncyclopediaData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `EncyclopediaData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### CloseEncyclopedia
`public void CloseEncyclopedia()`

**Purpose:** Handles logic related to `close encyclopedia`.

## Usage Example

```csharp
var value = new EncyclopediaData();
```

## See Also

- [Complete Class Catalog](../catalog)