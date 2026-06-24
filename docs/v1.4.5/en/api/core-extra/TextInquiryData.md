<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextInquiryData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextInquiryData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TextInquiryData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/TextInquiryData.cs`

## Overview

`TextInquiryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TextInquiryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**Purpose:** Checks whether the current object has/contains `same content with`.

## Usage Example

```csharp
var value = new TextInquiryData();
```

## See Also

- [Complete Class Catalog](../catalog)