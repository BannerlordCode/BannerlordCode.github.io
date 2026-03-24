# Mat3 / 3D Matrix

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/Mat3.cs`
**Purpose**: 3D rotation and scale matrix

## Overview

`Mat3` is a 3x3 matrix struct for rotation and scale transformations in games.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| S | Vec3 | Scale vector |
| F | Vec3 | Forward vector |
| U | Vec3 | Up vector |

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Transform | `Vec3 Transform(Vec3 v)` | Transform vector |
| MakeIdentity | `void MakeIdentity()` | Create identity matrix |
| Rotated | `Mat3 Rotated(float angle)` | Rotation transform |

## Usage Example

```csharp
Mat3 rotation = Mat3.ConstructRotationVec(up, angle);
Vec3 transformed = rotation.Transform(vector);
```
