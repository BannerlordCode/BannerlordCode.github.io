---
title: "AvatarData"
description: "Auto-generated class reference for AvatarData."
---
# AvatarData

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class AvatarData`
**Base:** none
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices.Avatar/AvatarData.cs`

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

**Purpose:** Assigns a new value to image data and updates the object's internal state.

```csharp
// Obtain an instance of AvatarData from the subsystem API first
AvatarData avatarData = ...;
avatarData.SetImageData(0, 0, 0);
```

### SetImageData
`public void SetImageData(byte image)`

**Purpose:** Assigns a new value to image data and updates the object's internal state.

```csharp
// Obtain an instance of AvatarData from the subsystem API first
AvatarData avatarData = ...;
avatarData.SetImageData(0);
```

### SetFailed
`public void SetFailed()`

**Purpose:** Assigns a new value to failed and updates the object's internal state.

```csharp
// Obtain an instance of AvatarData from the subsystem API first
AvatarData avatarData = ...;
avatarData.SetFailed();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AvatarData entry = ...;
```

## See Also

- [Area Index](../)