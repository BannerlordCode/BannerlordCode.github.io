<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementException`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementException

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementException : SystemException`
**Base:** `SystemException`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementException.cs`

## 概述

`ManagementException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `ManagementException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ErrorCode` | `public ManagementStatus ErrorCode { get; }` |
| `ErrorInformation` | `public ManagementBaseObject ErrorInformation { get; }` |

## 主要方法

### GetObjectData
`public override void GetObjectData(SerializationInfo info, StreamingContext context)`

**用途 / Purpose:** 获取 `object data` 的当前值。

## 使用示例

```csharp
try { CallManagementException(); } catch (ManagementException exception) { Handle(exception); }
```

## 参见

- [完整类目录](../catalog)