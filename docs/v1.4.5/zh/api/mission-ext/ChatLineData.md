<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChatLineData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ChatLineData

**命名空间:** TaleWorlds.MountAndBlade.GauntletUI
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct ChatLineData`
**领域:** mission-ext

## 概述

`ChatLineData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ChatLineData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ChatLineData
`public struct ChatLineData(string text, uint color)`

**用途 / Purpose:** 处理 `chat line data` 相关逻辑。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

## 使用示例

```csharp
var value = new ChatLineData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
