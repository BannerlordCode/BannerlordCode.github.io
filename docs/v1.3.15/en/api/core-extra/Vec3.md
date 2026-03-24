# Vec3 / 3D Vector

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/Vec3.cs`
**Purpose**: 3D vector math library for positions, directions, and scaling in 3D game development

## Overview

`Vec3` is a 3D vector struct in Bannerlord providing complete 3D math operations. It represents positions, directions, rotations, and scaling in the game world.

## Struct

```csharp
public struct Vec3
{
    public float X, Y, Z, W;
}
```

## Constructors

| Constructor | Description |
|-------------|-------------|
| `new Vec3()` | Create zero vector |
| `new Vec3(float x, float y, float z)` | Create vector with given components |
| `new Vec3(float x, float y, float z, float w)` | Create vector with W component |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| X | float | X component |
| Y | float | Y component |
| Z | float | Z component |
| W | float | W component (homogeneous coordinates) |
| Zero | Vec3 | Zero vector |
| One | Vec3 | One vector (1,1,1) |
| Forward | Vec3 | Forward vector (0,0,1) |
| Up | Vec3 | Up vector (0,1,0) |

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Dot | `float Dot(Vec3 v)` | Dot product |
| Cross | `Vec3 Cross(Vec3 v)` | Cross product |
| Normalize | `Vec3 Normalize()` | Normalize vector |
| NormalizeDangerous | `Vec3 NormalizeDangerous()` | Fast normalize (no zero check) |
| Length | `float Length` | Vector length |
| LengthSquared | `float LengthSquared` | Squared length |
| Distance | `float Distance(Vec3 v)` | Distance to another point |
| DistanceSquared | `float DistanceSquared(Vec3 v)` | Squared distance |
| Rotate | `Vec3 Rotate(Vec3 center, Vec3 axis, float angle)` | Rotate around axis |
| Lerp | `Vec3 Lerp(Vec3 v1, Vec3 v2, float t)` | Linear interpolation |

## Usage Example

```csharp
// Create position vector
Vec3 position = new Vec3(100f, 50f, 200f);

// Vector operations
Vec3 direction = target - origin;
float distance = direction.Normalize();
Vec3 moved = origin + direction * moveSpeed * deltaTime;

// Dot product for angle calculation
float dot = forward.Dot(otherDirection);

// Cross product for perpendicular direction
Vec3 cross = Vec3.Cross(up, forward);
```

## Game Development Usage

In Bannerlord, `Vec3` is widely used for:
- Agent and unit positions
- Movement direction and velocity
- Collision detection
- Camera control
- UI element positions
