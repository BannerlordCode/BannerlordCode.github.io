---
title: "EncyclopediaData"
description: "Auto-generated class reference for EncyclopediaData."
---
# EncyclopediaData

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class EncyclopediaData`
**Base:** none
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Encyclopedia/EncyclopediaData.cs`

## Overview

`EncyclopediaData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `EncyclopediaData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnFinalize
`public void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of EncyclopediaData from the subsystem API first
EncyclopediaData encyclopediaData = ...;
encyclopediaData.OnFinalize();
```

### CloseEncyclopedia
`public void CloseEncyclopedia()`

**Purpose:** **Purpose:** Closes the resource or UI associated with encyclopedia.

```csharp
// Obtain an instance of EncyclopediaData from the subsystem API first
EncyclopediaData encyclopediaData = ...;
encyclopediaData.CloseEncyclopedia();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
EncyclopediaData entry = ...;
```

## See Also

- [Area Index](../)