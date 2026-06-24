<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JConstructor`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JConstructor

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JConstructor : JContainer`
**Base:** `JContainer`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JConstructor.cs`

## 概述

`JConstructor` 位于 `Newtonsoft.Json.Linq`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Linq` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string? Name { get; set; }` |
| `this` | `public override JToken? this { get; }` |

## 主要方法

### WriteToAsync
`public override async Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to async` 相关逻辑。

### LoadAsync
`public new static Task<JConstructor> LoadAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 加载 `async` 数据。

### LoadAsync
`public new static async Task<JConstructor> LoadAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 加载 `async` 数据。

### WriteTo
`public override void WriteTo(JsonWriter writer, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### Load
`public new static JConstructor Load(JsonReader reader)`

**用途 / Purpose:** 加载 `load` 数据。

### Load
`public new static JConstructor Load(JsonReader reader, JsonLoadSettings? settings)`

**用途 / Purpose:** 加载 `load` 数据。

## 使用示例

```csharp
var value = new JConstructor();
value.WriteToAsync(writer, cancellationToken, converters);
```

## 参见

- [完整类目录](../catalog)