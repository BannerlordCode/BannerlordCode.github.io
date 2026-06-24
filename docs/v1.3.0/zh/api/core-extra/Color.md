<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Color`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Color

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Color`
**Base:** 无
**File:** `TaleWorlds.Library/Color.cs`

## 概述

`Color` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Black` | `public static Color Black { get; }` |
| `White` | `public static Color White { get; }` |

## 主要方法

### ToVector3
`public Vector3 ToVector3()`

**用途 / Purpose:** 处理 `to vector3` 相关逻辑。

### ToVec3
`public Vec3 ToVec3()`

**用途 / Purpose:** 处理 `to vec3` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### FromVector3
`public static Color FromVector3(Vector3 vector3)`

**用途 / Purpose:** 处理 `from vector3` 相关逻辑。

### FromVector3
`public static Color FromVector3(Vec3 vector3)`

**用途 / Purpose:** 处理 `from vector3` 相关逻辑。

### Length
`public float Length()`

**用途 / Purpose:** 处理 `length` 相关逻辑。

### ToUnsignedInteger
`public uint ToUnsignedInteger()`

**用途 / Purpose:** 处理 `to unsigned integer` 相关逻辑。

### FromUint
`public static Color FromUint(uint color)`

**用途 / Purpose:** 处理 `from uint` 相关逻辑。

### FromHSV
`public static Color FromHSV(float h, float s, float v)`

**用途 / Purpose:** 处理 `from h s v` 相关逻辑。

### ConvertStringToColor
`public static Color ConvertStringToColor(string color)`

**用途 / Purpose:** 处理 `convert string to color` 相关逻辑。

### Lerp
`public static Color Lerp(Color start, Color end, float ratio)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### UIntToColorString
`public static string UIntToColorString(uint color)`

**用途 / Purpose:** 处理 `u int to color string` 相关逻辑。

## 使用示例

```csharp
var value = new Color();
value.ToVector3();
```

## 参见

- [完整类目录](../catalog)