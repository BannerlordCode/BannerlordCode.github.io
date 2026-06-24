<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonNameTable`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonNameTable

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonNameTable`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonNameTable.cs`

## 概述

`JsonNameTable` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Get
`public abstract string? Get(char key, int start, int length)`

**用途 / Purpose:** 获取 `get` 的当前值。

## 使用示例

```csharp
var implementation = new CustomJsonNameTable();
```

## 参见

- [完整类目录](../catalog)