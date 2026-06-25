---
title: "Vec3i"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Vec3i`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Vec3i

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec3i`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/Vec3i.cs`

## 概述

`Vec3i` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public int this { get; set; }` |

## 主要方法

### Vec3i
`public struct Vec3i(int x = 0, int y = 0, int z = 0)`

**用途 / Purpose:** 处理 `vec3i` 相关逻辑。

### ToVec3
`public Vec3 ToVec3()`

**用途 / Purpose:** 处理 `to vec3` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new Vec3i();
value.Vec3i(0, 0, 0);
```

## 参见

- [完整类目录](../catalog)