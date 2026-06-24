<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FontData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FontData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct FontData`
**Area:** campaign-ext

## Overview

`FontData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FontData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Add
`public void Add(string style, Font font, float fontSize)`

**Purpose:** Adds `add` to the current collection or state.

### GetFontData
`public StyleFontContainer.FontData GetFontData(string style)`

**Purpose:** Gets the current value of `font data`.

### ClearFonts
`public void ClearFonts()`

**Purpose:** Handles logic related to `clear fonts`.

## Usage Example

```csharp
var value = new FontData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
