<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerDebugInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerDebugInfo

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BannerDebugInfo`
**Area:** mission-ext

## Overview

`BannerDebugInfo` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateManual
`public static BannerDebugInfo CreateManual(string sourceName)`

**Purpose:** Creates a new `manual` instance or object.

### CreateWidget
`public static BannerDebugInfo CreateWidget(string sourceName)`

**Purpose:** Creates a new `widget` instance or object.

### CreateName
`public string CreateName()`

**Purpose:** Creates a new `name` instance or object.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
BannerDebugInfo.CreateManual("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
