<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SRTHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SRTHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SRTHelper`
**Base:** none
**File:** `TaleWorlds.Library/SRTHelper.cs`

## Overview

`SRTHelper` is a static utility class providing helper methods.

## Key Properties

| Name | Signature |
|------|-----------|
| `StartTime` | `public int StartTime { get; set; }` |
| `EndTime` | `public int EndTime { get; set; }` |
| `Lines` | `public List<string> Lines { get; set; }` |

## Key Methods

### ParseStream
```csharp
public static List<SRTHelper.SubtitleItem> ParseStream(Stream subtitleStream, Encoding encoding)
```

### CopyStream
```csharp
public static Stream CopyStream(Stream inputStream)
```

### ToString
```csharp
public override string ToString()
```

## Usage Example

```csharp
// Typical usage of SRTHelper (Helper)
SRTHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)