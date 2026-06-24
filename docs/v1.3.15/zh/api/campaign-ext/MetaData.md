<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MetaData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MetaData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class MetaData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/MetaData.cs`

## 概述

`MetaData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MetaData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `this` | `public string this { get; set; }` |
| `Keys` | `public Dictionary<string, string>.KeyCollection Keys { get; }` |

## 主要方法

### Add
`public void Add(string key, string value)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### TryGetValue
`public bool TryGetValue(string key, out string value)`

**用途 / Purpose:** 尝试获取 `get value`，通常以 out 参数返回结果。

### Serialize
`public void Serialize(Stream stream)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Deserialize
`public static MetaData Deserialize(Stream stream)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new MetaData();
```

## 参见

- [完整类目录](../catalog)