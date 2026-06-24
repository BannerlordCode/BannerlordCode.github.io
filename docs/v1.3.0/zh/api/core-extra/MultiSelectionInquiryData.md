<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiSelectionInquiryData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiSelectionInquiryData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MultiSelectionInquiryData`
**Base:** 无
**File:** `TaleWorlds.Core/MultiSelectionInquiryData.cs`

## 概述

`MultiSelectionInquiryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MultiSelectionInquiryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same content with`。

## 使用示例

```csharp
var value = new MultiSelectionInquiryData();
```

## 参见

- [完整类目录](../catalog)