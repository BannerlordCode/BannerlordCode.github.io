<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerData`
**Base:** none
**File:** `TaleWorlds.Core/BannerData.cs`

## Overview

`BannerData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `LocalVersion` | `public int LocalVersion { get { return this._localVersion; }` |
| `MeshId` | `public int MeshId { get { return this._meshId; }` |
| `ColorId` | `public int ColorId { get { return this._colorId; }` |
| `ColorId2` | `public int ColorId2 { get { return this._colorId2; }` |
| `Size` | `public Vec2 Size { get { return this._size; }` |
| `Position` | `public Vec2 Position { get { return this._position; }` |
| `DrawStroke` | `public bool DrawStroke { get { return this._drawStroke; }` |
| `Mirror` | `public bool Mirror { get { return this._mirror; }` |
| `RotationValue` | `public float RotationValue { get { return this._rotationValue; }` |
| `Rotation` | `public float Rotation { get { return 6.2831855f * this.RotationValue; }` |

## Key Methods

### Equals
```csharp
public override bool Equals(object obj)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

## Usage Example

```csharp
// Typical usage of BannerData (Data)
new BannerData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)