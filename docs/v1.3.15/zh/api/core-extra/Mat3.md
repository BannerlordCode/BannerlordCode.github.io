# Mat3 / 三维矩阵

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/Mat3.cs`
**Purpose**: 三维旋转和缩放矩阵 / 3D rotation and scale matrix

## 概述 / Overview

`Mat3` 是3x3矩阵结构体，用于游戏中的旋转和缩放变换。

`Mat3` is a 3x3 matrix struct for rotation and scale transformations in games.

## 属性 / Properties

| Property | Type | Description |
|----------|------|-------------|
| S | Vec3 | Scale vector / 缩放向量 |
| F | Vec3 | Forward vector / 前向向量 |
| U | Vec3 | Up vector / 上向量 |

## 方法 / Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Transform | `Vec3 Transform(Vec3 v)` | 变换向量 / Transform vector |
| MakeIdentity | `void MakeIdentity()` | 创建单位矩阵 / Create identity matrix |
| Rotated | `Mat3 Rotated(float angle)` | 旋转变换 / Rotation transform |

## 代码示例 / Code Example

```csharp
Mat3 rotation = Mat3.ConstructRotationVec(up, angle);
Vec3 transformed = rotation.Transform(vector);
```
