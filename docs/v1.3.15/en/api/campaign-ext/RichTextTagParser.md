<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RichTextTagParser`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RichTextTagParser

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichTextTagParser`
**Area:** campaign-ext

## Overview

`RichTextTagParser` lives in `TaleWorlds.TwoDimension`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Parse
`public static RichTextTag Parse(string text2, int tagBeginIndex, int tagEndIndex)`

**Purpose:** Handles logic related to `parse`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
RichTextTagParser.Parse("example", 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
