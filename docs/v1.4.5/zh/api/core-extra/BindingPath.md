<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BindingPath`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BindingPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class BindingPath`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/BindingPath.cs`

## 概述

`BindingPath` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Nodes` | `public string Nodes { get; }` |
| `LastNode` | `public string LastNode { get; }` |
| `SubPath` | `public BindingPath SubPath { get; }` |
| `ParentPath` | `public BindingPath ParentPath { get; }` |

## 主要方法

### CreateFromProperty
`public static BindingPath CreateFromProperty(string propertyName)`

**用途 / Purpose:** 创建一个 `from property` 实例或对象。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### IsRelatedWithPathAsString
`public static bool IsRelatedWithPathAsString(string path, string referencePath)`

**用途 / Purpose:** 处理 `is related with path as string` 相关逻辑。

### IsRelatedWithPath
`public static bool IsRelatedWithPath(string path, BindingPath referencePath)`

**用途 / Purpose:** 处理 `is related with path` 相关逻辑。

### IsRelatedWith
`public bool IsRelatedWith(BindingPath referencePath)`

**用途 / Purpose:** 处理 `is related with` 相关逻辑。

### DecrementIfRelatedWith
`public void DecrementIfRelatedWith(BindingPath path, int startIndex)`

**用途 / Purpose:** 处理 `decrement if related with` 相关逻辑。

### Simplify
`public BindingPath Simplify()`

**用途 / Purpose:** 处理 `simplify` 相关逻辑。

### Append
`public BindingPath Append(BindingPath bindingPath)`

**用途 / Purpose:** 处理 `append` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
BindingPath.CreateFromProperty("example");
```

## 参见

- [完整类目录](../catalog)