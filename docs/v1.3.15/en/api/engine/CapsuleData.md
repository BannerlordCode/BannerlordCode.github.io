<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CapsuleData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CapsuleData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct CapsuleData`
**Base:** none
**File:** `TaleWorlds.Engine/CapsuleData.cs`

## Overview

`CapsuleData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `P1` | `public Vec3 P1 { get { return this._globalData.P1; }` |
| `P2` | `public Vec3 P2 { get { return this._globalData.P2; }` |
| `Radius` | `public float Radius { get { return this._globalData.Radius; }` |

## Key Methods

### GetBoxMinMax
```csharp
public ValueTuple<Vec3, Vec3> GetBoxMinMax()
```

## Usage Example

```csharp
// Typical usage of CapsuleData (Data)
new CapsuleData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)