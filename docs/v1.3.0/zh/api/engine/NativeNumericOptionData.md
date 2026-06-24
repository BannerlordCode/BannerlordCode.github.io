<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeNumericOptionData`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NativeNumericOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeNumericOptionData : NativeOptionData, INumericOptionData, IOptionData`
**Base:** `NativeOptionData`
**File:** `TaleWorlds.Engine/Options/NativeNumericOptionData.cs`

## 概述

`NativeNumericOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `NativeNumericOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
NativeNumericOptionData example = NativeNumericOptionData.Value;
```

## 参见

- [完整类目录](../catalog)