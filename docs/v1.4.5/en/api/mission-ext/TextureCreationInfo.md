<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextureCreationInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextureCreationInfo

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct TextureCreationInfo`
**Area:** mission-ext

## Overview

`TextureCreationInfo` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSuccess` | `public bool IsSuccess { get; }` |
| `IsFail` | `public bool IsFail { get; }` |

## Key Methods

### WithNewTexture
`public static TextureCreationInfo WithNewTexture(Texture texture = null)`

**Purpose:** Handles logic related to `with new texture`.

### WithExistingTexture
`public static TextureCreationInfo WithExistingTexture(Texture texture)`

**Purpose:** Handles logic related to `with existing texture`.

### Fail
`public static TextureCreationInfo Fail()`

**Purpose:** Handles logic related to `fail`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TextureCreationInfo.WithNewTexture(null);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
