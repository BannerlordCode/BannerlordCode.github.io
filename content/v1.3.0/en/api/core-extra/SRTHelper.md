---
title: "SRTHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SRTHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SRTHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SRTHelper`
**Base:** none
**File:** `TaleWorlds.Library/SRTHelper.cs`

## Overview

`SRTHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SRTHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StartTime` | `public int StartTime { get; set; }` |
| `EndTime` | `public int EndTime { get; set; }` |
| `Lines` | `public List<string> Lines { get; set; }` |

## Key Methods

### ParseStream
`public static List<SRTHelper.SubtitleItem> ParseStream(Stream subtitleStream, Encoding encoding)`

**Purpose:** Handles logic related to `parse stream`.

### CopyStream
`public static Stream CopyStream(Stream inputStream)`

**Purpose:** Handles logic related to `copy stream`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
SRTHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)