---
title: "HitParticleResultData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HitParticleResultData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HitParticleResultData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct HitParticleResultData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/HitParticleResultData.cs`

## 概述

`HitParticleResultData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `HitParticleResultData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
var value = new HitParticleResultData();
```

## 参见

- [完整类目录](../catalog)