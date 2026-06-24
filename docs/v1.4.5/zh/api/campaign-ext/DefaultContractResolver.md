<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultContractResolver`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultContractResolver

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class DefaultContractResolver : IContractResolver`
**Base:** `IContractResolver`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/DefaultContractResolver.cs`

## 概述

`DefaultContractResolver` 位于 `Newtonsoft.Json.Serialization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Serialization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultMembersSearchFlags` | `public BindingFlags DefaultMembersSearchFlags { get; set; }` |
| `SerializeCompilerGeneratedMembers` | `public bool SerializeCompilerGeneratedMembers { get; set; }` |
| `IgnoreSerializableInterface` | `public bool IgnoreSerializableInterface { get; set; }` |
| `IgnoreSerializableAttribute` | `public bool IgnoreSerializableAttribute { get; set; }` |
| `IgnoreIsSpecifiedMembers` | `public bool IgnoreIsSpecifiedMembers { get; set; }` |
| `IgnoreShouldSerializeMembers` | `public bool IgnoreShouldSerializeMembers { get; set; }` |
| `NamingStrategy` | `public NamingStrategy? NamingStrategy { get; set; }` |

## 主要方法

### GetEnumerator
`public IEnumerator<KeyValuePair<object, object>> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### ResolveContract
`public virtual JsonContract ResolveContract(Type type)`

**用途 / Purpose:** 处理 `resolve contract` 相关逻辑。

### GetResolvedPropertyName
`public string GetResolvedPropertyName(string propertyName)`

**用途 / Purpose:** 获取 `resolved property name` 的当前值。

## 使用示例

```csharp
var value = new DefaultContractResolver();
value.GetEnumerator();
```

## 参见

- [完整类目录](../catalog)