<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InquiryData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InquiryData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class InquiryData`
**Base:** none
**File:** `TaleWorlds.Library/InquiryData.cs`

## Overview

`InquiryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `InquiryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetText
`public void SetText(string text)`

**Purpose:** Sets the value or state of `text`.

### SetTitleText
`public void SetTitleText(string titleText)`

**Purpose:** Sets the value or state of `title text`.

### SetAffirmativeAction
`public void SetAffirmativeAction(Action newAffirmativeAction)`

**Purpose:** Sets the value or state of `affirmative action`.

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**Purpose:** Checks whether the current object has/contains `same content with`.

## Usage Example

```csharp
var value = new InquiryData();
```

## See Also

- [Complete Class Catalog](../catalog)