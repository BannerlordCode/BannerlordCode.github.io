---
title: "JArray"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JArray`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JArray

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JArray : JContainer, IList<JToken>, ICollection<JToken>, IEnumerable<JToken>, IEnumerable`
**Base:** `JContainer`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JArray.cs`

## 概述

`JArray` 位于 `Newtonsoft.Json.Linq`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Linq` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public override JToken? this { get; }` |
| `this` | `public JToken this { get; set; }` |

## 主要方法

### WriteToAsync
`public override async Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to async` 相关逻辑。

### LoadAsync
`public new static Task<JArray> LoadAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 加载 `async` 数据。

### LoadAsync
`public new static async Task<JArray> LoadAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 加载 `async` 数据。

### Load
`public new static JArray Load(JsonReader reader)`

**用途 / Purpose:** 加载 `load` 数据。

### Load
`public new static JArray Load(JsonReader reader, JsonLoadSettings? settings)`

**用途 / Purpose:** 加载 `load` 数据。

### Parse
`public new static JArray Parse(string json)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### Parse
`public new static JArray Parse(string json, JsonLoadSettings? settings)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### FromObject
`public new static JArray FromObject(object o)`

**用途 / Purpose:** 处理 `from object` 相关逻辑。

### FromObject
`public new static JArray FromObject(object o, JsonSerializer jsonSerializer)`

**用途 / Purpose:** 处理 `from object` 相关逻辑。

### WriteTo
`public override void WriteTo(JsonWriter writer, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### IndexOf
`public int IndexOf(JToken item)`

**用途 / Purpose:** 处理 `index of` 相关逻辑。

### Insert
`public void Insert(int index, JToken item)`

**用途 / Purpose:** 处理 `insert` 相关逻辑。

### RemoveAt
`public void RemoveAt(int index)`

**用途 / Purpose:** 从当前集合/状态中移除 `at`。

### GetEnumerator
`public IEnumerator<JToken> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### Add
`public void Add(JToken item)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### Contains
`public bool Contains(JToken item)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### CopyTo
`public void CopyTo(JToken array, int arrayIndex)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Remove
`public bool Remove(JToken item)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

## 使用示例

```csharp
JArray example = JArray.this;
```

## 参见

- [完整类目录](../catalog)