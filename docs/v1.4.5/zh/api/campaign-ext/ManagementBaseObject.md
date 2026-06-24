<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementBaseObject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementBaseObject

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementBaseObject : Component, ICloneable, ISerializable`
**Base:** `Component`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementBaseObject.cs`

## 概述

`ManagementBaseObject` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClassPath` | `public virtual ManagementPath ClassPath { get; }` |
| `this` | `public object this { get; set; }` |
| `Properties` | `public virtual PropertyDataCollection Properties { get; }` |
| `Qualifiers` | `public virtual QualifierDataCollection Qualifiers { get; }` |
| `SystemProperties` | `public virtual PropertyDataCollection SystemProperties { get; }` |

## 主要方法

### Clone
`public virtual object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### CompareTo
`public bool CompareTo(ManagementBaseObject otherObject, ComparisonSettings settings)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

### Dispose
`public new void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### GetPropertyQualifierValue
`public object GetPropertyQualifierValue(string propertyName, string qualifierName)`

**用途 / Purpose:** 获取 `property qualifier value` 的当前值。

### GetPropertyValue
`public object GetPropertyValue(string propertyName)`

**用途 / Purpose:** 获取 `property value` 的当前值。

### GetQualifierValue
`public object GetQualifierValue(string qualifierName)`

**用途 / Purpose:** 获取 `qualifier value` 的当前值。

### GetText
`public string GetText(TextFormat format)`

**用途 / Purpose:** 获取 `text` 的当前值。

### IntPtr
`public static explicit operator IntPtr(ManagementBaseObject managementObject)`

**用途 / Purpose:** 处理 `int ptr` 相关逻辑。

### SetPropertyQualifierValue
`public void SetPropertyQualifierValue(string propertyName, string qualifierName, object qualifierValue)`

**用途 / Purpose:** 设置 `property qualifier value` 的值或状态。

### SetPropertyValue
`public void SetPropertyValue(string propertyName, object propertyValue)`

**用途 / Purpose:** 设置 `property value` 的值或状态。

### SetQualifierValue
`public void SetQualifierValue(string qualifierName, object qualifierValue)`

**用途 / Purpose:** 设置 `qualifier value` 的值或状态。

## 使用示例

```csharp
var value = new ManagementBaseObject();
value.Clone();
```

## 参见

- [完整类目录](../catalog)