<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedNumericOptionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedNumericOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`

## 概述

`ManagedNumericOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ManagedNumericOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMinValue
`public float GetMinValue()`

**用途 / Purpose:** 获取 `min value` 的当前值。

### GetMaxValue
`public float GetMaxValue()`

**用途 / Purpose:** 获取 `max value` 的当前值。

### GetIsDiscrete
`public bool GetIsDiscrete()`

**用途 / Purpose:** 获取 `is discrete` 的当前值。

### GetDiscreteIncrementInterval
`public int GetDiscreteIncrementInterval()`

**用途 / Purpose:** 获取 `discrete increment interval` 的当前值。

### GetShouldUpdateContinuously
`public bool GetShouldUpdateContinuously()`

**用途 / Purpose:** 获取 `should update continuously` 的当前值。

## 使用示例

```csharp
var value = new ManagedNumericOptionData();
```

## 参见

- [完整类目录](../catalog)