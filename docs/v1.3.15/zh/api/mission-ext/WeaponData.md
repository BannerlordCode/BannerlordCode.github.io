<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/WeaponData.cs`

## 概述

`WeaponData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `WeaponData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

### GetItemObject
`public ItemObject GetItemObject()`

**用途 / Purpose:** 获取 `item object` 的当前值。

### DeinitializeManagedPointers
`public void DeinitializeManagedPointers()`

**用途 / Purpose:** 处理 `deinitialize managed pointers` 相关逻辑。

## 使用示例

```csharp
var value = new WeaponData();
```

## 参见

- [完整类目录](../catalog)