<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementPath`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementPath

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementPath : ICloneable`
**Base:** `ICloneable`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementPath.cs`

## 概述

`ManagementPath` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClassName` | `public string ClassName { get; set; }` |
| `DefaultPath` | `public static ManagementPath DefaultPath { get; set; }` |
| `IsClass` | `public bool IsClass { get; }` |
| `IsInstance` | `public bool IsInstance { get; }` |
| `IsSingleton` | `public bool IsSingleton { get; }` |
| `NamespacePath` | `public string NamespacePath { get; set; }` |
| `Path` | `public string Path { get; set; }` |
| `RelativePath` | `public string RelativePath { get; set; }` |
| `Server` | `public string Server { get; set; }` |

## 主要方法

### Clone
`public ManagementPath Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### SetAsClass
`public void SetAsClass()`

**用途 / Purpose:** 设置 `as class` 的值或状态。

### SetAsSingleton
`public void SetAsSingleton()`

**用途 / Purpose:** 设置 `as singleton` 的值或状态。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new ManagementPath();
value.Clone();
```

## 参见

- [完整类目录](../catalog)