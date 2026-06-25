---
title: "AvatarData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AvatarData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AvatarData

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class AvatarData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices.Avatar/AvatarData.cs`

## Overview

`AvatarData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AvatarData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Image` | `public byte Image { get; }` |
| `Width` | `public uint Width { get; }` |
| `Height` | `public uint Height { get; }` |
| `Type` | `public ImageType Type { get; }` |
| `Status` | `public DataStatus Status { get; }` |

## Key Methods

### SetImageData
`public void SetImageData(byte image, uint width, uint height)`

**Purpose:** Sets the value or state of `image data`.

### SetImageData
`public void SetImageData(byte image)`

**Purpose:** Sets the value or state of `image data`.

### SetFailed
`public void SetFailed()`

**Purpose:** Sets the value or state of `failed`.

## Usage Example

```csharp
var value = new AvatarData();
```

## See Also

- [Complete Class Catalog](../catalog)