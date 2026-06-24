<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BsonReader`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BsonReader

**Namespace:** Newtonsoft.Json.Bson
**Module:** Newtonsoft.Json
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Bson/BsonReader.cs`

## 概述

`BsonReader` 位于 `Newtonsoft.Json.Bson`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Bson` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `JsonNet35BinaryCompatibility` | `public bool JsonNet35BinaryCompatibility { get; set; }` |
| `ReadRootValueAsArray` | `public bool ReadRootValueAsArray { get; set; }` |
| `DateTimeKindHandling` | `public DateTimeKind DateTimeKindHandling { get; set; }` |

## 主要方法

### Read
`public override bool Read()`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### Close
`public override void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

## 使用示例

```csharp
var value = new BsonReader();
value.Read();
```

## 参见

- [完整类目录](../catalog)