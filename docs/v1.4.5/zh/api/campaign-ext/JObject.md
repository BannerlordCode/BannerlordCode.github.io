<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JObject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JObject

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JObject : JContainer, IDictionary<string, JToken?>, ICollection<KeyValuePair<string, JToken?>>, IEnumerable<KeyValuePair<string, JToken?>>, IEnumerable, INotifyPropertyChanged, ICustomTypeDescriptor, INotifyPropertyChanging`
**Base:** `JContainer`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JObject.cs`

## 概述

`JObject` 位于 `Newtonsoft.Json.Linq`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Linq` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public override JToken? this { get; }` |
| `this` | `public JToken? this { get; set; }` |

## 主要方法

### TryGetMember
`public override bool TryGetMember(JObject instance, GetMemberBinder binder, out object? result)`

**用途 / Purpose:** 尝试获取 `get member`，通常以 out 参数返回结果。

### TrySetMember
`public override bool TrySetMember(JObject instance, SetMemberBinder binder, object value)`

**用途 / Purpose:** 尝试获取 `set member`，通常以 out 参数返回结果。

### GetDynamicMemberNames
`public override IEnumerable<string> GetDynamicMemberNames(JObject instance)`

**用途 / Purpose:** 获取 `dynamic member names` 的当前值。

### WriteToAsync
`public override Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to async` 相关逻辑。

### LoadAsync
`public new static Task<JObject> LoadAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 加载 `async` 数据。

### LoadAsync
`public new static async Task<JObject> LoadAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 加载 `async` 数据。

### Properties
`public IEnumerable<JProperty> Properties()`

**用途 / Purpose:** 处理 `properties` 相关逻辑。

### Property
`public JProperty? Property(string name)`

**用途 / Purpose:** 处理 `property` 相关逻辑。

### Property
`public JProperty? Property(string name, StringComparison comparison)`

**用途 / Purpose:** 处理 `property` 相关逻辑。

### PropertyValues
`public JEnumerable<JToken> PropertyValues()`

**用途 / Purpose:** 处理 `property values` 相关逻辑。

### Load
`public new static JObject Load(JsonReader reader)`

**用途 / Purpose:** 加载 `load` 数据。

### Load
`public new static JObject Load(JsonReader reader, JsonLoadSettings? settings)`

**用途 / Purpose:** 加载 `load` 数据。

### Parse
`public new static JObject Parse(string json)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### Parse
`public new static JObject Parse(string json, JsonLoadSettings? settings)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### FromObject
`public new static JObject FromObject(object o)`

**用途 / Purpose:** 处理 `from object` 相关逻辑。

### FromObject
`public new static JObject FromObject(object o, JsonSerializer jsonSerializer)`

**用途 / Purpose:** 处理 `from object` 相关逻辑。

### WriteTo
`public override void WriteTo(JsonWriter writer, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### GetValue
`public JToken? GetValue(string? propertyName)`

**用途 / Purpose:** 获取 `value` 的当前值。

### GetValue
`public JToken? GetValue(string? propertyName, StringComparison comparison)`

**用途 / Purpose:** 获取 `value` 的当前值。

### TryGetValue
`public bool TryGetValue(string propertyName, StringComparison comparison, out JToken? value)`

**用途 / Purpose:** 尝试获取 `get value`，通常以 out 参数返回结果。

### Add
`public void Add(string propertyName, JToken? value)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### ContainsKey
`public bool ContainsKey(string propertyName)`

**用途 / Purpose:** 处理 `contains key` 相关逻辑。

### Remove
`public bool Remove(string propertyName)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### TryGetValue
`public bool TryGetValue(string propertyName, out JToken? value)`

**用途 / Purpose:** 尝试获取 `get value`，通常以 out 参数返回结果。

### GetEnumerator
`public IEnumerator<KeyValuePair<string, JToken?>> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

## 使用示例

```csharp
JObject example = JObject.this;
```

## 参见

- [完整类目录](../catalog)