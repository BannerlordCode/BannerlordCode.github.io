<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RestData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RestData

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class RestData`
**Base:** 无
**File:** `TaleWorlds.Diamond/Rest/RestData.cs`

## 概述

`RestData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `RestData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeName` | `public string TypeName { get; set; }` |

## 主要方法

### SerializeAsJson
`public string SerializeAsJson()`

**用途 / Purpose:** 处理 `serialize as json` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomRestData();
```

## 参见

- [完整类目录](../catalog)