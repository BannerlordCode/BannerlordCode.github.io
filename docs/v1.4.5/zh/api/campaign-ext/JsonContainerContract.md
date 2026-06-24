<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonContainerContract`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonContainerContract

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class JsonContainerContract : JsonContract`
**Base:** `JsonContract`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/JsonContainerContract.cs`

## 概述

`JsonContainerContract` 位于 `Newtonsoft.Json.Serialization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Serialization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemConverter` | `public JsonConverter? ItemConverter { get; set; }` |
| `ItemIsReference` | `public bool? ItemIsReference { get; set; }` |
| `ItemReferenceLoopHandling` | `public ReferenceLoopHandling? ItemReferenceLoopHandling { get; set; }` |
| `ItemTypeNameHandling` | `public TypeNameHandling? ItemTypeNameHandling { get; set; }` |

## 使用示例

```csharp
var example = new JsonContainerContract();
```

## 参见

- [完整类目录](../catalog)