<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ResultData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResultData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResultData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/ResultData.cs`

## 概述

`ResultData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ResultData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Errors` | `public string Errors { get; set; }` |
| `DLLs` | `public List<DLLResult> DLLs { get; set; }` |

## 主要方法

### AddDLLResult
`public void AddDLLResult(string dllName, bool isSafe, string information)`

**用途 / Purpose:** 向当前集合/状态中添加 `d l l result`。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new ResultData();
```

## 参见

- [完整类目录](../catalog)