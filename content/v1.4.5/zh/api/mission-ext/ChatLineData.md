---
title: "ChatLineData"
description: "ChatLineData 的自动生成类参考。"
---
# ChatLineData

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ChatLineData`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## 概述

`ChatLineData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ChatLineData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ChatLineData
`public struct ChatLineData(string text, uint color)`

**用途 / Purpose:** 获取或维护 「chat line data」 数据。

```csharp
// 先通过子系统 API 拿到 ChatLineData 实例
ChatLineData chatLineData = ...;
var result = chatLineData.ChatLineData("example", 0);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ChatLineData entry = ...;
```

## 参见

- [本区域目录](../)