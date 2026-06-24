<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FontData`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FontData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct FontData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/StyleFontContainer.cs`

## Overview

`FontData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FontData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FontData
`public struct FontData(Font font, float fontSize)`

**Purpose:** Handles logic related to `font data`.

## Usage Example

```csharp
var value = new FontData();
```

## See Also

- [Complete Class Catalog](../catalog)