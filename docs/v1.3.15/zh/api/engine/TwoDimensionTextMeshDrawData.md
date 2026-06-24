<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TwoDimensionTextMeshDrawData`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionTextMeshDrawData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct TwoDimensionTextMeshDrawData`
**Base:** 无
**File:** `TaleWorlds.Engine/TwoDimensionTextMeshDrawData.cs`

## 概述

`TwoDimensionTextMeshDrawData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TwoDimensionTextMeshDrawData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var value = new TwoDimensionTextMeshDrawData();
```

## 参见

- [完整类目录](../catalog)