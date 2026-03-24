# Vec3 / 三维向量

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/Vec3.cs`
**Purpose**: 三维向量数学库，用于3D游戏开发中的位置、方向和缩放计算 / 3D vector math library for positions, directions, and scaling in 3D game development

## 概述 / Overview

`Vec3` 是Bannerlord中的三维向量结构体，提供完整的3D数学运算支持。它用于表示游戏世界中的位置、方向、旋转和缩放。

`Vec3` is a 3D vector struct in Bannerlord providing complete 3D math operations. It represents positions, directions, rotations, and scaling in the game world.

## 结构 / Struct

```csharp
public struct Vec3
{
    public float X, Y, Z, W;
}
```

## 构造函数 / Constructors

| Constructor | Description |
|-------------|-------------|
| `new Vec3()` | 创建零向量 / Create zero vector |
| `new Vec3(float x, float y, float z)` | 创建指定分量的向量 / Create vector with given components |
| `new Vec3(float x, float y, float z, float w)` | 创建带W分量的向量 / Create vector with W component |

## 属性 / Properties

| Property | Type | Description |
|----------|------|-------------|
| X | float | X分量 / X component |
| Y | float | Y分量 / Y component |
| Z | float | Z分量 / Z component |
| W | float | W分量（用于齐次坐标）/ W component (for homogeneous coordinates) |
| Zero | Vec3 | 零向量 / Zero vector |
| One | Vec3 | 单位向量(1,1,1) / One vector (1,1,1) |
| Forward | Vec3 | 前向向量(0,0,1) / Forward vector (0,0,1) |
| Up | Vec3 | 上向量(0,1,0) / Up vector (0,1,0) |

## 方法 / Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Dot | `float Dot(Vec3 v)` | 点积 / Dot product |
| Cross | `Vec3 Cross(Vec3 v)` | 叉积 / Cross product |
| Normalize | `Vec3 Normalize()` | 归一化向量 / Normalize vector |
| NormalizeDangerous | `Vec3 NormalizeDangerous()` | 快速归一化（不检查零向量）/ Fast normalize (no zero check) |
| Length | `float Length` | 向量长度 / Vector length |
| LengthSquared | `float LengthSquared` | 长度平方 / Squared length |
| Distance | `float Distance(Vec3 v)` | 到另一点的距离 / Distance to another point |
| DistanceSquared | `float DistanceSquared(Vec3 v)` | 距离平方 / Squared distance |
| Rotate | `Vec3 Rotate(Vec3 center, Vec3 axis, float angle)` | 绕轴旋转 / Rotate around axis |
| Lerp | `Vec3 Lerp(Vec3 v1, Vec3 v2, float t)` | 线性插值 / Linear interpolation |

## 使用示例 / Usage Example

```csharp
// 创建位置向量
Vec3 position = new Vec3(100f, 50f, 200f);

// 向量运算
Vec3 direction = target - origin;
float distance = direction.Normalize();
Vec3 moved = origin + direction * moveSpeed * deltaTime;

// 点积计算角度
float dot = forward.Dot(otherDirection);

// 叉积计算垂直方向
Vec3 cross = Vec3.Cross(up, forward);
```

## 游戏开发使用 / Game Development Usage

在Bannerlord中，`Vec3`广泛用于：
- 角色和单位的位置 / Agent and unit positions
- 移动方向和速度 / Movement direction and velocity
- 碰撞检测 / Collision detection
- 摄像机控制 / Camera control
- UI元素的位置 / UI element positions
