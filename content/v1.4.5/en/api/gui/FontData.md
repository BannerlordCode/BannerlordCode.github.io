---
title: "FontData"
description: "Auto-generated class reference for FontData."
---
# FontData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct FontData`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/StyleFontContainer.cs`

## Overview

`FontData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FontData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FontData
`public struct FontData(Font font, float fontSize)`

**Purpose:** Executes the FontData logic.

```csharp
// Obtain an instance of FontData from the subsystem API first
FontData fontData = ...;
var result = fontData.FontData(font, 0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FontData entry = ...;
```

## See Also

- [Area Index](../)