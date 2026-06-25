---
title: "SrtParser"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SrtParser`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SrtParser

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SrtParser`
**Area:** core-extra

## Overview

`SrtParser` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
// Prepare the required context, then call the static entry point directly
SrtParser.ParseStream(subtitleStream, encoding);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
