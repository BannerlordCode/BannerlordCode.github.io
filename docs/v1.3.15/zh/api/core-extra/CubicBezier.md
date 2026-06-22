<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CubicBezier`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CubicBezier

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`CubicBezier` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### CreateEase

```csharp
public static CubicBezier CreateEase(double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)
```

### CreateYBeginToYEndWithRelativeControlDirs

```csharp
public static CubicBezier CreateYBeginToYEndWithRelativeControlDirs(double yBegin, double yEnd, double controlDir1X, double controlDir1Y, double controlDir2X, double controlDir2Y)
```

### CreateYBeginToYEnd

```csharp
public static CubicBezier CreateYBeginToYEnd(double yBegin, double yEnd, double controlPoint1X, double controlPoint1Y, double controlPoint2X, double controlPoint2Y)
```

### Sample

```csharp
public double Sample(double x)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)