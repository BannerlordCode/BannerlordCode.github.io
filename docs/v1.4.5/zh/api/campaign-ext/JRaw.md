<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JRaw`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JRaw

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JRaw : JValue`
**Base:** `JValue`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JRaw.cs`

## 概述

`JRaw` 位于 `Newtonsoft.Json.Linq`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Linq` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAsync
`public static async Task<JRaw> CreateAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 创建一个 `async` 实例或对象。

### Create
`public static JRaw Create(JsonReader reader)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

## 使用示例

```csharp
JRaw.CreateAsync(reader, default(CancellationToken));
```

## 参见

- [完整类目录](../catalog)