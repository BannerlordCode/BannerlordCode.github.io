---
title: "MatrixFrame"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatrixFrame`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MatrixFrame

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MatrixFrame`
**Base:** 无
**File:** `TaleWorlds.Library/MatrixFrame.cs`

## 概述

`MatrixFrame` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Identity` | `public static MatrixFrame Identity { get; }` |
| `Zero` | `public static MatrixFrame Zero { get; }` |
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `IsZero` | `public bool IsZero { get; }` |
| `this` | `public Vec3 this { get; }` |
| `this` | `public float this { get; }` |

## 主要方法

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

**用途 / Purpose:** 处理 `transform to parent` 相关逻辑。

### TransformToParent
`public Vec2 TransformToParent(in Vec2 v)`

**用途 / Purpose:** 处理 `transform to parent` 相关逻辑。

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

**用途 / Purpose:** 处理 `transform to local` 相关逻辑。

### TransformToLocalNonUnit
`public Vec3 TransformToLocalNonUnit(in Vec3 v)`

**用途 / Purpose:** 处理 `transform to local non unit` 相关逻辑。

### NearlyEquals
`public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)`

**用途 / Purpose:** 处理 `nearly equals` 相关逻辑。

### TransformToLocalNonOrthogonal
`public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)`

**用途 / Purpose:** 处理 `transform to local non orthogonal` 相关逻辑。

### TransformToLocalNonOrthogonal
`public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)`

**用途 / Purpose:** 处理 `transform to local non orthogonal` 相关逻辑。

### Lerp
`public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### LerpNonOrthogonal
`public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**用途 / Purpose:** 处理 `lerp non orthogonal` 相关逻辑。

### Slerp
`public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**用途 / Purpose:** 处理 `slerp` 相关逻辑。

### TransformToParent
`public MatrixFrame TransformToParent(in MatrixFrame m)`

**用途 / Purpose:** 处理 `transform to parent` 相关逻辑。

### TransformToLocal
`public MatrixFrame TransformToLocal(in MatrixFrame m)`

**用途 / Purpose:** 处理 `transform to local` 相关逻辑。

### TransformToParentWithW
`public Vec3 TransformToParentWithW(Vec3 _s)`

**用途 / Purpose:** 处理 `transform to parent with w` 相关逻辑。

### GetUnitRotFrame
`public MatrixFrame GetUnitRotFrame(float removedScale)`

**用途 / Purpose:** 获取 `unit rot frame` 的当前值。

### InverseFast
`public MatrixFrame InverseFast()`

**用途 / Purpose:** 处理 `inverse fast` 相关逻辑。

### Inverse
`public MatrixFrame Inverse()`

**用途 / Purpose:** 处理 `inverse` 相关逻辑。

### Determinant4X4
`public float Determinant4X4()`

**用途 / Purpose:** 处理 `determinant4 x4` 相关逻辑。

### Rotate
`public void Rotate(float radian, in Vec3 axis)`

**用途 / Purpose:** 处理 `rotate` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Strafe
`public MatrixFrame Strafe(float a)`

**用途 / Purpose:** 处理 `strafe` 相关逻辑。

### Advance
`public MatrixFrame Advance(float a)`

**用途 / Purpose:** 处理 `advance` 相关逻辑。

### Elevate
`public MatrixFrame Elevate(float a)`

**用途 / Purpose:** 处理 `elevate` 相关逻辑。

### Scale
`public void Scale(in Vec3 scalingVector)`

**用途 / Purpose:** 处理 `scale` 相关逻辑。

### GetScale
`public Vec3 GetScale()`

**用途 / Purpose:** 获取 `scale` 的当前值。

### CreateLookAt
`public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)`

**用途 / Purpose:** 创建一个 `look at` 实例或对象。

### CenterFrameOfTwoPoints
`public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)`

**用途 / Purpose:** 处理 `center frame of two points` 相关逻辑。

### Fill
`public void Fill()`

**用途 / Purpose:** 处理 `fill` 相关逻辑。

## 使用示例

```csharp
var value = new MatrixFrame();
value.TransformToParent(v);
```

## 参见

- [完整类目录](../catalog)