<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JContainer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JContainer

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public abstract class JContainer : JToken, IList<JToken>, ICollection<JToken>, IEnumerable<JToken>, IEnumerable, ITypedList, IBindingList, ICollection, IList, INotifyCollectionChanged`
**Base:** `JToken`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JContainer.cs`

## 概述

`JContainer` 位于 `Newtonsoft.Json.Linq`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Linq` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `First` | `public override JToken? First { get; }` |
| `Last` | `public override JToken? Last { get; }` |
| `ListChanged` | `public event ListChangedEventHandler ListChanged { get; }` |
| `AddingNew` | `public event AddingNewEventHandler AddingNew { get; }` |
| `CollectionChanged` | `public event NotifyCollectionChangedEventHandler CollectionChanged { get; }` |

## 主要方法

### Children
`public override JEnumerable<JToken> Children()`

**用途 / Purpose:** 处理 `children` 相关逻辑。

### Descendants
`public IEnumerable<JToken> Descendants()`

**用途 / Purpose:** 处理 `descendants` 相关逻辑。

### DescendantsAndSelf
`public IEnumerable<JToken> DescendantsAndSelf()`

**用途 / Purpose:** 处理 `descendants and self` 相关逻辑。

### Add
`public virtual void Add(object? content)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### AddFirst
`public void AddFirst(object? content)`

**用途 / Purpose:** 向当前集合/状态中添加 `first`。

### CreateWriter
`public JsonWriter CreateWriter()`

**用途 / Purpose:** 创建一个 `writer` 实例或对象。

### ReplaceAll
`public void ReplaceAll(object content)`

**用途 / Purpose:** 处理 `replace all` 相关逻辑。

### RemoveAll
`public void RemoveAll()`

**用途 / Purpose:** 从当前集合/状态中移除 `all`。

### Merge
`public void Merge(object content)`

**用途 / Purpose:** 处理 `merge` 相关逻辑。

### Merge
`public void Merge(object content, JsonMergeSettings? settings)`

**用途 / Purpose:** 处理 `merge` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomJContainer();
```

## 参见

- [完整类目录](../catalog)