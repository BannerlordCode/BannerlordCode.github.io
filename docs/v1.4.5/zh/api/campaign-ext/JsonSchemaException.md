<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonSchemaException`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSchemaException

**Namespace:** Newtonsoft.Json.Schema
**Module:** Newtonsoft.Json
**Type:** `public class JsonSchemaException : JsonException`
**Base:** `JsonException`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Schema/JsonSchemaException.cs`

## 概述

`JsonSchemaException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `JsonSchemaException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LineNumber` | `public int LineNumber { get; }` |
| `LinePosition` | `public int LinePosition { get; }` |
| `Path` | `public string Path { get; }` |

## 使用示例

```csharp
try { CallJsonSchemaException(); } catch (JsonSchemaException exception) { Handle(exception); }
```

## 参见

- [完整类目录](../catalog)