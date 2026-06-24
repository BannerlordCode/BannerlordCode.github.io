<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PropertyChangedWithValueEventArgs`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyChangedWithValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithValueEventArgs`
**Base:** 无
**File:** `TaleWorlds.Library/PropertyChangedWithValueEventArgs.cs`

## 概述

`PropertyChangedWithValueEventArgs` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public object Value { get; }` |

## 使用示例

```csharp
var value = new PropertyChangedWithValueEventArgs();
```

## 参见

- [完整类目录](../catalog)