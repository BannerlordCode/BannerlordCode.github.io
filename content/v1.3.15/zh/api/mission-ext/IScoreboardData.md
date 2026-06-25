---
title: "IScoreboardData"
description: "IScoreboardData 的自动生成类参考。"
---
# IScoreboardData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IScoreboardData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/IScoreboardData.cs`

## 概述

`IScoreboardData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `IScoreboardData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIScoreboardData service = ...;
```

## 参见

- [本区域目录](../)