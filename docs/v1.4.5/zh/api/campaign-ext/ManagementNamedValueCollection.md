<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementNamedValueCollection`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementNamedValueCollection

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementNamedValueCollection : NameObjectCollectionBase`
**Base:** `NameObjectCollectionBase`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementNamedValueCollection.cs`

## 概述

`ManagementNamedValueCollection` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public object this { get; }` |

## 主要方法

### Add
`public void Add(string name, object value)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Clone
`public ManagementNamedValueCollection Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### Remove
`public void Remove(string name)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### RemoveAll
`public void RemoveAll()`

**用途 / Purpose:** 从当前集合/状态中移除 `all`。

## 使用示例

```csharp
var value = new ManagementNamedValueCollection();
value.Add("example", value);
```

## 参见

- [完整类目录](../catalog)