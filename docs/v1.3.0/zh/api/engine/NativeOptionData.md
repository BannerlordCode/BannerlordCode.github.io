<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeOptionData`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NativeOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public abstract class NativeOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.Engine/Options/NativeOptionData.cs`

## 概述

`NativeOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `NativeOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDefaultValue
`public virtual float GetDefaultValue()`

**用途 / Purpose:** 获取 `default value` 的当前值。

### Commit
`public void Commit()`

**用途 / Purpose:** 处理 `commit` 相关逻辑。

### GetValue
`public float GetValue(bool forceRefresh)`

**用途 / Purpose:** 获取 `value` 的当前值。

### SetValue
`public void SetValue(float value)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### GetOptionType
`public object GetOptionType()`

**用途 / Purpose:** 获取 `option type` 的当前值。

### IsNative
`public bool IsNative()`

**用途 / Purpose:** 处理 `is native` 相关逻辑。

### IsAction
`public bool IsAction()`

**用途 / Purpose:** 处理 `is action` 相关逻辑。

### GetIsDisabledAndReasonID
`public ValueTuple<string, bool> GetIsDisabledAndReasonID()`

**用途 / Purpose:** 获取 `is disabled and reason i d` 的当前值。

## 使用示例

```csharp
var implementation = new CustomNativeOptionData();
```

## 参见

- [完整类目录](../catalog)