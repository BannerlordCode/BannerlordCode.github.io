<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatrixExtensions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MatrixExtensions

**命名空间:** TaleWorlds.TwoDimension.Standalone
**模块:** TaleWorlds.TwoDimension
**类型:** `public static class MatrixExtensions`
**领域:** campaign-ext

## 概述

`MatrixExtensions` 位于 `TaleWorlds.TwoDimension.Standalone`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToMatrix4x4
`public static Matrix4x4 ToMatrix4x4(this MatrixFrame matrixFrame)`

**用途 / Purpose:** 处理 `to matrix4x4` 相关逻辑。

### ToMatrixFrame
`public static MatrixFrame ToMatrixFrame(this Matrix4x4 matrix)`

**用途 / Purpose:** 处理 `to matrix frame` 相关逻辑。

### AreAllComponentsValid
`public static bool AreAllComponentsValid(this Matrix4x4 matrix)`

**用途 / Purpose:** 处理 `are all components valid` 相关逻辑。

### AreAllComponentsValid
`public static bool AreAllComponentsValid(this MatrixFrame matrix)`

**用途 / Purpose:** 处理 `are all components valid` 相关逻辑。

### CreateOrthographicOffCenter
`public static MatrixFrame CreateOrthographicOffCenter(float left, float right, float bottom, float top, float zNearPlane, float zFarPlane)`

**用途 / Purpose:** 创建一个 `orthographic off center` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MatrixExtensions.ToMatrix4x4(matrixFrame);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
