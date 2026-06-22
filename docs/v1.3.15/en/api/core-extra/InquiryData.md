<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InquiryData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InquiryData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class InquiryData`
**Base:** none
**File:** `TaleWorlds.Library/InquiryData.cs`

## Overview

`InquiryData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### SetText
```csharp
public void SetText(string text)
```

### SetTitleText
```csharp
public void SetTitleText(string titleText)
```

### HasSameContentWith
```csharp
public bool HasSameContentWith(object other)
```

## Usage Example

```csharp
// Typical usage of InquiryData (Data)
new InquiryData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)