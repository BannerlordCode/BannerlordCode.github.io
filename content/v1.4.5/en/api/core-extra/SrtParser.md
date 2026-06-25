---
title: "SrtParser"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SrtParser`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SrtParser

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SrtParser`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/SRTHelper.cs`

## Overview

`SrtParser` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ParseStream
`public static List<SubtitleItem> ParseStream(Stream subtitleStream, Encoding encoding)`

**Purpose:** Handles logic related to `parse stream`.

## Usage Example

```csharp
SrtParser.ParseStream(subtitleStream, encoding);
```

## See Also

- [Complete Class Catalog](../catalog)