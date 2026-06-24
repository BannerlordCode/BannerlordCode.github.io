<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PinnedArrayData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PinnedArrayData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PinnedArrayData<T>`
**Base:** 无
**File:** `TaleWorlds.Library/PinnedArrayData.cs`

## 概述

`PinnedArrayData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PinnedArrayData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Pinned` | `public bool Pinned { get; }` |
| `Pointer` | `public IntPtr Pointer { get; }` |
| `Array` | `public T Array { get; }` |
| `Array2D` | `public T Array2D { get; }` |
| `Handle` | `public GCHandle Handle { get; }` |

## 主要方法

### CheckIfTypeRequiresManualPinning
`public static bool CheckIfTypeRequiresManualPinning(Type type)`

**用途 / Purpose:** 处理 `check if type requires manual pinning` 相关逻辑。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

## 使用示例

```csharp
var value = new PinnedArrayData();
```

## 参见

- [完整类目录](../catalog)