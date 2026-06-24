<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxSaveManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSaveManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxSaveManager : ISaveManager`
**Base:** `ISaveManager`
**File:** `SandBox/SandBoxSaveManager.cs`

## Overview

`SandBoxSaveManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SandBoxSaveManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAutoSaveInterval
`public int GetAutoSaveInterval()`

**Purpose:** Gets the current value of `auto save interval`.

### OnSaveOver
`public void OnSaveOver(bool isSuccessful, string newSaveGameName)`

**Purpose:** Called when the `save over` event is raised.

## Usage Example

```csharp
var manager = SandBoxSaveManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)