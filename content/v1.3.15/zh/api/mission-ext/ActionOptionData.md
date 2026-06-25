---
title: "ActionOptionData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ActionOptionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ActionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`

## 概述

`ActionOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ActionOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnAction` | `public Action OnAction { get; }` |

## 主要方法

### Commit
`public void Commit()`

**用途 / Purpose:** 处理 `commit` 相关逻辑。

### GetDefaultValue
`public float GetDefaultValue()`

**用途 / Purpose:** 获取 `default value` 的当前值。

### GetOptionType
`public object GetOptionType()`

**用途 / Purpose:** 获取 `option type` 的当前值。

### GetValue
`public float GetValue(bool forceRefresh)`

**用途 / Purpose:** 获取 `value` 的当前值。

### IsNative
`public bool IsNative()`

**用途 / Purpose:** 处理 `is native` 相关逻辑。

### SetValue
`public void SetValue(float value)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### IsAction
`public bool IsAction()`

**用途 / Purpose:** 处理 `is action` 相关逻辑。

### GetIsDisabledAndReasonID
`public ValueTuple<string, bool> GetIsDisabledAndReasonID()`

**用途 / Purpose:** 获取 `is disabled and reason i d` 的当前值。

## 使用示例

```csharp
var value = new ActionOptionData();
```

## 参见

- [完整类目录](../catalog)