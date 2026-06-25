---
title: "SRTHelper"
description: "Auto-generated class reference for SRTHelper."
---
# SRTHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SRTHelper`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/SRTHelper.cs`

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
`public static List<SubtitleItem> ParseStream(Stream subtitleStream, Encoding encoding)`

**Purpose:** Parses external input into a stream the current system understands.

```csharp
// Static call; no instance required
SRTHelper.ParseStream(subtitleStream, encoding);
```

### CopyStream
`public static Stream CopyStream(Stream inputStream)`

**Purpose:** Copies the stream state of the this instance to a target.

```csharp
// Static call; no instance required
SRTHelper.CopyStream(inputStream);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of SRTHelper from the subsystem API first
SRTHelper sRTHelper = ...;
var result = sRTHelper.ToString();
```

## Usage Example

```csharp
SRTHelper.Initialize();
```

## See Also

- [Area Index](../)