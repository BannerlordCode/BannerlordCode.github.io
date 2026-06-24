<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RelationshipQuery`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RelationshipQuery

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class RelationshipQuery : WqlObjectQuery`
**Base:** `WqlObjectQuery`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/RelationshipQuery.cs`

## 概述

`RelationshipQuery` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClassDefinitionsOnly` | `public bool ClassDefinitionsOnly { get; set; }` |
| `IsSchemaQuery` | `public bool IsSchemaQuery { get; set; }` |
| `RelationshipClass` | `public string RelationshipClass { get; set; }` |
| `RelationshipQualifier` | `public string RelationshipQualifier { get; set; }` |
| `SourceObject` | `public string SourceObject { get; set; }` |
| `ThisRole` | `public string ThisRole { get; set; }` |

## 主要方法

### Clone
`public override object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

## 使用示例

```csharp
var value = new RelationshipQuery();
value.Clone();
```

## 参见

- [完整类目录](../catalog)