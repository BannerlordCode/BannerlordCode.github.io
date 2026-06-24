<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormOrder

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct FormOrder`
**领域:** mission-ext

## 概述

`FormOrder` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomFlankWidth` | `public float CustomFlankWidth { get; set; }` |
| `OrderType` | `public OrderType OrderType { get; }` |

## 主要方法

### FormOrderCustom
`public static FormOrder FormOrderCustom(float customWidth)`

**用途 / Purpose:** 处理 `form order custom` 相关逻辑。

### OnApply
`public void OnApply(Formation formation)`

**用途 / Purpose:** 当 `apply` 事件触发时调用此方法。

### GetUnitCountOf
`public static int GetUnitCountOf(Formation formation)`

**用途 / Purpose:** 获取 `unit count of` 的当前值。

### OnApplyToCustomArrangement
`public bool OnApplyToCustomArrangement(Formation formation, IFormationArrangement arrangement)`

**用途 / Purpose:** 当 `apply to custom arrangement` 事件触发时调用此方法。

### GetMaxFileCountStatic
`public static int? GetMaxFileCountStatic(FormOrder.FormOrderEnum order, int unitCount)`

**用途 / Purpose:** 获取 `max file count static` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
FormOrder.FormOrderCustom(0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
