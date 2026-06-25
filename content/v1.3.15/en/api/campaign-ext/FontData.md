---
title: "FontData"
description: "Auto-generated class reference for FontData."
---
# FontData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct FontData`
**Base:** none
**File:** `TaleWorlds.TwoDimension/StyleFontContainer.cs`

## Overview

`FontData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FontData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FontData entry = ...;
```

## See Also

- [Area Index](../)