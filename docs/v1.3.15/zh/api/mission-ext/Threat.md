<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Threat`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Threat

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Threat`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Threat.cs`

## 概述

`Threat` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `TargetingPosition` | `public Vec3 TargetingPosition { get; }` |

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ComputeGlobalTargetingBoundingBoxMinMax
`public ValueTuple<Vec3, Vec3> ComputeGlobalTargetingBoundingBoxMinMax()`

**用途 / Purpose:** 处理 `compute global targeting bounding box min max` 相关逻辑。

### GetGlobalVelocity
`public Vec3 GetGlobalVelocity()`

**用途 / Purpose:** 获取 `global velocity` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### DisplayDebugInfo
`public void DisplayDebugInfo()`

**用途 / Purpose:** 处理 `display debug info` 相关逻辑。

## 使用示例

```csharp
var value = new Threat();
value.GetHashCode();
```

## 参见

- [完整类目录](../catalog)