# Vec2 / 二维向量

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/Vec2.cs`
**Purpose**: 二维向量数学库 / 2D vector math library

## 概述 / Overview

`Vec2` 是二维向量结构体，用于2D游戏开发中的位置、方向和缩放计算。

`Vec2` is a 2D vector struct for positions, directions, and scaling in 2D game development.

## 属性 / Properties

| Property | Type | Description |
|----------|------|-------------|
| X | float | X分量 / X component |
| Y | float | Y分量 / Y component |
| Zero | Vec2 | 零向量 / Zero vector |

## 方法 / Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Distance | `float Distance(Vec2 v)` | 计算距离 / Calculate distance |
| Normalize | `Vec2 Normalize()` | 归一化 / Normalize |

## 代码示例 / Code Example

```csharp
Vec2 position = new Vec2(100f, 50f);
```
